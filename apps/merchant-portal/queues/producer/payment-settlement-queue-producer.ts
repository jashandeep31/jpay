import { Queue } from "bullmq";
import { redisConnection } from "@/lib/db";

const PaymentSettlementQueue = new Queue("payment-settlement-queue", {
  connection: redisConnection,
});

export default PaymentSettlementQueue;
