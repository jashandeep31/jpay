import { Button } from "@repo/ui/components/ui/button";
import { GradientCard } from "./gradient-card";
import { Code, FileText, BookOpen } from "lucide-react";

export function DevelopersSection() {
  return (
    <section id="developers" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#14F195] to-[#00C2FF]">
          Built for Developers
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Our developer-friendly API and comprehensive documentation make
          integration quick and painless.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <GradientCard>
            <Code className="w-10 h-10 text-[#14F195] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Simple API</h3>
            <p className="text-gray-400 mb-4">
              RESTful API with clear endpoints and responses
            </p>
            <Button
              variant="outline"
              className="w-full border-white/10 hover:bg-white/5 btn-outline"
            >
              API Reference
            </Button>
          </GradientCard>

          <GradientCard>
            <FileText className="w-10 h-10 text-[#00C2FF] mb-4" />
            <h3 className="text-xl font-semibold mb-2">SDKs</h3>
            <p className="text-gray-400 mb-4">
              Libraries for JavaScript, Python, PHP, and more
            </p>
            <Button
              variant="outline"
              className="w-full border-white/10 hover:bg-white/5 btn-outline"
            >
              Download SDKs
            </Button>
            <div className="mt-3 flex justify-center">
              <span className="coming-soon-badge">Coming Soon</span>
            </div>
          </GradientCard>

          <GradientCard>
            <BookOpen className="w-10 h-10 text-[#9945FF] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Documentation</h3>
            <p className="text-gray-400 mb-4">
              Comprehensive guides and examples
            </p>
            <Button
              variant="outline"
              className="w-full border-white/10 hover:bg-white/5 btn-outline"
            >
              Read Docs
            </Button>
          </GradientCard>
        </div>

        <div className="text-center text-gray-400 text-sm mb-12">
          <p>
            Our JavaScript SDK is available now. Python, PHP, and other language
            SDKs will be released soon.
          </p>
        </div>

        <div className="bg-gradient-to-r from-black to-black/80 border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4">
            Quick Integration Example
          </h3>
          <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm text-gray-300">
              {`// Initialize JPay client
const jpay = new JPay('YOUR_API_KEY');

// Create a payment request
const payment = await jpay.createPayment({
  amount: '100.00',
  currency: 'USDC',
  description: 'Order #1234',
  redirectUrl: 'https://yoursite.com/thank-you'
});

// Redirect to payment page
window.location.href = payment.checkoutUrl;`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
