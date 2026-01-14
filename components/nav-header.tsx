"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"

interface NavHeaderProps {
  currentPage?: "writing" | "case-studies" | "about" | "use-cases" | "home"
}

export function NavHeader({ currentPage }: NavHeaderProps) {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-4xl items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-semibold text-lg text-foreground">techsplot</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-sm">
          <Link
            href="/writing"
            className={
              currentPage === "writing"
                ? "text-accent font-medium"
                : "text-muted-foreground hover:text-foreground transition-colors"
            }
          >
            Writing
          </Link>
          <Link
            href="/use-cases"
            className={
              currentPage === "use-cases"
                ? "text-accent font-medium"
                : "text-muted-foreground hover:text-foreground transition-colors"
            }
          >
            Use Cases
          </Link>
          <Link
            href="/case-studies"
            className={
              currentPage === "case-studies"
                ? "text-accent font-medium"
                : "text-muted-foreground hover:text-foreground transition-colors"
            }
          >
            Case Studies
          </Link>
          <Link
            href="/about"
            className={
              currentPage === "about"
                ? "text-accent font-medium"
                : "text-muted-foreground hover:text-foreground transition-colors"
            }
          >
            About
          </Link>
          <ThemeToggle />
        </nav>
        <div className="flex md:hidden items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
