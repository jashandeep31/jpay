"use client";

import { useState } from "react";
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
import { useRouter } from "next/navigation";
import { useToast } from "@/app/hooks/use-toast";
import {
  Select,
  SelectValue,
  SelectItem,
  SelectTrigger,
  SelectContent,
} from "@repo/ui/components/ui/select";
import { createQRPayment } from "../_actions";
export default function CreateLinkPage() {
  const { toast } = useToast();
  const router = useRouter();
  const [amount, setAmount] = useState<number | null>();
  const handleCreateQRPayment = async () => {
    if (!amount) return;
    const qrPayment = await createQRPayment(amount, "PERMANENT");
    if (qrPayment.ok) {
      toast({
        title: "QR Payment Created",
        description: "QR Payment created successfully",
      });
      router.push(`/dashboard/qr-payments/`);
    } else {
      toast({
        title: "Error",
        description: qrPayment.error,
      });
    }
  };

  return (
    <div className="mx-auto max-w-4xl pt-1">
      <div className="grid mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Create QR Payment</CardTitle>
            <CardDescription>
              Generate a QR payment that you can share with your customers.
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
              <Label htmlFor="description">Type (One time or Permanent)</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PERMANENT">Permanent</SelectItem>
                  <SelectItem value="SINGLE_USE">One Time</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-blue-500 hover:bg-blue-600"
              onClick={handleCreateQRPayment}
              disabled={!amount}
            >
              Generate QR
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
