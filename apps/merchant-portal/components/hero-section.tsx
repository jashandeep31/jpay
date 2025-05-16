import { buttonVariants } from "@repo/ui/components/ui/button";
import { InteractiveGrid } from "./interactive-grid";
import Link from "next/link";
import { cn } from "@repo/ui/lib/utils";

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden bg-background">
      <InteractiveGrid
        containerClassName="absolute inset-0"
        className="opacity-30"
        points={40}
      />
      <div className="absolute inset-0 hero-gradient"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-accent/10 backdrop-blur-sm text-sm font-medium text-primary mb-6">
            The Future of Payments is Here
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">
            Powering Payments
            <br />
            <span className="text-primary">with Stablecoins</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            JPay enables businesses to accept USDC and USDT payments with
            lightning-fast speeds and minimal fees. Experience the future of
            digital payments today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={"/auth/signup"}
              className={cn(
                buttonVariants({ variant: "default" }),
                "bg-gradient-to-r from-[#14F195] to-[#00C2FF] text-black hover:opacity-90 transition-opacity btn-primary"
              )}
            >
              Get Started
            </Link>
            <Link
              href="https://jashandeep.notion.site/JPay-Payment-gateway-1f53d3428d76805fb936f87083a29b5a"
              target="_blank"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "border-border hover:bg-accent/5 gap-2 btn-outline bg-background"
              )}
            >
              Docs of How to?
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
              </span>
            </Link>
          </div>
        </div>

        <div className="relative mx-auto mb-16 border rounded-xl p-6">
          <div className="video-container w-full ">
            <iframe
              src="https://www.youtube.com/embed/LtuI6i-I1NY?si=eM8J6n4qg-AVGy_C"
              title="JPay Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
              className="w-full  aspect-video"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold mb-2 text-primary">400ms</div>
            <p className="text-muted-foreground">Transaction Finality</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold mb-2 text-primary">$0.00025</div>
            <p className="text-muted-foreground">Average Transaction Fee</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold mb-2 text-primary">24/7</div>
            <p className="text-muted-foreground">Global Availability</p>
          </div>
        </div>
      </div>
    </section>
  );
}
