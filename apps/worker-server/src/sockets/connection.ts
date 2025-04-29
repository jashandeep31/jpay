import WebSocket from "ws";
import { EventEmitter } from "events";

const SOLANA_WSS_URL = process.env.SOLANA_WSS_URL!;

export class WsConnection extends EventEmitter {
  private ws!: WebSocket;
  private isGettingConnected = false;
  private queuedData: string[] = [];
  private lastPingEventTime = Date.now();
  private lastSocketEventTime = Date.now();

  constructor() {
    super();
    this.connect();
    this.autoCloseConnection();
  }

  private connect() {
    if (this.isGettingConnected) return;
    this.ws = new WebSocket(SOLANA_WSS_URL);
    this.isGettingConnected = true;
    this.ws.on("open", () => {
      this.onOpen();
      this.isGettingConnected = false;
    });
    this.ws.on("message", (raw) => this.onMessage(raw.toString()));
    this.ws.on("close", () => this.onClose());
    this.ws.on("error", (err) => console.error("WS error", err));
  }

  private onOpen() {
    console.log("WebSocket is open");
    this.sendQueuedData(); // flush any earlier queued messages
    this.autoRePing(); // start your ping‐timer here
  }

  private onMessage(msg: string) {
    this.lastSocketEventTime = Date.now();
    console.log(`message is `);
    this.emit("message", msg);
  }

  private onClose() {
    console.log("WebSocket closed, reconnecting in 1s…");
    setTimeout(() => this.reconnect(), 1_000);
  }

  private reconnect() {
    // only reconnect if the socket is REALLY closed
    if (this.ws.readyState === WebSocket.CLOSED) {
      this.connect();
    }
  }

  private autoCloseConnection() {
    setInterval(() => {
      if (Date.now() - this.lastSocketEventTime > 10 * 60_000) {
        console.log("No activity for 10m – closing socket");
        this.ws.close();
      }
    }, 10 * 60_000);
  }

  private autoRePing() {
    setInterval(() => {
      if (Date.now() - this.lastPingEventTime > 30_000) {
        this.ws.ping();
        this.lastPingEventTime = Date.now();
      }
    }, 30_000);
  }

  private sendQueuedData() {
    // only send if fully OPEN
    if (this.ws.readyState !== WebSocket.OPEN) return;

    while (this.queuedData.length) {
      const msg = this.queuedData.shift()!;
      this.ws.send(msg);
      console.debug("Flushed queued message:", msg);
    }
  }

  public sendData(data: string) {
    // always queue
    this.queuedData.push(data);

    switch (this.ws.readyState) {
      case WebSocket.OPEN:
        // can send right away
        this.sendQueuedData();
        break;
      case WebSocket.CLOSED:
        // need to reconnect, `onOpen` will flush
        this.reconnect();
        break;
      // if CONNECTING or CLOSING, do nothing – the queue will be flushed on open
    }
  }
}
