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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@repo/ui/components/ui/alert-dialog";
import { Badge } from "@repo/ui/components/ui/badge";
import {
  Copy,
  ExternalLink,
  MoreHorizontal,
  Trash,
  XCircle,
} from "lucide-react";
import { formatCurrency, formatDate } from "@/app/lib/utils";
import { useToast } from "@/app/hooks/use-toast";
import { PaymentLink, PaymentPage, QRPayment } from "@repo/db";

interface QRPaymentsTableProps {
  qrPayments: QRPayment[];
  onStatusChange: () => void;
}

export default function QRPaymentsTable({ qrPayments }: QRPaymentsTableProps) {
  const { toast } = useToast();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedLinkId, setSelectedLinkId] = useState<string | null>(null);

  const handleCopyLink = (id: string) => {
    const linkUrl = `${window.location.origin}/payment/${id}`;
    navigator.clipboard.writeText(linkUrl);
    toast({
      title: "Link copied",
      description: "Payment link copied to clipboard",
    });
  };

  const handleOpenLink = (id: string) => {
    const linkUrl = `${window.location.origin}/payment/${id}`;
    window.open(linkUrl, "_blank");
  };

  const handleCancelLink = async (id: string) => {};

  const handleDeleteLink = async () => {};

  const confirmDelete = (id: string) => {
    setSelectedLinkId(id);
    setIsDeleteDialogOpen(true);
  };

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
            <TableHead>Description</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Expires</TableHead>
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
              <TableCell>{formatDate(new Date(link.createdAt))}</TableCell>

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

                    <DropdownMenuItem
                      onClick={() => confirmDelete(link.id)}
                      className="text-red-600 focus:text-red-600"
                    >
                      <Trash className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              payment link.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteLink}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
