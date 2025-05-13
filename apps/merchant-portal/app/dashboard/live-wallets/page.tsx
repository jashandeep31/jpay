import { CardContent } from "@repo/ui/components/ui/card";
import { Card, CardDescription, CardHeader } from "@repo/ui/components/ui/card";
import { CardTitle } from "@repo/ui/components/ui/card";
import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import LiveWalletsTable from "@/components/dashboard/live-wallets/live-wallets-table";

import CreateLiveWalletButton from "./CreateLiveWalletButton";

const page = async () => {
  const session = await auth();
  if (!session?.merchantId) {
    redirect("/dashboard");
  }

  const liveWallets = await db.liveWallet.findMany({
    where: {
      merchantId: session.merchantId,
    },
  });
  const mappedLiveWallets = liveWallets.map((liveWallet) => ({
    ...liveWallet,
    balance: Number(liveWallet.balance),
  }));

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Live Wallet</h1>
          <p className="text-muted-foreground">
            Generate a dedicated Solana wallet and receive instant payment
            notifications directly on WhatsApp. Perfect for merchants accepting
            in-store stablecoin payments via QR codes.
          </p>
        </div>
        <CreateLiveWalletButton />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Live Wallet</CardTitle>
          <CardDescription>
            View and manage all your Live Wallet.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LiveWalletsTable liveWallets={mappedLiveWallets} />
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
