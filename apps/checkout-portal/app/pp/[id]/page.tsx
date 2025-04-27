"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, Check, Copy, ExternalLink, Info } from "lucide-react";

import { Button } from "@repo/ui/components/ui/button";
import { Card } from "@repo/ui/components/ui/card";
import { Separator } from "@repo/ui/components/ui/separator";
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import { PaymentOption } from "@/app/components/payment-option";

export default function CheckoutPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount") || "99";
  const productId = searchParams.get("productId") || "course-123";

  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  // Mock wallet address for crypto payments
  const walletAddress = "0x1234567890abcdef1234567890abcdef12345678";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePayment = () => {
    if (!selectedMethod) return;

    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      router.push(
        `/payment/confirmation?txid=mock-transaction-id&method=${selectedMethod}`
      );
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link
            href="/"
            className="flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="flex items-center space-x-3 mb-8">
          <div className="h-12 w-12 bg-white rounded-md flex items-center justify-center border">
            <Image
              src="/marketplace-icon.png"
              alt="TechStore Inc."
              width={32}
              height={32}
              className="rounded-sm"
            />
          </div>
          <h2 className="text-xl font-medium">TechStore Inc.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Description */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold mb-2">
                Advanced Web Development Course
              </h1>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <p>
                Master modern web development with this comprehensive course.
                Learn React, Next.js, and full-stack development with hands-on
                projects and expert guidance.
              </p>
              <p>
                This course is designed for developers who want to take their
                skills to the next level. Whether you're a beginner looking to
                advance or an experienced developer wanting to stay current with
                modern technologies, this course has something for you.
              </p>
              <h3>What you'll learn:</h3>
              <ul>
                <li>Building responsive web applications with React</li>
                <li>Server-side rendering with Next.js</li>
                <li>API development and integration</li>
                <li>Database design and implementation</li>
                <li>Authentication and authorization</li>
                <li>Deployment and DevOps basics</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Contact Us:</h3>
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-muted-foreground">Email:</span>
                <span>support@techstore.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-muted-foreground">Phone:</span>
                <span>+1 (555) 123-4567</span>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              <p>
                You agree to share information entered on this page with
                TechStore Inc. (owner of this page) and CryptoPay, adhering to
                applicable laws.
              </p>
            </div>
          </div>

          {/* Right Column - Payment */}
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src="/course-image.png"
                  alt="Advanced Web Development Course"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-medium mb-4">Payment Details</h3>
                <Separator className="mb-4" />

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Amount</span>
                    <span className="font-medium">${amount}.00</span>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-3">
                    <h4 className="font-medium">Payment Methods</h4>

                    <PaymentOption
                      id="usdt"
                      title="USDT (Tether)"
                      description="Pay with USDT on Ethereum, Tron, or BSC"
                      icon="usdt"
                      selected={selectedMethod === "usdt"}
                      onClick={() => setSelectedMethod("usdt")}
                    />

                    <PaymentOption
                      id="btc"
                      title="Bitcoin (BTC)"
                      description="Pay with Bitcoin"
                      icon="btc"
                      selected={selectedMethod === "btc"}
                      onClick={() => setSelectedMethod("btc")}
                    />

                    <PaymentOption
                      id="usd"
                      title="Credit Card"
                      description="Pay with Visa, Mastercard, or American Express"
                      icon="card"
                      selected={selectedMethod === "usd"}
                      onClick={() => setSelectedMethod("usd")}
                    />
                  </div>

                  {selectedMethod && (
                    <div className="space-y-4 mt-4">
                      {selectedMethod !== "usd" ? (
                        <div className="space-y-4">
                          <div className="p-4 bg-muted rounded-lg">
                            <Label
                              htmlFor="wallet-address"
                              className="text-sm font-medium"
                            >
                              Send {selectedMethod.toUpperCase()} to this
                              address:
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
                            <div className="flex items-start">
                              <Info className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                              <p>
                                After sending the payment, click "Pay" to check
                                the status.
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="card-number">Card Number</Label>
                            <Input
                              id="card-number"
                              placeholder="1234 5678 9012 3456"
                            />
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
                    </div>
                  )}

                  <div className="mt-6">
                    <Button
                      className="w-full h-12 text-lg"
                      onClick={handlePayment}
                      disabled={!selectedMethod || loading}
                    >
                      {loading ? "Processing..." : `Pay $${amount}.00`}
                    </Button>
                  </div>

                  <div className="flex items-center justify-center space-x-2 mt-4">
                    <Image
                      src="/upi-icon.png"
                      alt="UPI"
                      width={24}
                      height={24}
                    />
                    <Image
                      src="/visa-icon.png"
                      alt="Visa"
                      width={24}
                      height={24}
                    />
                    <Image
                      src="/mastercard-icon.png"
                      alt="Mastercard"
                      width={24}
                      height={24}
                    />
                    <Image
                      src="/rupay-icon.png"
                      alt="RuPay"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
              </div>
            </Card>

            <div className="text-center text-xs text-muted-foreground">
              <p>
                Want to create a page like this for your business? Visit{" "}
                <Link href="#" className="text-primary hover:underline">
                  CryptoPay Payment Pages
                </Link>{" "}
                to get started!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
