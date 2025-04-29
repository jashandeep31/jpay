import WebSocket from "ws";

const SOLANA_WSS_URL = process.env.SOLANA_WSS_URL!;

class WsConnection {
  private ws: WebSocket;
  private isClosed: boolean = false;
  private queuedMessages: string[] = [];
  private lastPingEventTime: number = Date.now();
  private lastSocketEventTime: number = Date.now();

  constructor(ws: WebSocket) {
    this.ws = ws;
  }

  private autoCloseConnection() {
    const autoCloseTimer = setInterval(
      () => {
        if (Date.now() - this.lastSocketEventTime > 1000 * 60 * 10) {
          this.ws.close();
          clearInterval(autoCloseTimer);
          this.isClosed = true;
        }
      },
      1000 * 60 * 10
    );
  }

  private handleEvents() {
    this.ws.on("open", () => {
      console.log("WebSocket is open");
    });
    this.ws.on("close", () => {
      this.isClosed = true;
    });
    this.autoRePing();
  }

  private autoRePing() {
    setInterval(() => {
      if (Date.now() - this.lastPingEventTime > 30000) {
        this.ws.ping();
      }
    }, 30000);
  }

  private async sendQueuedMessages() {
    if (this.isClosed) {
      await this.reconnect();
    }
    this.queuedMessages.forEach((message) => {
      this.ws.send(message);
    });
    this.queuedMessages = [];
  }

  private async reconnect() {
    this.ws = new WebSocket(SOLANA_WSS_URL);
    this.handleEvents();
  }

  public async messageHandler(data: string) {
    this.lastSocketEventTime = Date.now();
  }

  public async sendData(data: string) {
    if (this.isClosed) {
      await this.reconnect();
    }
    this.queuedMessages.push(data);
  }
}
