import WebSocket from "ws";
import { WsConnection } from "./connection";
import { InitiatedPaymentQueuePayload } from "../queues/consumer/payment-wallet-consumer";

export class WalletTrackingSocket {
  private wsConnectionProvider: WsConnection;

  constructor() {
    this.wsConnectionProvider = new WsConnection();
    this.wsConnectionProvider.on("message", this.onMessage.bind(this));
  }
  public async addWalletToTrack(data: InitiatedPaymentQueuePayload) {
    console.log(`wallet is ${data.walletAddress}`);
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
  private onMessage(raw: string) {
    let msg;
    try {
      msg = JSON.parse(raw);
    } catch {
      console.warn("Received non-JSON WebSocket message:", raw);
      return;
    }

    // now you can filter by id, method, result, error, whatever…
    console.log("RPC message for wallet subscription:", msg);
  }
}
