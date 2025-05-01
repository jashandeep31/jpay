-- AlterEnum
ALTER TYPE "IntiatedFrom" ADD VALUE 'JPAY_LINK';

-- AlterTable
ALTER TABLE "IntiatedPayment" ADD COLUMN     "jPayLinkId" TEXT;

-- CreateTable
CREATE TABLE "JPayLink" (
    "id" TEXT NOT NULL,
    "merchantId" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "notifyOnEachPayment" BOOLEAN NOT NULL DEFAULT false,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JPayLink_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "IntiatedPayment" ADD CONSTRAINT "IntiatedPayment_jPayLinkId_fkey" FOREIGN KEY ("jPayLinkId") REFERENCES "JPayLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JPayLink" ADD CONSTRAINT "JPayLink_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
