import type { Metadata } from "next";
import { Urbanist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  description: "this is the my next js learning project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${urbanist.variable} ${geistMono.variable} h-full antialiased`}
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