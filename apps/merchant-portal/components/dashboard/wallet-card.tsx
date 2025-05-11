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
import { toast } from "sonner";

const WalletCard = ({
  wallet,
}: {
  wallet: Omit<Wallet, "balance"> & {
    balance: number;
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
          Balance: ${Number(wallet.balance).toFixed(2)}
        </div>
        <div className="flex justify-end mt-2">
          <Button
            onClick={() => {
              const toastId = toast.loading("Settling  payments");
              settleMerchantPayments(wallet.id).then((res) => {
                toast.dismiss(toastId);
                if (res.ok) {
                  toast.success(res.data.message);
                } else {
                  toast.error(res.error);
                }
              });
            }}
          >
            Settle Payments
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WalletCard;
