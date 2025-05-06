import type React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Authentication - JPay",
  description: "Login or signup to JPay",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-accent flex flex-col">
      <div className="flex items-center p-4 md:p-6">
        <Link
          href="/"
          className="flex items-center text-sm bg-foreground/10 hover:bg-foreground/20 px-2 py-1 rounded-md"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to home
        </Link>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6">
        <Link href="/" className="mb-8 flex items-center group">
          <span className="text-3xl font-bold text-foreground">JPay</span>
          <span className="ml-1 text-blue-500 font-bold relative">
            .
            <span className="absolute -inset-1 bg-blue-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
          </span>
        </Link>
        <div className="w-full max-w-md">{children}</div>
      </div>
      <footer className="py-6 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} JPay. All rights reserved.</p>
      </footer>
    </div>
  );
}
