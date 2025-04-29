import { Job, Queue, Worker } from "bullmq";
import { db, redisConnection } from "../../lib/db";
import { paymentReceivingSocket } from "../../sockets/payment-receving-socket";
const PaymentWalletQueue = new Queue("payment-wallet-queue", {
  connection: redisConnection,
});

(async () => {
  const initiatedPayments = await db.intiatedPayment.findMany({
    where: {
      status: "PENDING",
      createdAt: {
        gte: new Date(Date.now() - 1000 * 60 * 5),
      },
    },
  });
  for (const initiatedPayment of initiatedPayments) {
    await PaymentWalletQueue.add("payment-wallet-queue", {
      initiatedPaymentId: initiatedPayment.id,
    });
  }
})();

export const paymentWalletWorker = new Worker(
  "payment-wallet-queue",
  async (job: Job<{ initiatedPaymentId: string }>) => {
    const { initiatedPaymentId } = job.data;
    const initiatedPayment = await db.intiatedPayment.findUnique({
      where: {
        id: initiatedPaymentId,
      },
    });
    if (!initiatedPayment) return;
    const socket = await paymentReceivingSocket;
    socket.addAddress(initiatedPayment.walletAddress, initiatedPayment.id);
  },

  { connection: redisConnection }
);

paymentWalletWorker.on("completed", (jobId, result) => {});
