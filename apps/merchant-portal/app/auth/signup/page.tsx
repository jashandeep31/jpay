import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";

import GoogleButton from "@/components/auth/google-button";
import { Check } from "lucide-react";
import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

export default async function SignupPage() {
  const session = await auth();
  if (session) {
    redirect("/dashboard");
  }

  return (
    <Card className="w-full shadow-lg border-border bg-card">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold text-card-foreground">
          Create an account
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Sign up for JPay to get started
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <button type="submit" className="block w-full">
              <GoogleButton text="Sign up with Google" isSignUp={true} />
            </button>
          </form>
        </div>

        <div className="space-y-4 pt-4">
          <div className="text-sm text-muted-foreground">
            <p className="mb-2 font-medium text-foreground">
              Why sign up with Google?
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Quick and secure authentication</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>No need to remember another password</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>Enhanced security with Google&apos;s protection</span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4 border-t border-border pt-5">
        <div className="text-sm text-center text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-primary hover:text-primary/80 font-medium"
          >
            Sign in
          </Link>
        </div>
        <p className="text-xs text-center text-muted-foreground">
          By signing up, you agree to our{" "}
          <Link href="/terms" className="text-primary hover:text-primary/80">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-primary hover:text-primary/80">
            Privacy Policy
          </Link>
          .
        </p>
      </CardFooter>
    </Card>
  );
}
