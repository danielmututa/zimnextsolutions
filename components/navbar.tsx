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

  const services = [
    { name: "Web Development", href: "/web-development" },
    { name: "Mobile Development", href: "/mobile-apps" },
    { name: "iOS Development", href: "/ios-development" },
    { name: "Android Development", href: "/android-development" },
    { name: "Digital Marketing", href: "/marketing" },
    { name: "UI/UX Design", href: "/ui-ux" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-950/70 backdrop-blur-xl border-b border-white/10 py-4 shadow-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 text-white font-bold text-xl hover:opacity-90 transition-opacity"
          >
            <div className="w-36 h-12 relative flex items-center justify-center">
              <img
                src="/Zimnext solutions.png"
                className="h-full w-full object-contain"
                alt="Zimnext Solutions Logo"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-slate-300 hover:text-cyan-400 transition-colors font-medium text-sm"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-slate-300 hover:text-cyan-400 transition-colors font-medium text-sm flex items-center gap-1 cursor-pointer">
                Services
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>

              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-64 bg-slate-900/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/10 py-3 px-2 flex flex-col gap-1 transition-all duration-300"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {services.map((service, i) => (
                    <Link
                      key={i}
                      href={service.href}
                      className="block px-4 py-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/careers"
              className="text-slate-300 hover:text-cyan-400 transition-colors font-medium text-sm"
            >
              Careers
            </Link>
            <Link
              href="/faq"
              className="text-slate-300 hover:text-cyan-400 transition-colors font-medium text-sm"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all font-semibold shadow-lg shadow-blue-500/20 text-sm"
            >
              Contact Us
            </Link>
          </div>

          {/* Hamburger Menu Icon */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-slate-300 hover:bg-white/5 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-2xl border-t border-white/10 shadow-2xl py-4 transition-all duration-300">
          <div className="px-4 space-y-2">
            <Link
              href="/"
              className="block w-full px-4 py-2.5 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div className="border-t border-white/5 my-2"></div>
            <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Our Services
            </p>
            {services.map((service, i) => (
              <Link
                key={i}
                href={service.href}
                className="block w-full px-6 py-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl font-medium text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {service.name}
              </Link>
            ))}
            <div className="border-t border-white/5 my-2"></div>
            <Link
              href="/careers"
              className="block w-full px-4 py-2.5 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              href="/faq"
              className="block w-full px-4 py-2.5 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="pt-2">
              <Link
                href="/contact"
                className="block text-center w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow-lg shadow-blue-500/20 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
