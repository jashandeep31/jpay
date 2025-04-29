import dotenv from "dotenv";
dotenv.config();

import express from "express";
import webhookRoutes from "./routes/webhook-routes";
// import { testPaymentReceivingSocket } from "./sockets/payment-receving-socket";
import "./queues/consumer/payment-wallet-consumer";

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());

app.all("/", (req, res) => {
  res.send("Hello World");
});
app.use("/webhook", webhookRoutes);
// testPaymentReceivingSocket();

// Initialize the payment wallet worker

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
