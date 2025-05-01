"use client";
import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import { Switch } from "@repo/ui/components/ui/switch";
import React, { useState } from "react";
import { toast } from "sonner";
import { createJPayLink } from "../_actions";

const CreateJPayLink = () => {
  const [uid, setUid] = useState("");
  const [tag, setTag] = useState("");
  const [notifyOnEachPayment, setNotifyOnEachPayment] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async () => {
    const toastId = toast.loading("Creating JPay Link...");

    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("uid", uid);
      formData.append("tag", tag);
      formData.append("notifyOnEachPayment", notifyOnEachPayment.toString());

      const res = await createJPayLink(formData);
      if (res.ok) {
        toast.success("JPay Link created successfully", {
          id: toastId,
        });
      } else {
        toast.error(res.error, { id: toastId });
      }
    } catch (error) {
      toast.error("Something went wrong", { id: toastId });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Create JPay Link</h1>
      <div className="flex flex-col gap-4">
        <div className=" flex flex-col gap-2">
          <label htmlFor="uid">JPay username (UID)</label>
          <Input
            className="inline-block w-auto"
            id="uid"
            placeholder="@username"
            onChange={(e) => setUid(e.target.value)}
            value={uid}
          />
          <p className="text-sm text-muted-foreground">
            Write your favorite username here. It should be unique.
          </p>
        </div>
        <div className=" flex flex-col gap-2">
          <Label htmlFor="tag">Tag</Label>
          <Input
            onChange={(e) => setTag(e.target.value)}
            value={tag}
            id="tag"
            placeholder="Tag"
          />
          <p className="text-sm text-muted-foreground">
            This is the tag will only used to identify the JPay Link (by you
            only).
          </p>
        </div>
        <div className="flex items-center space-x-2 my-4">
          <Label htmlFor="notifyOnEachPayment">Notify on each payment</Label>
          <Switch
            checked={notifyOnEachPayment}
            onCheckedChange={setNotifyOnEachPayment}
            id="notifyOnEachPayment"
          />
        </div>
        <div>
          <Button onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? "Creating..." : "Create JPay Link"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateJPayLink;
