import type { Metadata } from "next";
import { DM_Sans, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const display = DM_Sans({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Ahsan — Software Engineer & UI Designer",
  description:
    "Portfolio of Muhammad Ahsan, a Software Engineer and UI Designer based in Wah, Pakistan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}