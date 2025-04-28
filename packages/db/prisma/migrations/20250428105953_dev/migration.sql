/*
  Warnings:

  - Added the required column `stableCoinId` to the `IntiatedPayment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "IntiatedPayment" ADD COLUMN     "stableCoinId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "IntiatedPayment" ADD CONSTRAINT "IntiatedPayment_stableCoinId_fkey" FOREIGN KEY ("stableCoinId") REFERENCES "StableCoin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
