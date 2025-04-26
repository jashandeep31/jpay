"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { Alert, AlertDescription } from "@repo/ui/components/ui/alert";
import { AlertCircle, Check } from "lucide-react";
import GoogleButton from "@/components/auth/google-button";

export default function SignupPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSuccess = () => {
    router.push("/dashboard");
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleError = (error: Error) => {
    setError("Failed to sign up with Google. Please try again.");
  };

  return (
    <Card className="w-full shadow-lg border-gray-200">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
        <CardDescription>Sign up for JPay to get started</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="space-y-4">
          <GoogleButton
            text="Sign up with Google"
            isSignUp={true}
            onSuccess={handleSuccess}
            onError={handleError}
          />
        </div>

        <div className="space-y-4 pt-4">
          <div className="text-sm text-gray-700">
            <p className="mb-2 font-medium">Why sign up with Google?</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Quick and secure authentication</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>No need to remember another password</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>Enhanced security with Google&apos;s protection</span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4 border-t border-gray-100 pt-5">
        <div className="text-sm text-center text-gray-500">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Sign in
          </Link>
        </div>
        <p className="text-xs text-center text-gray-500">
          By signing up, you agree to our{" "}
          <Link href="/terms" className="text-blue-600 hover:text-blue-800">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-blue-600 hover:text-blue-800">
            Privacy Policy
          </Link>
          .
        </p>
      </CardFooter>
    </Card>
  );
}
