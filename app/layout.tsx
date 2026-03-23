import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/ui/header"
import { inter } from "@/lib/fonts"

export const metadata: Metadata = {
  title: "FlavorScan",
  description: "Scan and analyze your food instantly",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}