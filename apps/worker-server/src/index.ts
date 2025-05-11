import express from "express";
import { env } from "./lib/env.js";
import webhookRoutes from "./routes/webhook-routes.js";
import pgRoutes from "./routes/pg-routes.js";
// import { testPaymentReceivingSocket } from "./sockets/payment-receving-socket";
import "./queues/consumer/payment-wallet-consumer.js";
import "./queues/consumer/payment-settlement-consumer.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.all("/", (req, res) => {
  res.send(`Hello World , ${Math.random()}`);
});
app.use("/webhook", webhookRoutes);
app.use("/api/v1/pg", pgRoutes);
// testPaymentReceivingSocket();

// Initialize the payment wallet worker

app.listen(env.PORT, () => {
  console.log(`server is running on port ${env.PORT}`);
});
