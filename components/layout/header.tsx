"use client"

import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Mail } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-effect border-b shadow-sm py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container flex items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 z-50 focus-ring rounded-md">
          <div className="bg-primary rounded-full p-1.5 shadow-sm">
            <Mail className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">TempMail</span>
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6">
            <Link href="/inbox" className="text-sm font-medium hover:text-primary transition-colors">
              Inbox
            </Link>
            <Link href="/terms" className="text-sm font-medium hover:text-primary transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm font-medium hover:text-primary transition-colors">
              Privacy
            </Link>
          </nav>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
