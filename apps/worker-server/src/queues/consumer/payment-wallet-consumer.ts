import { Job, Queue, Worker } from "bullmq";
import { db, redisConnection } from "../../lib/db";
import { WalletTrackingSocket } from "../../sockets/wallet-tracking-socket";
const PaymentWalletQueue = new Queue("initiated-payment-queue", {
  connection: redisConnection,
});

export interface InitiatedPaymentQueuePayload {
  type: "pl" | "pb";
  id: string;
  paymentCoinId: string;
  paymentCoinMint: string;
  amount: number;
  walletAddress: string;
  createdAt: Date;
  associatedWalletId: string;
}

export const paymentWalletWorker = new Worker(
  "initiated-payment-queue",
  async (job: Job<InitiatedPaymentQueuePayload>) => {
    const {
      id,
      paymentCoinId,
      paymentCoinMint,
      amount,
      walletAddress,
      createdAt,
      type,
    } = job.data;

    const socketv1 = new WalletTrackingSocket();
    socketv1.addWalletToTrack(job.data);
    // const socket = await paymentReceivingSocket;
    // socket.addAddress(walletAddress, id);
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
