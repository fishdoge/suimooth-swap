"use client"
import { ConnectButton } from '@mysten/dapp-kit';
import { Button } from "@/components/ui/button"
import { WalletIcon, Menu } from 'lucide-react'
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Banner() {
  return (
    <div className="glass-effect border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Navigation */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-float">
                  <span className="text-lg font-bold text-white text-glow">S</span>
                </div>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
                Suimooth Swap
              </span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/trade" className="text-sm text-white/70 hover:text-white transition-colors">
                Trade
              </Link>
              <Link href="/pools" className="text-sm text-white/70 hover:text-white transition-colors">
                Pools
              </Link>
              <Link href="/farms" className="text-sm text-white/70 hover:text-white transition-colors">
                Farms
              </Link>

            </nav>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 ">
            {/* <Button
              variant="outline"
              className="hidden md:flex gap-2 group relative overflow-hidden neon-border w-[120px] bg-black"
            > */}
              <ConnectButton className="reset-style" />
            {/* </Button> */}

            {/* Mobile Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden neon-border">
                  <Menu className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 glass-effect">
                <DropdownMenuItem>
                  <Link href="/trade" className="flex items-center w-full">
                    Trade
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/pools" className="flex items-center w-full">
                    Pools
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/farms" className="flex items-center w-full">
                    Farms
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Button variant="outline" className="w-full gap-2 neon-border">
                    <WalletIcon className="w-4 h-4" />
                    Connect Wallet
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  )
}

