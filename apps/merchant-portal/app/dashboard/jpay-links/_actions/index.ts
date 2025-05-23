"use server";
import { auth } from "@/auth";
import { db } from "@/lib/db";
import { ServerActionResponseToClient } from "@/types/server-actions";

export const createJPayLink = async (
  formData: FormData
): Promise<ServerActionResponseToClient<{ id: string }>> => {
  try {
    const session = await auth();
    if (!session?.merchantId) {
      throw new Error("Unauthorized: Please log in to continue");
    }

    const tag = formData.get("tag") as string;
    let uid = formData.get("uid") as string;
    const notifyOnEachPayment = Boolean(formData.get("notifyOnEachPayment"));

    if (!tag || !uid) {
      throw new Error("Tag and username are required");
    }

    // Remove special characters and convert to lowercase
    uid = uid
      .toLowerCase() // Convert to lowercase
      .replace(/[^a-z0-9]/g, "") // Remove everything except letters and numbers
      .replace(/[0-9]/g, ""); // Remove numbers to keep only letters

    if (!uid) {
      throw new Error("Username must contain at least one letter");
    }

    // Check if the username is already taken
    const existingLink = await db.jPayLink.findFirst({
      where: {
        uid,
        merchantId: session.merchantId,
      },
    });

    if (existingLink) {
      throw new Error("This username is already taken");
    }

    const jpayLink = await db.jPayLink.create({
      data: {
        tag,
        uid,
        notifyOnEachPayment,
        merchantId: session.merchantId,
      },
    });

    return {
      ok: true,
      data: {
        id: jpayLink.id,
      },
    };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : "Internal Server Error",
    };
  }
};
