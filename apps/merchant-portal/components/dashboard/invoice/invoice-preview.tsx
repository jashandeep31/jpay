import { formatCurrency, formatDate } from "@/app/lib/utils";
import type { InvoiceData } from "./invoice-form";
import { Separator } from "@repo/ui/components/ui/separator";

interface InvoicePreviewProps {
  invoiceData: InvoiceData;
}

export function InvoicePreview({ invoiceData }: InvoicePreviewProps) {
  return (
    <div className="font-sans text-gray-900 print:text-black">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          {invoiceData.companyLogo && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={invoiceData.companyLogo || "/placeholder.svg"}
              alt="Company Logo"
              className="h-16 mb-4 object-contain"
            />
          )}
          <h1 className="text-3xl font-bold">
            {invoiceData.companyName || "Your Company"}
          </h1>
          <div className="mt-2 text-sm whitespace-pre-line">
            {invoiceData.companyAddress}
          </div>
          <div className="mt-2 text-sm">
            {invoiceData.companyPhone && <div>{invoiceData.companyPhone}</div>}
            {invoiceData.companyEmail && <div>{invoiceData.companyEmail}</div>}
            {invoiceData.companyWebsite && (
              <div>{invoiceData.companyWebsite}</div>
            )}
          </div>
        </div>
        <div className="text-right">
          <h2 className="text-2xl font-bold text-gray-700">INVOICE</h2>
          <div className="mt-2">
            <div className="text-sm">
              <span className="font-semibold">Invoice Number: </span>
              {invoiceData.invoiceNumber || "INV-0001"}
            </div>
            <div className="text-sm">
              <span className="font-semibold">Invoice Date: </span>
              {invoiceData.invoiceDate
                ? formatDate(new Date(invoiceData.invoiceDate))
                : ""}
            </div>
            <div className="text-sm">
              <span className="font-semibold">Due Date: </span>
              {invoiceData.dueDate
                ? formatDate(new Date(invoiceData.dueDate))
                : ""}
            </div>
          </div>
        </div>
      </div>

      {/* Client Info */}
      <div className="mb-8">
        <h3 className="text-gray-500 font-semibold mb-2">Bill To:</h3>
        <div className="font-bold text-lg">{invoiceData.clientName}</div>
        <div className="text-sm whitespace-pre-line">
          {invoiceData.clientAddress}
        </div>
        {invoiceData.clientEmail && (
          <div className="text-sm">{invoiceData.clientEmail}</div>
        )}
        {invoiceData.clientPhone && (
          <div className="text-sm">{invoiceData.clientPhone}</div>
        )}
      </div>

      {/* Items Table */}
      <div className="mb-8">
        <div className="grid grid-cols-12 gap-4 bg-gray-100 p-3 font-semibold text-sm rounded-t-md">
          <div className="col-span-5">Description</div>
          <div className="col-span-2 text-right">Quantity</div>
          <div className="col-span-2 text-right">Unit Price</div>
          <div className="col-span-3 text-right">Amount</div>
        </div>

        {invoiceData.items.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-12 gap-4 p-3 text-sm border-b"
          >
            <div className="col-span-5">{item.description}</div>
            <div className="col-span-2 text-right">{item.quantity}</div>
            <div className="col-span-2 text-right">
              {formatCurrency(item.unitPrice)}
            </div>
            <div className="col-span-3 text-right">
              {formatCurrency(item.amount)}
            </div>
          </div>
        ))}

        {/* Totals */}
        <div className="mt-4 flex flex-col items-end">
          <div className="w-64 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>{formatCurrency(invoiceData.subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax ({invoiceData.taxRate}%):</span>
              <span>{formatCurrency(invoiceData.taxAmount)}</span>
            </div>
            <Separator />
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>{formatCurrency(invoiceData.total)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Button */}
      <div className="flex items-center justify-center">
        {invoiceData.paymentLink ? (
          <a
            className="text-blue-500"
            href={invoiceData.paymentLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {invoiceData.paymentLink}
          </a>
        ) : null}
      </div>
      {/* {invoiceData.paymentLink && (
        <div className="mt-8 flex justify-center print:block">
          <a
            href={invoiceData.paymentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="print:block print:visible print:opacity-100"
          >
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg print:bg-green-600 print:text-white print:border-2 print:border-green-600">
              <CreditCard className="mr-2 h-5 w-5" />
              Pay Now with JPay
            </Button>
          </a>
        </div>
      )} */}

      {/* Notes */}
      {invoiceData.notes && (
        <div className="mt-8">
          <h3 className="text-gray-500 font-semibold mb-2">Notes:</h3>
          <div className="text-sm whitespace-pre-line p-3 bg-gray-50 rounded-md">
            {invoiceData.notes}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-12 text-center text-sm text-gray-500">
        Thank you for your business!
      </div>
    </div>
  );
}
