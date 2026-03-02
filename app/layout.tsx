import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Great_Vibes } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Expose font families as CSS variables so Tailwind's `font-*` utilities can use them.
const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"], variable: "--font-serif" })

export const metadata: Metadata = {
  title: "Claud's Digital Journal & Scrapbook",
  description:
    "A personal digital journal and scrapbook — fashion, hobbies, events, life moments, and adventures. Welcome to my little corner of the internet.",
  keywords: [
    "blog",
    "journal",
    "scrapbook",
    "fashion",
    "hobbies",
    "travel",
    "lifestyle",
    "digital diary",
  ],
  openGraph: {
    title: "Claud's Digital Journal & Scrapbook",
    description:
      "A personal digital journal and scrapbook — fashion, hobbies, events, life moments, and adventures.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claud's Digital Journal & Scrapbook",
    description:
      "A personal digital journal and scrapbook — fashion, hobbies, events, life moments, and adventures.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geist.variable} ${geistMono.variable} ${greatVibes.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
