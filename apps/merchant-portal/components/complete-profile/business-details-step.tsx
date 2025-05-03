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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/ui/select";
import { Loader2, Building2, MapPin, Briefcase, FileText } from "lucide-react";

// Schema for business details
const businessDetailsSchema = z.object({
  businessName: z.string().min(2, {
    message: "Business name must be at least 2 characters.",
  }),
  businessAddress: z.string().min(5, {
    message: "Please enter a valid address.",
  }),
  industry: z.string({
    required_error: "Please select an industry.",
  }),
  description: z
    .string()
    .max(500, {
      message: "Description must not exceed 500 characters.",
    })
    .optional(),
});

type BusinessDetailsValues = z.infer<typeof businessDetailsSchema>;

interface BusinessDetailsStepProps {
  onCompleted: (details: BusinessDetailsValues) => void;
}

// List of industries
const industries = [
  { value: "retail", label: "Retail" },
  { value: "food", label: "Food & Beverage" },
  { value: "tech", label: "Technology" },
  { value: "health", label: "Healthcare" },
  { value: "education", label: "Education" },
  { value: "finance", label: "Finance" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "construction", label: "Construction" },
  { value: "transportation", label: "Transportation" },
  { value: "entertainment", label: "Entertainment" },
  { value: "other", label: "Other" },
];

export function BusinessDetailsStep({ onCompleted }: BusinessDetailsStepProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form for business details
  const form = useForm<BusinessDetailsValues>({
    resolver: zodResolver(businessDetailsSchema),
    defaultValues: {
      businessName: "",
      businessAddress: "",
      industry: "",
      description: "",
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
            name="businessAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4 text-primary" />
                  Business Address
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter your business address" {...field} />
                </FormControl>
                <FormDescription>
                  Your business location helps us provide location-based
                  services.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="industry"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center">
                  <Briefcase className="mr-2 h-4 w-4 text-primary" />
                  Industry
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {industries.map((industry) => (
                      <SelectItem key={industry.value} value={industry.value}>
                        {industry.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  Selecting your industry helps us tailor our services to your
                  needs.
                </FormDescription>
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
