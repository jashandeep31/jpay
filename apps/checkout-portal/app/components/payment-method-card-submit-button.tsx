"use client";
import { Button } from "@repo/ui/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useFormStatus } from "react-dom";

export function PaymentMethodCardSubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button className="w-full" disabled={pending}>
      {pending ? "Loading..." : "Select"}
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  );
}
