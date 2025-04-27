"use client";

import type React from "react";

// Adapted from: https://ui.shadcn.com/docs/components/toast
import { useState, useCallback } from "react";

const TOAST_LIMIT = 5;
// const TOAST_REMOVE_DELAY = 1000000;

type ToasterToast = {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: "default" | "destructive";
};

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type Toast = Omit<ToasterToast, "id">;

type UseToastOptions = {
  duration?: number;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function useToast(options?: UseToastOptions) {
  const [toasts, setToasts] = useState<ToasterToast[]>([]);

  const dismiss = useCallback((toastId?: string) => {
    setToasts((toasts) => {
      if (toastId) {
        return toasts.filter((toast) => toast.id !== toastId);
      }
      return [];
    });
  }, []);

  const toast = useCallback(({ ...props }: Toast) => {
    const id = genId();

    const newToast = {
      ...props,
      id,
    };

    setToasts((toasts) => {
      if (toasts.length >= TOAST_LIMIT) {
        toasts.pop();
      }
      return [newToast, ...toasts];
    });

    return id;
  }, []);

  return {
    toast,
    dismiss,
    toasts,
  };
}
