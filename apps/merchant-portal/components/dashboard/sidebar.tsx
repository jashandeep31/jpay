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
  LogOut,
  ChevronLeft,
  ChevronRight,
  QrCode,
  FileKey2,
  Webhook,
  Landmark,
  WalletMinimal,
  BookOpen,
} from "lucide-react";
import { useSidebar } from "@/context/sidebar-context";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@repo/ui/components/ui/tooltip";
import { Badge } from "@repo/ui/components/ui/badge";

export const sidebarLinks = [
  {
    name: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Docs of How to",
    href: "https://jashandeep.notion.site/JPay-Payment-gateway-1f53d3428d76805fb936f87083a29b5a",
    icon: BookOpen,
  },
  {
    name: "Payment Links",
    href: "/dashboard/payment-link",
    icon: LinkIcon,
  },
  {
    name: "Payment Pages",
    href: "/dashboard/payment-pages",
    icon: FileText,
  },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: FileKey2,
  },
  {
    name: "@jpay-links",
    href: "/dashboard/jpay-links",
    icon: ArrowDownToLine,
  },
  {
    name: "Live Wallets",
    href: "/dashboard/live-wallets",
    icon: WalletMinimal,
  },
  {
    name: "QR Payments",
    href: "/dashboard/qr-payments",
    icon: QrCode,
  },

  {
    name: "Web API",
    href: "/dashboard/web-api",
    icon: Webhook,
  },

  {
    name: "Bulk Payouts",
    href: "/dashboard/bulk-payouts",
    icon: Landmark,
  },
];

const bottomLinks = [
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const { collapsed, toggleSidebar } = useSidebar();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <aside
      className={`hidden md:block md:fixed md:inset-y-0 z-20 transition-all duration-300 ease-in-out ${
        collapsed ? "md:w-16" : "md:w-64"
      }`}
    >
      <div className="flex flex-col flex-1 h-full bg-sidebar border-r border-sidebar-border relative">
        {/* Toggle button */}
        <button
          onClick={toggleSidebar}
          className="absolute -right-3 top-20 bg-sidebar border border-sidebar-border rounded-full p-1 shadow-md z-10 hover:bg-sidebar-accent"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4 text-sidebar-foreground" />
          ) : (
            <ChevronLeft className="h-4 w-4 text-sidebar-foreground" />
          )}
        </button>

        <div
          className={`flex items-center h-16 flex-shrink-0 px-4 border-b border-sidebar-border ${
            collapsed ? "justify-center" : ""
          }`}
        >
          <Link href="/dashboard" className="flex items-center">
            {collapsed ? (
              <span className="text-2xl font-bold text-sidebar-primary">J</span>
            ) : (
              <>
                <span className="text-2xl font-bold text-sidebar-foreground">
                  JPay
                </span>
                <span className="ml-1 text-sidebar-primary font-bold">.</span>
                <Badge variant="outline" className="ml-1 text-sidebar-primary">
                  Devnet
                </Badge>
              </>
            )}
          </Link>
        </div>

        <div className="flex-1 flex flex-col overflow-y-auto pt-5 pb-4">
          <nav className="flex-1 px-2 space-y-1 bg-sidebar">
            <TooltipProvider delayDuration={0}>
              {sidebarLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Tooltip key={link.name}>
                    <TooltipTrigger asChild>
                      <Link
                        target={
                          link.name === "Docs of How to" ? "_blank" : "_self"
                        }
                        href={link.href}
                        className={`group flex items-center ${
                          collapsed ? "justify-center" : ""
                        } px-2 py-2 text-sm font-medium rounded-md ${
                          isActive
                            ? "bg-sidebar-accent text-sidebar-primary"
                            : "text-sidebar-foreground/60 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                        }`}
                        onMouseEnter={() => setHoveredItem(link.name)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <link.icon
                          className={`${collapsed ? "mr-0" : "mr-3"} flex-shrink-0 h-5 w-5 ${
                            isActive
                              ? "text-sidebar-primary"
                              : "text-sidebar-foreground/60 group-hover:text-sidebar-foreground"
                          }`}
                          aria-hidden="true"
                        />
                        {!collapsed && (
                          <span className="flex-1 flex  items-center gap-1">
                            {link.name === "Docs of How to" && (
                              <span className="relative flex size-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
                              </span>
                            )}
                            {link.name}
                          </span>
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

        <div className="flex-shrink-0 flex flex-col border-t border-sidebar-border p-4">
          <div className={`${collapsed ? "px-0" : "px-2"} space-y-1`}>
            <TooltipProvider delayDuration={0}>
              {bottomLinks.map((link) => (
                <Tooltip key={link.name}>
                  <TooltipTrigger asChild>
                    <Link
                      href={link.href}
                      className={`group flex items-center ${
                        collapsed ? "justify-center" : ""
                      } px-2 py-2 text-sm font-medium rounded-md text-sidebar-foreground/60 hover:bg-sidebar-accent hover:text-sidebar-foreground`}
                      onMouseEnter={() => setHoveredItem(link.name)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <link.icon
                        className={`${collapsed ? "mr-0" : "mr-3"} flex-shrink-0 h-5 w-5 text-sidebar-foreground/60 group-hover:text-sidebar-foreground`}
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
            className={`mt-auto pt-4 border-t border-sidebar-border ${collapsed ? "px-0" : "px-2"}`}
          >
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    className={`group flex items-center ${
                      collapsed ? "justify-center" : ""
                    } px-2 py-2 text-sm font-medium rounded-md w-full text-sidebar-foreground/60 hover:bg-sidebar-accent hover:text-sidebar-foreground`}
                  >
                    <LogOut
                      className={`${collapsed ? "mr-0" : "mr-3"} flex-shrink-0 h-5 w-5 text-sidebar-foreground/60 group-hover:text-sidebar-foreground`}
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
