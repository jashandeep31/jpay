import { GradientCard } from "./gradient-card";
import { Code, FileText, BookOpen } from "lucide-react";

export function DevelopersSection() {
  return (
    <section id="developers" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-primary">
          Built for Developers
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Our developer-friendly API and comprehensive documentation make
          integration quick and painless.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <GradientCard>
            <Code className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Simple API</h3>
            <p className="text-muted-foreground mb-4">
              RESTful API with clear endpoints and responses
            </p>
          </GradientCard>

          <GradientCard>
            <FileText className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">SDKs</h3>
            <p className="text-muted-foreground mb-4">
              Libraries for JavaScript, Python, PHP, and more
            </p>

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
              {`export async function getPaymentURL(amount: number) {
  const paymentUID = JPAY_PUBLIC_KEY + crypto.randomUUID();
  const response = await axios.post(process.env.PAYMENT_GATEWAY_API_URL!, {
    amount: amount,
    private_key: JPAY_PRIVATE_KEY,
    public_key: JPAY_PUBLIC_KEY,
    paymentUID: paymentUID,
    callback_url: $\{BASE_URL}/api/callback,
    redirect_url: $\{BASE_URL}/checkout/success,
  });
  await prisma.order.create({
    data: {
      amount: amount,
      orderId: crypto.randomUUID(),
      paymentStatus: "PENDING",
      paymentUID: paymentUID,
    },
  });
  return response.data.data.checkout_url;
}
`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
