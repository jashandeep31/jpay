"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@repo/ui/components/ui/dialog";
import { Button } from "@repo/ui/components/ui/button";
import { Copy } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { CHECKOUT_PORTAL_URL } from "@/lib/conts";
import { toast } from "sonner";

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  paymentId: string;
}

export function QRCodeModal({ isOpen, onClose, paymentId }: QRCodeModalProps) {
  const handleCopyLink = () => {
    const linkUrl = `${CHECKOUT_PORTAL_URL}/qr/${paymentId}`;
    navigator.clipboard.writeText(linkUrl);
    toast.success("Link copied", {
      description: "Payment link copied to clipboard",
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* forceMount keeps the canvas in the DOM even when closed */}
      <DialogContent forceMount className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>QR Code</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4">
          <QRCodeSVG value={`${CHECKOUT_PORTAL_URL}/qr/${paymentId}`} />
          <Button variant="outline" onClick={handleCopyLink}>
            <Copy className="mr-2 h-4 w-4" />
            Copy Link
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
