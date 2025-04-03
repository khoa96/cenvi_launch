import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopHeader from "./components/TopHeader";
import SEO from "./components/SEO";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cenvi Platform",
  description: "Cenvi Platform description",
  keywords: "Cenvi, Platform, SEO optimized, Marketing",
};

interface LayoutProps {
  title: string;
  description: string;
  keywords: string;
  children: React.ReactNode;
}

export default function RootLayout({
  children,
  title,
  description,
  keywords,
}: LayoutProps) {
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
