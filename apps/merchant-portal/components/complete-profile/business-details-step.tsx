"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@repo/ui/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/components/ui/form";
import { Input } from "@repo/ui/components/ui/input";
import { Textarea } from "@repo/ui/components/ui/textarea";
import { Loader2, Building2, FileText } from "lucide-react";

// Schema for business details
const businessDetailsSchema = z.object({
  businessName: z.string().min(2, {
    message: "Business name must be at least 2 characters.",
  }),
  description: z
    .string()
    .max(500, {
      message: "Description must not exceed 500 characters.",
    })
    .optional(),
  address: z.string().min(2, {
    message: "Address must be at least 2 characters.",
  }),
});

type BusinessDetailsValues = z.infer<typeof businessDetailsSchema>;

interface BusinessDetailsStepProps {
  onCompleted: (details: BusinessDetailsValues) => void;
}

export function BusinessDetailsStep({ onCompleted }: BusinessDetailsStepProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form for business details
  const form = useForm<BusinessDetailsValues>({
    resolver: zodResolver(businessDetailsSchema),
    defaultValues: {
      businessName: "",
      description: "",
      address: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: BusinessDetailsValues) => {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Call the completion handler
      onCompleted(data);
    } catch (error) {
      console.error("Error submitting business details:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Tell Us About Your Business</h2>
        <p className="text-muted-foreground">
          Please provide details about your business to help us personalize your
          experience.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="businessName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center">
                  <Building2 className="mr-2 h-4 w-4 text-primary" />
                  Business Name
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter your business name" {...field} />
                </FormControl>
                <FormDescription>
                  This is how your business will appear on our platform.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center">
                  <FileText className="mr-2 h-4 w-4 text-primary" />
                  Business Address
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your business"
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>The address of your business.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center">
                  <FileText className="mr-2 h-4 w-4 text-primary" />
                  Business Description (Optional)
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your business"
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  A brief description of your business and what you offer (max
                  500 characters).
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting || !form.formState.isValid}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              "Save Business Details"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
