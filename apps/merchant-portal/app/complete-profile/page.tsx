import { ProfileCompletionFlow } from "@/components/complete-profile/profile-completion-flow";

export default function page() {
  return (
    <main className="container mx-auto py-10 px-4 min-h-screen flex flex-col">
      <h1 className="text-3xl font-bold mb-8">Complete Your Profile</h1>
      <ProfileCompletionFlow />
    </main>
  );
}
