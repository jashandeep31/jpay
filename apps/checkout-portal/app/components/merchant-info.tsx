import { Card, CardContent } from "@repo/ui/components/ui/card";

interface MerchantInfoProps {
  compact?: boolean;
  name?: string;
  logo?: string | null;
}

export function MerchantInfo({
  compact = false,
  name,
  logo,
}: MerchantInfoProps) {
  return (
    <Card className={`border-0 shadow-none ${compact ? "p-0" : "p-4"}`}>
      <CardContent
        className={`flex items-center ${compact ? "p-0" : "p-4"} space-x-3`}
      >
        <div
          className={`relative ${compact ? "h-8 w-8" : "h-12 w-12"} overflow-hidden rounded-full border`}
        >
          {logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={logo || ""}
              alt="Merchant Logo"
              // fill
              className="object-cover"
            />
          ) : null}
        </div>
        <div>
          <h3 className={`font-medium ${compact ? "text-sm" : "text-base"}`}>
            {name}
          </h3>
          {!compact && (
            <p className="text-xs text-muted-foreground">Verified Merchant</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
