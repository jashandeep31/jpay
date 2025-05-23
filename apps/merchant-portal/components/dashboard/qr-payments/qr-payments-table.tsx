"use client";

import { useState } from "react";
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
import { Copy, ExternalLink, MoreHorizontal, QrCode } from "lucide-react";
import { formatCurrency, formatDate } from "@/app/lib/utils";
import { QRPayment } from "@repo/db";
import { toast } from "sonner";
import { CHECKOUT_PORTAL_URL } from "@/lib/conts";
import { QRCodeModal } from "./qr-code-modal";
import Link from "next/link";

interface QRPaymentsTableProps {
  qrPayments: QRPayment[];
  onStatusChange: () => void;
}

export default function QRPaymentsTable({ qrPayments }: QRPaymentsTableProps) {
  const [selectedPaymentId, setSelectedPaymentId] = useState<string | null>(
    null
  );

  const handleCopyLink = (id: string) => {
    const linkUrl = `${CHECKOUT_PORTAL_URL}/qr/${id}`;
    navigator.clipboard.writeText(linkUrl);
    toast.success("Link copied", {
      description: "Payment link copied to clipboard",
    });
  };

  const handleOpenLink = (id: string) => {
    const linkUrl = `${CHECKOUT_PORTAL_URL}/qr/${id}`;
    window.open(linkUrl, "_blank");
  };

  // const handleCancelLink = async (id: string) => {};

  const getStatusBadge = (status: QRPayment["status"]) => {
    switch (status) {
      case "USED":
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
      case "EXPIRED":
        return (
          <Badge
            variant="outline"
            className="bg-blue-50 text-blue-700 border-blue-200"
          >
            Expired
          </Badge>
        );

      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  if (qrPayments.length === 0) {
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
            <TableHead>Status</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Created at</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {qrPayments.map((link) => (
            <TableRow key={link.id}>
              <TableCell className="font-medium">
                {formatCurrency(Number.parseFloat(link.amount.toString()))}
              </TableCell>

              <TableCell>{getStatusBadge(link.status)}</TableCell>
              <TableCell>{link.type}</TableCell>
              <TableCell>{formatDate(new Date(link.createdAt))}</TableCell>

              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => setSelectedPaymentId(link.id)}
                  >
                    <span className="sr-only">Show QR Code</span>
                    <QrCode className="h-4 w-4" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href={`/dashboard/qr-payments/view/${link.id}`}>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Transactions
                        </Link>
                      </DropdownMenuItem>
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
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {selectedPaymentId && (
        <QRCodeModal
          isOpen={!!selectedPaymentId}
          onClose={() => setSelectedPaymentId(null)}
          paymentId={selectedPaymentId}
        />
      )}
    </div>
  );
}
