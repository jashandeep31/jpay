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
import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await auth();
  if (session) {
    redirect("/dashboard");
  }

  return (
    <Card className="w-full shadow-lg border-background-200">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
        <CardDescription>Sign in to your JPay account</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <button type="submit" className="block w-full">
            <GoogleButton text="Sign in with Google" />
          </button>
        </form>
        <div className="space-y-4"></div>
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
