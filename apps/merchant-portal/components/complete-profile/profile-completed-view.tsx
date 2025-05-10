"use client";

import { Button, buttonVariants } from "@repo/ui/components/ui/button";
import { Card, CardContent } from "@repo/ui/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
import type { BusinessProfile } from "./profile-completion-flow";

interface ProfileCompletedViewProps {
  profile: BusinessProfile;
}

export function ProfileCompletedView({ profile }: ProfileCompletedViewProps) {
  return (
    <div className="flex flex-col items-center text-center max-w-md mx-auto">
      <div className="mb-8">
        <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Profile Completed!</h2>
        <p className="text-muted-foreground">
          Thank you for completing your profile. You&apos;re all set to start
          using our platform.
        </p>
      </div>

      <Card className="w-full mb-8">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center">
            {profile.logoUrl ? (
              <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={profile.logoUrl || "/placeholder.svg"}
                  alt={`${profile.businessName} logo`}
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-24 h-24 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xl font-bold text-primary">
                  {profile.businessName.charAt(0)}
                </span>
              </div>
            )}

            <h3 className="text-xl font-bold">{profile.businessName}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {profile.description}
            </p>

            <div className="w-full space-y-3 text-left">
              <div>
                <div className="text-sm font-medium">Phone Number</div>
                <div>{profile.phoneNumber}</div>
              </div>

              <div>
                <div className="text-sm font-medium">Address</div>
                <div>{profile.address}</div>
              </div>

              {profile.description && (
                <div>
                  <div className="text-sm font-medium">Description</div>
                  <div className="text-sm">{profile.description}</div>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <Button
        onClick={() => window.location.replace("dashboard")}
        className={buttonVariants()}
      >
        Go to Dashboard
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
