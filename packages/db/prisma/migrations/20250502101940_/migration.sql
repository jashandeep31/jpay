-- AlterTable
ALTER TABLE "LiveWallet" ADD COLUMN     "notifyOnEachPayment" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "balance" SET DEFAULT 0;
