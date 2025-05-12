/*
  Warnings:

  - A unique constraint covering the columns `[tokenAddress]` on the table `StableCoin` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tokenAddress` to the `StableCoin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "StableCoin" ADD COLUMN     "tokenAddress" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "StableCoin_tokenAddress_key" ON "StableCoin"("tokenAddress");
