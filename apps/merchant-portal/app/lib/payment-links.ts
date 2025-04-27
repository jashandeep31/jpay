import useSWR from "swr";

// Types
export type PaymentLinkStatus =
  | "PENDING"
  | "ACTIVE"
  | "COMPLETED"
  | "EXPIRED"
  | "CANCELLED";

export interface PaymentLink {
  id: string;
  amount: string;
  status: PaymentLinkStatus;
  createdAt: string;
  updatedAt: string;
  expiresAt: string | null;
  description: string | null;
  userId: string;
}

export interface PaymentLinkCreateParams {
  amount: string;
  description?: string;
  expiresAt?: string;
}

export interface PaymentLinksResponse {
  data: PaymentLink[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

// Fetcher function for SWR
const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error("Failed to fetch data");
    throw error;
  }
  return response.json();
};

// Hook to fetch payment links
export function usePaymentLinks(
  page = 1,
  limit = 10,
  status?: PaymentLinkStatus
) {
  const url = `/api/payment-links?page=${page}&limit=${limit}${status ? `&status=${status}` : ""}`;

  const { data, error, mutate } = useSWR<PaymentLinksResponse>(url, fetcher);

  return {
    paymentLinks: data?.data,
    pagination: data?.pagination,
    isLoading: !error && !data,
    error,
    mutate,
  };
}

// Create a new payment link
export async function createPaymentLink(
  params: PaymentLinkCreateParams
): Promise<PaymentLink> {
  const response = await fetch("/api/payment-links", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to create payment link");
  }

  const { data } = await response.json();
  return data;
}

// Update payment link status
export async function updatePaymentLinkStatus(
  id: string,
  status: PaymentLinkStatus
): Promise<PaymentLink> {
  const response = await fetch("/api/payment-links", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, status }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to update payment link");
  }

  const { data } = await response.json();
  return data;
}

// Delete a payment link
export async function deletePaymentLink(id: string): Promise<void> {
  const response = await fetch(`/api/payment-links?id=${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to delete payment link");
  }
}

// Format currency helper
export function formatPaymentLinkAmount(amount: string): string {
  const numAmount = Number.parseFloat(amount);
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(numAmount);
}

// Get payment link URL
export function getPaymentLinkUrl(id: string): string {
  return `${window.location.origin}/payment/${id}`;
}

// Check if payment link is expired
export function isPaymentLinkExpired(expiresAt: string | null): boolean {
  if (!expiresAt) return false;
  return new Date(expiresAt) < new Date();
}

// Utility to check if a payment link can be cancelled
export function canCancelPaymentLink(status: PaymentLinkStatus): boolean {
  return status === "PENDING" || status === "ACTIVE";
}

// Utility to get status label
export function getStatusLabel(status: PaymentLinkStatus): string {
  const statusMap: Record<PaymentLinkStatus, string> = {
    PENDING: "Pending",
    ACTIVE: "Active",
    COMPLETED: "Completed",
    EXPIRED: "Expired",
    CANCELLED: "Cancelled",
  };

  return statusMap[status] || status;
}
