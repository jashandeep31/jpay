import { MerchantProfileManager } from "@/components/dashboard/settings/merchant-profile-manager";

export default function Home() {
  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Merchant Profile Management</h1>
      <MerchantProfileManager />
    </main>
  );
}
