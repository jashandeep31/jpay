import express from "express";
import { env } from "./lib/env.js";
import webhookRoutes from "./routes/webhook-routes.js";
// import { testPaymentReceivingSocket } from "./sockets/payment-receving-socket";
import "./queues/consumer/payment-wallet-consumer.js";

const app = express();
app.use(express.json());

app.all("/", (req, res) => {
  res.send("Hello World");
});
app.use("/webhook", webhookRoutes);
// testPaymentReceivingSocket();

// Initialize the payment wallet worker

app.listen(env.PORT, () => {
  console.log(`server is running on port ${env.PORT}`);
});
