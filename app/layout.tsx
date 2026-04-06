import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const dmserif = DM_Serif_Display({
  variable: "--font-dmserif",
  subsets: ["latin"],
  weight: ["400"], // load only what you use
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"], // don't load everything blindly
});

export const metadata: Metadata = {
  title: {
    default: "Adarsh Maurya | Full Stack Developer",
    template: "%s | Adarsh Maurya",
  },
  description:
    "Portfolio of Adarsh Maurya — Full-stack developer building scalable web apps with modern technologies.",
  openGraph: {
    title: "Adarsh Maurya Portfolio",
    description: "Explore projects, skills, and experience of Adarsh Maurya.",
    url: "https://yourdomain.com",
    siteName: "Adarsh Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adarsh Maurya Portfolio",
    description: "Full-stack developer portfolio with projects and experience.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmserif.variable} ${inter.variable} antialiased`} >
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
