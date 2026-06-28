import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const outfit = Outfit({subsets:['latin'],variable:'--font-sans'});


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
      lang="en">
      <body className={`${outfit.variable} min-h-full flex flex-col`}>
        <header>
        iBuiltThis
        </header>
        {children}
        
       
        
        <footer>
          IbuiltThis &copy; 2026. All rights reserved.
        </footer>
      </body>
    </html>
  );
}