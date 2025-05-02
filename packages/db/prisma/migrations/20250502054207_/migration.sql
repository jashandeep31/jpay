-- AlterTable
ALTER TABLE "IntiatedPayment" ADD COLUMN     "qRPaymentId" TEXT;

-- AddForeignKey
ALTER TABLE "IntiatedPayment" ADD CONSTRAINT "IntiatedPayment_qRPaymentId_fkey" FOREIGN KEY ("qRPaymentId") REFERENCES "QRPayment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
