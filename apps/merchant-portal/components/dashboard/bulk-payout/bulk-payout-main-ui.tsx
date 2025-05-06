"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { BulkPayoutGroup } from "@repo/db";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui/components/ui/table";
import { formatDate } from "@/app/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@repo/ui/components/ui/button";

const BulkPayoutMainUI = ({
  bulkPayoutGroups,
}: {
  bulkPayoutGroups: BulkPayoutGroup[];
}) => {
  const { publicKey } = useWallet();

  if (!publicKey) {
    return <ConnectWalletButtonUI />;
  }

  return (
    <div>
      <div className="flex justify-between">
        <WalletMultiButton />
        <Link
          href="/dashboard/bulk-payouts/create"
          className={buttonVariants()}
        >
          Create Group +
        </Link>
      </div>
      <div className="overflow-auto">
        <Table className="bg-card border rounded-lg">
          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead>S.No</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bulkPayoutGroups.map((group, index) => (
              <TableRow key={group.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell className="max-w-[200px] truncate">
                  {group.name}
                </TableCell>
                <TableCell>{group.description}</TableCell>
                <TableCell>{formatDate(new Date(group.createdAt))}</TableCell>
                <TableCell className="text-right">
                  <Link
                    href={`/dashboard/bulk-payouts/${group.id}`}
                    className={buttonVariants()}
                  >
                    View
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BulkPayoutMainUI;

const ConnectWalletButtonUI = () => {
  if (typeof window === "undefined") {
    return null; // Return null during SSR
  }

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <p className="mb-4 text-lg">
        Please connect your Solana wallet to continue.
      </p>
      <WalletMultiButton />
    </div>
  );
};
