import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sentio — Vision Meets Instinct | Smart HUD Goggles",
  description:
    "Revolutionary smart goggles with transparent OLED HUD, built-in HD camera, and AI crash detection for Motocross and Winter Sports.",
  keywords: [
    "smart goggles",
    "HUD display",
    "motocross goggles",
    "ski goggles",
    "crash detection",
    "ESP32",
    "OLED HUD",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-black text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
