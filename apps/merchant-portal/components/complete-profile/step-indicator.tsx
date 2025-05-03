import { CheckIcon } from "lucide-react";
import { cn } from "@repo/ui/lib/utils";

interface Step {
  id: string;
  title: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStepIndex: number;
}

export function StepIndicator({ steps, currentStepIndex }: StepIndicatorProps) {
  return (
    <div className="w-full px-2 sm:px-0">
      {/* Mobile view (stacked) */}
      <div className="flex flex-col space-y-4 sm:hidden">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div
              className={cn(
                "flex items-center justify-center w-8 h-8 rounded-full border-2 shrink-0",
                index < currentStepIndex
                  ? "bg-primary border-primary text-primary-foreground"
                  : index === currentStepIndex
                    ? "border-primary bg-background text-primary"
                    : "border-gray-300 bg-gray-100 text-gray-500"
              )}
            >
              {index < currentStepIndex ? (
                <CheckIcon className="h-4 w-4" />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <div className="ml-3 flex-1">
              <p
                className={cn(
                  "text-sm font-medium",
                  index === currentStepIndex ? "text-primary" : "text-gray-500"
                )}
              >
                {step.title}
              </p>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "mt-2 h-1 w-full rounded-full bg-gray-200",
                    index < currentStepIndex && "bg-primary"
                  )}
                />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop view (horizontal) */}
      <div className="hidden sm:block">
        <div className="relative">
          {/* Progress bar background */}
          <div
            className="absolute top-4 left-0 w-full h-1 bg-gray-200"
            aria-hidden="true"
          />

          {/* Progress bar fill */}
          <div
            className="absolute top-4 left-0 h-1 bg-primary transition-all duration-300 ease-in-out"
            style={{
              width: `${Math.max(0, (currentStepIndex / (steps.length - 1)) * 100)}%`,
            }}
            aria-hidden="true"
          />

          <div className="relative flex items-center justify-between w-full">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <div
                  className={cn(
                    "relative z-10 flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300",
                    index < currentStepIndex
                      ? "bg-primary border-primary text-primary-foreground"
                      : index === currentStepIndex
                        ? "border-primary bg-background text-primary"
                        : "border-gray-300 bg-gray-100 text-gray-500"
                  )}
                  aria-current={index === currentStepIndex ? "step" : undefined}
                >
                  {index < currentStepIndex ? (
                    <CheckIcon className="h-4 w-4" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <div
                  className={cn(
                    "mt-2 text-xs font-medium sm:text-sm text-center",
                    index === currentStepIndex
                      ? "text-primary"
                      : "text-gray-500"
                  )}
                >
                  {step.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
