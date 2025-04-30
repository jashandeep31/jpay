import WebSocket from "ws";
import { EventEmitter } from "events";

const SOLANA_WSS_URL = process.env.SOLANA_WSS_URL!;

export class WsConnection extends EventEmitter {
  private ws!: WebSocket;
  private isGettingConnected = false;
  private queuedData: string[] = [];
  private isClosedDueToNoActivity = false;
  private lastPingOrActivityEventTime = Date.now();
  private lastSocketEventTime = Date.now();

  constructor() {
    super();
    this.connect();
  }

  private connect() {
    if (this.isGettingConnected) return;
    this.ws = new WebSocket(SOLANA_WSS_URL);
    this.isGettingConnected = true;
    this.ws.on("open", () => {
      this.onOpen();
      this.isClosedDueToNoActivity = false;
      this.isGettingConnected = false;
    });
    this.ws.on("message", (raw) => this.onMessage(raw.toString()));
    // this.ws.on("close", () => this.onClose());
    this.ws.on("error", (err) => console.error("WS error", err));
  }

  private onOpen() {
    console.log("WebSocket is open");
    this.sendQueuedData(); // flush any earlier queued messages
    this.autoRePing(); // start your ping‐timer here
    this.autoCloseConnection();
  }

  private onMessage(msg: string) {
    this.lastSocketEventTime = Date.now();
    this.lastPingOrActivityEventTime = Date.now();

    this.emit("message", msg);
  }

  // private onClose() {
  //   console.log("WebSocket closed, reconnecting in 1s…");
  //   setTimeout(() => this.reconnect(), 1_000);
  // }

  private reconnect() {
    // only reconnect if the socket is REALLY closed
    if (this.ws.readyState === WebSocket.CLOSED) {
      this.connect();
    }
  }

  private autoCloseConnection() {
    const interval = setInterval(() => {
      if (Date.now() - this.lastSocketEventTime > 10 * 60_000) {
        console.log("No activity for 10m – closing socket");
        this.ws.close();
        this.isClosedDueToNoActivity = true;
        clearInterval(interval);
      }
    }, 10 * 60_000);
  }
  private autoRePing() {
    const interval = setInterval(() => {
      if (this.isClosedDueToNoActivity) {
        clearInterval(interval);
        return;
      }

      if (Date.now() - this.lastPingOrActivityEventTime > 30_000) {
        console.log("pinging");
        this.ws.ping();
        this.lastPingOrActivityEventTime = Date.now();
      }
    }, 30_000);
  }

  private sendQueuedData() {
    // only send if fully OPEN
    if (this.ws.readyState !== WebSocket.OPEN) return;

    while (this.queuedData.length) {
      const msg = this.queuedData.shift()!;
      this.lastSocketEventTime = Date.now();
      this.lastPingOrActivityEventTime = Date.now();
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
