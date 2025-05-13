import { Button, buttonVariants } from "@repo/ui/components/ui/button";
import Link from "next/link";
import { cn } from "@repo/ui/lib/utils";

export function CTASection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto p-8 rounded-xl border">
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
            <Link
              href={"https://cal.com/jashandeep31"}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-border hover:bg-accent/5"
              )}
              target="_blank"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
