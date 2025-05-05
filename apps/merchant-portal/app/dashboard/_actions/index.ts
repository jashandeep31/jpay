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
import { BulkPayoutGroupMember } from "@repo/db";
import { ServerActionResponseToClient } from "@/types/server-actions";

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
      console.log(`transaction engaed , ${transaction.id}`);
      const path = `m/44'/501'/${transaction.toWalletAddressIndex}'/0'`;
      const derivedSeed = derivePath(path, SEED_PHRASE);
      const payerKeypair = Keypair.fromSeed(derivedSeed.key);
      const mintPubkey = new PublicKey(wallet.stableCoin.authority);
      const feePayerDerivedSeed = derivePath(`m/44'/501'/0'/0'`, SEED_PHRASE);
      const feePayerKeypair = Keypair.fromSeed(feePayerDerivedSeed.key);

      const signature = await sendToken({
        recipientPubkey: new PublicKey(merchant.paymentReceivingWalletAddress),
        amount: Number(transaction.amount),
        payerKeypair,
        feePayerKeypair,
        mintPubkey,
        coinDecimals: wallet.stableCoin.decimalCount,
      });
      console.log(signature);
      await db.transaction.update({
        where: { id: transaction.id },
        data: {
          settled: true,
          settledToWalletAddress: merchant.paymentReceivingWalletAddress,
          settledAt: new Date(),
          settledSignature: signature,
        },
      });
      await db.wallet.update({
        where: { id: walletId },
        data: {
          balance: {
            decrement: Number(transaction.amount),
          },
        },
      });
      await new Promise((resolve) => setTimeout(resolve, 3000));
    }

    // if (!wallet) throw new Error("Wallet not found");
  } catch (e) {
    console.log(e);
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
  feePayerKeypair,
  coinDecimals,
}: {
  recipientPubkey: PublicKey;
  amount: number;
  payerKeypair: Keypair;
  mintPubkey: PublicKey;
  feePayerKeypair: Keypair;
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
    feePayerKeypair,
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
  tx.feePayer = feePayerKeypair.publicKey;

  const signature = await sendAndConfirmTransaction(connection, tx, [
    feePayerKeypair,
    payerKeypair,
  ]);

  return signature;
};

export const sendBulkPayoutSignedTransaction = async (
  signedTransaction: string,
  blockhash: string,
  lastValidBlockHeight: number
) => {
  const connection = new Connection(process.env.HELIUS_RPC_URL!, "confirmed");
  if (!signedTransaction) throw new Error("Signed transaction not found");

  const txid = await connection.sendRawTransaction(
    Buffer.from(signedTransaction, "base64")
  );
  const { value } = await connection.confirmTransaction(
    { signature: txid, blockhash, lastValidBlockHeight },
    "confirmed"
  );
  if (value.err) throw new Error("Transaction failed");
  return txid;
};

export async function addBulkPayoutGroupMember(
  groupId: string,
  address: string,
  amount: number,
  name: string
): Promise<ServerActionResponseToClient<{ id: string }>> {
  try {
    if (!groupId || !address || !amount || !name)
      throw new Error("Invalid data");
    const session = await auth();
    if (!session?.merchantId) throw new Error("Merchant ID not found");
    const merchantId = session.merchantId;
    const group = await db.bulkPayoutGroup.findUnique({
      where: { id: groupId, merchantId },
    });
    if (!group) throw new Error("Group not found");
    const member = await db.bulkPayoutGroupMember.create({
      data: { bulkPayoutGroupId: group.id, address, amount, name },
    });
    return {
      ok: true,
      data: { id: member.id },
    };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : "An unknown error occurred",
    };
  }
}
