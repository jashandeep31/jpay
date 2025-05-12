"use client";
import { CheckCircle2 } from "lucide-react";
import { Card } from "@repo/ui/components/ui/card";
import { APIGeneratedPaymentLink, IntiatedPayment, StableCoin } from "@repo/db";
import { buttonVariants } from "@repo/ui/components/ui/button";
import React, { useEffect, useState } from "react";

interface PaymentSuccessProps {
  initiatedPayment: IntiatedPayment & {
    stableCoin: StableCoin;
  };
  pgPayment: APIGeneratedPaymentLink | null;
}

export default function PaymentSuccess({
  initiatedPayment,
  pgPayment,
}: PaymentSuccessProps) {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown === 0) {
      if (initiatedPayment.initiatedFrom === "PG_PAYMENT") {
        window.location.href =
          pgPayment?.redirectUrl + `?paymentId=${pgPayment?.paymentUID}` || "/";
      }
      return;
    }
    const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown, pgPayment, initiatedPayment]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-6">
          Your transaction has been completed successfully.
        </p>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-gray-500">Amount Paid:</span>
            <span className="font-bold">
              {initiatedPayment.stableCoin.symbol}{" "}
              {Number(initiatedPayment.amount)}
            </span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-500">Transaction ID:</span>
            <span className="text-gray-700 break-all text-xs ">
              {initiatedPayment.id}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Date & Time:</span>
            <span className="font-medium">
              {initiatedPayment.createdAt.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="space-y-3">
          {pgPayment && (
            <div className={buttonVariants()}>
              Redirecting in {countdown} second{countdown !== 1 ? "s" : ""}
            </div>
          )}
          {!pgPayment && (
            <div className={buttonVariants()}>You can close this page now.</div>
          )}
        </div>
      </Card>
    </div>
  );
}
