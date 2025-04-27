"use server";
import { auth } from "@/auth";
import { db } from "@/db";
export async function createPaymentLink(
  amount: number,
  description: string,
  expiryDate: string
) {
  const session = await auth();
  console.log(session);
  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }
  const paymentLink = await db.paymentLink.create({
    data: {
      amount,
      expiresAt: expiryDate ? new Date(expiryDate) : null,
      userId: session.user.id,
      description,
    },
  });
  return {
    ...paymentLink,
    amount: Number(paymentLink.amount),
  };
}

export async function getPaymentLinks() {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }
  const paymentLinks = await db.paymentLink.findMany({
    where: {
      userId: session.user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return paymentLinks;
}
