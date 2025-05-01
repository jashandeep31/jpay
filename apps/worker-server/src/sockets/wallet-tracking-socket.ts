import WebSocket from "ws";
import { WsConnection } from "./connection.js";
import { InitiatedPaymentQueuePayload } from "../queues/consumer/payment-wallet-consumer.js";
import {
  getSignatureForAddress,
  getTransaction,
  parseTransaction,
  sendToken,
} from "./lib/utilts.js";
import { db } from "../lib/db.js";

export class WalletTrackingSocket {
  private static instance: WalletTrackingSocket;
  private wsConnectionProvider: WsConnection;
  private subscribedTransactions: {
    transaction: InitiatedPaymentQueuePayload;
    subscriptionId: number;
    isReceivedAction: boolean;
  }[] = [];
  private transactions: InitiatedPaymentQueuePayload[] = [];

  constructor() {
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

    if (msg.id && msg.result) {
      const { id, result } = msg;
      const transaction = this.transactions.find(
        (tx) => tx.id === id
      ) as InitiatedPaymentQueuePayload;
      if (!transaction) {
        return;
      }
      sendToken(transaction.walletAddress, transaction.amount);
      this.subscribedTransactions.push({
        transaction,
        subscriptionId: result,
        isReceivedAction: false,
      });
      return;
    }

    if (
      msg?.method === "accountNotification" &&
      msg?.params?.subscription &&
      msg?.params?.result?.value
    ) {
      const subscribedTransaction = this.subscribedTransactions.find(
        (sub) => sub.subscriptionId === msg.params.subscription
      );

      if (subscribedTransaction) {
        if (subscribedTransaction.isReceivedAction) {
          console.log(`already received action`);
          return;
        } else {
          processWalletTrackedTransactions(subscribedTransaction);
          subscribedTransaction.isReceivedAction = true;
        }
      } else {
        // also remove from all TODO
        // this.removeTransaction(msg.params.subscription);
        //
      }
    }
  }
}

async function processWalletTrackedTransactions(subscribedTransaction: {
  transaction: InitiatedPaymentQueuePayload;
  subscriptionId: number;
}) {
  try {
    const { transaction, subscriptionId } = subscribedTransaction;
    await new Promise((resolve) => setTimeout(resolve, 10000));

    const lastSignature = await getSignatureForAddress(
      transaction.associatedWalletId,
      subscriptionId
    );
    console.log(`last signature: ${lastSignature}`);

    if (!lastSignature) {
      throw new Error("no signature found");
    }
    const unParsedTransaction = await getTransaction(lastSignature, 4, 5000);
    const parsedTransaction = parseTransaction(unParsedTransaction);
    const initiatedPayment = await db.intiatedPayment.findUnique({
      where: {
        id: transaction.id,
      },
      include: {
        stableCoin: true,
      },
    });
    if (!initiatedPayment) throw new Error("initiated payment not found");
    if (initiatedPayment.stableCoin.authority !== parsedTransaction.tokenMint) {
      throw new Error("token mint does not match");
    }
    if (
      !parsedTransaction.from ||
      !parsedTransaction.to ||
      !parsedTransaction.ataFrom ||
      !parsedTransaction.ataTo
    ) {
      throw new Error("no from or to or ataFrom or ataTo");
    }

    if (parsedTransaction.amount !== transaction.amount) {
      throw new Error("amounts do not match");
    }
    if (
      initiatedPayment.initiatedFrom === "PAYMENT_LINK" &&
      initiatedPayment.paymentLinkId
    ) {
      const pl = await db.paymentLink.findUnique({
        where: {
          id: initiatedPayment.paymentLinkId,
        },
      });
      if (pl?.oneTimeLink) {
        await db.paymentLink.update({
          where: {
            id: initiatedPayment.paymentLinkId,
          },
          data: {
            status: "COMPLETED",
          },
        });
      }
    }
    if (
      initiatedPayment.initiatedFrom === "INVOICE" &&
      initiatedPayment.invoiceId
    ) {
      await db.invoice.update({
        where: {
          id: initiatedPayment.invoiceId,
        },

        data: {
          status: "PAID",
        },
      });
    }
    await db.intiatedPayment.update({
      where: {
        id: initiatedPayment.id,
      },
      data: {
        status: "COMPLETED",
      },
    });
    console.log(initiatedPayment.initiatedFrom);
    const dbTransaction = await db.transaction.create({
      data: {
        status: "COMPLETED",
        amount: transaction.amount,
        intiatedPaymentId: initiatedPayment.id,
        initiatedFrom: initiatedPayment.initiatedFrom,
        toWalletAddress: parsedTransaction.to,
        fromWalletAddress: parsedTransaction.from,
        toAtaWalletAddress: parsedTransaction.ataTo,
        fromAtaWalletAddress: parsedTransaction.ataFrom,
        stableCoinName: `${initiatedPayment.stableCoin.name} (${initiatedPayment.stableCoin.symbol})`,
        settled: false,
        merchantId: initiatedPayment.merchantId,
      },
    });

    console.log(JSON.stringify(dbTransaction));
  } catch (error) {
    console.log(error, "error");
  }
}
