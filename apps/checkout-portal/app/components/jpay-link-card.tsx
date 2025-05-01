"use client";

import type React from "react";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { Input } from "@repo/ui/components/ui/input";
import { Button } from "@repo/ui/components/ui/button";
import { Label } from "@repo/ui/components/ui/label";
// import CryptoCard from "./crypto-card";
import { Check, DollarSign } from "lucide-react";
import { JPayLink, StableCoin } from "@repo/db";
import { cn } from "@repo/ui/lib/utils";
import { triggerJPayInitiatedPayment } from "../[uid]/_actions";
import { useRouter } from "next/navigation";

interface JPayLinkCardProps {
  jpayLink: JPayLink & {
    merchant: {
      name: string;
      logoUrl: string | null;
    };
  };
  stableCoins: StableCoin[];
}

export default function JPayLinkCard({
  jpayLink,
  stableCoins,
}: JPayLinkCardProps) {
  const router = useRouter();
  const [amount, setAmount] = useState<string>("");
  const [selectedCrypto, setSelectedCrypto] = useState<string | null>(null);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only numbers and decimal point
    const value = e.target.value.replace(/[^0-9.]/g, "");

    // Ensure only one decimal point
    const parts = value.split(".");
    if (parts.length > 2) {
      return;
    }

    setAmount(value);
  };

  const handleCryptoSelect = (cryptoId: string) => {
    setSelectedCrypto(cryptoId);
  };

  const isPaymentReady =
    amount !== "" && Number.parseFloat(amount) > 0 && selectedCrypto !== null;

  const handlePayment = async () => {
    if (!amount || !selectedCrypto) {
      alert("Please enter amount and select crypto");

      return;
    }

    try {
      const res = await triggerJPayInitiatedPayment(
        jpayLink.uid,
        Number(amount),
        selectedCrypto
      );
      if (res.ok) {
        router.push(`/payment/${res.data.id}`);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="w-full max-w-md">
      <Card className="shadow-lg ">
        <CardHeader className="pb-4 text-center">
          <CardTitle className="text-2xl font-bold">
            <div className="flex items-center  flex-col gap-3 justify-center">
              <div
                className={`relative overflow-hidden rounded-full w-12 h-12 border`}
              >
                {jpayLink.merchant.logoUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={jpayLink.merchant.logoUrl || ""}
                    alt="Merchant Logo"
                    // fill
                    className="object-cover"
                  />
                ) : null}
              </div>
              <h1 className="text-lg font-bold">{jpayLink.merchant.name}</h1>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="amount" className="text-sm font-medium">
              Amount
            </Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="amount"
                type="text"
                placeholder="0.00"
                value={amount}
                onChange={handleAmountChange}
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">Select Cryptocurrency</Label>
            <div className="grid grid-cols-2 gap-3">
              {stableCoins.map((stableCoin) => (
                <StableCoinCard
                  key={stableCoin.id}
                  stableCoin={stableCoin}
                  isSelected={selectedCrypto === stableCoin.id}
                  onSelect={handleCryptoSelect}
                />
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button
            onClick={handlePayment}
            disabled={!isPaymentReady}
            className="w-full"
            size="lg"
          >
            {isPaymentReady ? (
              <>
                <Check className="mr-2 h-4 w-4" /> Pay Now
              </>
            ) : (
              "Enter Amount & Select Crypto"
            )}
          </Button>
          <div className="text-xs text-center text-muted-foreground">
            Secure payment processing by JPay payment gateway.
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

interface StableCoinCardProps {
  stableCoin: StableCoin;
  isSelected: boolean;
  onSelect: (stableCoinId: string) => void;
}

function StableCoinCard({
  stableCoin,
  isSelected,
  onSelect,
}: StableCoinCardProps) {
  return (
    <div
      onClick={() => onSelect(stableCoin.id)}
      className={cn(
        "flex items-center p-3 rounded-lg border-2 cursor-pointer transition-all",
        "hover:border-primary/50 hover:bg-primary/5",
        isSelected
          ? "border-primary bg-primary/10"
          : "border-border bg-background"
      )}
    >
      <div className="flex-shrink-0 mr-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={stableCoin.logoUrl || "/placeholder.svg"}
          alt={stableCoin.name}
          width={24}
          height={24}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col">
        <span className="font-medium text-sm">{stableCoin.symbol}</span>
        <span className="text-xs text-muted-foreground">{stableCoin.name}</span>
      </div>
    </div>
  );
}
