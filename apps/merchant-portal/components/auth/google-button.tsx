"use client";

import { useState } from "react";
import { Button } from "@repo/ui/components/ui/button";

interface GoogleButtonProps {
  text: string;
  isSignUp?: boolean;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export default function GoogleButton({
  text,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isSignUp = false,
  onSuccess,
  onError,
}: GoogleButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      // This would be replaced with actual Google Sign-In implementation
      // For example, using Firebase, NextAuth.js, or another auth provider
      console.log("Google Sign-In initiated");

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error("Google Sign-In failed:", error);
      if (onError && error instanceof Error) {
        onError(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant="outline"
      size="lg"
      className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-medium border border-gray-300"
      onClick={handleGoogleSignIn}
      disabled={isLoading}
    >
      {!isLoading ? (
        <>
          <div className="w-5 h-5 relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
              alt="Google logo"
              width={20}
              height={20}
              className="absolute inset-0"
            />
          </div>
          <span>{text}</span>
        </>
      ) : (
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600"></div>
          <span>Please wait...</span>
        </div>
      )}
    </Button>
  );
}
