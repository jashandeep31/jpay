import { CardContent } from "@repo/ui/components/ui/card";
import { Card, CardDescription, CardHeader } from "@repo/ui/components/ui/card";
import { Plus } from "lucide-react";
import { buttonVariants } from "@repo/ui/components/ui/button";
import { CardTitle } from "@repo/ui/components/ui/card";
import Link from "next/link";
import React from "react";
import { auth } from "@/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import JPayLinksTable from "@/components/dashboard/jpay-links/jpay-links-table";
const page = async () => {
  const session = await auth();
  if (!session?.merchantId) {
    redirect("/dashboard");
  }
  const jpayLinks = await db.jPayLink.findMany({
    where: { merchantId: session.merchantId },
  });
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">JPay Links</h1>
          <p className="text-muted-foreground">
            Create and manage JPay links for your customers. The permanent link
            to receive the payment.
          </p>
        </div>
        <Link href="/dashboard/jpay-links/create" className={buttonVariants()}>
          <Plus className="mr-2 h-4 w-4" />
          Create JPay Link
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your JPay Links</CardTitle>
          <CardDescription>
            View and manage all your JPay links.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <JPayLinksTable jpayLinks={jpayLinks} />
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
