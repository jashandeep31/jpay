import { formatDate } from "@/app/lib/utils";
import { BulkPayoutGroup, BulkPayoutGroupMember } from "@repo/db";
import { Button } from "@repo/ui/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui/components/ui/table";
import { Link } from "lucide-react";
import React from "react";

const BulkPayoutGroupMemberTable = ({
  group,
}: {
  group: BulkPayoutGroup & {
    BulkPayoutGroupMember: BulkPayoutGroupMember[];
  };
}) => {
  const createBulkPayout = async () => {};
  return (
    <div>
      <div className="flex justify-end">
        <Button>Make Payout</Button>
      </div>
      <div className="mt-6">
        <div className="overflow-auto">
          <Table>
            <TableHeader>
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
                  <TableCell>${member.amount.toString()}</TableCell>
                  <TableCell>
                    {formatDate(new Date(member.createdAt))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default BulkPayoutGroupMemberTable;
