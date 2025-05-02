// interface ParsedTransaction {
//   isSplToken: boolean;
//   from: string;
//   to: string;
//   fromTokenAccount?: string;
//   toTokenAccount?: string;
//   mintAddress?: string;
//   amount: number;
//   signature: string;
// }

type ParsedTransaction =
  | {
      isSplToken: true;
      from: string;
      to: string;
      fromTokenAccount: string;
      toTokenAccount: string;
      mintAddress: string;
      amount: number;
      signature: string;
    }
  | {
      isSplToken: false;
      from: string;
      to: string;
      amount: number;
      signature: string;
    };

/**
 * Parses a Solana transaction payload (or payload wrapper) and returns a summary.
 * Detects if it's an SPL token transfer or native SOL transfer.
 * @param input - The transaction object, array of transactions, or wrapper containing `payload` array
 * @returns ParsedTransaction
 */
export function parseTransaction(input: any): ParsedTransaction {
  // Unwrap array of transactions
  let tx = Array.isArray(input) ? input[0] : input;
  // Unwrap if payload wrapper
  if (Array.isArray(tx.payload)) {
    tx = tx.payload[0];
  }

  const signature: string = tx.signature;

  // Handle SPL token transfer
  if (Array.isArray(tx.tokenTransfers) && tx.tokenTransfers.length > 0) {
    const transfer = tx.tokenTransfers[0];
    return {
      isSplToken: true,
      from: transfer.fromUserAccount || "",
      to: transfer.toUserAccount || "",
      fromTokenAccount: transfer.fromTokenAccount,
      toTokenAccount: transfer.toTokenAccount,
      mintAddress: transfer.mint,
      amount: transfer.tokenAmount || 0,
      signature,
    };
  }

  // Handle native SOL transfer (lamports)
  if (Array.isArray(tx.accountData) && tx.accountData.length > 0) {
    const feeLamports = typeof tx.fee === "number" ? tx.fee : 0;
    // Find sender entry (negative change, includes fee + transfer)
    const senderEntry = tx.accountData
      .filter((a: any) => typeof a.nativeBalanceChange === "number")
      .find((a: any) => a.nativeBalanceChange < 0);
    // Find receiver entry (positive change)
    const receiverEntry = tx.accountData.find(
      (a: any) => a.nativeBalanceChange > 0
    );

    const totalDebit = Math.abs(senderEntry?.nativeBalanceChange || 0);
    // Subtract fee to get only transfer amount
    const transferredLamports =
      totalDebit > feeLamports ? totalDebit - feeLamports : 0;
    const amount = transferredLamports / 1e9; // convert to SOL

    return {
      isSplToken: false,
      from: senderEntry?.account || "",
      to: receiverEntry?.account || "",
      amount,
      signature,
    };
  }

  throw new Error("Unable to parse transaction — no transfers found");
}
