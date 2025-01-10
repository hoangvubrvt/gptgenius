import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GPTGenius",
  description: "GPTGenius - Generate creative content using GPT-3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider afterSignOutUrl="/">
          <html lang="en" data-theme="winter">
              <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                {children}
              </body>
          </html>
      </ClerkProvider>
  );
}
