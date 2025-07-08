import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
// Import Header and Footer components (to be created)
import Header from "./Header";
import Footer from "./Footer";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Ukiyo Habitat | Architectural Firm",
  description: "Ukiyo Habitat is a cross-disciplinary design studio creating sustainable, immersive environments rooted in ecology and driven by innovation.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${cormorant.variable} bg-[#f6f2ed] min-h-screen flex flex-col`}>
        <div className="relative w-full min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
