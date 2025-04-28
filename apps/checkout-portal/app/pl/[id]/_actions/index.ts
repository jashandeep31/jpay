"use server";
import { db } from "@/lib/db";
import { Keypair } from "@solana/web3.js";
import { derivePath } from "ed25519-hd-key";
import { ServerActionResponseToClient } from "@/types/server-action";
const Phrase: string = process.env.ONETIME_PAYMENT_RECEVING_WALLET_PHRASE || "";

export async function triggerPaymentLink(
  formData: FormData
): Promise<ServerActionResponseToClient<{ id: string }>> {
  try {
    const paymentLinkId = formData.get("paymentLinkId") as string;
    const paymentCoinId = formData.get("paymentCoinId") as string;
    if (!paymentLinkId || !paymentCoinId)
      throw new Error("Payment link or payment coin not found");
    const paymentLink = await db.paymentLink.findUnique({
      where: {
        id: paymentLinkId,
      },
    });
    if (!paymentLink) {
      throw new Error("Payment link not found");
    }
    if (paymentLink.status !== "ACTIVE") {
      throw new Error("Payment link is not active");
    }
    const stableCoin = await db.stableCoin.findUnique({
      where: {
        id: paymentCoinId,
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

      const initiatedPayment = await tx.intiatedPayment.create({
        data: {
          initiatedFrom: "PAYMENT_LINK",
          status: "PENDING",
          stableCoinId: paymentCoinId,
          index: newIndex,
          walletAddress: keypair.publicKey.toBase58(),
          amount: paymentLink.amount,
          paymentLinkId: paymentLinkId,
          merchantId: paymentLink.merchantId,
        },
      });

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
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
