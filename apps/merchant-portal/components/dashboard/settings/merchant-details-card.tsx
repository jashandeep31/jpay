"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@repo/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/components/ui/form";
import { Input } from "@repo/ui/components/ui/input";
import { Textarea } from "@repo/ui/components/ui/textarea";
import { Separator } from "@repo/ui/components/ui/separator";
import { CheckIcon, Loader2, Phone } from "lucide-react";
import { CountryCodeSelect } from "./country-code-select";
import { Merchant } from "@repo/db";

export interface ProfileStatus {
  lastUpdated: Date;
  alerts: Array<{
    type: "success" | "warning" | "error";
    message: string;
    timestamp: Date;
  }>;
  completionPercentage: number;
}

// Schema for basic profile info (name and description)
const profileInfoSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  description: z.string().max(500, {
    message: "Description must not exceed 500 characters.",
  }),
});

// Schema for phone number
const phoneSchema = z.object({
  countryCode: z.string(),
  phoneNumber: z.string().regex(/^\d{1,14}$/, {
    message: "Please enter a valid phone number without country code.",
  }),
  formattedPhoneNumber: z.string().optional(),
});

type ProfileInfoValues = z.infer<typeof profileInfoSchema>;
type PhoneValues = z.infer<typeof phoneSchema>;

interface MerchantDetailsCardProps {
  merchant: Merchant;
  onProfileUpdate: (data: { name: string; description: string }) => void;
  onPhoneChange: (phoneNumber: string) => void;
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

export function MerchantDetailsCard({
  merchant,
  onProfileUpdate,
  onPhoneChange,
}: MerchantDetailsCardProps) {
  const [isSubmittingInfo, setIsSubmittingInfo] = useState(false);
  const [isSubmittingPhone, setIsSubmittingPhone] = useState(false);

  // Extract country code and phone number from the merchant's phone number
  const extractPhoneDetails = (fullPhoneNumber: string) => {
    // Default to US (+1) if no country code is detected
    let countryCode = "+1";
    let phoneNumber = fullPhoneNumber;

    // Check if the phone number starts with a plus sign and extract the country code
    if (fullPhoneNumber.startsWith("+")) {
      const match = fullPhoneNumber.match(/^\+(\d+)\s*(.*)/);
      if (match) {
        countryCode = `+${match[1]}`;
        phoneNumber = match[2].replace(/\s/g, "");
      }
    }

    return { countryCode, phoneNumber };
  };

  const { countryCode: initialCountryCode, phoneNumber: initialPhoneNumber } =
    extractPhoneDetails(merchant.phoneNumber || "");
  const initialFormattedPhoneNumber = formatPhoneNumber(
    initialPhoneNumber,
    initialCountryCode
  );

  // Form for name and description
  const infoForm = useForm<ProfileInfoValues>({
    resolver: zodResolver(profileInfoSchema),
    defaultValues: {
      name: merchant.name,
      description: merchant.description || "",
    },
  });

  // Form for phone number
  const phoneForm = useForm<PhoneValues>({
    resolver: zodResolver(phoneSchema),
    defaultValues: {
      countryCode: initialCountryCode,
      phoneNumber: initialPhoneNumber,
      formattedPhoneNumber: initialFormattedPhoneNumber,
    },
  });

  // Update formatted phone number when country code or phone number changes
  useEffect(() => {
    const countryCode = phoneForm.watch("countryCode");
    const phoneNumber = phoneForm.watch("phoneNumber");

    const formatted = formatPhoneNumber(phoneNumber, countryCode);
    phoneForm.setValue("formattedPhoneNumber", formatted, {
      shouldValidate: false,
    });
  }, [phoneForm.watch("countryCode"), phoneForm.watch("phoneNumber")]);

  // Handle submission of basic info (name and description)
  const onSubmitInfo = async (data: ProfileInfoValues) => {
    setIsSubmittingInfo(true);

    try {
      onProfileUpdate({
        name: data.name,
        description: data.description,
      });
    } catch (error) {
      console.error("Error updating profile info:", error);
    } finally {
      setIsSubmittingInfo(false);
    }
  };

  // Handle submission of phone number (triggers OTP verification)
  const onSubmitPhone = async (data: PhoneValues) => {
    setIsSubmittingPhone(true);

    try {
      // Combine country code and phone number
      const fullPhoneNumber = `${data.countryCode} ${data.phoneNumber}`;

      // Only trigger OTP verification if phone number has changed
      if (fullPhoneNumber !== merchant.phoneNumber) {
        onPhoneChange(fullPhoneNumber);
      }
    } catch (error) {
      console.error("Error updating phone number:", error);
    } finally {
      setIsSubmittingPhone(false);
    }
  };

  // Handle phone number input change
  const handlePhoneInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const digits = extractDigits(inputValue);

    // Update the raw phone number
    phoneForm.setValue("phoneNumber", digits, {
      shouldDirty: true,
      shouldValidate: true,
    });

    // Format will be updated by the useEffect
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Business Details</CardTitle>
        <CardDescription>
          Update your merchant profile information. Phone number changes require
          verification.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Basic Info Form (Name and Description) */}
        <Form {...infoForm}>
          <form
            onSubmit={infoForm.handleSubmit(onSubmitInfo)}
            className="space-y-6"
          >
            <FormField
              control={infoForm.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your business name" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public business name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={infoForm.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your business"
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Provide a brief description of your business (max 500
                    characters).
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button type="submit" disabled={isSubmittingInfo}>
                {isSubmittingInfo ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    {infoForm.formState.isDirty ? (
                      "Save Details"
                    ) : (
                      <>
                        <CheckIcon className="mr-2 h-4 w-4" />
                        Saved
                      </>
                    )}
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>

        <Separator className="my-6" />

        {/* Phone Number Form (with OTP verification) */}
        <div>
          <h3 className="text-lg font-medium mb-4 flex items-center">
            <Phone className="mr-2 h-5 w-5" />
            Contact Information
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Phone number changes require verification via a one-time password
            (OTP).
          </p>

          <Form {...phoneForm}>
            <form
              onSubmit={phoneForm.handleSubmit(onSubmitPhone)}
              className="space-y-6"
            >
              <div className="space-y-2">
                <div className="text-sm font-medium">Phone Number</div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CountryCodeSelect
                      value={phoneForm.watch("countryCode")}
                      onValueChange={(value) =>
                        phoneForm.setValue("countryCode", value, {
                          shouldDirty: true,
                        })
                      }
                    />
                  </div>
                  <FormField
                    control={phoneForm.control}
                    name="formattedPhoneNumber"
                    render={() => (
                      <FormItem className="flex-1 ml-2">
                        <FormControl>
                          <Input
                            placeholder="Phone number without country code"
                            value={phoneForm.watch("formattedPhoneNumber")}
                            onChange={handlePhoneInputChange}
                          />
                        </FormControl>
                        <FormMessage>
                          {phoneForm.formState.errors.phoneNumber?.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="text-sm text-muted-foreground">
                  This number will be used for important account notifications
                  and verification.
                </div>
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  disabled={isSubmittingPhone || !phoneForm.formState.isDirty}
                  variant={phoneForm.formState.isDirty ? "default" : "outline"}
                >
                  {isSubmittingPhone ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Verifying...
                    </>
                  ) : phoneForm.formState.isDirty ? (
                    "Update & Verify Phone"
                  ) : (
                    <>
                      <CheckIcon className="mr-2 h-4 w-4" />
                      Verified
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
}
