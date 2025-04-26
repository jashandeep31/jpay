import { Suspense } from "react";
import dynamic from "next/dynamic";
import ErrorBoundary from "@/components/error-boundary";
import LoadingFallback from "@/components/loading-fallback";

// Dynamically import components with lazy loading
const Hero = dynamic(() => import("@/components/hero"), {
  loading: () => <LoadingFallback height="md" />,
});

const FeaturesGrid = dynamic(() => import("@/components/features-grid"), {
  loading: () => <LoadingFallback height="lg" />,
});

const AdvancedModules = dynamic(() => import("@/components/advanced-modules"), {
  loading: () => <LoadingFallback height="md" />,
});

const DeveloperEcosystem = dynamic(
  () => import("@/components/developer-ecosystem"),
  {
    loading: () => <LoadingFallback height="md" />,
  }
);

const SecurityCompliance = dynamic(
  () => import("@/components/security-compliance"),
  {
    loading: () => <LoadingFallback height="sm" />,
  }
);

const Pricing = dynamic(() => import("@/components/pricing"), {
  loading: () => <LoadingFallback height="lg" />,
});

const Footer = dynamic(() => import("@/components/footer"), {
  loading: () => <LoadingFallback height="sm" />,
});

export default function Home() {
  const ErrorFallback = () => (
    <div className="py-12 text-center">
      <p className="text-gray-500">This section is currently unavailable.</p>
    </div>
  );

  return (
    <div>
      <main>
        <Suspense fallback={<LoadingFallback height="md" />}>
          <ErrorBoundary fallback={<ErrorFallback />}>
            <Hero />
          </ErrorBoundary>
        </Suspense>

        <Suspense fallback={<LoadingFallback height="lg" />}>
          <ErrorBoundary fallback={<ErrorFallback />}>
            <FeaturesGrid />
          </ErrorBoundary>
        </Suspense>

        <Suspense fallback={<LoadingFallback height="md" />}>
          <ErrorBoundary fallback={<ErrorFallback />}>
            <AdvancedModules />
          </ErrorBoundary>
        </Suspense>

        <Suspense fallback={<LoadingFallback height="md" />}>
          <ErrorBoundary fallback={<ErrorFallback />}>
            <DeveloperEcosystem />
          </ErrorBoundary>
        </Suspense>

        <Suspense fallback={<LoadingFallback height="sm" />}>
          <ErrorBoundary fallback={<ErrorFallback />}>
            <SecurityCompliance />
          </ErrorBoundary>
        </Suspense>

        <Suspense fallback={<LoadingFallback height="lg" />}>
          <ErrorBoundary fallback={<ErrorFallback />}>
            <Pricing />
          </ErrorBoundary>
        </Suspense>
      </main>

      <Suspense fallback={<LoadingFallback height="sm" />}>
        <ErrorBoundary fallback={<ErrorFallback />}>
          <Footer />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
}
