import WebSocket from "ws";
import { getSolanaWs } from ".";
import axios from "axios";

export interface ParsedTransaction {
  signature: string;
  from: string;
  to: string;
  amount: number;
  fee: number;
  status: "success" | "error";
  tokenMint: string;
  tokenSymbol?: string; // Optional, if you want to resolve mint to symbol like USDT
}

const WSS_URL: string = process.env.SOLANA_WSS_URL!;

class PaymentReceivingSocket {
  private subscriptions: Array<{ subId: string; id: string }> = [];
  private ws: WebSocket;

  constructor(ws: WebSocket) {
    this.ws = ws;
    this.ws.on("message", this.handleMessage.bind(this));
    this.ws.on("close", this.handleClose.bind(this));
    this.ws.on("error", this.handleError.bind(this));
  }

  private handleClose() {
    console.log("WebSocket connection closed, attempting to reconnect...");
    this.reconnect();
  }

  private handleError(error: Error) {
    console.error("WebSocket error:", error);
    this.reconnect();
  }

  private async reconnect() {
    try {
      const ws = await getSolanaWs();
      this.ws = ws;
      this.ws.on("message", this.handleMessage.bind(this));
      this.ws.on("close", this.handleClose.bind(this));
      this.ws.on("error", this.handleError.bind(this));

      // Resubscribe to all previous addresses
      for (const sub of this.subscriptions) {
        await this.addAddress(sub.id, sub.id);
      }
    } catch (error) {
      console.error("Failed to reconnect:", error);
      // Try again in 5 seconds
      setTimeout(() => this.reconnect(), 5000);
    }
  }

  public async addAddress(address: string, id: string) {
    if (this.ws.readyState !== WebSocket.OPEN) {
      console.log("WebSocket not open, attempting to reconnect...");
      await this.reconnect();
    }

    this.ws.send(
      JSON.stringify({
        jsonrpc: "2.0",
        id: id,
        method: "logsSubscribe",
        params: [{ mentions: [address] }, { commitment: "confirmed" }],
      })
    );
  }

  private async handleMessage(data: WebSocket.Data) {
    let msg: any;

    try {
      msg = JSON.parse(data.toString());
    } catch (err) {
      console.error("Error parsing message:", err);
      return;
    }

    console.log(JSON.stringify(msg), "mes reuslt");
    if (msg.id && msg.result) {
      const { id, result } = msg;
      console.log("Subscription confirmed:", id, result);
      this.subscriptions.push({ subId: result, id });
    }
    if (
      msg?.method === "logsNotification" &&
      msg?.params?.subscription &&
      msg?.params?.result?.value?.signature
    ) {
      console.log(
        "New transaction detected:",
        msg.params.result.value.signature
      );
      const id = this.subscriptions.find(
        (sub) => sub.subId === msg.params.subscription
      )?.id;
      if (id) {
        // this.removeAddress(id);
      }

      const transaction = await getTransaction(
        msg.params.result.value.signature
      );
      //   console.log("Parsed transaction:", transaction);
    }
  }

  public async removeAddress(id: string) {
    const subId = this.subscriptions.find((sub) => sub.id === id)?.subId;
    if (!subId) {
      console.log("Subscription not found");
      return;
    }
    this.ws.send(
      JSON.stringify({
        jsonrpc: "2.0",
        id: id,
        method: "logsUnsubscribe",
        params: [subId],
      })
    );
  }
}

export const paymentReceivingSocket = (async () => {
  const ws = await getSolanaWs();
  return new PaymentReceivingSocket(ws);
})();

const SOLANA_RPC_URL = process.env.SOLANA_RPC_URL!;
export const getTransaction = async (
  signature: string,
  retries = 5,
  delay = 4000
): Promise<any> => {
  for (let i = 0; i < retries; i++) {
    const response = await axios.post(
      SOLANA_RPC_URL,
      {
        jsonrpc: "2.0",
        id: 1,
        method: "getTransaction",
        params: [signature, { maxSupportedTransactionVersion: 0 }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      }
    );

    console.log(JSON.stringify(response.data));
    if (response.data.result) {
      return parseTransaction(response.data.result);
    }

    // Wait before retrying
    await new Promise((resolve) => setTimeout(resolve, delay));
  }

  throw new Error(
    `Transaction ${signature} not found after ${retries} retries.`
  );
};

const parseTransaction = (tx: any): ParsedTransaction | null => {
  const { transaction, meta } = tx;
  if (!transaction || !meta) return null;

  const signature = transaction.signatures[0];
  const instructions = transaction.message.instructions;
  const accountKeys = transaction.message.accountKeys;

  const transferIx = instructions.find((ix: any) => {
    const programId = accountKeys[ix.programIdIndex];
    return programId === "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
  });

  if (!transferIx) return null;

  const accounts = transferIx.accounts || [];
  const from = accountKeys[accounts[0]];
  const to = accountKeys[accounts[1]];

  const preBalance = meta.preTokenBalances?.[0];
  const postBalance = meta.postTokenBalances?.[0];

  const amount = Math.abs(
    (postBalance?.uiTokenAmount?.amount ?? 0) -
      (preBalance?.uiTokenAmount?.amount ?? 0)
  );

  const tokenMint = postBalance?.mint || preBalance?.mint || "unknown";
  const tokenSymbol = tokenMint;

  return {
    signature,
    from,
    to,
    amount,
    fee: meta.fee,
    status: meta.err === null ? "success" : "error",
    tokenMint,
    tokenSymbol,
  };
};
