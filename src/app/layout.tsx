import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/components/TopNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Historical Group Chat",
  description:
    "Famous figures argue real events in real time. History as a group chat — with a truth layer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-dvh flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
        <TopNav />
        <main className="flex-1 min-h-0 overflow-y-auto">{children}</main>
      </body>
    </html>
  );
}
