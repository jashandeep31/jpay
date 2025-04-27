// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "@repo/ui/components/ui/card";
// import { formatCurrency } from "@/app/lib/utils";
// import Image from "next/image";

// interface PaymentPagePreviewProps {
//   data: {
//     title: string;
//     description?: string;
//     logoUrl: string;
//     amount: number;
//     expiresAt?: Date;
//   };
// }

// export default function PaymentPagePreview({ data }: PaymentPagePreviewProps) {
//   const { title, description, logoUrl, amount } = data;

//   return (
//     <div className="mx-auto max-w-md rounded-lg border border-dashed border-gray-300 p-4">
//       <div className="flex flex-col items-center space-y-6 py-8">
//         {logoUrl && (
//           <div className="relative h-20 w-20 overflow-hidden rounded-full border border-gray-200">
//             <Image
//               src={logoUrl || "/placeholder.svg?height=80&width=80&query=logo"}
//               alt="Company Logo"
//               fill
//               className="object-contain"
//               onError={(e) => {
//                 // Fallback to placeholder if image fails to load
//                 (e.target as HTMLImageElement).src =
//                   "/abstract-geometric-logo.png";
//               }}
//             />
//           </div>
//         )}

//         <div className="text-center">
//           <h2 className="text-2xl font-bold">
//             {title || "Payment Page Title"}
//           </h2>
//           {description && <p className="mt-2 text-gray-600">{description}</p>}
//         </div>

//         <div className="text-center">
//           <p className="text-sm text-gray-500">Amount Due</p>
//           <p className="text-3xl font-bold">{formatCurrency(amount || 0)}</p>
//         </div>

//         <div className="w-full space-y-4">
//           <Card>
//             <CardHeader className="pb-2">
//               <h3 className="text-sm font-medium">Payment Methods</h3>
//             </CardHeader>
//             <CardContent className="grid grid-cols-4 gap-2 pb-0">
//               <div className="flex h-12 items-center justify-center rounded-md border border-gray-200 p-2">
//                 <Image
//                   src="/upi-icon.png"
//                   alt="UPI"
//                   width={40}
//                   height={40}
//                   className="h-auto max-h-full w-auto"
//                 />
//               </div>
//               <div className="flex h-12 items-center justify-center rounded-md border border-gray-200 p-2">
//                 <Image
//                   src="/visa-icon.png"
//                   alt="Visa"
//                   width={40}
//                   height={40}
//                   className="h-auto max-h-full w-auto"
//                 />
//               </div>
//               <div className="flex h-12 items-center justify-center rounded-md border border-gray-200 p-2">
//                 <Image
//                   src="/mastercard-icon.png"
//                   alt="Mastercard"
//                   width={40}
//                   height={40}
//                   className="h-auto max-h-full w-auto"
//                 />
//               </div>
//               <div className="flex h-12 items-center justify-center rounded-md border border-gray-200 p-2">
//                 <Image
//                   src="/rupay-icon.png"
//                   alt="RuPay"
//                   width={40}
//                   height={40}
//                   className="h-auto max-h-full w-auto"
//                 />
//               </div>
//             </CardContent>
//             <CardFooter className="flex justify-center pt-4">
//               <button
//                 disabled
//                 className="w-full rounded-md bg-primary py-3 text-center font-medium text-white opacity-80"
//               >
//                 Pay Now
//               </button>
//             </CardFooter>
//           </Card>

//           <div className="text-center text-xs text-gray-500">
//             <p>Secured by JPay Payment Gateway</p>
//             <p className="mt-1">
//               This is a preview. Actual payment page may vary.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

const PaymentPagePreview = () => {
  return <div>Coming soon</div>;
};

export default PaymentPagePreview;
