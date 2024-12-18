import type { Metadata } from "next"
import { Space_Grotesk } from 'next/font/google'
import "./globals.css"
import { cn } from "@/lib/utils"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Suimooth Swap - Next Generation DEX",
  description: "Trade, earn, and grow your crypto assets with confidence on Sui blockchain",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        spaceGrotesk.className,
        "min-h-screen bg-background font-sans antialiased"
      )}>
        {children}
      </body>
    </html>
  )
}

