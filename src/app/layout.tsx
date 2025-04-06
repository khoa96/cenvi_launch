import { Inter } from "next/font/google";
import Footer from "@/components/shares/Footer";
import SEO from "../components/shares/SEO";
import Navbar from "@/components/shares/Navbar";
import UnderText from "../components/shares/UnderText";
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
        {/* <Header /> */}
        <Navbar />
        <main>{children}</main>
        <UnderText size={60} text="Miễn phí" />

        <UnderText size={48} text="3 bước" />
        <Footer />
      </body>
    </html>
  );
}
