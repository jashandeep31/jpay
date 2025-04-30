import WebSocket from "ws";
import { WsConnection } from "./connection.js";
import { InitiatedPaymentQueuePayload } from "../queues/consumer/payment-wallet-consumer.js";
import { getTransaction, sendUSDT } from "./lib/utilts.js";
import { ParsedTransaction } from "./lib/utilts.js";

export class WalletTrackingSocket {
  private static instance: WalletTrackingSocket;
  private wsConnectionProvider: WsConnection;
  private subscribedTransactions: {
    transaction: InitiatedPaymentQueuePayload;
    subscriptionId: string;
  }[] = [];
  private transactions: InitiatedPaymentQueuePayload[] = [];

  private constructor() {
    this.wsConnectionProvider = new WsConnection();
    this.wsConnectionProvider.on("message", this.onMessage.bind(this));
  }

  public static getInstance(): WalletTrackingSocket {
    if (!WalletTrackingSocket.instance) {
      WalletTrackingSocket.instance = new WalletTrackingSocket();
    }
    return WalletTrackingSocket.instance;
  }

  public async addWalletToTrack(data: InitiatedPaymentQueuePayload) {
    console.log(`wallet is ${data.walletAddress} , ${data.associatedWalletId}`);
    this.transactions.push(data);
    this.wsConnectionProvider.sendData(
      JSON.stringify({
        jsonrpc: "2.0",
        id: data.id,
        method: "accountSubscribe",
        params: [
          data.associatedWalletId,
          {
            commitment: "finalized",
          },
        ],
      })
    );
  }

  public removeTransaction(id: string) {
    this.transactions = this.transactions.filter((tx) => tx.id !== id);
    this.subscribedTransactions = this.subscribedTransactions.filter(
      (sub) => sub.transaction.id !== id
    );
  }

  private onMessage(raw: string) {
    let msg;
    try {
      msg = JSON.parse(raw);
    } catch {
      return;
    }

    console.log(JSON.stringify(msg));

    if (msg.id && msg.result) {
      const { id, result } = msg;
      const transaction = this.transactions.find(
        (tx) => tx.id === id
      ) as InitiatedPaymentQueuePayload;
      if (!transaction) {
        return;
      }
      sendUSDT(transaction.associatedWalletId, 1);
      this.subscribedTransactions.push({
        transaction,
        subscriptionId: result,
      });
      return;
    }

    if (
      msg?.method === "logsNotification" &&
      msg?.params?.subscription &&
      msg?.params?.result?.value?.signature
    ) {
      const subscribedTransaction = this.subscribedTransactions.find(
        (sub) => sub.subscriptionId === msg.params.subscription
      );
      if (subscribedTransaction) {
        // this.removeAddress(id);
        const signature = msg.params.result.value.signature;
        processWalletTrackedTransactions(subscribedTransaction, signature);
      } else {
        // also remove from all TODO
        // this.removeTransaction(msg.params.subscription);
      }
    }
  }
}

async function processWalletTrackedTransactions(
  subscribedTransaction: {
    transaction: InitiatedPaymentQueuePayload;
    subscriptionId: string;
  },
  signature: string
) {
  const { transaction, subscriptionId } = subscribedTransaction;
  console.log(`calling parser`);
  const parsedTransaction: ParsedTransaction | null =
    await getTransaction(signature);
  console.log(parsedTransaction);
  console.log(`calling done`);
  if (!parsedTransaction) {
    return;
  }
  console.log(transaction);
}
