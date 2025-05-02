/*
  Warnings:

  - A unique constraint covering the columns `[uiId]` on the table `Wallet` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `uiId` to the `Wallet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Wallet" ADD COLUMN     "uiId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Wallet_uiId_key" ON "Wallet"("uiId");
