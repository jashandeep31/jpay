"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button, buttonVariants } from "@repo/ui/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@repo/ui/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  if (!mounted) return null;

  return (
    <header
      className={`transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-sm backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <span
                className={`text-2xl font-bold transition-colors duration-300 ${
                  scrolled ? "text-gray-900" : "text-gray-900"
                }`}
              >
                JPay
              </span>
              <span className="ml-1 text-blue-500 font-bold relative">
                .
                <span className="absolute -inset-1 bg-blue-500/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-gray-600 hover:text-gray-900"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Features
            </Link>
            <Link
              href="#modules"
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-gray-600 hover:text-gray-900"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Modules
            </Link>
            <Link
              href="#developers"
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-gray-600 hover:text-gray-900"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Developers
            </Link>
            <Link
              href="#security"
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-gray-600 hover:text-gray-900"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Security
            </Link>
            <Link
              href="#pricing"
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-gray-600 hover:text-gray-900"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              Pricing
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link
              href={`/auth/login`}
              className={cn(
                buttonVariants(),
                `relative overflow-hidden group transition-all duration-300 ${
                  scrolled
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`
              )}
            >
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#features"
                className="text-gray-700 hover:text-gray-900 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#modules"
                className="text-gray-700 hover:text-gray-900 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Modules
              </Link>
              <Link
                href="#developers"
                className="text-gray-700 hover:text-gray-900 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Developers
              </Link>
              <Link
                href="#security"
                className="text-gray-700 hover:text-gray-900 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Security
              </Link>
              <Link
                href="#pricing"
                className="text-gray-700 hover:text-gray-900 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full mt-2">
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
