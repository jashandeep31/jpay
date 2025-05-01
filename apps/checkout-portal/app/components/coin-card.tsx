import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { PaymentMethodCardSubmitButton } from "./payment-method-card-submit-button";
import { redirect } from "next/navigation";
import { IntiatedFrom } from "@repo/db";
import { triggerInitiatedPayment } from "../_actions";

interface CoinCardProps {
  title: string;
  description: string;
  icon: string | null;
  paymentId: string;
  initiatedFrom: IntiatedFrom;
  coinId: string;
}

export function CoinCard({
  title,
  description,
  icon,
  paymentId,
  initiatedFrom,
  coinId,
}: CoinCardProps) {
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
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center text-white">
              {icon ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={icon} alt={title} className="w-full h-full" />
              ) : null}
            </div>
          )}
        </div>
        <CardDescription className="text-xs sm:text-sm mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="w-full">
          <form
            action={async (formData: FormData) => {
              "use server";
              const res = await triggerInitiatedPayment(formData);
              if (res.ok) {
                redirect(`/payment/${res.data.id}`);
              } else {
                console.error(res.error);
              }
            }}
          >
            <input type="hidden" name="paymentId" value={paymentId} />
            <input type="hidden" name="initiatedFrom" value={initiatedFrom} />
            <input type="hidden" name="stableCoinId" value={coinId} />
            <PaymentMethodCardSubmitButton />
          </form>
        </div>
      </CardFooter>
    </Card>
  );
}
