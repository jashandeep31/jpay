"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import { Textarea } from "@repo/ui/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { Separator } from "@repo/ui/components/ui/separator";
// import type { InvoiceData, InvoiceItem } from "@repo/lib/types";
import { Plus, Trash2, Upload } from "lucide-react";
import { formatCurrency } from "@/app/lib/utils";
import { CHECKOUT_PORTAL_URL } from "@/lib/conts";

export interface InvoiceItem {
  description: string;
  quantity: number;
  unitPrice: number;
  amount: number;
}

export interface InvoiceData {
  // Company Info
  companyName: string;
  companyLogo: string;
  companyAddress: string;
  companyPhone: string;
  companyEmail: string;
  companyWebsite: string;

  // Invoice Details
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;

  // Client Info
  clientName: string;
  clientAddress: string;
  clientEmail: string;
  clientPhone: string;

  // Items and Totals
  items: InvoiceItem[];
  subtotal: number;
  taxRate: number;
  taxAmount: number;
  total: number;

  // Additional
  notes: string;

  // Payment Link
  paymentLink: string;
}

interface InvoiceFormProps {
  invoiceData: InvoiceData;
  setInvoiceData: React.Dispatch<React.SetStateAction<InvoiceData>>;
}

export function InvoiceForm({ invoiceData, setInvoiceData }: InvoiceFormProps) {
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setLogoPreview(result);
        setInvoiceData({ ...invoiceData, companyLogo: result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleItemChange = (
    index: number,
    field: keyof InvoiceItem,
    value: string | number
  ) => {
    const updatedItems = [...invoiceData.items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };

    // Recalculate amount
    if (field === "quantity" || field === "unitPrice") {
      const quantity =
        field === "quantity"
          ? Number(value)
          : Number(updatedItems[index].quantity);
      const unitPrice =
        field === "unitPrice"
          ? Number(value)
          : Number(updatedItems[index].unitPrice);
      updatedItems[index].amount = quantity * unitPrice;
    }

    setInvoiceData({ ...invoiceData, items: updatedItems });
    calculateTotals(updatedItems);
  };

  const addItem = () => {
    const newItem: InvoiceItem = {
      description: "",
      quantity: 1,
      unitPrice: 0,
      amount: 0,
    };
    const updatedItems = [...invoiceData.items, newItem];
    setInvoiceData({ ...invoiceData, items: updatedItems });
  };

  const removeItem = (index: number) => {
    const updatedItems = invoiceData.items.filter((_, i) => i !== index);
    setInvoiceData({ ...invoiceData, items: updatedItems });
    calculateTotals(updatedItems);
  };

  const calculateTotals = (items: InvoiceItem[]) => {
    const subtotal = items.reduce((sum, item) => sum + item.amount, 0);
    const taxAmount = subtotal * (invoiceData.taxRate / 100);
    const total = subtotal + taxAmount;

    setInvoiceData((prev) => ({
      ...prev,
      subtotal,
      taxAmount,
      total,
    }));
  };

  const handleTaxRateChange = (value: string) => {
    const taxRate = Number(value);
    const taxAmount = invoiceData.subtotal * (taxRate / 100);
    const total = invoiceData.subtotal + taxAmount;

    setInvoiceData({
      ...invoiceData,
      taxRate,
      taxAmount,
      total,
    });
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Company Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                value={invoiceData.companyName}
                onChange={(e) =>
                  setInvoiceData({
                    ...invoiceData,
                    companyName: e.target.value,
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyLogo">Company Logo</Label>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() =>
                    document.getElementById("logo-upload")?.click()
                  }
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Logo
                </Button>
                <input
                  id="logo-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleLogoChange}
                />
                {(logoPreview || invoiceData.companyLogo) && (
                  <div className="h-12 w-12 relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={logoPreview || invoiceData.companyLogo || ""}
                      alt="Company Logo"
                      className="h-full w-full object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="companyAddress">Company Address</Label>
            <Textarea
              id="companyAddress"
              value={invoiceData.companyAddress}
              onChange={(e) =>
                setInvoiceData({
                  ...invoiceData,
                  companyAddress: e.target.value,
                })
              }
              rows={3}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="companyPhone">Phone</Label>
              <Input
                id="companyPhone"
                value={invoiceData.companyPhone}
                onChange={(e) =>
                  setInvoiceData({
                    ...invoiceData,
                    companyPhone: e.target.value,
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyEmail">Email</Label>
              <Input
                id="companyEmail"
                value={invoiceData.companyEmail}
                onChange={(e) =>
                  setInvoiceData({
                    ...invoiceData,
                    companyEmail: e.target.value,
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyWebsite">Website</Label>
              <Input
                id="companyWebsite"
                value={invoiceData.companyWebsite}
                onChange={(e) =>
                  setInvoiceData({
                    ...invoiceData,
                    companyWebsite: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Invoice Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="invoiceNumber">Invoice Number</Label>
              <Input
                id="invoiceNumber"
                value={invoiceData.invoiceNumber}
                onChange={(e) =>
                  setInvoiceData({
                    ...invoiceData,
                    invoiceNumber: e.target.value,
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="invoiceDate">Invoice Date</Label>
              <Input
                id="invoiceDate"
                type="date"
                value={invoiceData.invoiceDate}
                onChange={(e) =>
                  setInvoiceData({
                    ...invoiceData,
                    invoiceDate: e.target.value,
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dueDate">Due Date</Label>
              <Input
                id="dueDate"
                type="date"
                value={invoiceData.dueDate}
                onChange={(e) =>
                  setInvoiceData({ ...invoiceData, dueDate: e.target.value })
                }
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Client Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="clientName">Client Name</Label>
            <Input
              id="clientName"
              value={invoiceData.clientName}
              onChange={(e) =>
                setInvoiceData({ ...invoiceData, clientName: e.target.value })
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="clientAddress">Client Address</Label>
            <Textarea
              id="clientAddress"
              value={invoiceData.clientAddress}
              onChange={(e) =>
                setInvoiceData({
                  ...invoiceData,
                  clientAddress: e.target.value,
                })
              }
              rows={3}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="clientEmail">Client Email</Label>
              <Input
                id="clientEmail"
                value={invoiceData.clientEmail}
                onChange={(e) =>
                  setInvoiceData({
                    ...invoiceData,
                    clientEmail: e.target.value,
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="clientPhone">Client Phone</Label>
              <Input
                id="clientPhone"
                value={invoiceData.clientPhone}
                onChange={(e) =>
                  setInvoiceData({
                    ...invoiceData,
                    clientPhone: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Invoice Items</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-12 gap-4 font-medium text-sm">
            <div className="col-span-5">Description</div>
            <div className="col-span-2">Quantity</div>
            <div className="col-span-2">Unit Price</div>
            <div className="col-span-2">Amount</div>
            <div className="col-span-1"></div>
          </div>
          <Separator />
          {invoiceData.items.map((item, index) => (
            <div key={index} className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-5">
                <Input
                  value={item.description}
                  onChange={(e) =>
                    handleItemChange(index, "description", e.target.value)
                  }
                  placeholder="Item description"
                />
              </div>
              <div className="col-span-2">
                <Input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    handleItemChange(index, "quantity", Number(e.target.value))
                  }
                />
              </div>
              <div className="col-span-2">
                <Input
                  type="number"
                  min="0"
                  step="0.01"
                  value={item.unitPrice}
                  onChange={(e) =>
                    handleItemChange(index, "unitPrice", Number(e.target.value))
                  }
                />
              </div>
              <div className="col-span-2">
                <Input
                  value={formatCurrency(item.amount)}
                  disabled
                  className="bg-muted"
                />
              </div>
              <div className="col-span-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeItem(index)}
                  className="text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
          <Button
            variant="outline"
            onClick={addItem}
            className="w-full mt-4 bg-white hover:bg-gray-50 border-dashed border-2"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Item
          </Button>

          <div className="mt-8 space-y-4">
            <div className="flex justify-between">
              <span className="font-medium">Subtotal:</span>
              <span>{formatCurrency(invoiceData.subtotal)}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-medium">Tax Rate:</span>
                <Input
                  type="number"
                  min="0"
                  max="100"
                  value={invoiceData.taxRate}
                  onChange={(e) => handleTaxRateChange(e.target.value)}
                  className="w-20"
                />
                <span>%</span>
              </div>
              <span>{formatCurrency(invoiceData.taxAmount)}</span>
            </div>
            <Separator />
            <div className="flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span>{formatCurrency(invoiceData.total)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Additional Notes</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            value={invoiceData.notes}
            onChange={(e) =>
              setInvoiceData({ ...invoiceData, notes: e.target.value })
            }
            placeholder="Payment terms, thank you message, etc."
            rows={3}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export const initialInvoiceData: InvoiceData = {
  // Company Info
  companyName: "Your Company Name",
  companyLogo: "",
  companyAddress: "123 Business Street\nCity, State 12345",
  companyPhone: "+1 (555) 123-4567",
  companyEmail: "contact@yourcompany.com",
  companyWebsite: "www.yourcompany.com",

  // Invoice Details
  invoiceNumber: `INV-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, "0")}${String(Math.floor(Math.random() * 1000)).padStart(3, "0")}`,
  invoiceDate: new Date().toISOString().split("T")[0],
  dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0],

  // Client Info
  clientName: "Client Name",
  clientAddress: "456 Client Avenue\nClient City, State 67890",
  clientEmail: "client@example.com",
  clientPhone: "+1 (555) 987-6543",

  // Items and Totals
  items: [
    {
      description: "Service or Product Description",
      quantity: 1,
      unitPrice: 100,
      amount: 100,
    },
  ],
  subtotal: 100,
  taxRate: 10,
  taxAmount: 10,
  total: 110,

  // Additional
  notes: "Payment is due within 30 days. Thank you for your business.",

  // Payment Link
  paymentLink: `${CHECKOUT_PORTAL_URL}/invoice/`,
};
