import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { triggerPaymentLink } from "../pl/[id]/_actions";
import { PaymentMethodCardSubmitButton } from "./payment-method-card-submit-button";
import { redirect } from "next/navigation";

interface PaymentMethodCardProps {
  title: string;
  description: string;
  icon: string | null;
  paymentLinkId: string;
  paymentCoinId: string;
}

export function PaymentMethodCard({
  title,
  description,
  icon,
  paymentLinkId,
  paymentCoinId,
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
              const res = await triggerPaymentLink(formData);
              if (res.ok) {
                redirect(`/pl/${paymentLinkId}/${res.data.id}`);
              } else {
                console.error(res.error);
              }
            }}
          >
            <input type="hidden" name="paymentLinkId" value={paymentLinkId} />
            <input type="hidden" name="paymentCoinId" value={paymentCoinId} />

            <PaymentMethodCardSubmitButton />
          </form>
        </div>
      </CardFooter>
    </Card>
  );
}
