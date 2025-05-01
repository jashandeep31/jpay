import { CardContent } from "@repo/ui/components/ui/card";
import { Card, CardDescription, CardHeader } from "@repo/ui/components/ui/card";
import { Plus } from "lucide-react";
import { buttonVariants } from "@repo/ui/components/ui/button";
import { CardTitle } from "@repo/ui/components/ui/card";
import Link from "next/link";
import React from "react";
import InvoicesTable from "@/components/dashboard/invoice/invoices-table";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { db } from "@/db";

const page = async () => {
  const session = await auth();
  if (!session?.user || !session.merchantId) {
    redirect("/login");
  }

  const invoices = await db.invoice.findMany({
    where: {
      merchantId: session.merchantId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const mappedInvoices = invoices.map((invoice) => ({
    ...invoice,
    amount: invoice.amount.toNumber(),
  }));

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Invoices</h1>
          <p className="text-muted-foreground">
            Create and manage invoices for your customers.
          </p>
        </div>
        <Link href="/dashboard/invoices/create" className={buttonVariants()}>
          <Plus className="mr-2 h-4 w-4" />
          Create Invoice
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Invoices</CardTitle>
          <CardDescription>View and manage all your invoices.</CardDescription>
        </CardHeader>
        <CardContent>
          <InvoicesTable invoices={mappedInvoices} />
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
