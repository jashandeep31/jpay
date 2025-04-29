/*
  Warnings:

  - A unique constraint covering the columns `[walletAddress]` on the table `IntiatedPayment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[toAddress]` on the table `Transaction` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "IntiatedPayment_walletAddress_key" ON "IntiatedPayment"("walletAddress");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_toAddress_key" ON "Transaction"("toAddress");
