"use client";

import { useState } from "react";
import { Button } from "@repo/ui/components/ui/button";
import { Switch } from "@repo/ui/components/ui/switch";
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
import { Textarea } from "@repo/ui/components/ui/textarea";
import { createPaymentLink } from "../_actions";
import { useRouter } from "next/navigation";
import { useToast } from "@/app/hooks/use-toast";
export default function CreateLinkPage() {
  const { toast } = useToast();
  const router = useRouter();
  const [amount, setAmount] = useState<number | null>();
  const [description, setDescription] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [oneTimeLink, setOneTimeLink] = useState(false);

  const handleCreatePaymentLink = async () => {
    if (!amount) return;
    if (expiryDate && new Date(expiryDate) < new Date()) {
      toast({
        title: "Error",
        description: "Expiry date must be in the future",
      });
      return;
    }
    const paymentLink = await createPaymentLink(
      amount,
      description,
      expiryDate,
      oneTimeLink
    );
    if (paymentLink.ok) {
      router.push(`/dashboard/payment-link/`);
    } else {
      toast({
        title: "Error",
        description: paymentLink.error,
      });
    }
  };

  return (
    <div className="mx-auto max-w-4xl pt-1">
      <div className="grid mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Create Payment Page</CardTitle>
            <CardDescription>
              Generate a payment pages that you can share with your customers.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <div className="flex">
                <div className="flex items-center justify-center bg-gray-100 px-3 border border-r-0 border-gray-300 rounded-l-md">
                  $
                </div>
                <Input
                  id="amount"
                  placeholder="0.00"
                  type="number"
                  value={amount ?? ""}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="rounded-l-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Payment for..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="expiry">Expiry Date (Optional)</Label>
              <Input
                id="expiry"
                type="date"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
            </div>

            <div className="flex items-center space-x-2 mt-3">
              <Switch
                id="oneTimeLink"
                checked={oneTimeLink}
                onCheckedChange={setOneTimeLink}
              />
              <Label htmlFor="oneTimeLink">One Time Link</Label>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-blue-500 hover:bg-blue-600"
              onClick={handleCreatePaymentLink}
              disabled={!amount}
            >
              Generate Payment Link
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
