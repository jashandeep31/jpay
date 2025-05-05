import React from "react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@repo/ui/components/ui/alert";
import BulkPayoutMainUI from "@/components/dashboard/bulk-payout/bulk-payout-main-ui";
import { db } from "@/lib/db";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();
  if (!session?.merchantId) redirect("/auth/login");
  const bulkPayoutGroups = await db.bulkPayoutGroup.findMany({
    where: {
      merchantId: session.merchantId,
    },
  });
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Bulk Payouts</h1>
          <p className="text-muted-foreground mb-6">
            Do bulk payouts for your customers.
          </p>
          <Alert variant="default">
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
              We currently only support bulk payouts in USDC and you need a
              wallet to make the payment. We don&apos;t send anything on your
              behalf, we just create a transaction. Transaction fee and total
              amount will be deducted from your wallet.
              <br />
              <br />
              More features like creating team groups and importing from excel
              are coming soon.
            </AlertDescription>
          </Alert>
        </div>
      </div>
      <BulkPayoutMainUI bulkPayoutGroups={bulkPayoutGroups} />
    </div>
  );
};

export default page;
