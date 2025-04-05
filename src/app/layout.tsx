import { Inter } from "next/font/google";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import TopHeader from "@/app/components/TopHeader";
import SEO from "./components/SEO";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cenvi Platform",
  description: "Cenvi Platform description",
  keywords: "Cenvi, Platform, SEO optimized, Marketing",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <SEO />
      <body className={inter.className}>
        <TopHeader />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
