"use client";

import { useState } from "react";
import { MerchantDetailsCard, ProfileStatus } from "./merchant-details-card";
import { LogoUploadCard } from "./logo-upload-card";
import { PhoneVerificationDialog } from "./phone-verification-dialog";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { Input } from "@repo/ui/components/ui/input";
import { Button } from "@repo/ui/components/ui/button";
import { updatePaymentWalletAddress } from "@/app/dashboard/settings/_actions";
import { Merchant as MerchantType } from "@prisma/client";
export function MerchantProfileManager({
  merchant: initialMerchant,
}: {
  merchant: MerchantType;
}) {
  const [merchant, setMerchant] = useState<MerchantType>(initialMerchant);
  const [isPhoneVerificationOpen, setIsPhoneVerificationOpen] = useState(false);
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [profileStatus, setProfileStatus] = useState<ProfileStatus>({
    lastUpdated: new Date(),
    alerts: [],
    completionPercentage: 85,
  });

  const handlePhoneChange = (phoneNumber: string) => {
    setNewPhoneNumber(phoneNumber);
    setIsPhoneVerificationOpen(true);
  };

  const handlePhoneVerified = () => {
    setMerchant((prev) => ({
      ...prev,
      phoneNumber: newPhoneNumber,
      updatedAt: new Date(),
    }));

    setProfileStatus((prev) => ({
      ...prev,
      lastUpdated: new Date(),
      alerts: [
        ...prev.alerts,
        {
          type: "success",
          message: "Phone number updated successfully",
          timestamp: new Date(),
        },
      ],
    }));

    setIsPhoneVerificationOpen(false);

    toast.success("Phone number updated", {
      description:
        "Your phone number has been verified and updated successfully.",
    });
  };

  const handleProfileUpdate = (data: { name: string; description: string }) => {
    setMerchant((prev) => ({
      ...prev,
      ...data,
      updatedAt: new Date(),
    }));

    setProfileStatus((prev) => ({
      ...prev,
      lastUpdated: new Date(),
      alerts: [
        ...prev.alerts,
        {
          type: "success",
          message: "Profile details updated",
          timestamp: new Date(),
        },
      ],
      completionPercentage: calculateCompletionPercentage({
        ...prev,
        name: data.name,
        description: data.description,
        phoneNumber: merchant.phoneNumber,
        logoUrl: merchant.logoUrl,
      }),
    }));

    toast.success("Profile updated", {
      description: "Your profile details have been updated successfully.",
    });
  };

  const handleLogoUpdate = (logoUrl: string) => {
    setMerchant((prev) => ({
      ...prev,
      logoUrl,
      updatedAt: new Date(),
    }));

    setProfileStatus((prev) => ({
      ...prev,
      lastUpdated: new Date(),
      alerts: [
        ...prev.alerts,
        {
          type: "success",
          message: "Logo updated",
          timestamp: new Date(),
        },
      ],
      completionPercentage: calculateCompletionPercentage({
        ...prev,
        name: merchant.name,
        description: merchant.description,
        phoneNumber: merchant.phoneNumber,
        logoUrl,
      }),
    }));

    toast.success("Logo updated", {
      description: "Your merchant logo has been updated successfully.",
    });
  };

  // Helper function to calculate profile completion percentage
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const calculateCompletionPercentage = (data: any): number => {
    const fields = [
      { name: "name", weight: 25 },
      { name: "description", weight: 25 },
      { name: "phoneNumber", weight: 25 },
      { name: "logoUrl", weight: 25 },
    ];

    let completionScore = 0;

    fields.forEach((field) => {
      if (
        data[field.name] &&
        data[field.name].length > 0 &&
        data[field.name] !== "/abstract-business-logo.png"
      ) {
        completionScore += field.weight;
      }
    });

    return completionScore;
  };

  return (
    <div className="space-y-8">
      {/* Merchant Details Card */}
      <PaymentWalletAddressCard
        address={merchant.paymentReceivingWalletAddress || ""}
      />
      <MerchantDetailsCard
        merchant={merchant}
        onProfileUpdate={handleProfileUpdate}
        onPhoneChange={handlePhoneChange}
      />

      {/* Logo Upload Card */}
      <LogoUploadCard
        currentLogo={merchant.logoUrl || ""}
        onLogoUpdate={handleLogoUpdate}
      />

      {/* Phone Verification Dialog */}
      {isPhoneVerificationOpen && (
        <PhoneVerificationDialog
          phoneNumber={newPhoneNumber}
          onVerified={handlePhoneVerified}
          onCancel={() => setIsPhoneVerificationOpen(false)}
        />
      )}
    </div>
  );
}

const PaymentWalletAddressCard = ({ address }: { address: string }) => {
  const [walletAddress, setWalletAddress] = useState(address);
  const [isSaving, setIsSaving] = useState(false);
  const handleSave = async () => {
    const toastId = toast.loading("Saving...");
    try {
      const res = await updatePaymentWalletAddress(walletAddress);
      if (res.ok) {
        toast.success("Payment wallet address updated", {
          description: res.data.message,
          id: toastId,
        });
      } else {
        toast.error(res.error);
      }
    } catch {
      toast.dismiss(toastId);
      toast.error("Failed to update payment wallet address");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Wallet Address</CardTitle>
        <CardDescription>
          On this address you will receive all the payouts .
        </CardDescription>
      </CardHeader>
      <CardContent className="flex gap-2">
        <Input
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
        />
        <Button disabled={isSaving} onClick={handleSave}>
          {isSaving ? "Saving..." : "Save"}
        </Button>
      </CardContent>
    </Card>
  );
};
