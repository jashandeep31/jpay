"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@repo/ui/components/ui/dropdown-menu";
import { Button } from "@repo/ui/components/ui/button";

import { Badge } from "@repo/ui/components/ui/badge";
import { Copy, ExternalLink, MoreHorizontal, XCircle } from "lucide-react";
import { formatCurrency, formatDate } from "@/app/lib/utils";
import { toast } from "sonner";

import { Invoice } from "@repo/db";
import { cancelPaymentLink } from "@/app/dashboard/payment-link/_actions";
import { CHECKOUT_PORTAL_URL } from "@/lib/conts";

interface InvoicesTableProps {
  invoices: (Omit<Invoice, "amount"> & { amount: number })[];
}

export default function InvoicesTable({ invoices }: InvoicesTableProps) {
  const handleCopyLink = (id: string) => {
    const linkUrl = `${CHECKOUT_PORTAL_URL}/invoice/${id}`;
    navigator.clipboard.writeText(linkUrl);
    toast.success("Invoice copied", {
      description: "Invoice copied to clipboard",
    });
  };

  const handleOpenLink = (id: string) => {
    const linkUrl = `${CHECKOUT_PORTAL_URL}/invoice/${id}`;
    window.open(linkUrl, "_blank");
  };

  const handleCancelLink = async (id: string) => {
    try {
      const response = await cancelPaymentLink(id);
      if (response.ok) {
        toast.success("Payment link cancelled", {
          description: "The payment link has been cancelled successfully.",
        });
      } else {
        toast.error("Error", {
          description: response.error,
        });
      }
    } catch (error) {
      toast.error("Error", {
        description: error instanceof Error ? error.message : "Unknown error",
      });
    }
  };

  const getStatusBadge = (status: Invoice["status"]) => {
    switch (status) {
      case "PENDING":
        return (
          <Badge
            variant="outline"
            className="bg-yellow-50 text-yellow-700 border-yellow-200"
          >
            Pending
          </Badge>
        );
      case "ACTIVE":
        return (
          <Badge
            variant="outline"
            className="bg-green-50 text-green-700 border-green-200"
          >
            Active
          </Badge>
        );

      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  if (invoices.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No invoices found.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Amount</TableHead>
            <TableHead>Invoice Id</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Expires</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">
                {formatCurrency(Number.parseFloat(invoice.amount.toString()))}
              </TableCell>
              <TableCell className="max-w-[200px] truncate">
                {invoice.invoiceNumber}
              </TableCell>
              <TableCell>{getStatusBadge(invoice.status)}</TableCell>
              <TableCell>{formatDate(new Date(invoice.createdAt))}</TableCell>
              <TableCell>
                {invoice.dueDate
                  ? formatDate(new Date(invoice.dueDate))
                  : "Never"}
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => handleCopyLink(invoice.id)}
                    >
                      <Copy className="mr-2 h-4 w-4" />
                      Copy Link
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleOpenLink(invoice.id)}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Open Link
                    </DropdownMenuItem>
                    {invoice.status !== "CANCELLED" &&
                      invoice.status !== "PAID" && (
                        <DropdownMenuItem
                          onClick={() => handleCancelLink(invoice.id)}
                        >
                          <XCircle className="mr-2 h-4 w-4" />
                          Cancel Link
                        </DropdownMenuItem>
                      )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
