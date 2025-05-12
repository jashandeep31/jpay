"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { ServerActionResponseToClient } from "@/types/server-actions";
import crypto from "crypto";
import { hash } from "bcryptjs";

export async function createWebApiKey(tag: string): Promise<
  ServerActionResponseToClient<{
    id: string;
    privateKey: string;
    publicKey: string;
  }>
> {
  try {
    const session = await auth();
    if (!session?.merchantId) throw new Error("Unauthorized");
    const privateKey = crypto.randomBytes(32).toString("hex");
    const merchantApiKey = await db.merchantApiKey.create({
      data: {
        merchantId: session.merchantId,
        publicKey: crypto.randomBytes(32).toString("hex"),
        privateKey: await hash(privateKey, 10),
        tag,
      },
    });
    return {
      ok: true,
      data: {
        id: merchantApiKey.id,
        privateKey,
        publicKey: merchantApiKey.publicKey,
      },
    };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : "Internal server error",
    };
  }
}

export async function deleteWebApiKey(
  id: string
): Promise<ServerActionResponseToClient<{ id: string }>> {
  try {
    const session = await auth();
    if (!session?.merchantId) throw new Error("Unauthorized");

    // Verify the API key belongs to this merchant before deleting
    const apiKey = await db.merchantApiKey.findFirst({
      where: {
        id: id,
        merchantId: session.merchantId,
      },
    });

    if (!apiKey) {
      throw new Error("API key not found or unauthorized");
    }

    await db.merchantApiKey.delete({
      where: {
        id: id,
      },
    });

    return {
      ok: true,
      data: {
        id: apiKey.id,
      },
    };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : "Internal server error",
    };
  }
}
