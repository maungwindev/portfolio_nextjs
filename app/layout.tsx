import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeTransition } from "@/components/theme-transition"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Maung Win Portfolio",
  description: "Mobile Developer with 3+ years of experience building and publishing Flutter applications on the Play Store and App Store. Currently expanding into full-stack development with Node.js, Express.js, and modern databases (MongoDB, MySQL, PostgreSQL). Passionate about creating scalable, user-friendly applications, with strong problem-solving skills and a commitment to continuous learning.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <ThemeTransition />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}  