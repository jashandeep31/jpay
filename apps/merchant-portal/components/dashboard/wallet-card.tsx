"use client";
import { settleMerchantPayments } from "@/app/dashboard/_actions";
import { StableCoin, Wallet } from "@repo/db";
import { Button } from "@repo/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import React from "react";

const WalletCard = ({
  wallet,
}: {
  wallet: Wallet & {
    stableCoin: StableCoin;
  };
}) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={wallet.stableCoin.logoUrl || ""}
              alt={wallet.stableCoin.name}
              className="w-4 h-4 rounded-full"
            />
            {wallet.stableCoin.name} ({wallet.stableCoin.symbol})
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          Balance: ${wallet.balance.toLocaleString()}
        </div>
        <div className="flex justify-end mt-2">
          <Button onClick={() => settleMerchantPayments(wallet.id)}>
            Settle Payments
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WalletCard;
