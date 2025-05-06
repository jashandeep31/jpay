import { Button } from "@repo/ui/components/ui/button";
import { InteractiveGrid } from "./interactive-grid";
import { ShineBorder } from "./shine-border";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden bg-black">
      <InteractiveGrid
        containerClassName="absolute inset-0"
        className="opacity-30"
        points={40}
      />
      <div className="absolute inset-0 hero-gradient"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-[#14F195] mb-6 ">
            The Future of Payments is Here
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
            Fast & Secure Stablecoin
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#14F195] to-[#00C2FF]">
              Payments on Solana
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            JPay enables businesses to accept USDC and USDT payments with
            lightning-fast speeds and minimal fees. Experience the future of
            digital payments today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-gradient-to-r from-[#14F195] to-[#00C2FF] text-black hover:opacity-90 transition-opacity btn-primary"
              size="lg"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border-white/10 hover:bg-white/5 gap-2 btn-outline bg-black"
              size="lg"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <ShineBorder
          className="relative mx-auto mb-16"
          borderClassName="border border-white/10 rounded-xl overflow-hidden"
        >
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1&rel=0"
              title="JPay Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </ShineBorder>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#14F195] to-[#00C2FF]">
              400ms
            </div>
            <p className="text-gray-400">Transaction Finality</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#14F195] to-[#00C2FF]">
              $0.00025
            </div>
            <p className="text-gray-400">Average Transaction Fee</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#14F195] to-[#00C2FF]">
              24/7
            </div>
            <p className="text-gray-400">Global Availability</p>
          </div>
        </div>
      </div>
    </section>
  );
}
