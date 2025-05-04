"use server";

import { db } from "@/lib/db";

export async function checkInitiatedPaymentStatus(initiatedPaymentId: string) {
  const initiatedPayment = await db.intiatedPayment.findUnique({
    where: {
      id: initiatedPaymentId,
    },
  });

  if (!initiatedPayment) {
    return {
      status: "NOT_FOUND",
    };
  }

  if (initiatedPayment.status === "COMPLETED") {
    return {
      status: "COMPLETED",
    };
  }

  if (initiatedPayment.status === "FAILED") {
    return {
      status: "FAILED",
    };
  }

  return {
    status: "PENDING",
  };
}
