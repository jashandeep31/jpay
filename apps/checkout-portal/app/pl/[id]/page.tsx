import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { MerchantInfo } from "@/app/components/merchant-info";
import { db } from "@/lib/db";
import { CoinCard } from "@/app/components/coin-card";

export default async function SelectPaymentMethod({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const stableCoins = await db.stableCoin.findMany();
  const paymentLink = await db.paymentLink.findUnique({
    where: {
      id,
    },
    include: {
      merchant: {
        select: {
          name: true,
          logoUrl: true,
        },
      },
    },
  });
  if (!paymentLink) {
    return <div>Payment link not found</div>;
  }
  if (paymentLink.status === "EXPIRED") {
    return <div>Payment link expired</div>;
  }
  if (paymentLink.status === "CANCELLED") {
    return <div>Payment link is cancelled</div>;
  }
  if (paymentLink.status === "COMPLETED") {
    return <div>Payment link is completed</div>;
  }

  return (
    <div className="container max-w-4xl px-4 py-8 md:py-12">
      <div className="mb-6 md:mb-8">
        <Link
          href="/"
          className="flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              Select Payment Method
            </h1>
            <p className="text-muted-foreground mt-1 md:mt-2">
              Choose how you&apos;d like to pay for your transaction.
            </p>
          </div>
          <MerchantInfo
            logo={paymentLink.merchant?.logoUrl}
            name={paymentLink.merchant.name || ""}
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Payment Details</CardTitle>
            <CardDescription>{paymentLink.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center py-2">
              <span className="font-medium">Amount:</span>
              <span className="text-xl font-bold">
                ${paymentLink.amount.toFixed(2)}
              </span>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stableCoins.map((coin) => (
            <CoinCard
              key={coin.id}
              title={`${coin.name} (${coin.symbol})`}
              description={`Pay with ${coin.symbol} on Solana `}
              icon={coin.logoUrl}
              paymentId={id}
              initiatedFrom="PAYMENT_LINK"
              coinId={coin.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
