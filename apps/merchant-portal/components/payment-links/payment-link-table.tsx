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

import { PaymentLink } from "@repo/db";
import { cancelPaymentLink } from "@/app/dashboard/payment-link/_actions";
import { CHECKOUT_PORTAL_URL } from "@/lib/conts";
import { toast } from "sonner";

interface PaymentLinkTableProps {
  paymentLinks: PaymentLink[];
  onStatusChange: () => void;
}

export default function PaymentLinkTable({
  paymentLinks,
  onStatusChange,
}: PaymentLinkTableProps) {
  const handleCopyLink = (id: string) => {
    const linkUrl = `${CHECKOUT_PORTAL_URL}/pl/${id}`;
    navigator.clipboard.writeText(linkUrl);
    toast.success("Link copied", {
      description: "Payment link copied to clipboard",
    });
  };

  const handleOpenLink = (id: string) => {
    const linkUrl = `${window.location.origin}/payment/${id}`;
    window.open(linkUrl, "_blank");
  };

  const handleCancelLink = async (id: string) => {
    try {
      const response = await cancelPaymentLink(id);
      if (response.ok) {
        toast.success("Payment link cancelled", {
          description: "The payment link has been cancelled successfully.",
        });
        onStatusChange();
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

  const getStatusBadge = (status: PaymentLink["status"]) => {
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
      case "COMPLETED":
        return (
          <Badge
            variant="outline"
            className="bg-blue-50 text-blue-700 border-blue-200"
          >
            Completed
          </Badge>
        );
      case "EXPIRED":
        return (
          <Badge
            variant="outline"
            className="bg-gray-50 text-gray-700 border-gray-200"
          >
            Expired
          </Badge>
        );
      case "CANCELLED":
        return (
          <Badge
            variant="outline"
            className="bg-red-50 text-red-700 border-red-200"
          >
            Cancelled
          </Badge>
        );
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  if (paymentLinks.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No payment links found.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Amount</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Expires</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paymentLinks.map((link) => (
            <TableRow key={link.id}>
              <TableCell className="font-medium">
                {formatCurrency(Number.parseFloat(link.amount.toString()))}
              </TableCell>
              <TableCell className="max-w-[200px] truncate">
                {link.description && link.description.length > 20
                  ? `${link.description.slice(0, 20)}...`
                  : link.description || "—"}
              </TableCell>
              <TableCell>{getStatusBadge(link.status)}</TableCell>
              <TableCell>{formatDate(new Date(link.createdAt))}</TableCell>
              <TableCell>
                {link.expiresAt
                  ? formatDate(new Date(link.expiresAt))
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
                    <DropdownMenuItem onClick={() => handleCopyLink(link.id)}>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy Link
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleOpenLink(link.id)}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Open Link
                    </DropdownMenuItem>
                    {link.status !== "CANCELLED" &&
                      link.status !== "COMPLETED" && (
                        <DropdownMenuItem
                          onClick={() => handleCancelLink(link.id)}
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
