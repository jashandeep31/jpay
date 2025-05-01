import { db } from "@/lib/db";
import React from "react";
import JPayLinkCard from "../components/jpay-link-card";

const page = async ({ params }: { params: Promise<{ uid: string }> }) => {
  const uid = (await params).uid.replace("@", "").replace("%40", "");
  console.log(uid);
  const jPayLink = await db.jPayLink.findUnique({
    where: { uid },
    include: {
      merchant: {
        select: {
          name: true,
          logoUrl: true,
        },
      },
    },
  });
  const stableCoins = await db.stableCoin.findMany();
  if (!jPayLink) {
    return <div>JPay Link not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center  bg-gray-50">
      <JPayLinkCard jpayLink={jPayLink} stableCoins={stableCoins} />
    </div>
  );
};

export default page;
