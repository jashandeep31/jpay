/*
  Warnings:

  - You are about to drop the column `payoutWalletAddress` on the `Merchant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Merchant" DROP COLUMN "payoutWalletAddress";
