import { Queue } from "bullmq";
import { redisConnection } from "@/lib/db";

const PaymentWalletQueue = new Queue("payment-wallet-queue", {
  connection: redisConnection,
});

export default PaymentWalletQueue;
