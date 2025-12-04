import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Generative UI Guide - Build Interactive Interfaces with Claude",
  description:
    "A comprehensive guide for Claude coding agents to generate rich, interactive HTML experiences instead of markdown walls of text. Based on Google Research.",
  keywords: [
    "generative ui",
    "claude",
    "llm",
    "ai",
    "user interface",
    "html generation",
    "mcp server",
  ],
  authors: [{ name: "Based on Google Research by Leviathan et al." }],
  openGraph: {
    title: "Generative UI Guide",
    description:
      "Build interactive interfaces with Claude using Generative UI techniques",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-zinc-950`}
      >
        <Navigation />
        <main className="pt-24 pb-16">{children}</main>
        <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Based on research by{" "}
                <a
                  href="https://generativeui.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  Google Research
                </a>{" "}
                (Leviathan et al., 2024)
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Guide adapted for Claude by{" "}
                <a
                  href="https://github.com/septapod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  septapod
                </a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
