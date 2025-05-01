"use server";
import { db } from "@/lib/db";
import { IntiatedFrom } from "@repo/db";

import { Keypair, PublicKey } from "@solana/web3.js";
import { derivePath } from "ed25519-hd-key";
import PaymentWalletQueue, {
  InitiatedPaymentQueuePayload,
} from "@/queues/producer/payment-wallet-producer";
import { getAssociatedTokenAddress } from "@solana/spl-token";
import { ServerActionResponseToClient } from "@/types/server-action";

const Phrase: string = process.env.ONETIME_PAYMENT_RECEVING_WALLET_PHRASE || "";

export async function triggerJPayInitiatedPayment(
  uid: string,
  amount: number,
  stableCoinId: string
): Promise<ServerActionResponseToClient<{ id: string }>> {
  try {
    const intiatedFrom: IntiatedFrom = "JPAY_LINK";
    if (!uid || !amount || !stableCoinId) {
      return {
        ok: false,
        error: "Missing required fields",
      };
    }
    const jpayLink = await db.jPayLink.findUnique({
      where: {
        uid,
      },
    });
    if (!jpayLink) {
      return {
        ok: false,
        error: "JPayLink not found",
      };
    }

    const stableCoin = await db.stableCoin.findUnique({
      where: {
        id: stableCoinId,
      },
    });
    if (!stableCoin) {
      return {
        ok: false,
        error: "StableCoin not found",
      };
    }

    const result = await db.$transaction(async (tx) => {
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
          initiatedFrom: intiatedFrom,
          status: "PENDING",
          stableCoinId: stableCoin.id,
          index: newIndex,
          walletAddress: keypair.publicKey.toBase58(),
          ataWalletAddress: ait.toBase58(),
          amount: amount,
          merchantId: jpayLink.merchantId,
          jPayLinkId: jpayLink.id,
        },
      });
      await PaymentWalletQueue.add("initiated-payment-queue", {
        type: intiatedFrom,
        id: initiatedPayment.id,
        paymentCoinId: stableCoin.id,
        paymentCoinMint: stableCoin.authority,
        amount: Number(amount),
        walletAddress: keypair.publicKey.toBase58(),
        createdAt: new Date(),
        associatedWalletId: ait.toBase58(),
      } satisfies InitiatedPaymentQueuePayload);
      return {
        ok: true,
        data: {
          id: initiatedPayment.id,
        },
      };
    });
    return {
      ok: true,
      data: {
        id: result.data.id,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      ok: false,
      error: "Failed to trigger JPay initiated payment",
    };
  }
}
