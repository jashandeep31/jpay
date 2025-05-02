import { NextFunction, Request, Response } from "express";
import { db } from "../lib/db.js";
import { parseTransaction } from "../lib/parse-transaction.js";
const TOKEN_MINTS: Record<string, string> = {
  Es9vMFrzaCER3DPEDv3J1YQZ4DdNV57WiEbyxz2gJdnL: "USDT", // mainnet USDT
  Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr: "USDC", // mainnet USDC
  // Add more as needed
};

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
        await tx.transaction.create({
          data: {
            status: "COMPLETED",
            amount: parsedTransaction.amount,
            intiatedPaymentId: initiatedPayment.id,
            initiatedFrom: "LIVE_WALLET",
            toWalletAddress: initiatedPayment.walletAddress,
            fromWalletAddress: parsedTransaction.from,
            toAtaWalletAddress: parsedTransaction.toTokenAccount,
            fromAtaWalletAddress: parsedTransaction.fromTokenAccount,
            stableCoinName: stableCoin.name,
            merchantId: liveWallet.merchantId,
          },
        });
      });
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
