import WebSocket from "ws";

const WALLET = "81BG5vui4vVhEugbkqiAj2ftFsc14oJ8eM8UxHCnGr4v";
const WSS_URL: string = process.env.SOLANA_WSS_URL!;

export class PaymentReceivingSocket {
  private ws: WebSocket;
  private nextReqId = 1;
  private pendingSubs = new Map<number, string>(); // reqId -> address
  private activeSubs = new Map<number, string>(); // subId -> address
  private lastCallAt = new Date();
  private pingInterval: NodeJS.Timeout | null = null;

  constructor(private url: string) {
    this.ws = new WebSocket(url);
    this.setupMessageHandler();
    this.autoPing();
  }

  private autoPing() {
    this.pingInterval = setInterval(() => {
      const now = Date.now();
      if (now - this.lastCallAt.getTime() > 30_000) {
        this.ws.ping();
        this.lastCallAt = new Date();
      }
    }, 30_000);
  }

  private setupMessageHandler() {
    this.ws.on("open", () => console.log("🔗 Connected"));
    this.ws.on("message", this.handleMessage.bind(this));
    this.ws.on("error", (err) => console.error("❌ WS error:", err));
    this.ws.on("close", (code, reason) =>
      console.log(`🔒 WS closed (code=${code}):`, reason.toString())
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
  }

  addAddress(address: string) {
    const reqId = this.nextReqId++;
    this.pendingSubs.set(reqId, address);

    this.ws.send(
      JSON.stringify({
        jsonrpc: "2.0",
        id: reqId,
        method: "logsSubscribe",
        params: [{ mentions: [address] }, { commitment: "confirmed" }],
      })
    );
    this.lastCallAt = new Date();
  }
  removeAddress(address: string) {
    const subEntry = Array.from(this.activeSubs.entries()).find(
      ([, addr]) => addr === address
    );
    if (!subEntry) {
      return;
    }

    const [subId] = subEntry;
    const reqId = this.nextReqId++;

    this.ws.send(
      JSON.stringify({
        jsonrpc: "2.0",
        id: reqId,
        method: "logsUnsubscribe",
        params: [subId],
      })
    );
    this.lastCallAt = new Date();

    this.activeSubs.delete(subId);
  }
}
