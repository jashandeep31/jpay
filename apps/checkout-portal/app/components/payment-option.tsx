"use client";

import { cn } from "@repo/ui/lib/utils";

interface PaymentOptionProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  selected: boolean;
  onClick: () => void;
}

export function PaymentOption({
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={icon} alt={title} className="w-10 h-10" />
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
