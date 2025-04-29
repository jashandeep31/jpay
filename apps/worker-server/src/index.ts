import dotenv from "dotenv";
dotenv.config();

import express from "express";
// import { testPaymentReceivingSocket } from "./sockets/payment-receving-socket";
import "./queues/consumer/payment-wallet-consumer";

const PORT = process.env.PORT || 5000;
const app = express();

// testPaymentReceivingSocket();

// Initialize the payment wallet worker

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
