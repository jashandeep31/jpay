"use server";
import { db } from "@/lib/db";
import * as bip39 from "bip39";

const Phrase: string = process.env.ONETIME_PAYMENT_RECEVING_WALLET_PHRASE || "";

export async function triggerPaymentLink(formData: FormData) {
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
    const seed = await bip39.mnemonicToSeed(Phrase);
    console.log(seed);

    // const initiatedPayment = await db.intiatedPayment.create({
    //   data: {
    //     initiatedFrom: "PAYMENT_LINK",
    //     status: "PENDING",
    //     index: 0,
    //     walletAddress: paymentLink.walletAddress,
    //     amount: paymentLink.amount,
    //     paymentPageId: paymentLink.paymentPageId,
    //     paymentLinkId: paymentLinkId,
    //     merchantId: paymentLink.merchantId,
    //   },
    // });
  } catch (error) {
    console.log(`error ${error}`);
    return {
      status: "error",
      message: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
