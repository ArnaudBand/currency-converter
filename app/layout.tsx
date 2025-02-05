import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Currency Converter | Live Exchange Rates",
  description:
    "Convert currencies instantly with real-time exchange rates. Swap between USD, EUR, GBP, and more! Currency converter, exchange rates, USD to EUR, live forex rates, currency exchange, money converter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Currency Converter | Live Exchange Rates</title>
        <meta
          name="description"
          content="Convert currencies instantly with real-time exchange rates. Swap between USD, EUR, GBP, and more!"
        />
        <meta
          name="keywords"
          content="currency converter, exchange rates, USD to EUR, live forex rates, currency exchange, money converter"
        />
        <meta name="author" content="Your Website Name" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
