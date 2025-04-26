import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col md:flex-row justify-between items-center transition-all duration-700 opacity-100 translate-y-0" 
          }`}
        >
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              {/* Solana logo with blue and green */}
              <div className="relative w-5 h-5 mr-2">
                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-70"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#14F195] rounded-full animate-pulse-slow"></div>
              </div>
              <span className="text-sm text-gray-500">
                © 2025 JPay. All rights reserved.
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Docs
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900 flex items-center transition-colors duration-300"
            >
              <Github className="w-4 h-4 mr-1" /> GitHub
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900 flex items-center transition-colors duration-300"
            >
              <Twitter className="w-4 h-4 mr-1" /> Twitter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
