import { Queue } from "bullmq";
import { redisConnection } from "@/lib/db";
import { IntiatedFrom } from "@repo/db";

const PaymentWalletQueue = new Queue("initiated-payment-queue", {
  connection: redisConnection,
});

export interface InitiatedPaymentQueuePayload {
  type: IntiatedFrom;
  id: string;
  paymentCoinId: string;
  paymentCoinMint: string;
  amount: number;
  walletAddress: string;
  createdAt: Date;
  associatedWalletId: string;
}

export default PaymentWalletQueue;
