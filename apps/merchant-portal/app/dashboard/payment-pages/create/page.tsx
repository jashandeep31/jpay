"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { InfoIcon } from "lucide-react";

import { Button } from "@repo/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
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

import { useToast } from "@/app/hooks/use-toast";
import { createPaymentPage } from "../_actions";

const formSchema = z.object({
  title: z.string().min(3, {
    message: "Title must be at least 3 characters.",
  }),
  description: z.string().min(10, {
    message: "Description is required",
  }),
  logoUrl: z.string().url({
    message: "Please enter a valid URL for your logo.",
  }),
  amount: z.coerce
    .number()
    .positive({
      message: "Amount must be a positive number.",
    })
    .refine((val) => !isNaN(val), {
      message: "Amount must be a valid number.",
    }),
  expiresAt: z.date().min(new Date(), {
    message: "Expiration date must be today or in the future",
  }),
});

export default function CreatePaymentPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      logoUrl: "",
      amount: undefined,
      expiresAt: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    try {
      await createPaymentPage({
        ...values,
        description: values.description || "", // Ensure description is always defined
        expiresAt: values.expiresAt || undefined,
      });

      toast({
        title: "Success",
        description: "Payment page created successfully",
      });

      router.push("/dashboard/payment-pages");
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // const handlePreview = () => {
  //   const isValid = form.trigger();
  //   // if (isValid) {
  //   //   setPreviewData(form.getValues());
  //   // }
  // };

  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="w-full md:w-1/2">
          <Card>
            <CardHeader>
              <CardTitle>Create Payment Page</CardTitle>
              <CardDescription>
                Create a customized payment page for your customers.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Page Title</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Payment for services"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          This will be displayed as the title of your payment
                          page.
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
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe what this payment is for..."
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Provide additional details about the payment.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="logoUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Logo URL</FormLabel>
                        <FormControl>
                          <div className="flex">
                            <Input
                              placeholder="https://example.com/logo.png"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormDescription className="flex items-center gap-1">
                          <InfoIcon className="h-3 w-3" />
                          URL to your company or brand logo.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Amount</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2">
                              $
                            </span>
                            <Input
                              type="number"
                              step="0.01"
                              placeholder="0.00"
                              className="pl-8"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormDescription>
                          The amount to be collected from the customer.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="expiresAt"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Expiration Date </FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            value={
                              field.value
                                ? field.value.toISOString().substring(0, 10)
                                : ""
                            }
                            onChange={(e) =>
                              field.onChange(
                                e.target.value
                                  ? new Date(e.target.value)
                                  : undefined
                              )
                            }
                            onBlur={field.onBlur}
                            name={field.name}
                            ref={field.ref}
                            disabled={field.disabled}
                          />
                        </FormControl>
                        <FormDescription>
                          The payment page will expire after this date.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex gap-4">
                    {/* <Button
                      type="button"
                      variant="outline"
                      onClick={handlePreview}
                    >
                      Preview
                    </Button> */}
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Creating..." : "Create Payment Page"}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        <div className="w-full md:w-1/2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                This is how your payment page will look to customers.
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[500px] overflow-auto">
              <h5>!Preview is not available yet</h5>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <InfoIcon className="h-4 w-4" />
                <span>
                  This is a preview only. Some elements may appear differently
                  on the actual payment page.
                </span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
