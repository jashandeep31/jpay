"use server";

import { db } from "@/lib/db";
import PaymentWalletQueue from "@/queues/producer/payment-wallet-producer";
import { IntiatedFrom, StableCoin } from "@repo/db";
import { getAssociatedTokenAddress } from "@solana/spl-token";
import { Keypair, PublicKey } from "@solana/web3.js";
import { InitiatedPaymentQueuePayload } from "@/queues/producer/payment-wallet-producer";
import { derivePath } from "ed25519-hd-key";
import { ServerActionResponseToClient } from "@/types/server-action";

const Phrase: string = process.env.ONETIME_PAYMENT_RECEVING_WALLET_PHRASE || "";
export async function triggerPaymentPage(
  paymentPageId: string,
  paymentCoinId: string,
  fields: { id: string; value: string }[]
): Promise<ServerActionResponseToClient<{ id: string }>> {
  try {
    console.log(`first`, fields);
    const paymentPage = await db.paymentPage.findUnique({
      where: { id: paymentPageId },
      include: {
        PaymentPageForm: {
          include: {
            PaymentPageFormField: true,
          },
        },
      },
    });
    if (!paymentPage) {
      throw new Error("Payment page not found");
    }
    if (paymentPage.status !== "ACTIVE") {
      throw new Error("Payment page is not active");
    }
    const stableCoin = await db.stableCoin.findUnique({
      where: { id: paymentCoinId },
    });
    if (!stableCoin) {
      throw new Error("Stable coin not found");
    }
    const result = await createInitiatedPayment(
      stableCoin,
      "PAYMENT_PAGE",
      paymentPage.amount,
      paymentPageId,
      paymentPage.merchantId
    );
    if (result.ok) {
      return {
        ok: true,
        data: {
          id: result.data.id,
        },
      };
    } else {
      throw new Error(`something went wrong`);
    }
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

const createInitiatedPayment = async (
  stableCoin: StableCoin,
  initiatedFrom: IntiatedFrom,
  amount: unknown,
  id: string,
  merchantId: string
) => {
  const tx = await db.$transaction(async (tx) => {
    const [{ nextidx }] = await tx.$queryRaw<
      Array<{ nextidx: bigint }>
    >`SELECT nextval('wallet_index_seq') AS nextidx`;

    const newIndex = Number(nextidx);
    const path = `m/44'/501'/${newIndex}'/0'`;
    const derivedSeed = derivePath(path, Phrase);
    const keypair = Keypair.fromSeed(derivedSeed.key);
    const ait = await getAssociatedTokenAddress(
      new PublicKey(stableCoin.authority),
      keypair.publicKey
    );

    const initiatedPayment = await tx.intiatedPayment.create({
      data: {
        initiatedFrom: initiatedFrom,
        status: "PENDING",
        stableCoinId: stableCoin.id,
        index: newIndex,
        walletAddress: keypair.publicKey.toBase58(),
        ataWalletAddress: ait.toBase58(),
        amount: amount as unknown as string,
        paymentPageId: initiatedFrom === "PAYMENT_PAGE" ? id : null,
        paymentLinkId: initiatedFrom === "PAYMENT_LINK" ? id : null,
        merchantId: merchantId,
      },
    });
    await PaymentWalletQueue.add("initiated-payment-queue", {
      type: "PAYMENT_LINK",
      id: initiatedPayment.id,
      paymentCoinId: stableCoin.id,
      paymentCoinMint: stableCoin.authority,
      amount: Number(initiatedPayment.amount),
      walletAddress: initiatedPayment.walletAddress,
      createdAt: initiatedPayment.createdAt,
      associatedWalletId: ait.toBase58(),
    } satisfies InitiatedPaymentQueuePayload);
    return {
      ok: true,
      data: {
        id: initiatedPayment.id,
      },
    };
  });
  return tx;
};
