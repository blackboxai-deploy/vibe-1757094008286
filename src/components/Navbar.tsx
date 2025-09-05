"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Book Now", href: "/booking" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-slate-800">Rabha Massage</span>
            <span className="text-sm text-slate-600">Casablanca</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                item.name === "Book Now" 
                  ? "bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 hover:text-white" 
                  : "text-slate-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm">
              <div className="flex flex-col space-y-1">
                <div className="w-5 h-0.5 bg-slate-600"></div>
                <div className="w-5 h-0.5 bg-slate-600"></div>
                <div className="w-5 h-0.5 bg-slate-600"></div>
              </div>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <div className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-emerald-600 py-2 px-4 rounded-md ${
                    item.name === "Book Now" 
                      ? "bg-emerald-600 text-white hover:bg-emerald-700" 
                      : "text-slate-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}