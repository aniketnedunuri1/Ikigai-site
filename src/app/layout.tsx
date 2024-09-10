import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "../components/nav";
import { HeroTile } from "../components/hero";
import { Toaster } from "../components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Couture",
  description: "Company & Club Merch Done Right",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className="bg-white">
        <Navbar></Navbar>
        {children}
        <Analytics />
        <Toaster/>
      </body>
    </html>
  );
}
