import { CheckCircle } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    "400ms transaction finality compared to days with traditional banking",
    "Fees as low as $0.00025 per transaction",
    "No chargebacks or payment disputes",
    "Global payments without currency conversion fees",
    "24/7 operation with no banking hours",
    "Programmable money with smart contract integration",
    "Transparent and immutable transaction records",
    "No need for traditional merchant accounts",
  ];

  return (
    <section id="benefits" className="py-16 px-6 bg-foreground dark:bg-accent">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#14F195] to-[#00C2FF]">
          Why Choose JPay?
        </h2>
        <p className="text-background/50 text-center mb-12 max-w-2xl mx-auto">
          JPay offers significant advantages over traditional payment gateways,
          providing faster, cheaper, and more secure transactions.
        </p>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[#14F195] flex-shrink-0 mt-0.5" />
              <p className="text-background">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
