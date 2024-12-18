import { Github, Twitter, DiscIcon as Discord } from 'lucide-react'
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-primary/20 backdrop-blur-md bg-background/80">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-primary rounded-full blur-sm opacity-50" />
                <div className="relative w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-foreground">S</span>
                </div>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                Suimooth Swap
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              The next generation decentralized exchange built on Sui blockchain. Trade, earn, and grow your crypto assets with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/trade" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Trade
                </Link>
              </li>
              <li>
                <Link href="/pools" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Pools
                </Link>
              </li>
              <li>
                <Link href="/farms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Farms
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Community</h3>
            <div className="flex gap-4">
              <Link
                href="https://twitter.com"
                target="_blank"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-muted hover:bg-primary/20 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="https://discord.com"
                target="_blank"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-muted hover:bg-primary/20 transition-colors"
              >
                <Discord className="w-4 h-4" />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-muted hover:bg-primary/20 transition-colors"
              >
                <Github className="w-4 h-4" />
              </Link>
            </div>
            <div className="pt-4 text-xs text-muted-foreground">
              © 2024 Suimooth Swap. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

