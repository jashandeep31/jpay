import { auth } from "@/auth";
import { MerchantProfileManager } from "@/components/dashboard/settings/merchant-profile-manager";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth();
  if (!session?.merchantId) {
    redirect("/auth/login");
  }

  const merchant = await db.merchant.findUnique({
    where: {
      id: session.merchantId,
    },
  });
  if (!merchant) {
    redirect("/auth/login");
  }

  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Merchant Profile Management</h1>
      <MerchantProfileManager merchant={merchant} />
    </main>
  );
}
