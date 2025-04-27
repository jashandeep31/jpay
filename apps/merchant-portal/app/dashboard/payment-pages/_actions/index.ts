"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import { PaymentPageStatus } from "@repo/db";

export async function getPaymentPages() {
  const session = await auth();
  if (!session?.user) {
    return { error: "Unauthorized" };
  }

  const paymentPages = await db.paymentPage.findMany({
    where: {
      userId: session.user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return paymentPages;
}

export async function createPaymentPage(data: {
  title: string;
  description: string | undefined;
  logoUrl: string;
  amount: number;
  expiresAt: Date | undefined;
}) {
  const session = await auth();
  if (!session?.user) {
    return { error: "Unauthorized" };
  }

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
    ...paymentPage,
    amount: Number(paymentPage.amount),
  };
}
