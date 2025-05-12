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

// import { TOKEN_2022_PROGRAM_ID } from "@solana/spl-token";

// import {
//   Connection,
//   Keypair,
//   PublicKey,
//   sendAndConfirmTransaction,
//   Transaction,
// } from "@solana/web3.js";
// import bs58 from "bs58";
// import {
//   createTransferInstruction,
//   getOrCreateAssociatedTokenAccount,
// } from "@solana/spl-token";

// const PERSONAL_WALLET = env.PERSONAL_WALLET_SECRET_KEY!;
// const USDT_MINT = "JAv9RoTyDfzwCqpGVTTK1mMkNNAVcxSERAXZ8h2XBjk1";
// // const USDT_MINT = "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr";

// async function main() {
//   const recipient = "sk75mwCXkHeNFQYpH2zD8b35jihqxkwWDbQCeevZimz";
//   const amount = 1;
//   const connection = new Connection(env.SYNDICA_RPC_API_URL!, "confirmed");
//   const payerKeypair = Keypair.fromSecretKey(bs58.decode(PERSONAL_WALLET));
//   const mintPubkey = new PublicKey(USDT_MINT);
//   const recipientPubkey = new PublicKey(recipient);

//   // This will fetch the ATA if it exists, or create it (and fund it) if it doesn't.
//   const fromAta = await getOrCreateAssociatedTokenAccount(
//     connection,
//     payerKeypair, // payer
//     mintPubkey, // token mint
//     payerKeypair.publicKey, // owner of ATA
//     true, // allow owner off curve
//     undefined, // default commitment
//     undefined, // default token program ID
//     TOKEN_2022_PROGRAM_ID // **Specify this last**
//   );
//   const toAta = await getOrCreateAssociatedTokenAccount(
//     connection,
//     payerKeypair,
//     mintPubkey,
//     recipientPubkey, // owner of the destination ATA
//     true, // allow owner off curve
//     undefined, // default commitment
//     undefined, // default token program ID
//     TOKEN_2022_PROGRAM_ID // **Specify this last**
//   );

//   console.log(fromAta.address.toBase58(), toAta.address.toBase58());

//   if (1 === 1) return;

//   // Build transfer
//   const tx = new Transaction().add(
//     createTransferInstruction(
//       fromAta.address,
//       toAta.address,
//       payerKeypair.publicKey,
//       amount * 10 ** 6
//     )
//   );

//   // Send & confirm
//   const signature = await sendAndConfirmTransaction(connection, tx, [
//     payerKeypair,
//   ]);
// }
// main();
