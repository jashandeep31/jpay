"use server";

import { db } from "@/lib/db";
import { ServerActionResponseToClient } from "@/types/server-action";
import { IntiatedFrom } from "@repo/db";

import { Keypair, PublicKey } from "@solana/web3.js";
import { derivePath } from "ed25519-hd-key";
import PaymentWalletQueue, {
  InitiatedPaymentQueuePayload,
} from "@/queues/producer/payment-wallet-producer";
import { getAssociatedTokenAddress } from "@solana/spl-token";

const Phrase: string = process.env.ONETIME_PAYMENT_RECEVING_WALLET_PHRASE || "";

export async function triggerInitiatedPayment(
  formData: FormData
): Promise<ServerActionResponseToClient<{ id: string }>> {
  const paymentId = formData.get("paymentId");
  const initiatedFrom = formData.get("initiatedFrom") as IntiatedFrom;
  const stableCoinId = formData.get("stableCoinId");
  if (!paymentId || !initiatedFrom || !stableCoinId) {
    return {
      ok: false,
      error: "Missing required fields",
    };
  }

  const paymentDetails = await getPaymentDetails(
    paymentId as string,
    initiatedFrom as IntiatedFrom
  );
  if (!paymentDetails) {
    return {
      ok: false,
      error: "Payment details not found",
    };
  }

  const stableCoin = await db.stableCoin.findUnique({
    where: {
      id: stableCoinId as string,
    },
  });
  if (!stableCoin) {
    throw new Error("Payment coin not found");
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
        initiatedFrom: initiatedFrom,
        status: "PENDING",
        stableCoinId: stableCoin.id,
        index: newIndex,
        walletAddress: keypair.publicKey.toBase58(),
        ataWalletAddress: ait.toBase58(),
        amount: paymentDetails.amount,
        merchantId: paymentDetails.merchantId,
        paymentLinkId:
          initiatedFrom === "PAYMENT_LINK" ? (paymentId as string) : undefined,
        paymentPageId:
          initiatedFrom === "PAYMENT_PAGE" ? (paymentId as string) : undefined,
        invoiceId:
          initiatedFrom === "INVOICE" ? (paymentId as string) : undefined,
        qRPaymentId:
          initiatedFrom === "QR_PAYMENT" ? (paymentId as string) : undefined,
      },
    });
    await PaymentWalletQueue.add("initiated-payment-queue", {
      type: initiatedFrom,
      id: initiatedPayment.id,
      paymentCoinId: stableCoin.id,
      paymentCoinMint: stableCoin.authority,
      amount: Number(paymentDetails.amount),
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
  return {
    ok: true,
    data: {
      id: result.data.id,
    },
  };
}

const getPaymentDetails = async (id: string, initiatedFrom: IntiatedFrom) => {
  if (initiatedFrom === "PAYMENT_LINK") {
    return await db.paymentLink.findUnique({
      where: {
        id,
      },
    });
  }
  if (initiatedFrom === "PAYMENT_PAGE") {
    return await db.paymentPage.findUnique({
      where: {
        id,
      },
    });
  }
  if (initiatedFrom === "INVOICE") {
    return await db.invoice.findUnique({
      where: {
        id,
      },
    });
  }
  if (initiatedFrom === "QR_PAYMENT") {
    return await db.qRPayment.findUnique({
      where: {
        id,
      },
    });
  }
};
