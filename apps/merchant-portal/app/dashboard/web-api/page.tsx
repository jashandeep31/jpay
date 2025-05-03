import { CardContent } from "@repo/ui/components/ui/card";
import { Card, CardDescription, CardHeader } from "@repo/ui/components/ui/card";
import { CardTitle } from "@repo/ui/components/ui/card";
import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import WebApiKeyTable from "@/components/dashboard/web-api/web-api-key-table";
import WebApiCreateButton from "@/components/dashboard/web-api/web-api-create-button";

const page = async () => {
  const session = await auth();
  if (!session?.user || !session.merchantId) {
    redirect("/login");
  }

  const webApiKeys = await db.merchantApiKey.findMany({
    where: {
      merchantId: session.merchantId,
    },
  });

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Web API</h1>
          <p className="text-muted-foreground">
            Create and manage your web API keys.
          </p>
        </div>

        <WebApiCreateButton />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your API Keys</CardTitle>
          <CardDescription>View and manage all your API keys.</CardDescription>
        </CardHeader>
        <CardContent>
          <WebApiKeyTable webApiKeys={webApiKeys} />
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
