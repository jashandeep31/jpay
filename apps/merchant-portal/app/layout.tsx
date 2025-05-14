import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";
import { SolanaWalletAdapter } from "@/components/solana-wallet-adapter";
import { ThemeProvider } from "@/components/theme-provider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JPay Merchant Portal | Solana Payment Gateway",
  description:
    "JPay is a fast, secure, and low-fee payment gateway built on the Solana blockchain, designed for merchants, developers, and businesses worldwide.",
  keywords: [
    "JPay",
    "Solana payment gateway",
    "blockchain payments",
    "crypto payments",
    "merchant portal",
    "Solana merchants",
    "fast crypto transactions",
    "low-fee blockchain payments",
    "web3 payments",
    "accept crypto payments",
  ],
  authors: [{ name: "JPay Team", url: "https://merchant.jashan.cfd" }],
  creator: "JPay",
  applicationName: "JPay Merchant Portal",
  generator: "Next.js",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "JPay Merchant Portal | Solana Payment Gateway",
    description:
      "Start accepting Solana-based crypto payments with JPay. A secure, low-cost solution for modern businesses and merchants.",
    url: "https://merchant.jashan.cfd",
    siteName: "JPay Merchant Portal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JPay Merchant Portal | Solana Payment Gateway",
    description:
      "Accept fast and secure payments with Solana. JPay empowers merchants to integrate blockchain payments with ease.",
    creator: "@jashandeep31",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SolanaWalletAdapter>
            <SessionProvider>{children}</SessionProvider>
            <Toaster />
          </SolanaWalletAdapter>
        </ThemeProvider>
      </body>
    </html>
  );
}
