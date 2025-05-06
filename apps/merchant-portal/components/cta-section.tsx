import { Button } from "@repo/ui/components/ui/button";
import { ShineBorder } from "./shine-border";

export function CTASection() {
  return (
    <section className="py-16 px-6">
      <ShineBorder
        className="max-w-4xl mx-auto p-8 rounded-xl"
        borderClassName="border border-white/10 rounded-xl overflow-hidden bg-gradient-to-br from-[#14F195]/5 to-[#00C2FF]/5"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#14F195] to-[#00C2FF]">
            Ready to Transform Your Payment Experience?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using JPay to process fast,
            secure stablecoin payments on the Solana blockchain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-gradient-to-r from-[#14F195] to-[#00C2FF] text-black hover:opacity-90 transition-opacity btn-primary"
              size="lg"
            >
              Get Started for Free
            </Button>
            <Button
              variant="outline"
              className="border-white/10 hover:bg-white/5 btn-outline bg-black"
              size="lg"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </ShineBorder>
    </section>
  );
}
