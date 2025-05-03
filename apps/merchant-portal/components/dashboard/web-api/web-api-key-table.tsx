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

import { MoreHorizontal, Trash } from "lucide-react";
import { formatDate } from "@/app/lib/utils";
// import { toast } from "sonner";
// import { CHECKOUT_PORTAL_URL } from "@/lib/conts";
import { MerchantApiKey } from "@repo/db";
import { deleteWebApiKey } from "@/app/dashboard/web-api/_actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface WebApiKeyTableProps {
  webApiKeys: MerchantApiKey[];
}

export default function WebApiKeyTable({ webApiKeys }: WebApiKeyTableProps) {
  const router = useRouter();
  //   const handleCopyLink = (uid: string) => {
  //     const linkUrl = `${CHECKOUT_PORTAL_URL}/@${uid}`;
  //     navigator.clipboard.writeText(linkUrl);
  //     toast.success("JPay Link copied", {
  //       description: "JPay Link copied to clipboard",
  //     });
  //   };

  //   const handleOpenLink = (uid: string) => {
  //     const linkUrl = `${CHECKOUT_PORTAL_URL}/@${uid}`;
  //     window.open(linkUrl, "_blank");
  //   };

  //   if (webApiKeys.length === 0) {
  //     return (
  //       <div className="text-center py-8">
  //         <p className="text-muted-foreground">No web API keys found.</p>
  //       </div>
  //     );
  //   }

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tag</TableHead>
            <TableHead>Public Key</TableHead>
            <TableHead>Created</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {webApiKeys.map((webApiKey) => (
            <TableRow key={webApiKey.id}>
              <TableCell className="font-medium">{webApiKey.tag}</TableCell>
              <TableCell className="font-medium">
                {webApiKey.publicKey.slice(0, 10)}...
              </TableCell>

              <TableCell>{formatDate(new Date(webApiKey.createdAt))}</TableCell>
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
                      onClick={async () => {
                        const toastId = toast.loading("Deleting API Key...");
                        const response = await deleteWebApiKey(webApiKey.id);

                        if (response.ok) {
                          toast.success("API Key deleted", { id: toastId });
                          router.refresh();
                        } else {
                          toast.error("Failed to delete API Key", {
                            id: toastId,
                          });
                        }
                      }}
                    >
                      <Trash className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                    {/*  <DropdownMenuItem
                      onClick={() => handleOpenLink(jpayLink.uid)}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Open Link
                    </DropdownMenuItem> */}
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
