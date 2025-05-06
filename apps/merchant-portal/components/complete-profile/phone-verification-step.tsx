"use client";

import type React from "react";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import { CountryCodeSelect } from "../dashboard/settings/country-code-select";
import { PhoneVerificationDialog } from "../dashboard/settings/phone-verification-dialog";
import { Loader2, Phone } from "lucide-react";

// Schema for phone number
const phoneSchema = z.object({
  countryCode: z.string(),
  phoneNumber: z.string().regex(/^\d{1,14}$/, {
    message: "Please enter a valid phone number without country code.",
  }),
});

type PhoneValues = z.infer<typeof phoneSchema>;

interface PhoneVerificationStepProps {
  onVerified: (phoneNumber: string) => void;
}

// Format phone number based on country code
function formatPhoneNumber(phoneNumber: string, countryCode: string): string {
  // Remove all non-digit characters
  const digits = phoneNumber.replace(/\D/g, "");

  if (!digits) return "";

  // Format based on country code
  switch (countryCode) {
    case "+1": // US/Canada
      if (digits.length <= 3) {
        return digits;
      } else if (digits.length <= 6) {
        return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
      } else {
        return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
      }

    case "+44": // UK
      if (digits.length <= 4) {
        return digits;
      } else if (digits.length <= 7) {
        return `${digits.slice(0, 4)} ${digits.slice(4)}`;
      } else {
        return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
      }

    case "+91": // India
      if (digits.length <= 5) {
        return digits;
      } else {
        return `${digits.slice(0, 5)} ${digits.slice(5)}`;
      }

    default: // Generic formatting
      if (digits.length <= 3) {
        return digits;
      } else if (digits.length <= 6) {
        return `${digits.slice(0, 3)} ${digits.slice(3)}`;
      } else if (digits.length <= 9) {
        return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
      } else {
        return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 9)} ${digits.slice(9)}`;
      }
  }
}

// Extract raw digits from formatted phone number
function extractDigits(formattedNumber: string): string {
  return formattedNumber.replace(/\D/g, "");
}

export function PhoneVerificationStep({
  onVerified,
}: PhoneVerificationStepProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerificationOpen, setIsVerificationOpen] = useState(false);
  const [fullPhoneNumber, setFullPhoneNumber] = useState("");
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState("");

  // Form for phone number
  const form = useForm<PhoneValues>({
    resolver: zodResolver(phoneSchema),
    defaultValues: {
      countryCode: "+1",
      phoneNumber: "",
    },
  });

  // Handle phone number input change
  const handlePhoneInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const digits = extractDigits(inputValue);
    const countryCode = form.getValues("countryCode");

    // Update the raw phone number
    form.setValue("phoneNumber", digits, {
      shouldDirty: true,
      shouldValidate: true,
    });

    // Update the formatted phone number
    const formatted = formatPhoneNumber(digits, countryCode);
    setFormattedPhoneNumber(formatted);
  };

  // Handle form submission
  const onSubmit = async (data: PhoneValues) => {
    setIsSubmitting(true);

    try {
      // Combine country code and phone number
      const fullNumber = `${data.countryCode} ${data.phoneNumber}`;
      setFullPhoneNumber(fullNumber);

      // Open verification dialog
      setIsVerificationOpen(true);
    } catch (error) {
      console.error("Error submitting phone number:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle verification completion
  const handleVerificationCompleted = () => {
    setIsVerificationOpen(false);
    onVerified(fullPhoneNumber);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Verify Your Phone Number</h2>
        <p className="text-muted-foreground">
          We need to verify your phone number to secure your account and send
          important notifications.
        </p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center">
            <Phone className="mr-2 h-5 w-5 text-primary" />
            <label className="text-base font-medium">Phone Number</label>
          </div>

          <div className="flex">
            <div className="flex-shrink-0">
              <CountryCodeSelect
                value={form.watch("countryCode")}
                onValueChange={(value) => {
                  form.setValue("countryCode", value, { shouldDirty: true });
                  // Update formatting when country code changes
                  const phoneNumber = form.getValues("phoneNumber");
                  const formatted = formatPhoneNumber(phoneNumber, value);
                  setFormattedPhoneNumber(formatted);
                }}
              />
            </div>
            <div className="flex-1 ml-2">
              <Input
                placeholder="Phone number without country code"
                value={formattedPhoneNumber}
                onChange={handlePhoneInputChange}
                className={
                  form.formState.errors.phoneNumber ? "border-red-500" : ""
                }
              />
              {form.formState.errors.phoneNumber && (
                <p className="text-sm font-medium text-red-500 mt-1">
                  {form.formState.errors.phoneNumber.message}
                </p>
              )}
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            We&apos;ll send a verification code to this number. Standard message
            rates may apply.
          </p>
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting || !form.formState.isValid}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending Code...
            </>
          ) : (
            "Send Verification Code"
          )}
        </Button>
      </form>

      {isVerificationOpen && (
        <PhoneVerificationDialog
          phoneNumber={fullPhoneNumber}
          onVerified={handleVerificationCompleted}
          onCancel={() => setIsVerificationOpen(false)}
        />
      )}
    </div>
  );
}
