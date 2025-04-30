/*
  Warnings:

  - You are about to drop the column `fromAddress` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `settledTo` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `toAddress` on the `Transaction` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ataWalletAddress]` on the table `IntiatedPayment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[toWalletAddress]` on the table `Transaction` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[fromWalletAddress]` on the table `Transaction` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[toAtaWalletAddress]` on the table `Transaction` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[fromAtaWalletAddress]` on the table `Transaction` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ataWalletAddress` to the `IntiatedPayment` table without a default value. This is not possible if the table is not empty.
  - Made the column `expiresAt` on table `PaymentPage` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `decimalCount` to the `StableCoin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fromAtaWalletAddress` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fromWalletAddress` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stableCoinName` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toAtaWalletAddress` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `toWalletAddress` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Transaction_toAddress_key";

-- AlterTable
ALTER TABLE "IntiatedPayment" ADD COLUMN     "ataWalletAddress" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PaymentLink" ADD COLUMN     "oneTimeLink" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "PaymentPage" ALTER COLUMN "expiresAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "StableCoin" ADD COLUMN     "decimalCount" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "fromAddress",
DROP COLUMN "settledTo",
DROP COLUMN "toAddress",
ADD COLUMN     "fromAtaWalletAddress" TEXT NOT NULL,
ADD COLUMN     "fromWalletAddress" TEXT NOT NULL,
ADD COLUMN     "settledToWalletAddress" TEXT,
ADD COLUMN     "stableCoinName" TEXT NOT NULL,
ADD COLUMN     "toAtaWalletAddress" TEXT NOT NULL,
ADD COLUMN     "toWalletAddress" TEXT NOT NULL,
ALTER COLUMN "settled" SET DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "IntiatedPayment_ataWalletAddress_key" ON "IntiatedPayment"("ataWalletAddress");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_toWalletAddress_key" ON "Transaction"("toWalletAddress");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_fromWalletAddress_key" ON "Transaction"("fromWalletAddress");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_toAtaWalletAddress_key" ON "Transaction"("toAtaWalletAddress");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_fromAtaWalletAddress_key" ON "Transaction"("fromAtaWalletAddress");
