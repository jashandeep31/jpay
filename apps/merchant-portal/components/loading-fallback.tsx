type LoadingFallbackProps = {
  height: "sm" | "md" | "lg";
};

export default function LoadingFallback({ height }: LoadingFallbackProps) {
  const heightClass = {
    sm: "h-40",
    md: "h-80",
    lg: "h-96",
  }[height];

  return (
    <div className={`w-full ${heightClass} flex items-center justify-center`}>
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-gray-200"></div>
        <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-t-blue-500 animate-spin"></div>
      </div>
    </div>
  );
}
