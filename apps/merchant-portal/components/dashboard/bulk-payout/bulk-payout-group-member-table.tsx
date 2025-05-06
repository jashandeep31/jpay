"use client";
import {
  addBulkPayoutGroupMember,
  sendBulkPayoutSignedTransaction,
} from "@/app/dashboard/_actions";
import { formatDate } from "@/app/lib/utils";
import { BulkPayoutGroup, BulkPayoutGroupMember } from "@repo/db";
import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import { Label } from "@repo/ui/components/ui/label";
import { Separator } from "@repo/ui/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui/components/ui/table";
import {
  createTransferCheckedInstruction,
  getAssociatedTokenAddress,
} from "@solana/spl-token";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { PublicKey, Transaction } from "@solana/web3.js";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";
const USDC_MINT = new PublicKey("Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr");

const BulkPayoutGroupMemberTable = ({
  group,
}: {
  group: BulkPayoutGroup & {
    BulkPayoutGroupMember: BulkPayoutGroupMember[];
  };
}) => {
  const router = useRouter();
  const { connection } = useConnection();
  const { publicKey, signTransaction } = useWallet();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState(0);
  const createBulkPayout = async () => {
    if (!publicKey) {
      toast.error("Please connect your wallet");
      return;
    }
    if (!signTransaction) {
      toast.error("Please connect your wallet");
      return;
    }
    const fromAta = await getAssociatedTokenAddress(USDC_MINT, publicKey);

    const tx = new Transaction();

    for (const member of group.BulkPayoutGroupMember) {
      const toAta = await getAssociatedTokenAddress(
        USDC_MINT,
        new PublicKey(member.address),
        true
      );

      tx.add(
        createTransferCheckedInstruction(
          fromAta,
          USDC_MINT,
          toAta,
          publicKey,
          BigInt(Math.round(Number(member.amount) * 10 ** 6)),
          6,
          []
        )
      );
    }
    const { blockhash, lastValidBlockHeight } =
      await connection.getLatestBlockhash("confirmed");
    tx.recentBlockhash = blockhash;
    tx.lastValidBlockHeight = lastValidBlockHeight;
    tx.feePayer = publicKey;
    const signedTransaction = await signTransaction(tx);
    const rawTransaction = signedTransaction
      .serialize({
        requireAllSignatures: false,
      })
      .toString("base64");
    const txid = await sendBulkPayoutSignedTransaction(
      rawTransaction,
      blockhash,
      lastValidBlockHeight
    );
    toast.success(`Payout created successfully: ${txid}`);
  };
  return (
    <div>
      <div className="flex justify-end">
        {!publicKey ? (
          <WalletMultiButton />
        ) : (
          <Button onClick={createBulkPayout}>Make Payout</Button>
        )}
      </div>
      <div className="mt-6">
        <div className="overflow-auto">
          <Table className="bg-card border rounded-lg">
            <TableHeader className="bg-muted">
              <TableRow>
                <TableHead>S.No</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Created</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {group.BulkPayoutGroupMember.map((member, index) => (
                <TableRow key={member.id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell className="max-w-[200px] truncate">
                    {member.name}
                  </TableCell>
                  <TableCell>{member.address}</TableCell>
                  <TableCell>${Number(member.amount)}</TableCell>
                  <TableCell>
                    {formatDate(new Date(member.createdAt))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <Separator className="my-12" />
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <div>
          <Label>Name</Label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>
        <div>
          <Label>Address</Label>
          <Input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
          />
        </div>
        <div>
          <Label>Amount</Label>
          <Input
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Amount"
          />
        </div>
        <div>
          <Button
            disabled={!address || !amount || !name}
            onClick={async () => {
              const toastId = toast.loading("Adding member...");

              try {
                const res = await addBulkPayoutGroupMember(
                  group.id,
                  address,
                  amount,
                  name
                );
                if (res.ok) {
                  toast.success("Member added successfully", { id: toastId });
                  setName("");
                  setAddress("");
                  setAmount(0);

                  router.refresh();
                } else {
                  toast.error("Failed to add member", { id: toastId });
                }
              } catch {
                toast.error("Failed to add member", { id: toastId });
              }
            }}
          >
            Add Member
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BulkPayoutGroupMemberTable;
