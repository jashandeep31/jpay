import { auth } from "@/auth";
import { ProfileCompletionFlow } from "@/components/complete-profile/profile-completion-flow";
import { redirect } from "next/navigation";

export default async function page() {
  const session = await auth();
  if (!session?.merchantId) redirect("/auth/login");
  if (session.profileCompleted) redirect("/dashboard");
  return (
    <main className="container mx-auto py-10 px-4 min-h-screen flex flex-col">
      <h1 className="text-3xl font-bold mb-8">Complete Your Profile</h1>
      <ProfileCompletionFlow />
    </main>
  );
}
