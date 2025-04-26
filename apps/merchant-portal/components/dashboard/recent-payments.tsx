"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/ui/avatar";
import { Badge } from "@repo/ui/components/ui/badge";
import { Button } from "@repo/ui/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@repo/ui/components/ui/dropdown-menu";
import { MoreHorizontal, Eye, RefreshCw } from "lucide-react";

const recentPayments = [
  {
    id: "PAY-1234",
    date: "2023-04-23",
    customer: {
      name: "Alex Johnson",
      email: "alex@example.com",
      avatar: "/abstract-essence.png",
    },
    amount: "$245.00",
    currency: "USDC",
    status: "paid",
  },
  {
    id: "PAY-1235",
    date: "2023-04-22",
    customer: {
      name: "Sarah Williams",
      email: "sarah@example.com",
      avatar: "/abstract-connection.png",
    },
    amount: "$945.00",
    currency: "USDT",
    status: "paid",
  },
  {
    id: "PAY-1236",
    date: "2023-04-22",
    customer: {
      name: "Michael Brown",
      email: "michael@example.com",
      avatar: "/abstract-essence-three.png",
    },
    amount: "$132.00",
    currency: "USDC",
    status: "pending",
  },
  {
    id: "PAY-1237",
    date: "2023-04-21",
    customer: {
      name: "Emily Davis",
      email: "emily@example.com",
      avatar: "/abstract-avatar-four.png",
    },
    amount: "$57.00",
    currency: "USDP",
    status: "paid",
  },
  {
    id: "PAY-1238",
    date: "2023-04-21",
    customer: {
      name: "David Wilson",
      email: "david@example.com",
      avatar: "/abstract-essence-five.png",
    },
    amount: "$1,245.00",
    currency: "USDC",
    status: "pending",
  },
];

export default function RecentPayments() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Link ID
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Customer
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {recentPayments.map((payment) => (
            <tr key={payment.id} className="hover:bg-gray-50">
              <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                {payment.date}
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {payment.id}
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage
                      src={payment.customer.avatar || "/placeholder.svg"}
                      alt={payment.customer.name}
                    />
                    <AvatarFallback>
                      {payment.customer.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {payment.customer.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {payment.customer.email}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{payment.amount}</div>
                <div className="text-xs text-gray-500">{payment.currency}</div>
              </td>
              <td className="px-4 py-4 whitespace-nowrap">
                <Badge
                  variant={payment.status === "paid" ? "default" : "outline"}
                  className={
                    payment.status === "paid"
                      ? "bg-green-100 text-green-800 hover:bg-green-200"
                      : "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                  }
                >
                  {payment.status === "paid" ? "Paid" : "Pending"}
                </Badge>
              </td>
              <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <Eye className="mr-2 h-4 w-4" />
                      <span>View details</span>
                    </DropdownMenuItem>
                    {payment.status === "pending" && (
                      <DropdownMenuItem>
                        <RefreshCw className="mr-2 h-4 w-4" />
                        <span>Check status</span>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    {payment.status === "paid" && (
                      <DropdownMenuItem>
                        <RefreshCw className="mr-2 h-4 w-4" />
                        <span>Refund payment</span>
                      </DropdownMenuItem>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <Button variant="outline" size="sm">
          View all payments
        </Button>
      </div>
    </div>
  );
}
