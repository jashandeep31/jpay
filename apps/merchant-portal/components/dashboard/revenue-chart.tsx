// "use client";

// import {
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
//   ChartLegend,
//   // ChartLegendItem,
//   // ChartGrid,
//   // ChartXAxis,
//   // ChartYAxis,
//   // ChartArea,
//   // ChartLine,
// } from "@repo/ui/components/ui/chart";

// const data = [
//   {
//     date: "Jan 1",
//     USDC: 400,
//     USDT: 240,
//     USDP: 120,
//   },
//   {
//     date: "Jan 2",
//     USDC: 300,
//     USDT: 139,
//     USDP: 80,
//   },
//   {
//     date: "Jan 3",
//     USDC: 500,
//     USDT: 380,
//     USDP: 170,
//   },
//   {
//     date: "Jan 4",
//     USDC: 450,
//     USDT: 300,
//     USDP: 140,
//   },
//   {
//     date: "Jan 5",
//     USDC: 470,
//     USDT: 250,
//     USDP: 130,
//   },
//   {
//     date: "Jan 6",
//     USDC: 600,
//     USDT: 320,
//     USDP: 190,
//   },
//   {
//     date: "Jan 7",
//     USDC: 550,
//     USDT: 350,
//     USDP: 160,
//   },
// ];

// export default function RevenueChart() {
//   return (
//     <ChartContainer
//       className="h-[300px] w-full"
//       data={data}
//       xAxisKey="date"
//       margin={{ top: 10, right: 10, bottom: 30, left: 40 }}
//     >
//       <ChartTooltip>
//         <ChartTooltipContent />
//       </ChartTooltip>
//       <ChartGrid vertical horizontal />
//       <ChartXAxis tickCount={7} />
//       <ChartYAxis tickCount={5} />
//       <ChartArea
//         dataKey="USDC"
//         fill="rgba(59, 130, 246, 0.1)"
//         stroke="#3B82F6"
//       />
//       <ChartLine dataKey="USDC" stroke="#3B82F6" />
//       <ChartLine dataKey="USDT" stroke="#10B981" />
//       <ChartLine dataKey="USDP" stroke="#8B5CF6" />
//       <ChartLegend className="mt-4">
//         <ChartLegendItem name="USDC" color="#3B82F6" />
//         <ChartLegendItem name="USDT" color="#10B981" />
//         <ChartLegendItem name="USDP" color="#8B5CF6" />
//       </ChartLegend>
//     </ChartContainer>
//   );
// }
import React from "react";

const RevenueChart = () => {
  return <div>revenue-chart</div>;
};

export default RevenueChart;
