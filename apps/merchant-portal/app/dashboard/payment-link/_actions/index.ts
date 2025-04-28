"use server";
import { auth } from "@/auth";
import { db } from "@/db";
import { ServerActionResponseToClient } from "@/types/server-actions";
import { PaymentLink } from "@repo/db";
export async function createPaymentLink(
  amount: number,
  description: string,
  expiryDate: string
): Promise<
  ServerActionResponseToClient<Omit<PaymentLink, "amount"> & { amount: number }>
> {
  try {
    const session = await auth();
    console.log(session);
    if (!session?.merchantId) {
      throw new Error("Unauthorized");
    }
    const paymentLink = await db.paymentLink.create({
      data: {
        amount,
        expiresAt: expiryDate ? new Date(expiryDate) : null,
        merchantId: session.merchantId,
        description,
      },
    });
    return {
      ok: true,
      data: {
        ...paymentLink,
        amount: paymentLink.amount.toNumber(),
      },
    };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function getPaymentLinks(): Promise<
  ServerActionResponseToClient<
    Omit<PaymentLink, "amount">[] & { amount: number }[]
  >
> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      throw new Error("Unauthorized");
    }
    const paymentLinks = await db.paymentLink.findMany({
      where: {
        merchantId: session.merchantId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return {
      ok: true,
      data: paymentLinks.map((paymentLink) => ({
        ...paymentLink,
        amount: paymentLink.amount.toNumber(),
      })),
    };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function cancelPaymentLink(
  id: string
): Promise<
  ServerActionResponseToClient<Omit<PaymentLink, "amount"> & { amount: number }>
> {
  try {
    const session = await auth();
    if (!session?.merchantId) {
      throw new Error("Unauthorized");
    }
    const paymentLink = await db.paymentLink.findUnique({
      where: {
        id,
        merchantId: session?.merchantId,
      },
    });
    if (!paymentLink) {
      throw new Error("Payment link not found");
    }

    if (paymentLink.status !== "ACTIVE") {
      throw new Error("Payment link is not active");
    }
    await db.paymentLink.update({
      where: { id },
      data: { status: "CANCELLED" },
    });
    return {
      ok: true,
      data: {
        ...paymentLink,
        amount: paymentLink.amount.toNumber(),
      },
    };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : "Unknown error",
    };
  }
}
