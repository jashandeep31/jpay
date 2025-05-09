"use client";

import { Transaction } from "@repo/db";
import { Button } from "@repo/ui/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@repo/ui/components/ui/dropdown-menu";
import { MoreHorizontal, Eye } from "lucide-react";
import { Badge } from "@repo/ui/components/ui/badge";
import Link from "next/link";

export default function RecentPayments({
  transactions,
}: {
  transactions: (Omit<Transaction, "amount"> & { amount: number })[];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Date
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Source
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Amount
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Customer
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Status
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Settled
            </th>
            <th className="px-4 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border bg-background">
          {transactions.map((payment) => (
            <tr key={payment.id} className="hover:bg-muted/50">
              <td className="px-4 py-4 whitespace-nowrap text-sm text-muted-foreground">
                {payment.createdAt.toLocaleDateString()}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-foreground">
                {payment.initiatedFrom}
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-foreground">
                  ${payment.amount.toFixed(2)}
                </div>
                <div className="text-xs text-muted-foreground">
                  {payment.stableCoinName}
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div>
                    <div className="text-sm font-medium text-foreground">
                      To: {payment.toWalletAddress}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      From: {payment.fromWalletAddress}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <Badge
                  variant={
                    payment.status === "COMPLETED" ? "default" : "outline"
                  }
                  className={
                    payment.status === "COMPLETED"
                      ? "bg-green-500/10 text-green-500 hover:bg-green-500/20"
                      : "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20"
                  }
                >
                  {payment.status === "COMPLETED" ? "Paid" : "Pending"}
                </Badge>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-left text-sm font-medium text-foreground">
                {payment.settled ? "Yes" : "No"}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-left text-sm font-medium">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem asChild>
                      <Link href={`/dashboard/trans/${payment.id}`}>
                        <Eye className="mr-2 h-4 w-4" />
                        <span>View details</span>
                      </Link>
                    </DropdownMenuItem>
                    {/* {payment.status === "pending" && (
                      <DropdownMenuItem>
                        <RefreshCw className="mr-2 h-4 w-4" />
                        <span>Check status</span>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    {payment.status === "paid" && (
                      <DropdownMenuItem>
                        <RefreshCw className="mr-2 h-4 w-4" />
                        <span>Refund payment</span>
                      </DropdownMenuItem>
                    )} */}
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <Button variant="outline" size="sm">
          View all payments
        </Button>
      </div>
    </div>
  );
}
