import axios from "axios";
import {
  Keypair,
  Connection,
  PublicKey,
  Transaction,
  SystemProgram,
  LAMPORTS_PER_SOL,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
// @ts-ignore
import bs58 from "bs58";
import {
  getAssociatedTokenAddress,
  createTransferInstruction,
  getOrCreateAssociatedTokenAccount,
} from "@solana/spl-token";
import { env } from "../../lib/env.js";

export interface ParsedTransaction {
  signature: string;
  transactionType: "SOL" | "SPL_TOKEN" | "UNKNOWN";
  from: string;
  to: string;
  amount: number;
  tokenMint?: string;
  decimals?: number;
  fee: number;
  status: "success" | "error";
  ataFrom?: string;
  ataTo?: string;
}

export const getSignatureForAddress = async (
  walletAddress: string,
  subId: number
) => {
  const response = await axios.post(
    env.SOLANA_RPC_URL,
    {
      jsonrpc: "2.0",
      id: subId,
      method: "getSignaturesForAddress",
      params: [walletAddress, { limit: 1 }],
    },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    }
  );
  return response.data.result[0].signature;
};
export const getTransaction = async (
  signature: string,
  retries = 1,
  delay = 5000
): Promise<any | null> => {
  for (let i = 0; i < retries; i++) {
    console.log(`i am getting called get transaction `);
    try {
      const response = await axios.post(
        env.SOLANA_RPC_URL,
        {
          jsonrpc: "2.0",
          id: 1,
          method: "getTransaction",
          params: [signature, { maxSupportedTransactionVersion: 0 }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
          },
        }
      );
      if (response.data.result) {
        return response.data.result;
      }
      console.log(response.data, "else");
      await new Promise((resolve) => setTimeout(resolve, delay));
    } catch (error) {
      console.error(`Error fetching transaction: ${error}`);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  console.log(`failed`);
  return null;
};
export function parseTransaction(tx: any): ParsedTransaction {
  const { transaction, meta } = tx;
  const signature = transaction.signatures[0];
  const fee = meta.fee;
  const status = meta.err === null ? "success" : "error";
  const accountKeys = transaction.message.accountKeys;

  // Identify known program IDs
  const systemProgramId = "11111111111111111111111111111111";
  const tokenProgramId = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
  const associatedTokenProgramId =
    "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL";

  // Check if TokenProgram or AssociatedTokenProgram is involved
  const isTokenTransaction =
    transaction.message.accountKeys.includes(tokenProgramId) ||
    transaction.message.accountKeys.includes(associatedTokenProgramId);

  // Default to SOL transfer if no token programs are involved
  let transactionType: "SOL" | "SPL_TOKEN" | "UNKNOWN" = "UNKNOWN";

  // For SOL transfers, check if the System Program is invoked
  if (
    transaction.message.instructions.some(
      (instr: any) => accountKeys[instr.programIdIndex] === systemProgramId
    )
  ) {
    transactionType = "SOL";
  }

  // For token transfers, check if the Token Program is invoked
  if (
    isTokenTransaction &&
    meta.postTokenBalances &&
    meta.postTokenBalances.length > 0
  ) {
    transactionType = "SPL_TOKEN";
  }

  // Maps for token balances
  const preTokenMap = new Map<number, any>();
  const postTokenMap = new Map<number, any>();

  for (const balance of meta.preTokenBalances || []) {
    preTokenMap.set(balance.accountIndex, balance);
  }

  for (const balance of meta.postTokenBalances || []) {
    postTokenMap.set(balance.accountIndex, balance);
  }

  let from = "";
  let to = "";
  let tokenMint = "";
  let ataFrom = "";
  let ataTo = "";
  let amount = 0;
  let decimals = 0;
  let tokenSymbol = "";

  // For SPL token transfers
  if (transactionType === "SPL_TOKEN") {
    // Analyze token balances to determine sender and recipient
    for (const [index, account] of accountKeys.entries()) {
      const pre = preTokenMap.get(index);
      const post = postTokenMap.get(index);

      // If we have both pre and post for this account, it's involved in the transfer
      if (pre && post) {
        tokenMint = pre.mint;
        decimals = pre.uiTokenAmount.decimals;

        // Extract token symbol from mint if possible
        // This would require additional logic to lookup token symbol from mint address

        const preAmount = BigInt(pre.uiTokenAmount.amount);
        const postAmount = BigInt(post.uiTokenAmount.amount);

        if (postAmount < preAmount) {
          // This account sent tokens
          from = pre.owner;
          ataFrom = account;
          amount = Number(preAmount - postAmount);
        } else if (postAmount > preAmount) {
          // This account received tokens
          to = post.owner;
          ataTo = account;
        }
      } else if (!pre && post) {
        // New token account created and received tokens
        to = post.owner;
        ataTo = account;
        tokenMint = post.mint;
        decimals = post.uiTokenAmount.decimals;
        // In case of a new account, the amount is the post balance
        amount = Number(post.uiTokenAmount.amount);
      }
    }

    // If amount is still 0, try to calculate from log messages or token balances
    if (amount === 0 && meta.postTokenBalances.length > 0) {
      // For account creations, the amount may be in the first post balance
      amount = Number(meta.postTokenBalances[0].uiTokenAmount.amount);
    }

    // Try to identify common token symbols by mint address
  }
  // For SOL transfers (would need additional logic)
  else if (transactionType === "SOL") {
    // Logic for SOL transfers would go here
    // This would require parsing system program transfer instructions
    // For now, we leave this as an exercise for further implementation
  }

  // Normalize amount based on decimals for display
  const displayAmount = decimals > 0 ? amount / Math.pow(10, decimals) : amount;

  return {
    signature,
    transactionType,
    from,
    to,
    amount: displayAmount,
    tokenMint,
    decimals,
    fee,
    status,
    ataFrom,
    ataTo,
  };
}
const PERSONAL_WALLET = env.PERSONAL_WALLET_SECRET_KEY!;
const USDT_MINT = "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr";

export const sendToken = async (recipient: string, amount: number) => {
  const connection = new Connection(env.SYNDICA_RPC_API_URL!, "confirmed");
  const payerKeypair = Keypair.fromSecretKey(bs58.decode(PERSONAL_WALLET));
  const mintPubkey = new PublicKey(USDT_MINT);
  const recipientPubkey = new PublicKey(recipient);

  // This will fetch the ATA if it exists, or create it (and fund it) if it doesn't.
  const fromAta = await getOrCreateAssociatedTokenAccount(
    connection,
    payerKeypair, // payer for any ATA creation fees
    mintPubkey, // your token’s mint
    payerKeypair.publicKey, // owner of the source ATA
    true // allow payer to be the mint authority if needed
  );

  const toAta = await getOrCreateAssociatedTokenAccount(
    connection,
    payerKeypair,
    mintPubkey,
    recipientPubkey, // owner of the destination ATA
    true
  );

  // Build transfer
  const tx = new Transaction().add(
    createTransferInstruction(
      fromAta.address,
      toAta.address,
      payerKeypair.publicKey,
      amount * 10 ** 6
    )
  );

  // Send & confirm
  const signature = await sendAndConfirmTransaction(connection, tx, [
    payerKeypair,
  ]);

  console.log("Transfer successful:", signature);
  return signature;
};
