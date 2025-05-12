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
import { IntiatedPayment } from "@repo/db";
import axios from "axios";

type tx = Omit<
  typeof db,
  "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | "$extends"
>;

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
    console.log(data.associatedWalletId);
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
      // sendToken(transaction.walletAddress, transaction.amount);
      this.subscribedTransactions.push({
        transaction,
        subscriptionId: result,
        isReceivedAction: false,
      });
      return;
    }
    console.log(`NOTIF IS THEIR`);
    if (
      msg?.method === "accountNotification" &&
      msg?.params?.subscription &&
      msg?.params?.result?.value
    ) {
      const subscribedTransaction = this.subscribedTransactions.find(
        (sub) => sub.subscriptionId === msg.params.subscription
      );

      console.log(`accout nios`);
      if (subscribedTransaction) {
        if (!subscribedTransaction.isReceivedAction) {
          processWalletTrackedTransactions(subscribedTransaction);
          subscribedTransaction.isReceivedAction = true;
          return;
        } else {
          console.log(`already received action`);
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

    const lastSignature = await getSignatureForAddress(
      transaction.associatedWalletId,
      subscriptionId
    );
    if (!lastSignature) throw new Error("no signature found");

    const parsedTransaction = parseTransaction(
      await getTransaction(lastSignature, 4, 5000)
    );
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
    const dbTransaction = await db.$transaction(async (tx) => {
      if (
        !parsedTransaction.from ||
        !parsedTransaction.to ||
        !parsedTransaction.ataFrom ||
        !parsedTransaction.ataTo ||
        parsedTransaction.amount !== transaction.amount
      )
        throw new Error("no from or to or ataFrom or ataTo");

      const paymentLink = await getAndUpdatePaymentLink(initiatedPayment, tx);
      const invoice = await getAndUpdateInvoice(initiatedPayment, tx);
      const qrPayment = await getAndUpdateQRPayment(initiatedPayment, tx);
      const pgPayment = await getAndUpdatePGPayment(initiatedPayment, tx);

      // update initiated payment
      await getAndUpdateIntiatedPayment(initiatedPayment, tx);

      // update wallet

      const wallet = await tx.wallet.upsert({
        where: {
          uiId: `${initiatedPayment.merchantId}-${initiatedPayment.stableCoin.id}`,
        },
        update: {
          balance: {
            increment: transaction.amount,
          },
        },
        create: {
          merchantId: initiatedPayment.merchantId,
          stableCoinId: initiatedPayment.stableCoin.id,
          balance: transaction.amount,
          uiId: `${initiatedPayment.merchantId}-${initiatedPayment.stableCoin.id}`,
        },
      });
      await tx.transaction.create({
        data: {
          status: "COMPLETED",
          amount: transaction.amount,
          intiatedPaymentId: initiatedPayment.id,
          initiatedFrom: initiatedPayment.initiatedFrom,
          signature: lastSignature,
          toWalletAddress: parsedTransaction.to,
          fromWalletAddress: parsedTransaction.from,
          toWalletAddressIndex: initiatedPayment.index,
          toAtaWalletAddress: parsedTransaction.ataTo,
          fromAtaWalletAddress: parsedTransaction.ataFrom,
          stableCoinName: `${initiatedPayment.stableCoin.name} (${initiatedPayment.stableCoin.symbol})`,
          settled: false,
          merchantId: initiatedPayment.merchantId,
          walletId: wallet.id,
        },
      });
      return {
        paymentLink,
        invoice,
        qrPayment,
        pgPayment,
      };
    });
    if (dbTransaction.pgPayment) {
      try {
        console.log(`payment callback url called`);
        console.log(
          `${dbTransaction.pgPayment.callbackUrl}/${dbTransaction.pgPayment.paymentUID}`
        );
        const res = await axios.post(
          `${dbTransaction.pgPayment.callbackUrl}/${dbTransaction.pgPayment.paymentUID}`,
          {}
        );
        console.log(res);
      } catch (error) {
        console.log(error, "error");
      }
    }
  } catch (error) {
    console.log(error, "error");
  }
}

const getAndUpdatePaymentLink = async (
  initiatedPayment: IntiatedPayment,
  tx: tx
) => {
  if (
    initiatedPayment.initiatedFrom === "PAYMENT_LINK" &&
    initiatedPayment.paymentLinkId
  ) {
    let pl = await tx.paymentLink.findUnique({
      where: {
        id: initiatedPayment.paymentLinkId,
      },
    });
    if (pl?.oneTimeLink) {
      pl = await tx.paymentLink.update({
        where: {
          id: initiatedPayment.paymentLinkId,
        },
        data: {
          status: "COMPLETED",
        },
      });
    }
    return pl;
  }
};

const getAndUpdateInvoice = async (
  initiatedPayment: IntiatedPayment,
  tx: tx
) => {
  if (
    initiatedPayment.initiatedFrom === "INVOICE" &&
    initiatedPayment.invoiceId
  ) {
    return await tx.invoice.update({
      where: {
        id: initiatedPayment.invoiceId,
      },

      data: {
        status: "PAID",
      },
    });
  }
};

const getAndUpdateQRPayment = async (
  initiatedPayment: IntiatedPayment,
  tx: tx
) => {
  if (
    initiatedPayment.initiatedFrom === "QR_PAYMENT" &&
    initiatedPayment.qRPaymentId
  ) {
    let qrPayment = await tx.qRPayment.findUnique({
      where: {
        id: initiatedPayment.qRPaymentId,
      },
    });
    if (qrPayment?.type === "SINGLE_USE") {
      qrPayment = await tx.qRPayment.update({
        where: {
          id: initiatedPayment.qRPaymentId,
        },
        data: {
          status: "USED",
        },
      });
    }
    return qrPayment;
  }
};

const getAndUpdateIntiatedPayment = async (
  initiatedPayment: IntiatedPayment,
  tx: tx
) => {
  return await tx.intiatedPayment.update({
    where: {
      id: initiatedPayment.id,
    },
    data: {
      status: "COMPLETED",
    },
  });
};

const getAndUpdatePGPayment = async (
  initiatedPayment: IntiatedPayment,
  tx: tx
) => {
  if (
    initiatedPayment.initiatedFrom === "PG_PAYMENT" &&
    initiatedPayment.pgPaymentId
  ) {
    return await tx.aPIGeneratedPaymentLink.update({
      where: {
        id: initiatedPayment.pgPaymentId,
      },
      data: {
        status: "PAID",
      },
    });
  }
};
