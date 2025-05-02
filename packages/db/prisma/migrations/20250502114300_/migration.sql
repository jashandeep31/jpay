/*
  Warnings:

  - You are about to drop the column `liveWalletWalletAddress` on the `IntiatedPayment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "IntiatedPayment" DROP CONSTRAINT "IntiatedPayment_liveWalletWalletAddress_fkey";

-- AlterTable
ALTER TABLE "IntiatedPayment" DROP COLUMN "liveWalletWalletAddress";

-- AlterTable
ALTER TABLE "LiveWallet" ALTER COLUMN "index" SET DEFAULT 0;
