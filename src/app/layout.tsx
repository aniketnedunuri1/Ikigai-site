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
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PF15DYQ4G5"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PF15DYQ4G5');
            `,
          }}
        />      </head>
      <body className={inter.className + " bg-white"}>
        <Navbar />
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
