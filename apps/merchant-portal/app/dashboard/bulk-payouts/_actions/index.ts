"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { ServerActionResponseToClient } from "@/types/server-actions";

export async function createBulkPayoutGroup({
  name,
  description,
  members,
}: {
  name: string;
  description: string;
  members: { name: string; address: string; amount: number }[];
}): Promise<ServerActionResponseToClient<{ id: string }>> {
  try {
    const session = await auth();
    if (!session?.merchantId) throw new Error("Unauthorized");

    const result = await db.$transaction(async (tx) => {
      const bulkPayoutGroup = await tx.bulkPayoutGroup.create({
        data: {
          name,
          description,
          merchantId: session.merchantId,
        },
      });

      await tx.bulkPayoutGroupMember.createMany({
        data: members.map((member) => ({
          name: member.name,
          address: member.address,
          amount: member.amount,
          bulkPayoutGroupId: bulkPayoutGroup.id,
        })),
      });
      return bulkPayoutGroup.id;
    });
    return {
      ok: true,
      data: {
        id: result,
      },
    };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : "An unknown error occurred",
    };
  }
}
