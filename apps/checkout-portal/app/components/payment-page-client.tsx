"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@repo/ui/components/ui/button";
import { Card } from "@repo/ui/components/ui/card";
import { Separator } from "@repo/ui/components/ui/separator";
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import { PaymentOption } from "@/app/components/payment-option";
import * as z from "zod";
import {
  Merchant,
  PaymentPage,
  PaymentPageFormField,
  PaymentPageFormFieldType,
  StableCoin,
} from "@repo/db";
import { triggerPaymentPage } from "../pp/[id]/_actions";
import { useRouter } from "next/navigation";

export default function PaymentPageClient({
  paymentPage,
  stableCoins,
}: {
  paymentPage: Omit<PaymentPage, "amount"> & {
    amount: number;
    merchant: Merchant;
    PaymentPageForm: {
      PaymentPageFormField: PaymentPageFormField[];
    } | null;
  };
  stableCoins: StableCoin[];
}) {
  const router = useRouter();
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [formFields, setFormFields] = useState<
    {
      type: PaymentPageFormFieldType;
      value: string;
      required: boolean;
    }[]
  >(
    paymentPage.PaymentPageForm?.PaymentPageFormField.map((field) => ({
      type: field.type,
      value: "",
      required: field.required,
    })) || []
  );

  const handlePayment = async () => {
    if (!selectedMethod) return;
    setLoading(true);

    // Validate all required fields
    const validationErrors: string[] = [];

    formFields.forEach((field, index) => {
      if (field.required && !field.value.trim()) {
        validationErrors.push(`Field ${index + 1} is required`);
        return;
      }

      try {
        if (field.type === PaymentPageFormFieldType.TEXT) {
          z.string().min(1).parse(field.value);
        } else if (field.type === PaymentPageFormFieldType.NUMBER) {
          z.number().parse(Number(field.value));
        } else if (field.type === PaymentPageFormFieldType.EMAIL) {
          z.string().email().parse(field.value);
        } else if (field.type === PaymentPageFormFieldType.PHONE) {
          z.string().min(1).parse(field.value);
        }
      } catch (error) {
        if (error instanceof z.ZodError) {
          validationErrors.push(`Invalid value for field ${index + 1}`);
        }
      }
    });

    if (validationErrors.length > 0) {
      alert(validationErrors.join("\n"));
      setLoading(false);
      return;
    }

    // Proceed with payment if validation passes
    setLoading(false);
    const result = await triggerPaymentPage(paymentPage.id, selectedMethod, []);
    console.log(result);
    if (result.ok) {
      router.push(`/payment/${result.data.id}`);
    }

    // Simulate payment processing
    // setTimeout(() => {
    //   router.push(
    //     `/payment/confirmation?txid=mock-transaction-id&method=${selectedMethod}`
    //   );
    // }, 1500);
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={paymentPage.merchant.logoUrl || ""}
              alt={paymentPage.merchant.name}
              width={32}
              height={32}
              className="rounded-sm"
            />
          </div>
          <h2 className="text-xl font-medium">{paymentPage.merchant.name}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Description */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold mb-2">{paymentPage.title}</h1>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <div
                dangerouslySetInnerHTML={{
                  __html: paymentPage.description || "",
                }}
              />
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Contact Us:</h3>
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-muted-foreground">Email:</span>
                <span>{paymentPage.merchant.email}</span>
              </div>
              {paymentPage.merchant.phoneNumber && (
                <div className="flex items-center space-x-2 text-sm">
                  <span className="text-muted-foreground">Phone:</span>
                  <span>{paymentPage.merchant.phoneNumber}</span>
                </div>
              )}
            </div>

            <div className="text-sm text-muted-foreground">
              <p>
                You agree to share information entered on this page with
                {paymentPage.merchant.name} (owner of this page) and JPay,
                adhering to applicable laws.
              </p>
            </div>
          </div>

          {/* Right Column - Payment */}
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <div className="w-full overflow-hidden px-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="rounded-md"
                  src={paymentPage.logoUrl || ""}
                  alt={paymentPage.merchant.name}
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-medium mb-4">Payment Details</h3>
                <Separator className="mb-4" />

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Amount</span>
                    <span className="font-medium">${paymentPage.amount}</span>
                  </div>

                  {paymentPage.PaymentPageForm?.PaymentPageFormField?.map(
                    (field, index) => (
                      <div className="space-y-2" key={index}>
                        <Label htmlFor={field.label}>{field.label}</Label>
                        <Input
                          id={field.label}
                          onChange={(e) => {
                            setFormFields((prev) => {
                              const newFields = [...prev];
                              newFields[index] = {
                                ...newFields[index],
                                value: e.target.value,
                              };
                              return newFields;
                            });
                          }}
                          type={field.type}
                          placeholder={field.placeholder || ""}
                        />
                      </div>
                    )
                  )}

                  <Separator className="my-4" />

                  <div className="space-y-3">
                    <h4 className="font-medium">Payment Methods</h4>

                    {stableCoins.map((coin) => (
                      <PaymentOption
                        key={coin.id}
                        id={coin.id}
                        title={coin.name}
                        description={coin.description || ""}
                        icon={coin.logoUrl || ""}
                        selected={selectedMethod === coin.id}
                        onClick={() => setSelectedMethod(coin.id)}
                      />
                    ))}
                  </div>

                  <div className="mt-6">
                    <Button
                      className="w-full h-12 text-lg"
                      onClick={handlePayment}
                      disabled={!selectedMethod || loading}
                    >
                      {loading ? "Processing..." : `Pay $${paymentPage.amount}`}
                    </Button>
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
