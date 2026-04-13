import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

import Navbar from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Be Real Global Ministry",
  description:
    "Where truth is lived, love leads correction, and lives are anchored in Christ.",
};

/* Nested diamond + cross — used as corner watermarks */
function DiamondCross({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer diamond */}
      <path d="M160 12L308 160L160 308L12 160Z" stroke="rgb(201,168,76)" strokeWidth="1" />
      {/* Middle diamond */}
      <path d="M160 64L256 160L160 256L64 160Z" stroke="rgb(201,168,76)" strokeWidth="1" />
      {/* Inner diamond */}
      <path d="M160 116L204 160L160 204L116 160Z" stroke="rgb(201,168,76)" strokeWidth="0.8" />
      {/* Cross */}
      <line x1="160" y1="0" x2="160" y2="320" stroke="rgb(201,168,76)" strokeWidth="0.6" />
      <line x1="0" y1="160" x2="320" y2="160" stroke="rgb(201,168,76)" strokeWidth="0.6" />
      {/* Corner dots */}
      <circle cx="160" cy="12" r="2.5" fill="rgb(201,168,76)" />
      <circle cx="308" cy="160" r="2.5" fill="rgb(201,168,76)" />
      <circle cx="160" cy="308" r="2.5" fill="rgb(201,168,76)" />
      <circle cx="12" cy="160" r="2.5" fill="rgb(201,168,76)" />
    </svg>
  )
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${playfair.variable}`}>
      <body className="antialiased bg-brand-dark text-white flex flex-col min-h-screen">

        {/* ── GLOBAL DECORATIVE WATERMARKS ── */}
        <div className="fixed top-0 right-0 w-[520px] h-[520px] pointer-events-none select-none z-[1] opacity-[0.045] -translate-y-1/4 translate-x-1/4">
          <DiamondCross className="w-full h-full" />
        </div>
        <div className="fixed bottom-0 left-0 w-[420px] h-[420px] pointer-events-none select-none z-[1] opacity-[0.035] translate-y-1/4 -translate-x-1/4">
          <DiamondCross className="w-full h-full" />
        </div>

        {/* GLOBAL NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main className="flex-1">
          {children}
        </main>

        {/* GLOBAL FOOTER */}
        <Footer />

      </body>
    </html>
  );
}
