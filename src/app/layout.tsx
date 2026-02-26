import type { Metadata } from "next";
import { Geist, Geist_Mono, Imbue, Unna } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const imbue = Imbue({
  variable: "--font-imbue",
  subsets:["latin"],
})

const unna = Unna({
  variable: "--font-unna",
  subsets:["latin"],
  weight: ["400" , "700"],
})

export const metadata: Metadata = {
  title: "E Advocacia",
  description: "Escritório de advocacia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${imbue.variable} ${unna.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
