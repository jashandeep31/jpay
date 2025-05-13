-- CreateEnum
CREATE TYPE "PaymentPageFormFilledFormStatus" AS ENUM ('PENDING', 'COMPLETED');

-- CreateTable
CREATE TABLE "PaymentPageFormFilledForm" (
    "id" TEXT NOT NULL,
    "paymentPageId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" "PaymentPageFormFilledFormStatus" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "PaymentPageFormFilledForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentPageFormFilledFormField" (
    "id" TEXT NOT NULL,
    "paymentPageFormFieldId" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PaymentPageFormFilledFormField_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PaymentPageFormFilledForm" ADD CONSTRAINT "PaymentPageFormFilledForm_paymentPageId_fkey" FOREIGN KEY ("paymentPageId") REFERENCES "PaymentPage"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentPageFormFilledFormField" ADD CONSTRAINT "PaymentPageFormFilledFormField_paymentPageFormFieldId_fkey" FOREIGN KEY ("paymentPageFormFieldId") REFERENCES "PaymentPageFormField"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
