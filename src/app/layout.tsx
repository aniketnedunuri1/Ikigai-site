import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "../components/nav";
import { Toaster } from "../components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Couture | Premium Company & Club Merch",
  description:
    "High quality 400 GSM+ merchandise at Custom-Ink prices with full customization, no design restrictions, and in-house white-glove service—without the markups.",
  keywords: [
    "couture",
    "ikigai",
    "clothing",
    "merch",
    "company merch",
    "club merch",
    "high-quality clothing",
    "fashion",
    "apparel",
  ],
  openGraph: {
    title: "Couture | Premium Company & Club Merch",
    description:
      "High quality 400 GSM+ merchandise at Custom-Ink prices with full customization, no design restrictions, and in-house white-glove service—without the markups.",
    url: "https://couturebyikigai.com",
    siteName: "Couture",
    images: [
      {
        url: "https://couturebyikigai.com/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Couture - Ikigai Clothing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",
    creator: "@your_twitter_handle",
    title: "Couture | Premium Custom Company & Club Merch",
    description:
      "Discover couture and ikigai-inspired clothing for your company and club. High-quality merch from top suppliers.",
    images: ["https://couturebyikigai.com/thumbnail.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9WVFLS4CL0"></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-9WVFLS4CL0');
            `,
          }}
        />
        {/* Meta tags for SEO */}
        <meta
          name="keywords"
          content="couture, ikigai, clothing, merch, company merch, club merch, high-quality clothing, fashion, apparel"
        />
        <meta name="robots" content="index, follow, nocache" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Couture",
              url: "https://yourwebsite.com",
              logo: "https://yourwebsite.com/logo.png",
              sameAs: [
                "https://www.facebook.com/yourpage",
                "https://www.instagram.com/yourprofile",
                "https://www.twitter.com/yourhandle",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-white`}>
        <Navbar />
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
