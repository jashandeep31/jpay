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
      try {
        console.log(`transaction engaed , ${transaction.id}`);
        const path = `m/44'/501'/${transaction.toWalletAddressIndex}'/0'`;
        console.log(path);
        const derivedSeed = derivePath(path, SEED_PHRASE);
        const payerKeypair = Keypair.fromSeed(derivedSeed.key);
        const mintPubkey = new PublicKey(wallet.stableCoin.authority);
        const feePayerDerivedSeed = derivePath(`m/44'/501'/0'/0'`, SEED_PHRASE);
        const feePayerKeypair = Keypair.fromSeed(feePayerDerivedSeed.key);

        const signature = await sendToken({
          recipientPubkey: new PublicKey(
            merchant.paymentReceivingWalletAddress
          ),
          amount: Number(transaction.amount),
          payerKeypair,
          feePayerKeypair,
          mintPubkey,
          coinDecimals: wallet.stableCoin.decimalCount,
        });
        await db.$transaction(async (tx) => {
          await tx.transaction.update({
            where: { id: transaction.id },
            data: {
              settled: true,
              settledToWalletAddress: merchant.paymentReceivingWalletAddress,
              settledAt: new Date(),
              settledSignature: signature,
            },
          });
          await tx.wallet.update({
            where: { id: walletId },
            data: {
              balance: {
                decrement: Number(transaction.amount),
              },
            },
          });
          if (transaction.initiatedFrom === "LIVE_WALLET") {
            const initiatedTransaction = await tx.intiatedPayment.findUnique({
              where: {
                id: transaction.intiatedPaymentId,
              },
            });
            if (initiatedTransaction?.liveWalletId) {
              await tx.liveWallet.update({
                where: {
                  id: initiatedTransaction.liveWalletId,
                },
                data: {
                  balance: {
                    decrement: Number(transaction.amount),
                  },
                },
              });
            }
          }
        });

        await new Promise((resolve) => setTimeout(resolve, 3000));
      } catch (e) {
        console.log(e);
      }
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
    // Validate input parameters
    if (!groupId || !address || !amount || !name) {
      throw new Error("All fields are required");
    }

    if (amount <= 0) {
      throw new Error("Amount must be greater than 0");
    }

    // Validate Solana address format
    if (!/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address)) {
      throw new Error("Invalid Solana address format");
    }

    const session = await auth();
    if (!session?.merchantId) {
      throw new Error("Unauthorized: Please log in to continue");
    }

    const group = await db.bulkPayoutGroup.findUnique({
      where: { id: groupId, merchantId: session.merchantId },
    });

    if (!group) {
      throw new Error(
        "Group not found or you don't have permission to access it"
      );
    }

    // Check if member already exists in the group
    const existingMember = await db.bulkPayoutGroupMember.findFirst({
      where: {
        bulkPayoutGroupId: group.id,
        address,
      },
    });

    if (existingMember) {
      throw new Error("This address is already added to the group");
    }

    const member = await db.bulkPayoutGroupMember.create({
      data: {
        bulkPayoutGroupId: group.id,
        address,
        amount,
        name,
      },
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
