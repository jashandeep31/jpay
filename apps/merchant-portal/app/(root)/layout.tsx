import { Footer } from "@/components/footer";
import React from "react";
import { Header } from "@/components/header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50">
        <Header />
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
