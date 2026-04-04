import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const DMSansDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codexadarsh- Portfolio",
  description: "Adarsh Maurya's personal portfolio showcasing projects, skills, and experience as a full-stack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${DMSansDisplay.variable} ${inter.variable} antialiased px-4 py-2`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
