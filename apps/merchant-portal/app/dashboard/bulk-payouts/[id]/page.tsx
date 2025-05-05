import { auth } from "@/auth";
import BulkPayoutGroupMemberTable from "@/components/dashboard/bulk-payout/bulk-payout-group-member-table";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const session = await auth();
  if (!session?.merchantId) redirect("/auth/login");
  const bulkPayoutGroup = await db.bulkPayoutGroup.findUnique({
    where: {
      id,
      merchantId: session.merchantId,
    },
    include: {
      BulkPayoutGroupMember: true,
    },
  });
  if (!bulkPayoutGroup) redirect("/dashboard/bulk-payouts");

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            {bulkPayoutGroup.name}
          </h1>
          <p className="text-muted-foreground mb-6">
            {bulkPayoutGroup.description}
          </p>
        </div>
      </div>
      <BulkPayoutGroupMemberTable group={bulkPayoutGroup} />
    </div>
  );
};

export default page;
