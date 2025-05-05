-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "walletId" TEXT NOT NULL DEFAULT 'b9eac92e-6869-4e68-a249-a246a18d3e9b';

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "Wallet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
