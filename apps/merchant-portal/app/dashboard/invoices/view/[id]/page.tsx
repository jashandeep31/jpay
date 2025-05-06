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
  const invoice = await db.invoice.findUnique({
    where: {
      id,
      merchantId: session.merchantId,
    },
  });
  if (!invoice) redirect("/dashboard/invoices");
  const initiatedPayments = await db.intiatedPayment.findMany({
    where: {
      invoiceId: id,
      status: "COMPLETED",
    },
  });
  const transactions: Transaction[] = [];
  for (const initiatedPayment of initiatedPayments) {
    const dbTransactions = await db.transaction.findMany({
      where: {
        intiatedPaymentId: initiatedPayment.id,
        status: "COMPLETED",
      },
    });
    if (dbTransactions) {
      transactions.push(...dbTransactions);
    }
  }

  return (
    <div>
      <div className="mt-4">
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="text-foreground">
              Recent Payments on Invoice
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
