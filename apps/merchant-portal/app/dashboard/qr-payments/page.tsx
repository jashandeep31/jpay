"use client";

import { useCallback, useEffect, useState } from "react";
import { useToast } from "@/app/hooks/use-toast";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { buttonVariants } from "@repo/ui/components/ui/button";
import { Loader2, Plus } from "lucide-react";
import { QRPayment } from "@repo/db";
import Link from "next/link";
import { getQRPayments } from "./_actions";
import QRPaymentsTable from "@/components/dashboard/qr-payments/qr-payments-table";

export default function QRPaymentsPage() {
  const { toast } = useToast();
  const [loading, setloading] = useState(true);
  const [qrPayments, setQRPayments] = useState<QRPayment[]>([]);

  const callGetQRPayments = useCallback(async () => {
    try {
      const resposne = await getQRPayments();
      if (!resposne.ok) {
        throw new Error(resposne.error as string);
      }
      setQRPayments(resposne.data as unknown as QRPayment[]);
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Unknown error",
      });

      setQRPayments([]);
    } finally {
      setloading(false);
    }
  }, [toast]);

  useEffect(() => {
    callGetQRPayments();
  }, [callGetQRPayments]);

  const [activeTab, setActiveTab] = useState("all");

  const mutate = async () => {
    setloading(true);
    setloading(false);
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">QR Payments</h1>
          <p className="text-muted-foreground">
            Create and manage QR payments for your customers.
          </p>
        </div>
        <Link href="/dashboard/qr-payments/create" className={buttonVariants()}>
          <Plus className="mr-2 h-4 w-4" />
          Create QR Payment
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your QR Payments</CardTitle>
          <CardDescription>
            View and manage all your QR payments.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs
            defaultValue="all"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="expired">Expired</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              {loading ? (
                <div className="flex justify-center items-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : (
                <QRPaymentsTable
                  qrPayments={qrPayments || []}
                  onStatusChange={mutate}
                />
              )}
            </TabsContent>

            <TabsContent value="active" className="mt-0">
              {loading ? (
                <div className="flex justify-center items-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : (
                <QRPaymentsTable
                  qrPayments={qrPayments.filter(
                    (payment) => payment.status === "ACTIVE"
                  )}
                  onStatusChange={mutate}
                />
              )}
            </TabsContent>

            <TabsContent value="pending" className="mt-0">
              {loading ? (
                <div className="flex justify-center items-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : (
                <QRPaymentsTable
                  qrPayments={(qrPayments || []).filter(
                    (payment) => payment.status === "USED"
                  )}
                  onStatusChange={mutate}
                />
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
