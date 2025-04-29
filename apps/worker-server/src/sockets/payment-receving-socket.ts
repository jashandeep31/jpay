import WebSocket from "ws";

const WALLET = "81BG5vui4vVhEugbkqiAj2ftFsc14oJ8eM8UxHCnGr4v";
const WSS_URL: string = process.env.SOLANA_WSS_URL!;

class PaymentReceivingSocket {
  private ws: WebSocket;
  private isConnected: boolean = false;
  private pendingRequests: Array<{ address: string; id: string }> = [];
  private subscriptions: Array<{ subId: string; id: string }> = [];
  constructor(private url: string) {
    this.ws = new WebSocket(url);
    this.setupMessageHandler();
  }

  private setupMessageHandler() {
    this.ws.on("open", () => {
      console.log("🔗 Connected");
      this.isConnected = true;
      this.processPendingRequests();
    });
    this.ws.on("message", this.handleMessage.bind(this));
    this.ws.on("error", (err) => console.error("❌ WS error:", err));
    this.ws.on("close", (code, reason) => {
      console.log(`🔒 WS closed (code=${code}):`, reason.toString());
      this.isConnected = false;
    });
  }

  private reconnect() {
    this.ws = new WebSocket(this.url);
    this.setupMessageHandler();
  }

  private processPendingRequests() {
    while (this.pendingRequests.length > 0) {
      const request = this.pendingRequests.shift();
      if (request) {
        this.sendAddAddressRequest(request.address, request.id);
      }
    }
    console.log(this.isConnected, this.ws.readyState);
    this.ws.close();
    console.log(this.isConnected);
  }

  private sendAddAddressRequest(address: string, id: string) {
    this.ws.send(
      JSON.stringify({
        jsonrpc: "2.0",
        id: id,
        method: "logsSubscribe",
        params: [{ mentions: [address] }, { commitment: "confirmed" }],
      })
    );
  }

  private handleMessage(data: WebSocket.Data) {
    let msg: any;
    try {
      msg = JSON.parse(data.toString());
    } catch (err) {
      console.error("Error parsing message:", err);
      return;
    }
    console.log(data.toString());
    if (msg.id && msg.result) {
      const { id, result } = msg;
      console.log(id, result);
      this.subscriptions.push({ subId: result, id });
    }
    if (
      msg?.method === "logsNotification" &&
      msg?.params?.subscription &&
      msg?.params?.result?.value?.signature
    ) {
      console.log(msg.params.result.value.signature);
      const id = this.subscriptions.find(
        (sub) => sub.subId === msg.params.subscription
      )?.id;
      if (id) {
        this.removeAddress(id);
      }
    }
  }

  public addAddress(address: string, id: string) {
    console.log(this.isConnected);
    if (!this.isConnected) {
      console.log("Socket not connected, queuing request for:", address);
      this.pendingRequests.push({ address, id });
      return;
    }
    // if (this.ws.readyState !== WebSocket.OPEN) {
    //   console.log(`connection request is sent`);
    //   this.reconnect();
    // }
    this.sendAddAddressRequest(address, id);
  }

  public removeAddress(id: string) {
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

export const paymentReceivingSocket = new PaymentReceivingSocket(WSS_URL);
