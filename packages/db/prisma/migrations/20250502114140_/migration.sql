/*
  Warnings:

  - A unique constraint covering the columns `[index]` on the table `LiveWallet` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "IntiatedPayment" ADD COLUMN     "liveWalletWalletAddress" TEXT;

-- AlterTable
ALTER TABLE "LiveWallet" ADD COLUMN     "index" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "LiveWallet_index_key" ON "LiveWallet"("index");

-- AddForeignKey
ALTER TABLE "IntiatedPayment" ADD CONSTRAINT "IntiatedPayment_liveWalletWalletAddress_fkey" FOREIGN KEY ("liveWalletWalletAddress") REFERENCES "LiveWallet"("walletAddress") ON DELETE SET NULL ON UPDATE CASCADE;
