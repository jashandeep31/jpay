import axios from "axios";
import { env } from "process";

export class WhatsappAlerts {
  public async sendLiveWalletPaymentReceivedAlert({
    amount,
    fromWalletAddress,
    toWalletAddress,
    coinName,
    alertNumber,
  }: {
    amount: number;
    fromWalletAddress: string;
    toWalletAddress: string;
    coinName: string;
    alertNumber: number;
  }) {
    const data = {
      messaging_product: "whatsapp",
      to: alertNumber,
      type: "template",
      template: {
        name: "live_wallet_funds_received",
        language: {
          code: "en",
        },
        components: [
          {
            type: "body",
            parameters: [
              {
                type: "text",
                text: `*${toWalletAddress.slice(0, 4)}*`,
              },
              {
                type: "text",
                text: `*${amount.toString()}*`,
              },
              {
                type: "text",
                text: `*${coinName}*`,
              },
              {
                type: "text",
                text: `*${fromWalletAddress.slice(0, 4)}*`,
              },
            ],
          },
        ],
      },
    };
    sendWhatsappAlert(data);
  }
}

const sendWhatsappAlert = async (data: unknown) => {
  if (!env.SEND_WHATSAPP_MESSAGES) return;
  try {
    console.log("Sending WhatsApp alert");
    const res = await axios.post(
      `https://graph.facebook.com/v22.0/${env.WHATSAPP_PHONE_ID}/messages`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${env.WHATSAPP_AUTH_TOKEN}`,
        },
      }
    );
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};
