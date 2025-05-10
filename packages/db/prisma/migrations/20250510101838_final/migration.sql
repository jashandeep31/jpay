/*
  Warnings:

  - You are about to drop the column `liveWalletWalletAddress` on the `IntiatedPayment` table. All the data in the column will be lost.
  - Added the required column `toWalletAddressIndex` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "IntiatedPayment" DROP CONSTRAINT "IntiatedPayment_liveWalletWalletAddress_fkey";

-- AlterTable
ALTER TABLE "IntiatedPayment" DROP COLUMN "liveWalletWalletAddress",
ADD COLUMN     "liveWalletId" TEXT;

-- AlterTable
ALTER TABLE "Merchant" ADD COLUMN     "paymentReceivingWalletAddress" TEXT,
ADD COLUMN     "profileCompleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "settledSignature" TEXT,
ADD COLUMN     "toWalletAddressIndex" INTEGER NOT NULL,
ALTER COLUMN "toAtaWalletAddress" DROP NOT NULL,
ALTER COLUMN "walletId" DROP DEFAULT;

-- CreateTable
CREATE TABLE "BulkPayoutGroup" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "merchantId" TEXT NOT NULL,

    CONSTRAINT "BulkPayoutGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BulkPayoutGroupMember" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "name" TEXT NOT NULL,
    "bulkPayoutGroupId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BulkPayoutGroupMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BulkPayoutGroupTransaction" (
    "id" TEXT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "signature" TEXT NOT NULL,
    "bulkPayoutGroupMemberId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BulkPayoutGroupTransaction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "IntiatedPayment" ADD CONSTRAINT "IntiatedPayment_liveWalletId_fkey" FOREIGN KEY ("liveWalletId") REFERENCES "LiveWallet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BulkPayoutGroup" ADD CONSTRAINT "BulkPayoutGroup_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BulkPayoutGroupMember" ADD CONSTRAINT "BulkPayoutGroupMember_bulkPayoutGroupId_fkey" FOREIGN KEY ("bulkPayoutGroupId") REFERENCES "BulkPayoutGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BulkPayoutGroupTransaction" ADD CONSTRAINT "BulkPayoutGroupTransaction_bulkPayoutGroupMemberId_fkey" FOREIGN KEY ("bulkPayoutGroupMemberId") REFERENCES "BulkPayoutGroupMember"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
