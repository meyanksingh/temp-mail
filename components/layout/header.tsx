"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Mail, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary focus-ring rounded-md",
              pathname === "/" ? "text-primary" : "text-foreground/80",
            )}
          >
            Home
          </Link>
          <Link
            href="/inbox"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary focus-ring rounded-md",
              pathname === "/inbox" ? "text-primary" : "text-foreground/80",
            )}
          >
            Inbox
          </Link>
          <Link
            href="/api-docs"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary focus-ring rounded-md",
              pathname === "/api-docs" ? "text-primary" : "text-foreground/80",
            )}
          >
            API
          </Link>
          <ModeToggle />
          <Link href="/inbox">
            <Button size="sm" className="rounded-full shadow-sm">
              Get Started
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="focus-ring rounded-full"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 z-40 glass-effect md:hidden flex flex-col items-center justify-center gap-8 transition-all duration-300",
            mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
        >
          <Link
            href="/"
            className={cn(
              "text-lg font-medium focus-ring rounded-md px-2 py-1",
              pathname === "/" ? "text-primary" : "text-foreground/80",
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/inbox"
            className={cn(
              "text-lg font-medium focus-ring rounded-md px-2 py-1",
              pathname === "/inbox" ? "text-primary" : "text-foreground/80",
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            Inbox
          </Link>
          <Link
            href="/api-docs"
            className={cn(
              "text-lg font-medium focus-ring rounded-md px-2 py-1",
              pathname === "/api-docs" ? "text-primary" : "text-foreground/80",
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            API
          </Link>
          <Link href="/inbox" onClick={() => setMobileMenuOpen(false)}>
            <Button size="lg" className="rounded-full shadow-sm mt-4">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

