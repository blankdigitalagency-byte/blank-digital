import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LocalBusinessSchema from "@/components/shared/LocalBusinessSchema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.blankdigital.co.uk"),
  title: {
    default: "Blank Digital | Edinburgh Digital Agency for Local Businesses",
    template: "%s | Blank Digital Edinburgh",
  },
  description:
    "Edinburgh digital agency helping local tradespeople, restaurants and service businesses get professional websites, strong branding and top Google rankings. Free quotes available.",
  keywords: [
    "digital agency Edinburgh",
    "website design Edinburgh",
    "SEO Edinburgh",
    "branding Edinburgh",
    "web design Edinburgh",
    "tradesperson website Edinburgh",
    "local business website Scotland",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.blankdigital.co.uk",
    siteName: "Blank Digital",
    title: "Blank Digital | Edinburgh Digital Agency for Local Businesses",
    description:
      "Edinburgh digital agency helping local tradespeople, restaurants and service businesses get online and grow.",
    images: [
      {
        url: "/images/edinburgh-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Edinburgh skyline, home of Blank Digital agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@blankdigital",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-[#0a0a0a]">
        <LocalBusinessSchema />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
