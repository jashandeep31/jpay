import { NextFunction, Request, Response } from "express";
import { db } from "../lib/db.js";
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
  if (1 == 1) return;

  try {
    const tx = req.body[0]; // Handle one transaction at a time

    const {
      signature,
      timestamp,
      fee,
      type,
      source,
      transactionError,
      nativeTransfers,
      tokenTransfers,
      slot,
      description,
    } = tx;

    const readableDate = new Date(timestamp * 1000).toISOString();
    const status = transactionError ? "failed" : "success";
    const feeSOL = fee / 1_000_000_000;

    // Initialize parsed data
    let transfers: any[] = [];

    if (tokenTransfers.length > 0) {
      for (const t of tokenTransfers) {
        const tokenMint = t.mint;
        const tokenName = TOKEN_MINTS[tokenMint] || `Unknown (${tokenMint})`;

        transfers.push({
          kind: tokenName,
          amount: t.tokenAmount,
          from: t.fromUserAccount,
          to: t.toUserAccount,
        });
      }
    }

    const initiatedPayment = await db.intiatedPayment.findUnique({
      where: {
        walletAddress: transfers[0].to,
      },
    });

    console.log(`first`);
    if (!initiatedPayment) {
      res.status(200).json({
        message: "Payment not found",
      });
      return;
    }

    console.log(initiatedPayment.amount, transfers[0].amount);
    console.log("🔁 Parsed Solana Transaction:");
    console.log(`Signature: ${signature}`);
    console.log(`Status: ${status}`);
    console.log(`Date: ${readableDate}`);
    console.log(`Type: ${type}`);
    console.log(`Source: ${source}`);
    console.log(`Slot: ${slot}`);
    console.log(`Fee (SOL): ${feeSOL}`);
    console.log(`Transfers:`, transfers);
    console.log(`Description: ${description}`);

    res.status(200).json({
      message: "Payment received",
      data: {
        signature,
        status,
        date: readableDate,
        type,
        source,
        slot,
        feeSOL,
        transfers,
        description,
      },
    });
  } catch (error) {
    console.error("❌ Error processing payment:", error);
    next(error);
  }
};
