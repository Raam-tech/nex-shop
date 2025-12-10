import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NexShop - Modern E-Commerce Platform",
  description: "Your one-stop shop for the latest products and deals. Built with Next.js 14 and cutting-edge technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-slate-900 text-gray-100`}>
        <div className="flex flex-col min-h-screen bg-slate-900">
          <Header />
          <main className="flex-grow bg-slate-900">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

