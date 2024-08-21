import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Footer from "./components/footer";
import { Navbar } from "./components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ivy & Co",
  description: "College merch done right",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className="sm:overflow-hidden bg-white">
          <Navbar></Navbar>
          {children}
          </body>
      <Analytics/>
      {/* <Footer></Footer> */}
    </html>
  );
}
