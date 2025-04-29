import { Queue } from "bullmq";
import { redisConnection } from "@/lib/db";

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

export default PaymentWalletQueue;
