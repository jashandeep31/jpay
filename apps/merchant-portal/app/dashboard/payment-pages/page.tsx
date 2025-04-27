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
import PaymentPageTable from "@/components/dashboard/payment-pages/payment-page-table";
import { PaymentPage } from "@repo/db";
import Link from "next/link";
import { getPaymentPages } from "./_actions";

export default function PaymentPagesPage() {
  const { toast } = useToast();

  const [loading, setloading] = useState(true);
  const [paymentPages, setPaymentPages] = useState<PaymentPage[]>([]);

  const callGetPaymentPages = useCallback(async () => {
    try {
      const response = await getPaymentPages();
      if (!response.ok) {
        throw new Error(response.error);
      }
      const pages = response.data;
      // Temporary fix to ensure the data is typed correctly
      setPaymentPages(pages as unknown as PaymentPage[]);
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive",
      });
      setPaymentPages([]);
    } finally {
      setloading(false);
    }
  }, [toast]);

  useEffect(() => {
    callGetPaymentPages();
  }, [callGetPaymentPages]);

  const [activeTab, setActiveTab] = useState("all");

  const mutate = async () => {
    setloading(true);
    await callGetPaymentPages();
    setloading(false);
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Payment Pages</h1>
          <p className="text-muted-foreground">
            Create and manage payment pages for your customers.
          </p>
        </div>
        <Link
          href="/dashboard/payment-pages/create"
          className={buttonVariants()}
        >
          <Plus className="mr-2 h-4 w-4" />
          Create Payment Page
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Payment Pages</CardTitle>
          <CardDescription>
            View and manage all your payment pages.
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
                <PaymentPageTable
                  paymentPages={paymentPages || []}
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
                <PaymentPageTable
                  paymentPages={paymentPages.filter(
                    (page) => page.status === "ACTIVE"
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
                <PaymentPageTable
                  paymentPages={(paymentPages || []).filter(
                    (page) => page.status === "PENDING"
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
                <PaymentPageTable
                  paymentPages={(paymentPages || []).filter(
                    (page) => page.status === "COMPLETED"
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
                <PaymentPageTable
                  paymentPages={(paymentPages || []).filter(
                    (page) => page.status === "EXPIRED"
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
