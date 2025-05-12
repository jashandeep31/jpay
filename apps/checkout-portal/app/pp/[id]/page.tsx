import PaymentPageClient from "@/app/components/payment-page-client";
import { db } from "@/lib/db";
import React from "react";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  const paymentPage = await db.paymentPage.findUnique({
    where: {
      id,
    },
    include: {
      PaymentPageForm: {
        include: {
          PaymentPageFormField: true,
        },
      },
      merchant: true,
    },
  });

  const stableCoins = await db.stableCoin.findMany();

  if (!paymentPage) {
    return <div>Payment page not found</div>;
  }

  if (paymentPage.status === "CANCELLED") {
    return <div>Payment page is cancelled</div>;
  }
  if (paymentPage.status === "EXPIRED") {
    return <div>Payment page is expired</div>;
  }

  return (
    <PaymentPageClient
      paymentPage={{ ...paymentPage, amount: paymentPage.amount.toNumber() }}
      stableCoins={stableCoins}
    />
  );
}

export default page;
