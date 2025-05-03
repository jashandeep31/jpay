"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@repo/ui/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@repo/ui/components/ui/dialog";
import { InputOTP } from "@repo/ui/components/ui/input-otp";
import { Loader2 } from "lucide-react";

interface PhoneVerificationDialogProps {
  phoneNumber: string;
  onVerified: () => void;
  onCancel: () => void;
}

export function PhoneVerificationDialog({
  phoneNumber,
  onVerified,
  onCancel,
}: PhoneVerificationDialogProps) {
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Short timeout to ensure the dialog is fully rendered
    const timer = setTimeout(() => {
      // Focus the container which will focus the hidden input
      containerRef.current?.click();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Auto-submit when all 6 digits are entered
  useEffect(() => {
    if (otp.length === 6) {
      handleVerify();
    }
  }, [otp]);

  // Mock verification - in a real app, this would validate against a backend
  const handleVerify = async () => {
    if (otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP code.");
      return;
    }

    setError(null);
    setIsVerifying(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // For demo purposes, any 6-digit code is valid
    // In a real app, this would validate the OTP against a backend
    if (otp.length === 6) {
      onVerified();
    } else {
      setError("The OTP you entered is incorrect. Please try again.");
    }

    setIsVerifying(false);
  };

  const handleResendOTP = async () => {
    setIsResending(true);
    setOtp(""); // Clear the current OTP

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsResending(false);
    // Focus the input again after resending
    containerRef.current?.click();
  };

  return (
    <Dialog open={true} onOpenChange={(open) => !open && onCancel()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Verify Phone Number</DialogTitle>
          <DialogDescription>
            We've sent a verification code to {phoneNumber}. Please enter the
            6-digit code below or paste it if copied.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center py-6">
          <p className="text-sm text-muted-foreground mb-4">
            Enter the 6-digit verification code sent to your phone. You can type
            each digit or paste the entire code.
          </p>

          <InputOTP
            value={otp}
            onChange={setOtp}
            maxLength={6}
            ref={containerRef}
            disabled={isVerifying}
            className="mb-2"
            render={({ slots }) => (
              <div className="flex items-center gap-2">
                {slots.map((slot, index) => (
                  <div
                    key={index}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-input bg-transparent text-sm shadow-sm transition-all"
                  >
                    {slot.char}
                  </div>
                ))}
              </div>
            )}
          />

          {error && <p className="text-sm text-red-500 mt-2">{error}</p>}

          <Button
            variant="link"
            size="sm"
            onClick={handleResendOTP}
            disabled={isResending}
            className="mt-4"
          >
            {isResending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Resending...
              </>
            ) : (
              "Didn't receive a code? Resend"
            )}
          </Button>
        </div>

        <DialogFooter className="flex flex-row justify-between sm:justify-between">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button
            onClick={handleVerify}
            disabled={otp.length !== 6 || isVerifying}
          >
            {isVerifying ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Verifying...
              </>
            ) : (
              "Verify"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
