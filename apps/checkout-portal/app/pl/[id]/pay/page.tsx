"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, Check, Copy, ExternalLink } from "lucide-react";

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

export default function PaymentDetails() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const method = searchParams.get("method") || "usdt";
  const amount = searchParams.get("amount") || "99";

  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  // Mock wallet address for USDT payments
  const walletAddress = "0x1234567890abcdef1234567890abcdef12345678";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePayment = () => {
    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      router.push("/payment/confirmation?txid=mock-transaction-id");
    }, 2000);
  };

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
              {method === "usdt"
                ? "Complete your payment by sending USDT to the address below"
                : "Enter your card details to complete the payment"}
            </p>
          </div>
          <MerchantInfo />
        </div>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <CardTitle>
                  {method === "usdt" ? "USDT Payment" : "Credit Card Payment"}
                </CardTitle>
                <CardDescription>Amount: ${amount}.00</CardDescription>
              </div>
              <div className="hidden sm:block">
                <MerchantInfo compact />
              </div>
            </div>
          </CardHeader>
          <Separator className="mb-6" />
          <CardContent>
            {method === "usdt" ? (
              <div className="space-y-4">
                <div className="p-3 md:p-4 bg-muted rounded-lg">
                  <Label
                    htmlFor="wallet-address"
                    className="text-sm font-medium"
                  >
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
                    <li>Send only USDT to this address</li>
                    <li>
                      Supported networks: Ethereum (ERC20), Tron (TRC20), BSC
                      (BEP20)
                    </li>
                    <li>
                      Include the exact amount to ensure proper processing
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="card-number">Card Number</Label>
                  <Input id="card-number" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Name on Card</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button
              className="w-full"
              onClick={handlePayment}
              disabled={loading}
            >
              {loading ? "Processing..." : "Complete Payment"}
            </Button>

            {method === "usdt" && (
              <div className="text-center text-sm text-muted-foreground mt-4">
                <p>
                  After sending the payment, click "Complete Payment" to check
                  the status.
                </p>
                <p className="mt-2">
                  Need help?{" "}
                  <Link href="#" className="text-primary hover:underline">
                    Contact Support
                  </Link>
                </p>
              </div>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
