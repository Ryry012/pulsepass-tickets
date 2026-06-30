import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "PulsePass | Live Event Tickets",
  description: "Discover concerts, sports, comedy, festivals, and theater tickets near you.",
  openGraph: { title: "PulsePass | Live Event Tickets", description: "Find your next live moment with PulsePass.", type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={inter.variable}>{children}</body></html>;
}
