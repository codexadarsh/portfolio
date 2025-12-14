import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LightRays from "@/components/LightRays";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "codexadarsh- Portfolio",
  description: "this is the personal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased px-4`}
      >
        {/* <div className="absolute inset-0 top-0 -z-3">
          <LightRays
            raysOrigin="top-center"
            raysColor="#6366f1"
            raysSpeed={1}
            lightSpread={0.8}
            rayLength={0.5}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
          />
        </div> */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
