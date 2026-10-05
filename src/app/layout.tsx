import type { Metadata } from "next";
import { Nunito } from "next/font/google";
const heading = Nunito({ subsets: ["latin"], variable: "--font-nunito", weight: ["400","600","700","800"] });
const body = heading;
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AiAssistant } from "@/components/AiAssistant";
import { StickyMobileCta } from "@/components/StickyMobileCta";

export const metadata: Metadata = { title: "SpickHome Clean", description: "Demo storefront" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-style="soft-neumorphism">
      <body className={`${heading.variable} ${body.variable} antialiased pb-20 md:pb-0`}>
        <CartProvider>
          <WishlistProvider>
            <Header />
            {children}
            <Footer />
            <AiAssistant />
            <StickyMobileCta primaryHref="/quiz" primaryLabel="Find your clean rhythm" />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
