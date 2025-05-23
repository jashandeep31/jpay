"use client";

import { useCallback, useEffect, useState } from "react";

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
import PaymentLinkTable from "@/components/payment-links/payment-link-table";
import { getPaymentLinks } from "./_actions";
import { PaymentLink } from "@repo/db";
import Link from "next/link";

export default function PaymentLinksPage() {
  const [loading, setloading] = useState(true);
  const [paymentLinks, setPaymentLinks] = useState<PaymentLink[]>([]);

  const callGetPaymentLinks = useCallback(async () => {
    const payments = await getPaymentLinks();
    if (payments.ok) {
      setPaymentLinks(payments.data as unknown as PaymentLink[]);
    }
  }, []);

  useEffect(() => {
    (async () => {
      await callGetPaymentLinks();
      setloading(false);
    })();
  }, [callGetPaymentLinks]);

  const [activeTab, setActiveTab] = useState("all");

  const mutate = async () => {
    setloading(true);
    await callGetPaymentLinks();
    setloading(false);
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Payment Links</h1>
          <p className="text-muted-foreground">
            Create and manage payment links for your customers.
          </p>
        </div>
        <Link
          href="/dashboard/payment-link/create"
          className={buttonVariants()}
        >
          <Plus className="mr-2 h-4 w-4" />
          Create Payment Link
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Payment Links</CardTitle>
          <CardDescription>
            View and manage all your payment links.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs
            defaultValue="all"
            value={activeTab}
            onValueChange={setActiveTab}
            className="overflow-auto"
          >
            <TabsList className="mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="expired">Expired</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              {loading ? (
                <div className="flex justify-center items-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : (
                <PaymentLinkTable
                  paymentLinks={paymentLinks || []}
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
                <PaymentLinkTable
                  paymentLinks={(paymentLinks || []).filter(
                    (link) => link.status === "ACTIVE"
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
                <PaymentLinkTable
                  paymentLinks={(paymentLinks || []).filter(
                    (link) => link.status === "PENDING"
                  )}
                  onStatusChange={mutate}
                />
              )}
            </TabsContent>

            <TabsContent value="completed" className="mt-0">
              {loading ? (
                <div className="flex justify-center items-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : (
                <PaymentLinkTable
                  paymentLinks={(paymentLinks || []).filter(
                    (link) => link.status === "COMPLETED"
                  )}
                  onStatusChange={mutate}
                />
              )}
            </TabsContent>

            <TabsContent value="expired" className="mt-0">
              {loading ? (
                <div className="flex justify-center items-center py-8">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : (
                <PaymentLinkTable
                  paymentLinks={(paymentLinks || []).filter(
                    (link) => link.status === "EXPIRED"
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
