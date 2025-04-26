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
import { AlertCircle } from "lucide-react";
import GoogleButton from "@/components/auth/google-button";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSuccess = () => {
    router.push("/dashboard");
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleError = (error: Error) => {
    setError("Failed to sign in with Google. Please try again.");
  };

  return (
    <Card className="w-full shadow-lg border-gray-200">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
        <CardDescription>Sign in to your JPay account</CardDescription>
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
            text="Sign in with Google"
            onSuccess={handleSuccess}
            onError={handleError}
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4 border-t border-gray-100 pt-5">
        <div className="text-sm text-center text-gray-500">
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/signup"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Sign up
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
