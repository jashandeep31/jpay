import { Button } from "@repo/ui/components/ui/button";
import { ShineBorder } from "./shine-border";

export function CTASection() {
  return (
    <section className="py-16 px-6">
      <ShineBorder
        className="max-w-4xl mx-auto p-8 rounded-xl"
        borderClassName="border border-border rounded-xl overflow-hidden bg-accent/5"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            Ready to Transform Your Payment Experience?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using JPay to process fast,
            secure stablecoin payments on the Solana blockchain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              size="lg"
            >
              Get Started for Free
            </Button>
            <Button
              variant="outline"
              className="border-border hover:bg-accent/5"
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
