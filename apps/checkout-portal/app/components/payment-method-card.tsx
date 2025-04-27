import Link from "next/link";
import { ArrowRight, DollarSign } from "lucide-react";

import { Button } from "@repo/ui/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";

interface PaymentMethodCardProps {
  title: string;
  description: string;
  icon: "usdt" | "usd";
  href: string;
}

export function PaymentMethodCard({
  title,
  description,
  icon,
  href,
}: PaymentMethodCardProps) {
  return (
    <Card className="hover:border-primary transition-colors">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base sm:text-lg">{title}</CardTitle>
          {icon === "usdt" ? (
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm">
              USDT
            </div>
          ) : (
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
              <DollarSign className="h-4 w-4 sm:h-6 sm:w-6" />
            </div>
          )}
        </div>
        <CardDescription className="text-xs sm:text-sm mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Link href={href} className="w-full">
          <Button className="w-full">
            Select
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
