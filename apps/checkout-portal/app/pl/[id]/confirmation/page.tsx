"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle, Home } from "lucide-react";

import { Button } from "@repo/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { MerchantInfo } from "@/app/components/merchant-info";
import { Separator } from "@repo/ui/components/ui/separator";

export default function PaymentConfirmation() {
  const searchParams = useSearchParams();
  const txid = searchParams.get("txid") || "unknown";

  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="container max-w-2xl px-4 py-8 md:py-12">
      <div className="space-y-6 text-center">
        <div className="flex justify-center">
          <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
            <CheckCircle className="h-10 w-10 md:h-12 md:w-12 text-green-600 dark:text-green-300" />
          </div>
        </div>

        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Payment Successful!
          </h1>
          <p className="text-muted-foreground mt-1 md:mt-2">
            Your payment has been processed successfully.
          </p>
        </div>

        <div className="flex justify-center">
          <MerchantInfo />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Transaction Details</CardTitle>
          </CardHeader>
          <Separator className="mb-6" />
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between border-b pb-2 gap-1">
              <span className="text-muted-foreground">Transaction ID:</span>
              <span className="font-mono text-sm break-all">{txid}</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b pb-2 gap-1">
              <span className="text-muted-foreground">Date:</span>
              <span>{new Date().toLocaleString()}</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between border-b pb-2 gap-1">
              <span className="text-muted-foreground">Status:</span>
              <span className="text-green-600 dark:text-green-400 font-medium">
                Completed
              </span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-1">
              <span className="text-muted-foreground">Amount:</span>
              <span className="font-bold">$99.00</span>
            </div>
          </CardContent>
          <CardFooter>
            <div className="w-full text-center text-sm text-muted-foreground">
              A confirmation email has been sent to your email address.
            </div>
          </CardFooter>
        </Card>

        <div>
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Return to Home
            </Link>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Redirecting to home in {timeLeft} seconds...
          </p>
        </div>
      </div>
    </div>
  );
}
