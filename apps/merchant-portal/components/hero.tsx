"use client";

import { useEffect, useState } from "react";
import { Button } from "@repo/ui/components/ui/button";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-32 pb-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-[#9945FF]/20 animate-gradient"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-20">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#14F195"
              strokeWidth="0.5"
            />
            <circle
              cx="50"
              cy="50"
              r="30"
              fill="none"
              stroke="#14F195"
              strokeWidth="0.5"
            />
            <circle
              cx="50"
              cy="50"
              r="20"
              fill="none"
              stroke="#14F195"
              strokeWidth="0.5"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Global Stablecoin Payments on Solana
        </h1>
        <p
          className={`text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto transition-all duration-1000 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Fast. Low-cost. Programmable.
        </p>
        <div
          className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 delay-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium relative overflow-hidden group"
          >
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <span className="absolute -inset-x-full bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-50 font-medium relative overflow-hidden group"
          >
            <span className="relative z-10">View Docs</span>
            <span className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Button>
        </div>
      </div>
    </section>
  );
}
