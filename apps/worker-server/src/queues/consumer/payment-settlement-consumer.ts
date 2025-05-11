import { db, redisConnection } from "../../lib/db.js";
import { env } from "../../lib/env.js";
import { createTransferInstruction } from "@solana/spl-token";
import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token";
import {
  Connection,
  Keypair,
  PublicKey,
  sendAndConfirmTransaction,
  Transaction,
} from "@solana/web3.js";
import { Job, Worker } from "bullmq";
import { derivePath } from "ed25519-hd-key";

const SEED_PHRASE = env.SEED_PHRASE;

export const paymentSettlementConsumer = new Worker(
  "payment-settlement-queue",
  async (job: Job<{ walletId: string; merchantId: string }>) => {
    try {
      const { walletId, merchantId } = job.data;
      console.log(`started the payment settlement for merchant ${merchantId}`);
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
          const feePayerDerivedSeed = derivePath(
            `m/44'/501'/0'/0'`,
            SEED_PHRASE
          );
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
    } catch (error) {
      console.error("Error processing settlement:", error);
    }
  },
  { connection: redisConnection }
);

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
  const connection = new Connection(env.SOLANA_RPC_URL!, "confirmed");

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
