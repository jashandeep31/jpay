"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Search,
  Settings,
  LogOut,
  PanelLeft,
  Moon,
  Sun,
} from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@repo/ui/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
// import NotificationsDropdown from "@/components/notifications/notifications-dropdown";
// import { useNotifications } from "@/context/notifications-context";
import { useSidebar } from "@/context/sidebar-context";
import { signOut } from "next-auth/react";
import { sidebarLinks } from "./sidebar";

const mobileLinks = sidebarLinks;
export default function DashboardHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  // const { unreadCount } = useNotifications();
  const { toggleSidebar } = useSidebar();
  // const { toggleSidebar, collapsed } = useSidebar();
  const { setTheme } = useTheme();

  // Get current page title
  const getCurrentPageTitle = () => {
    if (pathname === "/dashboard") return "Dashboard Overview";
    if (pathname === "/dashboard/payment-link") return "Payment Links";
    if (pathname === "/dashboard/payments") return "Payments";
    if (pathname === "/dashboard/invoices") return "Invoices & Subscriptions";
    if (pathname === "/dashboard/payouts") return "Payouts";
    if (pathname === "/dashboard/notifications") return "Notifications";
    return "Dashboard";
  };

  return (
    <header className="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 dark:border-gray-800 bg-secondary">
      <div className="flex flex-1 justify-between px-4 md:px-6">
        <div className="flex flex-1 items-center">
          <button
            type="button"
            className="md:hidden -ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>

          <button
            type="button"
            className="hidden md:inline-flex -ml-0.5 -mt-0.5 h-10 w-10 items-center justify-center rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-[#1A1A1A]"
            onClick={toggleSidebar}
          >
            <span className="sr-only">Toggle sidebar</span>
            <PanelLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="ml-2 md:ml-4">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-200">
              {getCurrentPageTitle()}
            </h1>
          </div>
        </div>

        <div className="ml-4 flex items-center md:ml-6 space-x-3">
          {/* <div className="hidden md:block w-72">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-4 w-4 text-gray-400" aria-hidden="true" />
              </div>
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 text-sm focus-visible:ring-blue-500"
              />
            </div>
          </div> */}

          {/* <NotificationsDropdown /> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex rounded-full bg-gray-100 dark:bg-[#1A1A1A] focus:outline-none">
                <span className="sr-only">Open user menu</span>
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/abstract-user.png" alt="User" />
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-56 bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-[#1A1A1A]"
            >
              <DropdownMenuLabel className="text-gray-900 dark:text-gray-200">
                My Account
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-gray-200 dark:bg-[#1A1A1A]" />
              <DropdownMenuItem
                asChild
                className="text-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#1A1A1A] hover:text-gray-900 dark:hover:text-gray-200"
              >
                <Link href="/dashboard/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-200 dark:bg-[#1A1A1A]" />
              <DropdownMenuItem
                onClick={() => signOut({ callbackUrl: "/auth/login" })}
                className="text-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#1A1A1A] hover:text-gray-900 dark:hover:text-gray-200"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-black bg-opacity-75"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto bg-white dark:bg-[#0A0A0A]">
            <div className="flex items-center justify-between px-4 pt-5 pb-2">
              <Link href="/dashboard" className="flex items-center">
                <span className="text-2xl font-bold text-foreground">JPay</span>
                <span className="ml-1 text-primary font-bold">.</span>
              </Link>
              <button
                type="button"
                className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-md bg-gray-100 dark:bg-[#1A1A1A] p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="px-4 py-3">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search
                    className="h-4 w-4 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-10 text-sm bg-gray-100 dark:bg-[#1A1A1A] border-gray-200 dark:border-[#2A2A2A] text-gray-900 dark:text-gray-200 placeholder:text-gray-500 dark:placeholder:text-gray-400 focus-visible:ring-blue-500"
                />
              </div>
            </div>

            <div className="mt-2 border-t border-gray-200 dark:border-[#1A1A1A] pt-4">
              <nav className="grid gap-y-1 px-4">
                {mobileLinks.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center rounded-md px-3 py-2 text-base font-medium ${
                        isActive
                          ? "bg-accent text-primary"
                          : "text-muted-foreground hover:bg-accent hover:text-foreground"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <item.icon
                        className={`mr-4 h-5 w-5 ${isActive ? "text-primary" : "text-muted-foreground"}`}
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="mt-auto border-t border-gray-200 dark:border-[#1A1A1A] pt-4 px-4">
              <Button
                variant="outline"
                className="w-full justify-start bg-gray-100 dark:bg-[#1A1A1A] text-gray-900 dark:text-gray-200 border-gray-200 dark:border-[#2A2A2A] hover:bg-gray-200 dark:hover:bg-[#2A2A2A] hover:text-gray-900 dark:hover:text-gray-200"
                onClick={() => {
                  setMobileMenuOpen(false);
                  signOut({ callbackUrl: "/auth/login" });
                }}
              >
                <LogOut className="mr-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
                Sign out
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
