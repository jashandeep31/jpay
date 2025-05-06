import Link from "next/link";
import { buttonVariants } from "@repo/ui/components/ui/button";
import { cn } from "@repo/ui/lib/utils";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 backdrop-blur-xl bg-black/50">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#14F195] to-[#00C2FF] flex items-center justify-center">
              <span className="font-bold text-black">JP</span>
            </div>
            <span className="font-medium text-white">JPay</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link
            href="#benefits"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Benefits
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="#developers"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Developers
          </Link>
          <Link
            href="#contact"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </nav>
        <Link
          href={"/auth/login"}
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "bg-gradient-to-r from-[#14F195] to-[#00C2FF] text-black hover:opacity-90 transition-opacity btn-primary"
          )}
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
