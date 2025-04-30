import axios from "axios";
import {
  Keypair,
  Connection,
  PublicKey,
  Transaction,
  SystemProgram,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import bs58 from "bs58";
import {
  getAssociatedTokenAddress,
  createTransferInstruction,
} from "@solana/spl-token";

const SOLANA_RPC_URL = process.env.SOLANA_RPC_URL!;

export interface ParsedTransaction {
  signature: string;
  from: string;
  to: string;
  amount: number;
  fee: number;
  status: "success" | "error";
  tokenMint: string;
  tokenSymbol?: string; // Optional, if you want to resolve mint to symbol like USDT
}
export const getTransaction = async (
  signature: string,
  retries = 5,
  delay = 4000
): Promise<any> => {
  for (let i = 0; i < retries; i++) {
    const response = await axios.post(
      SOLANA_RPC_URL,
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
      return parseTransaction(response.data.result);
    }
    await new Promise((resolve) => setTimeout(resolve, delay));
  }

  throw new Error(
    `Transaction ${signature} not found after ${retries} retries.`
  );
};
const parseTransaction = (tx: any): ParsedTransaction | null => {
  const { transaction, meta } = tx;
  if (!transaction || !meta) return null;

  const signature = transaction.signatures[0];
  const instructions = transaction.message.instructions;
  const accountKeys = transaction.message.accountKeys;

  const transferIx = instructions.find((ix: any) => {
    const programId = accountKeys[ix.programIdIndex];
    return programId === "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
  });

  if (!transferIx) return null;

  const accounts = transferIx.accounts || [];
  const from = accountKeys[accounts[0]];
  const to = accountKeys[accounts[1]];

  const preBalance = meta.preTokenBalances?.[0];
  const postBalance = meta.postTokenBalances?.[0];

  const amount = Math.abs(
    (postBalance?.uiTokenAmount?.amount ?? 0) -
      (preBalance?.uiTokenAmount?.amount ?? 0)
  );

  const tokenMint = postBalance?.mint || preBalance?.mint || "unknown";
  const tokenSymbol = tokenMint;

  return {
    signature,
    from,
    to,
    amount,
    fee: meta.fee,
    status: meta.err === null ? "success" : "error",
    tokenMint,
    tokenSymbol,
  };
};

const PERSONAL_WALLET = process.env.PERSONAL_WALLET!;
const USDT_MINT = "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr";
export const sendUSDT = async (address: string, amount: number) => {
  const keypair = Keypair.fromSecretKey(
    bs58.decode(PERSONAL_WALLET)
  ) as Keypair;
  const connection = new Connection(SOLANA_RPC_URL);

  // Get the token account (ATA) of sender
  const fromTokenAccount = await getAssociatedTokenAddress(
    new PublicKey(USDT_MINT), // USDT token mint
    keypair.publicKey
  );

  // Get the token account (ATA) of recipient
  const toTokenAccount = await getAssociatedTokenAddress(
    new PublicKey(USDT_MINT),
    new PublicKey(address)
  );

  const transaction = new Transaction().add(
    createTransferInstruction(
      fromTokenAccount,
      toTokenAccount,
      keypair.publicKey,
      amount * 10 ** 6 // Convert to token decimals
    )
  );

  console.log("USDT transfer transaction created");
  return transaction;
};
