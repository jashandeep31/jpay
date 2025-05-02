-- AlterTable
ALTER TABLE "IntiatedPayment" ADD COLUMN     "liveWalletId" TEXT;

-- AddForeignKey
ALTER TABLE "IntiatedPayment" ADD CONSTRAINT "IntiatedPayment_walletAddress_fkey" FOREIGN KEY ("walletAddress") REFERENCES "LiveWallet"("walletAddress") ON DELETE RESTRICT ON UPDATE CASCADE;
