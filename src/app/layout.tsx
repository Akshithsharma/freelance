import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LiveChat from "@/components/sections/LiveChat";
import { SITE_CONFIG } from "@/data/site";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | Full-Stack Developer & AI Solutions`,
  description: SITE_CONFIG.tagline,
  keywords: ["freelance developer", "next.js developer", "react developer", "full stack developer", "AI solutions", "web development india", "hire developer"],
  authors: [{ name: SITE_CONFIG.name }],
  openGraph: {
    title: `${SITE_CONFIG.name} | Full-Stack Developer`,
    description: SITE_CONFIG.tagline,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <LiveChat />
      </body>
    </html>
  );
}
