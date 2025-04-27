"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import { ServerActionResponseToClient } from "@/types/server-actions";
import { QRPayment } from "@repo/db";

export async function getQRPayments(): Promise<
  ServerActionResponseToClient<
    (Omit<QRPayment, "amount"> & { amount: number })[]
  >
> {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      throw new Error("Unauthorized");
    }

    const qrPayments = await db.qRPayment.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      ok: true,
      data: qrPayments.map((qrPayment) => ({
        ...qrPayment,
        amount: qrPayment.amount.toNumber(),
      })),
    };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function createQRPayment(
  amount: number,
  type: "PERMANENT" | "SINGLE_USE"
): Promise<
  ServerActionResponseToClient<Omit<QRPayment, "amount"> & { amount: number }>
> {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  const qrPayment = await db.qRPayment.create({
    data: {
      amount,
      type,
      userId: session.user.id,
    },
  });

  return {
    ok: true,
    data: {
      ...qrPayment,
      amount: qrPayment.amount.toNumber(),
    },
  };
}
