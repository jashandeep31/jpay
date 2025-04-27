"use server";

import { auth } from "@/auth";
import { db } from "@/db";

export async function getQRPayments() {
  const session = await auth();
  if (!session?.user?.id) return;

  const qrPayments = await db.qRPayment.findMany({
    where: {
      userId: session.user.id,
    },
  });

  return qrPayments;
}
