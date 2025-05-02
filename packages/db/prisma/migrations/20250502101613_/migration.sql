-- CreateEnum
CREATE TYPE "APIGeneratedPaymentLinkStatus" AS ENUM ('PROCESSING', 'PAID', 'FAILED');

-- CreateTable
CREATE TABLE "APIGeneratedPaymentLink" (
    "id" TEXT NOT NULL,
    "merchantId" TEXT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "status" "APIGeneratedPaymentLinkStatus" NOT NULL DEFAULT 'PROCESSING',
    "paidAt" TIMESTAMP(3),
    "redirectUrl" TEXT NOT NULL,
    "callbackUrl" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "validUntil" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "APIGeneratedPaymentLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LiveWallet" (
    "id" TEXT NOT NULL,
    "merchantId" TEXT NOT NULL,
    "walletAddress" TEXT NOT NULL,
    "balance" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "LiveWallet_walletAddress_key" ON "LiveWallet"("walletAddress");

-- AddForeignKey
ALTER TABLE "APIGeneratedPaymentLink" ADD CONSTRAINT "APIGeneratedPaymentLink_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiveWallet" ADD CONSTRAINT "LiveWallet_merchantId_fkey" FOREIGN KEY ("merchantId") REFERENCES "Merchant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
