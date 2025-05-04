"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Check, Copy, ExternalLink } from "lucide-react";
import QRCode from "qrcode";
import { Button } from "@repo/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import { MerchantInfo } from "@/app/components/merchant-info";
import { Separator } from "@repo/ui/components/ui/separator";
import { IntiatedPayment, StableCoin } from "@repo/db/";
import { checkInitiatedPaymentStatus } from "../payment/[id]/_actions";

interface PaymentDetailsClientProps {
  initiatedPayment: IntiatedPayment & {
    stableCoin: StableCoin;
    merchant: {
      name: string;
      logoUrl: string | null;
    };
  };
}

export function PaymentDetailsClient({
  initiatedPayment,
}: PaymentDetailsClientProps) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const walletAddress = initiatedPayment.walletAddress;
  const amount = Number(initiatedPayment.amount);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  console.log(
    `solana:${walletAddress}?amount=${amount}&spl-token=${initiatedPayment.stableCoin.authority}`
  );

  const handlePayment = () => {
    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      router.push("/payment/confirmation?txid=mock-transaction-id");
    }, 2000);
  };
  useEffect(() => {
    const canvas = document.getElementById("qr-code") as HTMLCanvasElement;
    if (canvas) {
      QRCode.toCanvas(
        canvas,
        `solana:${walletAddress}?amount=${amount}&spl-token=${initiatedPayment.stableCoin.authority}`
      );
    }
  }, [walletAddress, amount, initiatedPayment.stableCoin.authority]);
  useEffect(() => {
    const checkStatus = async () => {
      const status = await checkInitiatedPaymentStatus(initiatedPayment.id);
      console.log(status);
      if (status.status === "COMPLETED") {
        router.push(`/payment/confirmation/${initiatedPayment.id}`);
      }
    };
    checkStatus();
    const interval = setInterval(checkStatus, 5000);
    return () => clearInterval(interval);
  }, [initiatedPayment.id, router]);

  return (
    <div className="container max-w-2xl px-4 py-8 md:py-12">
      <div className="mb-6 md:mb-8">
        <Link
          href="/payment/select-method"
          className="flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Payment Methods
        </Link>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              Payment Details
            </h1>
            <p className="text-muted-foreground mt-1 md:mt-2">
              Complete your payment by sending USDT to the address below
            </p>
          </div>
          <MerchantInfo logo={initiatedPayment.merchant.logoUrl} />
        </div>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <CardTitle>USDT Payment</CardTitle>
                <CardDescription>Amount: ${amount}</CardDescription>
              </div>
              <div className="hidden sm:block">
                <MerchantInfo
                  name={initiatedPayment.merchant.name}
                  logo={initiatedPayment.merchant.logoUrl}
                  compact
                />
              </div>
            </div>
          </CardHeader>
          <Separator className="" />
          <CardContent>
            <div className="flex justify-center">
              <canvas
                id="qr-code"
                className="w-[100px] h-[100px] mb-4"
              ></canvas>
            </div>
            <div className="space-y-4">
              <div className="p-3 md:p-4 bg-muted rounded-lg">
                <Label htmlFor="wallet-address" className="text-sm font-medium">
                  Send USDT to this address:
                </Label>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-2">
                  <Input
                    id="wallet-address"
                    value={walletAddress}
                    readOnly
                    className="font-mono text-xs sm:text-sm break-all"
                  />
                  <div className="flex gap-2 w-full sm:w-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 sm:flex-none"
                      onClick={copyToClipboard}
                    >
                      {copied ? (
                        <Check className="h-4 w-4 mr-2" />
                      ) : (
                        <Copy className="h-4 w-4 mr-2" />
                      )}
                      {copied ? "Copied" : "Copy"}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 sm:flex-none"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                <p className="font-medium">Important:</p>
                <ul className="list-disc list-inside space-y-1 mt-2">
                  <li>
                    Only send {initiatedPayment.stableCoin.symbol} by{" "}
                    {initiatedPayment.stableCoin.name} to this address else the
                    payment will fail.
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button
              className="w-full"
              onClick={handlePayment}
              disabled={loading}
            >
              {loading ? "Processing..." : "Complete Payment"}
            </Button>

            <div className="text-center text-sm text-muted-foreground mt-4">
              <p>
                After sending the payment, click &quot;Complete Payment&quot; to
                check the status.
              </p>
              <p className="mt-2">
                Need help?{" "}
                <Link href="#" className="text-primary hover:underline">
                  Contact Support
                </Link>
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
