import { formatCurrency, formatDate } from "@/app/lib/utils";
import { db } from "@/lib/db";
import { Transaction } from "@prisma/client";
import { Badge } from "@repo/ui/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";

import { Separator } from "@repo/ui/components/ui/separator";
import {
  ChevronLeft,
  Clock,
  CreditCard,
  DollarSign,
  Store,
  Wallet,
} from "lucide-react";
import { FileText } from "lucide-react";
import Link from "next/link";
import React from "react";

type ITransaction = Omit<Transaction, "amount"> & { amount: number };

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const transaction = await db.transaction.findUnique({
    where: { id },
  });
  if (!transaction) {
    return <div>Transaction not found</div>;
  }
  return (
    <div className="p-4 md:p-6">
      <div className="flex items-center mb-6">
        <Link
          href="/dashboard"
          className="flex items-center text-sm bg-accent/10 hover:bg-accent/20 px-2 py-1 rounded-md"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back
        </Link>
      </div>
      <TransactionCard
        transaction={{
          ...transaction,
          amount: transaction.amount.toNumber(),
        }}
      />
    </div>
  );
};

export default page;

function TransactionCard({ transaction }: { transaction: ITransaction }) {
  // Get status badge color
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "failed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl">Transaction Details</CardTitle>
            <CardDescription>
              Complete information about transaction {transaction.id}
            </CardDescription>
          </div>
          <Badge className={getStatusColor(transaction.status)}>
            {transaction.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Basic Transaction Information */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-medium">Basic Information</h3>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <p className="text-sm text-muted-foreground">Transaction ID</p>
              <p className="font-medium">{transaction.id}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Amount</p>
              <p className="font-medium flex items-center">
                <DollarSign className="h-4 w-4 mr-1" />
                {formatCurrency(transaction.amount)}{" "}
                {transaction.stableCoinName}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Initiated From</p>
              <p className="font-medium">{transaction.initiatedFrom}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Signature</p>
              <p className="font-medium truncate">{transaction.signature}</p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Wallet Information */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Wallet className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-medium">Wallet Information</h3>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <p className="text-sm text-muted-foreground">
                From Wallet Address
              </p>
              <p className="font-medium truncate">
                {transaction.fromWalletAddress}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                From ATA Wallet Address
              </p>
              <p className="font-medium truncate">
                {transaction.fromAtaWalletAddress}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">To Wallet Address</p>
              <p className="font-medium truncate">
                {transaction.toWalletAddress}
              </p>
            </div>
            {transaction.toAtaWalletAddress && (
              <div>
                <p className="text-sm text-muted-foreground">
                  To ATA Wallet Address
                </p>
                <p className="font-medium truncate">
                  {transaction.toAtaWalletAddress}
                </p>
              </div>
            )}
            {transaction.toWalletAddressIndex !== undefined && (
              <div>
                <p className="text-sm text-muted-foreground">
                  To Wallet Address Index
                </p>
                <p className="font-medium">
                  {transaction.toWalletAddressIndex}
                </p>
              </div>
            )}
          </div>
        </div>

        <Separator />

        {/* Settlement Information */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-medium">Settlement Information</h3>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <p className="text-sm text-muted-foreground">Settled</p>
              <Badge variant={transaction.settled ? "default" : "outline"}>
                {transaction.settled ? "Yes" : "No"}
              </Badge>
            </div>
            {transaction.settledAt && (
              <div>
                <p className="text-sm text-muted-foreground">Settled At</p>
                <p className="font-medium">
                  {formatDate(transaction.settledAt)}
                </p>
              </div>
            )}
            {transaction.settledToWalletAddress && (
              <div>
                <p className="text-sm text-muted-foreground">
                  Settled To Wallet Address
                </p>
                <p className="font-medium truncate">
                  {transaction.settledToWalletAddress}
                </p>
              </div>
            )}
            {transaction.settledSignature && (
              <div>
                <p className="text-sm text-muted-foreground">
                  Settled Signature
                </p>
                <p className="font-medium truncate">
                  {transaction.settledSignature}
                </p>
              </div>
            )}
          </div>
        </div>

        <Separator />

        {/* Related Entities */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Store className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-medium">Related Entities</h3>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <p className="text-sm text-muted-foreground">Merchant ID</p>
              <p className="font-medium">{transaction.merchantId}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Initiated Payment ID
              </p>
              <p className="font-medium">{transaction.intiatedPaymentId}</p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Timestamps */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-medium">Timestamps</h3>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <p className="text-sm text-muted-foreground">Created At</p>
              <p className="font-medium">{formatDate(transaction.createdAt)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Updated At</p>
              <p className="font-medium">{formatDate(transaction.updatedAt)}</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <p className="text-sm text-muted-foreground">
          For more details, please contact support
        </p>
      </CardFooter>
    </Card>
  );
}
