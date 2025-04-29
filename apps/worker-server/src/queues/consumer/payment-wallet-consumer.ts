import { Job, Worker } from "bullmq";
import { db, redisConnection } from "../../lib/db";

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
  },
  { connection: redisConnection }
);

paymentWalletWorker.on("completed", (jobId, result) => {
  console.log(`${jobId} has completed with result ${result}`);
});
