"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { ServerActionResponseToClient } from "@/types/server-actions";
import { Keypair } from "@solana/web3.js";
import { derivePath } from "ed25519-hd-key";

const Phrase: string = process.env.ONETIME_PAYMENT_RECEVING_WALLET_PHRASE || "";

export const createLiveWallet = async (): Promise<
  ServerActionResponseToClient<{ id: string }>
> => {
  try {
    const session = await auth();
    if (!session?.merchantId) {
      throw new Error("Unauthorized");
    }
    const merchantId = session.merchantId;

    const result = await db.$transaction(async (tx) => {
      const [{ nextidx }] = await tx.$queryRaw<
        Array<{ nextidx: bigint }>
      >`SELECT nextval('wallet_index_seq') AS nextidx`;

      const newIndex = Number(nextidx);
      const path = `m/44'/501'/${newIndex}'/0'`;
      const derivedSeed = derivePath(path, Phrase);
      const keypair = Keypair.fromSeed(derivedSeed.key);

      const liveWallet = await tx.liveWallet.create({
        data: {
          merchantId,
          walletAddress: keypair.publicKey.toBase58(),
          index: newIndex,
          notifyOnEachPayment: true,
          balance: 0,
        },
      });
      return liveWallet;
    });
    await updateWebhook();
    return {
      ok: true,
      data: { id: result.id },
    };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : "Unknown error",
    };
  }
};

export const updateWebhook = async () => {
  try {
    const liveWallets = await db.liveWallet.findMany({
      where: {
        isActive: true,
      },
    });

    if (!liveWallets.length) {
      throw new Error("No active live wallets found");
    }

    const arrayLiveWallets = liveWallets.map((liveWallet) => {
      return liveWallet.walletAddress;
    });

    if (!process.env.HELIUS_WEBHOOK_API) {
      throw new Error(
        "HELIUS_WEBHOOK_API environment variable is not configured"
      );
    }

    const res = await fetch(process.env.HELIUS_WEBHOOK_API, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        webhookURL: "https://smee.io/jashandeep31",
        transactionTypes: ["Any"],
        accountAddresses: arrayLiveWallets,
        webhookType: "enhancedDevnet",
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(
        `Failed to update webhook: ${errorData.message || res.statusText}`
      );
    }

    return {
      ok: true,
      message: "Webhook updated successfully",
    };
  } catch (error) {
    console.error(
      "Error updating webhook:",
      error instanceof Error ? error.message : "Unknown error"
    );
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};

export const updatePaymentNotifications = async (
  walletId: string,
  notifyOnEachPayment: boolean
): Promise<ServerActionResponseToClient<{ success: boolean }>> => {
  try {
    const session = await auth();
    if (!session?.merchantId) {
      throw new Error("Unauthorized");
    }

    await db.liveWallet.update({
      where: {
        id: walletId,
        merchantId: session.merchantId,
      },
      data: {
        notifyOnEachPayment,
      },
    });

    return {
      ok: true,
      data: { success: true },
    };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : "Unknown error",
    };
  }
};
