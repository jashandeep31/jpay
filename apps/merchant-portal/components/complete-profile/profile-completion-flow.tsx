"use client";

import { useState } from "react";
import { Card, CardContent } from "@repo/ui/components/ui/card";
import { StepIndicator } from "./step-indicator";
import { PhoneVerificationStep } from "./phone-verification-step";
import { BusinessDetailsStep } from "./business-details-step";
import { LogoUploadStep } from "./logo-upload-step";
import { ProfileCompletedView } from "./profile-completed-view";
import { Button } from "@repo/ui/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { updateCompleteProfile } from "@/app/complete-profile/_actions";
import { toast } from "sonner";
export interface BusinessProfile {
  phoneNumber: string;
  businessName: string;
  description: string;
  logoUrl: string;
  address: string;
}

// Define the steps in the profile completion process
const STEPS = [
  { id: "phone", title: "Verify Phone Number" },
  { id: "details", title: "Fill Business Details" },
  { id: "logo", title: "Add Logo" },
];

export function ProfileCompletionFlow() {
  // Track the current step
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // Track if the current step is completed
  const [stepCompleted, setStepCompleted] = useState(false);

  // Track if the entire profile is completed
  const [profileCompleted, setProfileCompleted] = useState(false);

  // Store the profile data
  const [profile, setProfile] = useState<BusinessProfile>({
    phoneNumber: "",
    businessName: "",
    description: "",
    logoUrl:
      "https://job2tech-public.s3.us-east-1.amazonaws.com/merchant/profile/logo/4b4a5296-d9c9-4ecf-8ab1-40ebc901bc48-usdt.png",
    address: "",
  });

  // Handle phone verification completion
  const handlePhoneVerified = (phoneNumber: string) => {
    setProfile((prev) => ({ ...prev, phoneNumber }));
    setStepCompleted(true);
  };

  // Handle business details completion
  const handleBusinessDetailsCompleted = (details: {
    businessName: string;
    description?: string;
    address: string;
  }) => {
    setProfile((prev) => ({ ...prev, ...details }));
    setStepCompleted(true);
  };

  // Handle logo upload completion
  const handleLogoUploaded = (logoUrl: string) => {
    setProfile((prev) => ({ ...prev, logoUrl }));
    setStepCompleted(true);
  };

  // Move to the next step
  const handleNextStep = () => {
    if (currentStepIndex < STEPS.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
      setStepCompleted(false);
    } else {
      // All steps completed
      setProfileCompleted(true);
    }
  };

  // Move to the previous step
  const handlePreviousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
      setStepCompleted(true); // Assume previous steps are completed
    }
  };

  const handleCompleteProfile = async () => {
    const toastId = toast.loading("Completing profile...");
    try {
      const res = await updateCompleteProfile({
        phoneNumber: parseInt(profile.phoneNumber),
        countryCode: profile.phoneNumber.split(" ")[0],
        businessName: profile.businessName,
        description: profile.description,
        address: profile.address,
      });
      if (res.ok) {
        setProfileCompleted(true);
        toast.success("Profile completed successfully", { id: toastId });
      } else {
        toast.error("Failed to complete profile", { id: toastId });
      }
    } catch {
      toast.error("Failed to complete profile", { id: toastId });
    }
  };

  // If profile is completed, show the completed view
  if (profileCompleted) {
    return <ProfileCompletedView profile={profile} />;
  }

  return (
    <div className="flex flex-col flex-1">
      {/* Step Indicator */}
      <div className="mb-2 sm:mb-8">
        <StepIndicator steps={STEPS} currentStepIndex={currentStepIndex} />
      </div>

      {/* Main Content Card */}
      <Card className="mt-8 flex-1">
        <CardContent className="pt-6">
          {/* Step Content */}
          <div className="mb-8">
            {currentStepIndex === 0 && (
              <>
                <PhoneVerificationStep onVerified={handlePhoneVerified} />
                <Button
                  className="w-full mt-4"
                  variant="destructive"
                  onClick={() => {
                    handlePhoneVerified("+919876543210");
                    setCurrentStepIndex(1);
                  }}
                >
                  Bypass Proccess
                </Button>
              </>
            )}
            {currentStepIndex === 1 && (
              <>
                <BusinessDetailsStep
                  onCompleted={handleBusinessDetailsCompleted}
                />
                <Button
                  className="w-full mt-4"
                  variant="destructive"
                  onClick={() => {
                    handleBusinessDetailsCompleted({
                      businessName: "Test Business",
                      address: "123 Main St, Anytown, USA",
                      description: "Test Description",
                    });
                    setCurrentStepIndex(3);
                    handleCompleteProfile();
                  }}
                >
                  Bypass Proccess
                </Button>
              </>
            )}
            {currentStepIndex === 2 && (
              <>
                <LogoUploadStep onUploaded={handleLogoUploaded} />
                <Button
                  className="w-full mt-4"
                  variant="destructive"
                  onClick={() => {
                    handleLogoUploaded("testId");
                    setCurrentStepIndex(3);
                    handleCompleteProfile();
                  }}
                >
                  Bypass Proccess
                </Button>
              </>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePreviousStep}
              disabled={currentStepIndex === 0}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button onClick={handleNextStep} disabled={!stepCompleted}>
              {currentStepIndex < STEPS.length - 1
                ? "Continue"
                : "Complete Profile"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
