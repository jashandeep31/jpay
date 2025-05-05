"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import {
  Connection,
  Keypair,
  PublicKey,
  sendAndConfirmTransaction,
  Transaction,
} from "@solana/web3.js";
import {
  createTransferInstruction,
  getOrCreateAssociatedTokenAccount,
} from "@solana/spl-token";
import { derivePath } from "ed25519-hd-key";

const SEED_PHRASE = process.env.ONETIME_PAYMENT_SENDING_WALLET_PHRASE!;

export async function settleMerchantPayments(walletId: string) {
  try {
    console.log(`started`);
    const session = await auth();
    const merchantId = session?.merchantId;
    if (!merchantId) throw new Error("Merchant ID not found");
    const merchant = await db.merchant.findUnique({
      where: { id: merchantId },
    });
    if (!merchant) throw new Error("Merchant not found");
    if (!merchant.paymentReceivingWalletAddress)
      throw new Error("Payment receiving wallet address not found");

    const wallet = await db.wallet.findUnique({
      where: { id: walletId, merchantId },
      include: { stableCoin: true },
    });
    if (!wallet) throw new Error("Wallet not found");
    const transactions = await db.transaction.findMany({
      where: { walletId, settled: false },
    });

    for (const transaction of transactions) {
      const path = `m/44'/501'/${transaction.toWalletAddressIndex}'/0'`;
      const derivedSeed = derivePath(path, SEED_PHRASE);
      const payerKeypair = Keypair.fromSeed(derivedSeed.key);
      const mintPubkey = new PublicKey(wallet.stableCoin.authority);
      const feePayerDerivedSeed = derivePath(path, `m/44'/501'/0'/0'`);
      const feePayerKeypair = Keypair.fromSecretKey(feePayerDerivedSeed.key);

      const signature = await sendToken({
        recipientPubkey: new PublicKey(merchant.paymentReceivingWalletAddress),
        amount: Number(transaction.amount),
        payerKeypair,
        mintPubkey,
        coinDecimals: wallet.stableCoin.decimalCount,
      });

      await db.transaction.update({
        where: { id: transaction.id },
        data: {
          settled: true,
          settledToWalletAddress: merchant.paymentReceivingWalletAddress,
          settledAt: new Date(),
          settledSignature: signature,
        },
      });
    }

    // if (!wallet) throw new Error("Wallet not found");
  } catch (e) {
    return {
      ok: false,
      message: e instanceof Error ? e.message : "An unknown error occurred",
    };
  }
}

export const sendToken = async ({
  recipientPubkey,
  amount,
  payerKeypair,
  mintPubkey,
  coinDecimals,
}: {
  recipientPubkey: PublicKey;
  amount: number;
  payerKeypair: Keypair;
  mintPubkey: PublicKey;
  coinDecimals: number;
}) => {
  const connection = new Connection(process.env.HELIUS_RPC_URL!, "confirmed");

  const fromAta = await getOrCreateAssociatedTokenAccount(
    connection,
    payerKeypair,
    mintPubkey,
    payerKeypair.publicKey,
    true
  );

  const toAta = await getOrCreateAssociatedTokenAccount(
    connection,
    payerKeypair,
    mintPubkey,
    recipientPubkey,
    true
  );

  const tx = new Transaction().add(
    createTransferInstruction(
      fromAta.address,
      toAta.address,
      payerKeypair.publicKey,
      amount * 10 ** coinDecimals
    )
  );

  const signature = await sendAndConfirmTransaction(connection, tx, [
    payerKeypair,
  ]);

  return signature;
};
