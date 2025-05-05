"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@repo/ui/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/components/ui/form";
import { Form } from "@repo/ui/components/ui/form";
import { Input } from "@repo/ui/components/ui/input";
import { Separator } from "@repo/ui/components/ui/separator";
import { Textarea } from "@repo/ui/components/ui/textarea";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
import { X } from "lucide-react";
import { createBulkPayoutGroup } from "../_actions";
import { useRouter } from "next/navigation";
const formSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
});

const Page = () => {
  const router = useRouter();
  const [members, setmembers] = useState<
    {
      id: string;
      name: string;
      address: string;
      amount: number | null;
    }[]
  >([
    {
      id: uuidv4(),
      name: "",
      address: "",
      amount: null,
    },
  ]);
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      name: "",
      description: "",
    },

    resolver: zodResolver(formSchema),
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const toastId = toast.loading("Creating bulk payout group...");

    try {
      const validMembers = members.filter(
        (member) => member.address && member.amount !== null
      );

      const result = await createBulkPayoutGroup({
        name: values.name,
        description: values.description,
        members: validMembers.map((member) => ({
          name: member.name,
          address: member.address,
          amount: member.amount!,
        })),
      });

      if (result.ok) {
        toast.success("Bulk payout group created successfully", {
          id: toastId,
        });
        router.push(`/dashboard/bulk-payouts/`);
      } else {
        toast.error("Failed to create bulk payout group", {
          id: toastId,
        });
      }
    } catch {
      toast.error("Failed to create bulk payout group", {
        id: toastId,
      });
    }
  }

  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Create Bulk Payout Group
          </h1>
          <p className="text-muted-foreground mb-6">
            Create a new bulk payout group to pay out your customers.
          </p>
        </div>
      </div>
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8  mx-auto py-10 grid md:grid-cols-2 "
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="marketing team"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Enter the name for your self
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="marketing team with basic pay"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="md:col-span-2">
              <Separator className="my-6" />
              {members.map((member) => (
                <div key={member.id} className=" md:flex gap-4 my-6 ">
                  <FormItem className="w-full">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter the name"
                        value={member.name}
                        onChange={(e) => {
                          setmembers(
                            members.map((m) =>
                              m.id === member.id
                                ? { ...m, name: e.target.value }
                                : m
                            )
                          );
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  <FormItem className="w-full">
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter the solana address"
                        value={member.address}
                        onChange={(e) => {
                          setmembers(
                            members.map((m) =>
                              m.id === member.id
                                ? { ...m, address: e.target.value }
                                : m
                            )
                          );
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  <FormItem className="w-full">
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter the amount"
                        value={member.amount ?? ""}
                        onChange={(e) => {
                          setmembers(
                            members.map((m) =>
                              m.id === member.id
                                ? {
                                    ...m,
                                    amount: e.target.value
                                      ? Number(e.target.value)
                                      : null,
                                  }
                                : m
                            )
                          );
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  <div className="flex items-end">
                    <Button
                      type="button"
                      variant="destructive"
                      onClick={() => {
                        setmembers(members.filter((m) => m.id !== member.id));
                      }}
                    >
                      <X />
                    </Button>
                  </div>
                </div>
              ))}
              <div className="flex justify-end mt-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setmembers([
                      ...members,
                      { id: uuidv4(), name: "", address: "", amount: null },
                    ]);
                  }}
                >
                  Add another address
                </Button>
              </div>
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Page;
