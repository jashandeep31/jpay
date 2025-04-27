"use client";
import type React from "react";
import DashboardSidebar from "@/components/dashboard/sidebar";
import DashboardHeader from "@/components/dashboard/header";
import { SidebarProvider } from "@/context/sidebar-context";
import { useSidebar } from "@/context/sidebar-context";

// This component is needed to access the sidebar context
function DashboardContent({ children }: { children: React.ReactNode }) {
  const { collapsed } = useSidebar();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />
      <div
        className={`flex flex-col flex-1 w-full transition-all duration-300 ease-in-out ${
          collapsed ? "md:ml-16" : "md:ml-64"
        }`}
      >
        <DashboardHeader />
        <main className="flex-1 p-4 md:p-6 overflow-x-hidden">
          <div className="max-w-[1600px] mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <SidebarProvider>
        <DashboardContent>{children}</DashboardContent>
      </SidebarProvider>
    </div>
  );
}
