"use client";
import { Button } from "@repo/ui/components/ui/button";
import React, { useState } from "react";
import { createLiveWallet } from "./_actions";
import { toast } from "sonner";

const CreateLiveWalletButton = () => {
  const [loading, setLoading] = useState(false);
  const handleClickEvent = async () => {
    setLoading(true);
    const toastId = toast.loading("Creating live wallet...");
    try {
      const res = await createLiveWallet();
      if (res.ok) {
        toast.success("Live wallet created successfully", {
          id: toastId,
        });
        window.location.reload();
      } else {
        toast.error(res.error, {
          id: toastId,
        });
      }
    } catch {
      toast.error("Failed to create live wallet", {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button onClick={handleClickEvent} disabled={loading}>
      Create Live Wallet
    </Button>
  );
};

export default CreateLiveWalletButton;
