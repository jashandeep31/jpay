import dotenv from "dotenv";
dotenv.config();

export const env = {
  SOLANA_WSS_URL: process.env.SOLANA_WSS_URL,
  PORT: process.env.PORT || 5000,
  PERSONAL_WALLET_SECRET_KEY: process.env.PERSONAL_WALLET_SECRET_KEY as string,
  // Add other environment variables here
  SOLANA_RPC_URL: process.env.SOLANA_RPC_URL!,
  SYNDICA_RPC_API_URL: process.env.SYNDICA_RPC_API_URL!,
} as const;

type EnvType = typeof env;
type EnvKey = keyof EnvType;

for (const key of Object.keys(env) as EnvKey[]) {
  if (!env[key]) {
    throw new Error(`${key} is not set`);
  }
}
