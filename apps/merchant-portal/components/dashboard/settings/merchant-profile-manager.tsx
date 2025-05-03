"use client";

import { useState } from "react";
import {
  Merchant,
  MerchantDetailsCard,
  ProfileStatus,
} from "./merchant-details-card";
import { LogoUploadCard } from "./logo-upload-card";
import { PhoneVerificationDialog } from "./phone-verification-dialog";
import { toast } from "sonner";
// Mock merchant data
const mockMerchant: Merchant = {
  id: "1",
  name: "Acme Corporation",
  description:
    "We provide high-quality products and services for all your needs.",
  phoneNumber: "+1 (555) 123-4567",
  logoUrl: "/abstract-business-logo.png",
  createdAt: new Date(),
  updatedAt: new Date(),
  status: "active",
  verificationStatus: "verified",
  completionPercentage: 85,
};

export function MerchantProfileManager() {
  const [merchant, setMerchant] = useState<Merchant>(mockMerchant);
  const [isPhoneVerificationOpen, setIsPhoneVerificationOpen] = useState(false);
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
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
      <MerchantDetailsCard
        merchant={merchant}
        onProfileUpdate={handleProfileUpdate}
        onPhoneChange={handlePhoneChange}
      />

      {/* Logo Upload Card */}
      <LogoUploadCard
        currentLogo={merchant.logoUrl}
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
