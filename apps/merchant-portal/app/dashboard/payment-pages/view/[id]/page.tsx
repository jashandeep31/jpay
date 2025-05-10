import { auth } from "@/auth";
import RecentPayments from "@/components/dashboard/recent-payments";
import { db } from "@/lib/db";
import { Transaction } from "@repo/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { redirect } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const session = await auth();
  if (!session?.merchantId) redirect("/auth/login");
  const { id } = await params;
  const paymentPage = await db.paymentPage.findUnique({
    where: {
      id,
      merchantId: session.merchantId,
    },
  });
  if (!paymentPage) redirect("/dashboard/payment-pages");
  const initiatedPayments = await db.intiatedPayment.findMany({
    where: {
      paymentPageId: id,
      status: "COMPLETED",
    },
  });
  const transactions: (Omit<Transaction, "amount"> & { amount: number })[] = [];
  for (const initiatedPayment of initiatedPayments) {
    const dbTransactions = await db.transaction.findMany({
      where: {
        intiatedPaymentId: initiatedPayment.id,
        status: "COMPLETED",
      },
    });
    for (const dbTransaction of dbTransactions) {
      const { amount, ...rest } = dbTransaction;
      transactions.push({
        ...rest,
        amount: Number(amount),
      });
    }
  }

  return (
    <div>
      <div className="mt-4">
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-foreground">
              Recent Payments on Payment Page
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Your most recent payment activity.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RecentPayments transactions={transactions} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;
