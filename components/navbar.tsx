"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [closeTimer, setCloseTimer] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMouseEnter = () => {
    if (closeTimer) {
      clearTimeout(closeTimer)
      setCloseTimer(null)
    }
    setIsServicesOpen(true)
  }

  const handleMouseLeave = () => {
    const timer = setTimeout(() => {
      setIsServicesOpen(false)
    }, 300)
    setCloseTimer(timer)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/10 backdrop-blur-xl shadow-2xl border-b border-white/20" : "bg-white/5 backdrop-blur-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 text-white font-bold text-xl hover:opacity-90 transition-opacity"
          >
            <div className="w-35  h-14 relative  backdrop-blur-md border-none flex items-center justify-center shadow-2xl border border-white/30">
           
            <img src="/Zimnext solutions.png" className="h-full w-full absolute object-cover" alt="" />
            </div>
        
          </Link>

          {/* Desktop Navigation - Cleaner with dropdown */}
          <div className="hidden lg:flex items-center gap-8">
            



            <div className="relative group" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button className="text-blue-400 hover:text-blue-300 transition-colors font-medium drop-shadow-lg text-base flex items-center gap-1">
                Portfolio
                <ChevronDown className="h-4 w-4" />
              </button>

              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 bg-blue-600/95 backdrop-blur-xl rounded-xl shadow-2xl border border-blue-400/30 py-2"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href="/web-development"
                    className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/10 transition-colors text-sm"
                  >
                    Web Development
                  </Link>
                  <Link
                    href="/mobile-apps"
                    className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/10 transition-colors text-sm"
                  >
                    Mobile Development
                  </Link>
                  <Link
                    href="/ios-development"
                    className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/10 transition-colors text-sm"
                  >
                    iOS Development
                  </Link>
                  <Link
                    href="/android-development"
                    className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/10 transition-colors text-sm"
                  >
                    Android Development
                  </Link>
                  <Link
                    href="/marketing"
                    className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/10 transition-colors text-sm"
                  >
                    Digital Marketing
                  </Link>
                  <Link
                    href="/ui-ux"
                    className="block px-4 py-2.5 text-white/90 hover:text-white hover:bg-white/10 transition-colors text-sm"
                  >
                    UI/UX Design
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/careers"
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium drop-shadow-lg text-base"
            >
              Careers
            </Link>
            <Link
              href="/faq"
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium drop-shadow-lg text-base"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-blue-600/80 backdrop-blur-md text-white rounded-full hover:bg-blue-600 transition-all font-medium drop-shadow-lg border border-blue-400/30 text-base"
            >
              Contact
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-blue-400 hover:bg-blue-600/20 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/10 backdrop-blur-xl border-t border-white/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* <Link
              href="/"
              className="block w-full text-left px-3 py-2 text-blue-400 hover:bg-white/20 rounded-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link> */}
            <Link
              href="/web-development"
              className="block w-full text-left px-3 py-2 text-black hover:bg-white/20 rounded-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Web Development
            </Link>
            <Link
              href="/mobile-apps"
              className="block w-full text-left px-3 py-2 text-black hover:bg-white/20 rounded-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Mobile Development
            </Link>
            <Link
              href="/ios-development"
              className="block w-full text-left px-3 py-2 text-blak hover:bg-white/20 rounded-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              iOS Development
            </Link>
            <Link
              href="/android-development"
              className="block w-full text-left px-3 py-2 text-black hover:bg-white/20 rounded-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Android Development
            </Link>
            <Link
              href="/marketing"
              className="block w-full text-left px-3 py-2 text-black hover:bg-white/20 rounded-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Digital Marketing
            </Link>
            <Link
              href="/ui-ux"
              className="block w-full text-left px-3 py-2 text-black hover:bg-white/20 rounded-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              UI/UX Design
            </Link>
            <Link
              href="/careers"
              className="block w-full text-left px-3 py-2 text-black hover:bg-white/20 rounded-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              href="/faq"
              className="block w-full text-left px-3 py-2 text-black hover:bg-white/20 rounded-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="block w-full text-left px-3 py-2 text-black hover:bg-white/20 rounded-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
