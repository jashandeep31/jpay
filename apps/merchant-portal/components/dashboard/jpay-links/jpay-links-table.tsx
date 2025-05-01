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

import { Copy, ExternalLink, MoreHorizontal } from "lucide-react";
import { formatDate } from "@/app/lib/utils";
import { toast } from "sonner";
import { JPayLink } from "@repo/db";
import { CHECKOUT_PORTAL_URL } from "@/lib/conts";

interface JPayLinksTableProps {
  jpayLinks: JPayLink[];
}

export default function JPayLinksTable({ jpayLinks }: JPayLinksTableProps) {
  const handleCopyLink = (uid: string) => {
    const linkUrl = `${CHECKOUT_PORTAL_URL}/@${uid}`;
    navigator.clipboard.writeText(linkUrl);
    toast.success("JPay Link copied", {
      description: "JPay Link copied to clipboard",
    });
  };

  const handleOpenLink = (uid: string) => {
    const linkUrl = `${CHECKOUT_PORTAL_URL}/@${uid}`;
    window.open(linkUrl, "_blank");
  };

  if (jpayLinks.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No JPay links found.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tag</TableHead>
            <TableHead>UID</TableHead>
            <TableHead>Notify on each payment</TableHead>
            <TableHead>Created</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jpayLinks.map((jpayLink) => (
            <TableRow key={jpayLink.id}>
              <TableCell className="font-medium">{jpayLink.tag}</TableCell>
              <TableCell className="max-w-[200px] truncate">
                {jpayLink.uid}
              </TableCell>
              <TableCell>
                {jpayLink.notifyOnEachPayment ? "Yes" : "No"}
              </TableCell>
              <TableCell>{formatDate(new Date(jpayLink.createdAt))}</TableCell>
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
                      onClick={() => handleCopyLink(jpayLink.uid)}
                    >
                      <Copy className="mr-2 h-4 w-4" />
                      Copy Link
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleOpenLink(jpayLink.uid)}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Open Link
                    </DropdownMenuItem>
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
