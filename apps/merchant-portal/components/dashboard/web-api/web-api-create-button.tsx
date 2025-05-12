"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui/components/ui/dialog";
import { Button } from "@repo/ui/components/ui/button";
import { createWebApiKey } from "@/app/dashboard/web-api/_actions";
import { toast } from "sonner";
import { Separator } from "@repo/ui/components/ui/separator";
import { Copy } from "lucide-react";
import { useRouter } from "next/navigation";
const WebApiCreateButton = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState<null | {
    privateKey: string;
    publicKey: string;
  }>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [tag, setTag] = useState("");
  const [showTagDialog, setShowTagDialog] = useState(false);

  const createApiKey = async () => {
    if (!tag) {
      toast.error("Please enter a tag name");
      return;
    }
    const toastId = toast.loading("Creating API Key...");
    setLoading(true);

    try {
      const response = await createWebApiKey(tag);
      if (response.ok) {
        setApiKey({
          privateKey: response.data.privateKey,
          publicKey: response.data.publicKey,
        });
        toast.success("API Key created successfully", { id: toastId });
        setIsOpen(true);
        setShowTagDialog(false);
        router.refresh();
      } else {
        console.log(response);
        toast.error("Failed to create API Key", { id: toastId });
      }
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Unknown error", {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCopyLink = (key: "privateKey" | "publicKey") => {
    if (apiKey) {
      navigator.clipboard.writeText(apiKey[key]);
      toast.success("API Key copied", {
        description: "API Key copied to clipboard",
      });
    } else {
      toast.error("No API Key found", {
        description: "Please create an API Key first",
      });
    }
  };

  return (
    <div>
      <Button onClick={() => setShowTagDialog(true)} disabled={loading}>
        Create API Key
      </Button>

      {/* Tag Input Dialog */}
      <Dialog open={showTagDialog} onOpenChange={setShowTagDialog}>
        <DialogContent className="w-full">
          <DialogHeader>
            <DialogTitle>Enter API Key Tag</DialogTitle>
            <DialogDescription>
              Please enter a tag name for your API key. This will help you
              identify it later.
            </DialogDescription>
            <div className="py-4">
              <input
                type="text"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                placeholder="Enter tag name"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setShowTagDialog(false)}>
                Cancel
              </Button>
              <Button onClick={createApiKey} disabled={loading}>
                Create
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* API Key Display Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger></DialogTrigger>
        <DialogContent className="w-full">
          <DialogHeader>
            <DialogTitle>API Key Details</DialogTitle>
            <DialogDescription>
              This is your API private key. Make sure to copy it now - you
              won&apos;t be able to see it again!
            </DialogDescription>
            <Separator className="my-3" />
            <p className="text-sm font-medium">Private key</p>
            <div className="border rounded-md p-3 flex items-center gap-2 justify-between bg-muted">
              <p className="text-sm font-mono break-all">
                {apiKey?.privateKey}
              </p>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleCopyLink("privateKey")}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm font-medium">Public key</p>
            <div className="border rounded-md p-3 flex items-center gap-2 justify-between bg-muted">
              <p className="text-sm font-mono break-all">{apiKey?.publicKey}</p>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleCopyLink("publicKey")}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <DialogDescription className="mt-3 text-sm text-yellow-600">
              Important: Store this key securely. For security reasons, we
              cannot show it again after you close this dialog.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WebApiCreateButton;
