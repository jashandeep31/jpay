"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import { PaymentPage } from "@repo/db";
import { ServerActionResponseToClient } from "@/types/server-actions";

export async function getPaymentPages(): Promise<
  ServerActionResponseToClient<
    Omit<PaymentPage, "amount">[] & { amount: number }[]
  >
> {
  try {
    const session = await auth();
    if (!session?.user) throw new Error("Unauthorized");

    const paymentPages = await db.paymentPage.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      ok: true,
      data: paymentPages.map((paymentPage) => ({
        ...paymentPage,
        amount: paymentPage.amount.toNumber(),
      })),
    };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function createPaymentPage(data: {
  title: string;
  description: string | undefined;
  logoUrl: string;
  amount: number;
  expiresAt: Date | undefined;
}): Promise<
  ServerActionResponseToClient<Omit<PaymentPage, "amount"> & { amount: number }>
> {
  try {
    const session = await auth();
    if (!session?.user) throw new Error("Unauthorized");

    const paymentPage = await db.paymentPage.create({
      data: {
        title: data.title,
        description: data.description,
        logoUrl: data.logoUrl,
        amount: data.amount,
        userId: session.user.id,
        expiresAt: data.expiresAt,
      },
    });

    return {
      ok: true,
      data: {
        ...paymentPage,
        amount: paymentPage.amount.toNumber(),
      },
    };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function cancelPaymentPage(data: {
  id: string;
}): Promise<
  ServerActionResponseToClient<Omit<PaymentPage, "amount"> & { amount: number }>
> {
  try {
    const session = await auth();
    if (!session?.user) throw new Error("Unauthorized");

    const existingPage = await db.paymentPage.findUnique({
      where: { id: data.id, userId: session.user.id },
    });

    if (!existingPage) {
      throw new Error("Payment page not found");
    }

    if (!["ACTIVE", "PENDING"].includes(existingPage.status)) {
      throw new Error("Payment page cannot be cancelled in its current status");
    }

    const paymentPage = await db.paymentPage.update({
      where: { id: data.id, userId: session.user.id },
      data: { status: "CANCELLED" },
    });

    if (!paymentPage) throw new Error("Payment page not found");

    return {
      ok: true,
      data: {
        ...paymentPage,
        amount: paymentPage.amount.toNumber(),
      },
    };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : "Unknown error",
    };
  }
}
