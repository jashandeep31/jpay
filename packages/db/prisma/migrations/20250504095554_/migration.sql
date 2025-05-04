-- AlterTable
ALTER TABLE "IntiatedPayment" ADD COLUMN     "pgPaymentId" TEXT;

-- AddForeignKey
ALTER TABLE "IntiatedPayment" ADD CONSTRAINT "IntiatedPayment_pgPaymentId_fkey" FOREIGN KEY ("pgPaymentId") REFERENCES "APIGeneratedPaymentLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;
