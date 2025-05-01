"use client";

import { useState, useRef } from "react";
import { InvoiceForm } from "./invoice-form";
import { InvoicePreview } from "./invoice-preview";
import { Button } from "@repo/ui/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/components/ui/tabs";
import { initialInvoiceData, type InvoiceData } from "./invoice-form";
import { ClockFading, Download, FileText, Printer } from "lucide-react";
import { useToast } from "@/app/hooks/use-toast";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { createInvoice } from "@/app/dashboard/invoices/_actions";
import { CHECKOUT_PORTAL_URL } from "@/lib/conts";

export function InvoiceGenerator() {
  const [invoiceData, setInvoiceData] =
    useState<InvoiceData>(initialInvoiceData);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const invoiceRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const handleDownloadPDF = async () => {
    if (!invoiceRef.current) return;
    setIsGeneratingPDF(true);
    toast({
      title: "Generating PDF",
      description: "Please wait while we prepare your invoice...",
    });

    try {
      const invoice = await createInvoice({
        invoiceNumber: invoiceData.invoiceNumber,
        invoiceDate: new Date(invoiceData.invoiceDate),
        dueDate: new Date(invoiceData.dueDate),
        amount: invoiceData.total,
      });
      if (!invoice.ok || !invoice.data) {
        toast({
          title: "Error Creating Invoice",
          description: invoice.error,
          variant: "destructive",
        });
        return;
      }
      setInvoiceData({
        ...invoiceData,
        paymentLink: `${CHECKOUT_PORTAL_URL}/invoice/${invoice.data.id}`,
      });

      // Define margin in mm
      const margin = 15; // 15mm margin on all sides
      // Create a new jsPDF instance
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      // Get the invoice element and render it to a canvas
      const canvas = await html2canvas(invoiceRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff", // Force white background
        allowTaint: true, // Allow cross-origin images
        foreignObjectRendering: false, // Disable foreignObject rendering which can cause issues
        onclone: (clonedDoc) => {
          // Convert any oklch colors to rgb before rendering
          const elements = clonedDoc.querySelectorAll("*");
          elements.forEach((element) => {
            const style = window.getComputedStyle(element);
            if (style.backgroundColor.includes("oklch")) {
              (element as HTMLElement).style.backgroundColor = "#ffffff";
            }
            if (style.color.includes("oklch")) {
              (element as HTMLElement).style.color = "#000000";
            }
          });
        },
      });

      // Calculate dimensions to fit the invoice on the PDF with margins
      const imgData = canvas.toDataURL("image/png");
      const pageWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const contentWidth = pageWidth - 2 * margin; // Content width with margins
      const contentHeight = (canvas.height * contentWidth) / canvas.width; // Maintain aspect ratio

      // Add the image to the PDF with margins
      doc.addImage(imgData, "PNG", margin, margin, contentWidth, contentHeight);

      // If the invoice is longer than one page, add additional pages
      let heightLeft = contentHeight;
      let position = 0;

      while (heightLeft > pageHeight - 2 * margin) {
        position = heightLeft - (pageHeight - 2 * margin);
        doc.addPage();
        doc.addImage(
          imgData,
          "PNG",
          margin,
          margin - position,
          contentWidth,
          contentHeight
        );
        heightLeft -= pageHeight - 2 * margin;
      }

      // Save the PDF
      doc.save(`Invoice-${invoiceData.invoiceNumber}.pdf`);

      toast({
        title: "PDF Generated Successfully",
        description: "Your invoice has been downloaded.",
        variant: "default",
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast({
        title: "Error Generating PDF",
        description: "There was a problem creating your PDF. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <div className="space-y-8">
      <Tabs defaultValue="form" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="form">
            <FileText className="h-4 w-4 mr-2" />
            Edit Invoice
          </TabsTrigger>
          <TabsTrigger value="preview">
            <Printer className="h-4 w-4 mr-2" />
            Preview
          </TabsTrigger>
        </TabsList>
        <TabsContent value="form">
          <InvoiceForm
            invoiceData={invoiceData}
            setInvoiceData={setInvoiceData}
          />
        </TabsContent>
        <TabsContent value="preview">
          <div className="mb-4 flex justify-end">
            <Button
              onClick={handleDownloadPDF}
              className="ml-2"
              disabled={isGeneratingPDF}
            >
              {isGeneratingPDF ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Generating...
                </>
              ) : (
                <>
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </>
              )}
            </Button>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <div ref={invoiceRef}>
              <InvoicePreview invoiceData={invoiceData} />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
