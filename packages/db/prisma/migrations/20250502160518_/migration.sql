/*
  Warnings:

  - You are about to drop the column `liveWalletId` on the `IntiatedPayment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[authority]` on the table `StableCoin` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[signature]` on the table `Transaction` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `signature` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "IntiatedPayment" DROP CONSTRAINT "IntiatedPayment_walletAddress_fkey";

-- DropIndex
DROP INDEX "IntiatedPayment_ataWalletAddress_key";

-- DropIndex
DROP INDEX "IntiatedPayment_walletAddress_key";

-- DropIndex
DROP INDEX "Transaction_toAtaWalletAddress_key";

-- DropIndex
DROP INDEX "Transaction_toWalletAddress_key";

-- AlterTable
ALTER TABLE "IntiatedPayment" DROP COLUMN "liveWalletId",
ADD COLUMN     "liveWalletWalletAddress" TEXT;

-- AlterTable
ALTER TABLE "LiveWallet" ALTER COLUMN "index" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "signature" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "StableCoin_authority_key" ON "StableCoin"("authority");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_signature_key" ON "Transaction"("signature");

-- AddForeignKey
ALTER TABLE "IntiatedPayment" ADD CONSTRAINT "IntiatedPayment_liveWalletWalletAddress_fkey" FOREIGN KEY ("liveWalletWalletAddress") REFERENCES "LiveWallet"("walletAddress") ON DELETE SET NULL ON UPDATE CASCADE;
