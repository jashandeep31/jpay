import Link from "next/link";
import { Button } from "@repo/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";

import { LinkIcon } from "lucide-react";
import RecentPayments from "@/components/dashboard/recent-payments";
import { db } from "../../lib/db";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import WalletCard from "@/components/dashboard/wallet-card";

async function getTransactions(merchantId: string) {
  const transactions = await db.transaction.findMany({
    orderBy: {
      createdAt: "desc",
    },
    where: {
      merchantId,
    },
  });
  return transactions;
}
export default async function DashboardPage() {
  const session = await auth();
  if (!session?.merchantId) {
    redirect("/auth/login");
  }
  const wallets = await db.wallet.findMany({
    where: {
      merchantId: session.merchantId,
    },
    include: {
      stableCoin: true,
    },
  });
  const transactions = await getTransactions(session.merchantId);
  return (
    <div className="flex flex-col gap-5 pt-1">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold tracking-tight">
          Welcome back, {session?.user?.name || "User"}
        </h2>
        <div className="flex items-center gap-2">
          <Link href="/dashboard/payment-link/create">
            <Button className="bg-blue-500 hover:bg-blue-600 w-full sm:w-auto">
              <LinkIcon className="mr-2 h-4 w-4" />
              Create Payment Link
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {wallets.map((wallet) => (
          <WalletCard key={wallet.id} wallet={wallet} />
        ))}
      </div>

      <div className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Recent Payments</CardTitle>
            <CardDescription>
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
}
