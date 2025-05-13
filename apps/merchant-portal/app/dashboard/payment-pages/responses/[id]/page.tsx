import { auth } from "@/auth";
import { db } from "@/lib/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { redirect } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const session = await auth();
  if (!session?.merchantId) redirect("/auth/login");
  const id = (await params).id;
  const paymentPage = await db.paymentPage.findUnique({
    where: {
      id,
      merchantId: session.merchantId,
    },
  });
  if (!paymentPage) return <h1>Payment page does not belongs to you</h1>;
  const paymentPageForm = await db.paymentPageForm.findUnique({
    where: {
      paymentPageId: id,
    },
    include: {
      PaymentPageFormField: true,
    },
  });
  const paymentPageFilledForm = await db.paymentPageFilledForm.findMany({
    where: {
      paymentPageId: id,
      status: "COMPLETED",
    },
    include: {
      PaymentPageFormFilledField: true,
    },
  });
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Responses</CardTitle>
          <CardDescription className="text-muted-foreground">
            All the responses for the payment page.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                {paymentPageForm?.PaymentPageFormField.map((field) => (
                  <th
                    className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
                    key={field.id}
                  >
                    {field.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paymentPageFilledForm.map((filledForm) => (
                <tr className="border-b border-border" key={filledForm.id}>
                  {filledForm.PaymentPageFormFilledField.map((field) => (
                    <td
                      className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
                      key={field.id}
                    >
                      {field.value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
