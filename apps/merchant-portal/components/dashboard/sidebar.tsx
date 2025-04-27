"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  LinkIcon,
  FileText,
  ArrowDownToLine,
  Settings,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useSidebar } from "@/context/sidebar-context";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@repo/ui/components/ui/tooltip";

const sidebarLinks = [
  {
    name: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Payment Links",
    href: "/dashboard/payment-link",
    icon: LinkIcon,
  },
  {
    name: "Payments Pages",
    href: "/dashboard/payment-pages",
    icon: FileText,
  },

  {
    name: "Payouts",
    href: "/dashboard/payouts",
    icon: ArrowDownToLine,
  },
];

const bottomLinks = [
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
  {
    name: "Help & Support",
    href: "/dashboard/support",
    icon: HelpCircle,
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const { collapsed, toggleSidebar } = useSidebar();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <aside
      className={`hidden md:block md:fixed md:inset-y-0 z-20 transition-all duration-300 ease-in-out ${
        collapsed ? "md:w-16" : "md:w-64"
      }`}
    >
      <div className="flex flex-col flex-1 h-full bg-white border-r border-gray-200 relative">
        {/* Toggle button */}
        <button
          onClick={toggleSidebar}
          className="absolute -right-3 top-20 bg-white border border-gray-200 rounded-full p-1 shadow-md z-10 hover:bg-gray-50"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4 text-gray-600" />
          ) : (
            <ChevronLeft className="h-4 w-4 text-gray-600" />
          )}
        </button>

        <div
          className={`flex items-center h-16 flex-shrink-0 px-4 border-b border-gray-200 ${
            collapsed ? "justify-center" : ""
          }`}
        >
          <Link href="/dashboard" className="flex items-center">
            {collapsed ? (
              <span className="text-2xl font-bold text-blue-500">J</span>
            ) : (
              <>
                <span className="text-2xl font-bold text-gray-900">JPay</span>
                <span className="ml-1 text-blue-500 font-bold">.</span>
              </>
            )}
          </Link>
        </div>

        <div className="flex-1 flex flex-col overflow-y-auto pt-5 pb-4">
          <nav className="flex-1 px-2 space-y-1 bg-white">
            <TooltipProvider delayDuration={0}>
              {sidebarLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  pathname.startsWith(link.href + "/");
                return (
                  <Tooltip key={link.name}>
                    <TooltipTrigger asChild>
                      <Link
                        href={link.href}
                        className={`group flex items-center ${
                          collapsed ? "justify-center" : ""
                        } px-2 py-2 text-sm font-medium rounded-md ${
                          isActive
                            ? "bg-blue-50 text-blue-600"
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        }`}
                        onMouseEnter={() => setHoveredItem(link.name)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <link.icon
                          className={`${collapsed ? "mr-0" : "mr-3"} flex-shrink-0 h-5 w-5 ${
                            isActive
                              ? "text-blue-500"
                              : "text-gray-400 group-hover:text-gray-500"
                          }`}
                          aria-hidden="true"
                        />
                        {!collapsed && (
                          <span className="flex-1">{link.name}</span>
                        )}
                      </Link>
                    </TooltipTrigger>
                    {collapsed && (
                      <TooltipContent side="right">{link.name}</TooltipContent>
                    )}
                  </Tooltip>
                );
              })}
            </TooltipProvider>
          </nav>
        </div>

        <div className="flex-shrink-0 flex flex-col border-t border-gray-200 p-4">
          <div className={`${collapsed ? "px-0" : "px-2"} space-y-1`}>
            <TooltipProvider delayDuration={0}>
              {bottomLinks.map((link) => (
                <Tooltip key={link.name}>
                  <TooltipTrigger asChild>
                    <Link
                      href={link.href}
                      className={`group flex items-center ${
                        collapsed ? "justify-center" : ""
                      } px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900`}
                      onMouseEnter={() => setHoveredItem(link.name)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <link.icon
                        className={`${collapsed ? "mr-0" : "mr-3"} flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500`}
                        aria-hidden="true"
                      />
                      {!collapsed && link.name}
                    </Link>
                  </TooltipTrigger>
                  {collapsed && (
                    <TooltipContent side="right">{link.name}</TooltipContent>
                  )}
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>

          <div
            className={`mt-auto pt-4 border-t border-gray-200 ${collapsed ? "px-0" : "px-2"}`}
          >
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    className={`group flex items-center ${
                      collapsed ? "justify-center" : ""
                    } px-2 py-2 text-sm font-medium rounded-md w-full text-gray-600 hover:bg-gray-50 hover:text-gray-900`}
                  >
                    <LogOut
                      className={`${collapsed ? "mr-0" : "mr-3"} flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500`}
                    />
                    {!collapsed && "Sign Out"}
                  </button>
                </TooltipTrigger>
                {collapsed && (
                  <TooltipContent side="right">Sign Out</TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </aside>
  );
}
