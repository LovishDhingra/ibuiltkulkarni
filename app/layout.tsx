import type { Metadata } from "next";
import { Urbanist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "I built kulkarni",
  description: "this is the mtrtrtry next js learning project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", urbanist.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className={`${urbanist.variable} min-h-full flex flex-col`}>
        <header className={`${urbanist.variable} bg-gray-100 p-4`}>
        header
        </header>
        
        <main className="flex-1">{children}</main>
        
        <footer className={`${urbanist.variable} bg-gray-100 p-4`}>
       footer
        </footer>
      </body>
    </html>
  );
}