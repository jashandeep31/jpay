import { Job, Queue, Worker } from "bullmq";
import { db, redisConnection } from "../../lib/db.js";
import { WalletTrackingSocket } from "../../sockets/wallet-tracking-socket.js";
const PaymentWalletQueue = new Queue("initiated-payment-queue", {
  connection: redisConnection,
});

export interface InitiatedPaymentQueuePayload {
  type: "PAYMENT_PAGE" | "PAYMENT_LINK";
  id: string;
  paymentCoinId: string;
  paymentCoinMint: string;
  amount: number;
  walletAddress: string;
  createdAt: Date;
  associatedWalletId: string;
  subId: Number;
}

export const paymentWalletWorker = new Worker(
  "initiated-payment-queue",
  async (job: Job<InitiatedPaymentQueuePayload>) => {
    try {
      console.log(`Starting job processing`);
      const {
        id,
        paymentCoinId,
        paymentCoinMint,
        amount,
        walletAddress,
        createdAt,
        type,
      } = job.data;

      // Use singleton instance instead of creating new
      const socket = WalletTrackingSocket.getInstance();
      await socket.addWalletToTrack({
        ...job.data,
        subId: Date.now() + Math.floor(Math.random() * 1000000),
      });

      return { success: true };
    } catch (error) {
      console.error("Error processing payment job:", error);
      throw error; // Re-throw to mark job as failed
    }
  },

  { connection: redisConnection }
);

paymentWalletWorker.on("completed", (jobId, result) => {});

// (async () => {
//   const initiatedPayments = await db.intiatedPayment.findMany({
//     where: {
//       status: "PENDING",
//       createdAt: {
//         gte: new Date(Date.now() - 1000 * 60 * 5),
//       },
//     },
//   });
//   for (const initiatedPayment of initiatedPayments) {
//     await PaymentWalletQueue.add("payment-wallet-queue", {
//       initiatedPaymentId: initiatedPayment.id,
//     });
//   }
// })();
