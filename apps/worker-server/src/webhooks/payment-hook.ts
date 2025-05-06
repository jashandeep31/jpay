import { NextFunction, Request, Response } from "express";
import { db } from "../lib/db.js";
import { parseTransaction } from "../lib/parse-transaction.js";
import { WhatsappAlerts } from "../whatsapp-alerts/index.js";

const whatsappAlerts = new WhatsappAlerts();

export const paymentHook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const parsedTransaction = parseTransaction(req.body);
    const isSplToken = parsedTransaction.isSplToken;
    console.log(parsedTransaction);
    if (isSplToken) {
      const liveWallet = await db.liveWallet.findUnique({
        where: {
          walletAddress: parsedTransaction.to,
        },
      });
      if (!liveWallet) throw new Error("Live wallet not found");
      const stableCoin = await db.stableCoin.findUnique({
        where: {
          authority: parsedTransaction.mintAddress,
        },
      });
      if (!stableCoin) throw new Error("Stable coin not found");
      await db.$transaction(async (tx) => {
        const initiatedPayment = await tx.intiatedPayment.create({
          data: {
            initiatedFrom: "LIVE_WALLET",
            status: "COMPLETED",
            index: liveWallet.index,
            walletAddress: parsedTransaction.to,
            ataWalletAddress: parsedTransaction.toTokenAccount,
            amount: parsedTransaction.amount,
            stableCoinId: stableCoin.id,
            merchantId: liveWallet.merchantId,
            liveWalletWalletAddress: liveWallet.walletAddress,
          },
        });
        await tx.liveWallet.update({
          where: {
            id: liveWallet.id,
          },
          data: {
            balance: {
              increment: parsedTransaction.amount,
            },
          },
        });
        const wallet = await tx.wallet.upsert({
          where: {
            uiId: `${initiatedPayment.merchantId}-${stableCoin.id}`,
          },
          update: {
            balance: {
              increment: parsedTransaction.amount,
            },
          },
          create: {
            merchantId: initiatedPayment.merchantId,
            stableCoinId: stableCoin.id,
            balance: parsedTransaction.amount,
            uiId: `${initiatedPayment.merchantId}-${stableCoin.id}`,
          },
        });
        await tx.transaction.create({
          data: {
            status: "COMPLETED",
            amount: parsedTransaction.amount,
            signature: parsedTransaction.signature,
            intiatedPaymentId: initiatedPayment.id,
            initiatedFrom: "LIVE_WALLET",
            toWalletAddress: initiatedPayment.walletAddress,
            fromWalletAddress: parsedTransaction.from,
            toAtaWalletAddress: parsedTransaction.toTokenAccount,
            fromAtaWalletAddress: parsedTransaction.fromTokenAccount,
            stableCoinName: stableCoin.name,
            merchantId: liveWallet.merchantId,
            walletId: wallet.id,
          },
        });
      });
      if (liveWallet.notifyOnEachPayment) {
        await whatsappAlerts.sendLiveWalletPaymentReceivedAlert({
          amount: parsedTransaction.amount,
          fromWalletAddress: parsedTransaction.from,
          toWalletAddress: parsedTransaction.to,
          coinName: `${stableCoin.name} (${stableCoin.symbol})`,
          alertNumber: 919914296525,
        });
      }
    }
    res.status(200).json({
      message: "Payment received",
    });
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
    });
    return;
  }
};
