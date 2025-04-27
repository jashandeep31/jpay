"use client";

import { Bitcoin, CreditCard } from "lucide-react";
import { cn } from "@repo/ui/lib/utils";

interface PaymentOptionProps {
  id: string;
  title: string;
  description: string;
  icon: "usdt" | "btc" | "eth" | "card";
  selected: boolean;
  onClick: () => void;
}

export function PaymentOption({
  id,
  title,
  description,
  icon,
  selected,
  onClick,
}: PaymentOptionProps) {
  return (
    <div
      className={cn(
        "border rounded-lg p-4 cursor-pointer transition-colors",
        selected
          ? "border-primary bg-primary/5"
          : "border-border hover:border-primary/50"
      )}
      onClick={onClick}
    >
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0">
          {icon === "usdt" && (
            <div className="h-10 w-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-xs">
              USDT
            </div>
          )}
          {icon === "btc" && (
            <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center text-white">
              <Bitcoin className="h-5 w-5" />
            </div>
          )}
          {icon === "eth" && (
            <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-xs">
              ETH
            </div>
          )}
          {icon === "card" && (
            <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
              <CreditCard className="h-5 w-5" />
            </div>
          )}
        </div>
        <div className="flex-grow">
          <h4 className="font-medium">{title}</h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="flex-shrink-0 flex items-center justify-center h-5 w-5 rounded-full border-2 border-muted-foreground">
          {selected && (
            <div className="h-2.5 w-2.5 rounded-full bg-primary"></div>
          )}
        </div>
      </div>
    </div>
  );
}
