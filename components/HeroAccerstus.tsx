"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export default function HeroAccerstus() {
  const [heroScroll, setHeroScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const heroHeight = window.innerHeight || 800
      // Calculate scroll progress from 0 to 1 within the Hero height
      const progress = Math.min(scrolled / heroHeight, 1)
      setHeroScroll(progress)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScrollToContact = () => {
    const contactSec = document.getElementById("contact-section")
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Calculate coordinates for moving dots on straight line paths
  // Line 1: from (280, 40) to (200, 215)
  const dot1X = 280 + (200 - 280) * heroScroll
  const dot1Y = 40 + (215 - 40) * heroScroll

  // Line 2: from (360, 90) to (200, 215)
  const dot2X = 360 + (200 - 360) * heroScroll
  const dot2Y = 90 + (215 - 90) * heroScroll

  // Line 3: from (120, 110) to (200, 215)
  const dot3X = 120 + (200 - 120) * heroScroll
  const dot3Y = 110 + (215 - 110) * heroScroll

  return (
    <section className="relative w-full min-h-screen pt-36 pb-20 flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side Content */}
        <div className="lg:col-span-6 text-left space-y-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] text-balance">
            Technology is <br />
            our how. And <br />
            <span className="text-blue-500">people</span> are our <br />
            why.
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-lg font-light text-pretty leading-relaxed">
            At Zimnext, we believe technology is only as good as the connections it makes. We build custom software systems to empower people.
          </p>

          <div className="pt-4">
            <button
              onClick={handleScrollToContact}
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-slate-700 hover:border-blue-500 text-slate-200 hover:text-white rounded-full bg-transparent hover:bg-blue-900/10 font-medium transition-all duration-300 group cursor-pointer"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Side Visual Graphic */}
        <div className="lg:col-span-6 w-full flex justify-center lg:justify-end relative min-h-[450px]">
          {/* Custom SVG line branch connecting to circle */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg 
              className="w-full h-full max-w-[450px]" 
              viewBox="0 0 400 400" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Branching SVG Paths */}
              <line x1="280" y1="40" x2="200" y2="215" stroke="#1e40af" strokeWidth="4" strokeLinecap="round" />
              <line x1="360" y1="90" x2="200" y2="215" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" />
              <line x1="120" y1="110" x2="200" y2="215" stroke="#60a5fa" strokeWidth="4" strokeLinecap="round" />
              <line x1="200" y1="215" x2="200" y2="270" stroke="#1d4ed8" strokeWidth="5" strokeLinecap="round" />
              
              {/* Node base dots */}
              <circle cx="280" cy="40" r="10" fill="#1e40af" />
              <circle cx="360" cy="90" r="12" fill="#3b82f6" />
              <circle cx="120" cy="110" r="10" fill="#60a5fa" />

              {/* Scroll linked moving dots (Two active dots sliding down the lines) */}
              <circle cx={dot1X} cy={dot1Y} r="6" fill="#60a5fa" className="shadow-lg" />
              <circle cx={dot2X} cy={dot2Y} r="7" fill="#ffffff" className="shadow-lg" />
              <circle cx={dot3X} cy={dot3Y} r="6" fill="#3b82f6" className="shadow-lg" />
            </svg>
          </div>

          {/* Central round container containing the logo instead of user picture */}
          <div className={`absolute top-[215px] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-[125px] w-56 h-56 rounded-full border-4 bg-white p-4 shadow-2xl flex items-center justify-center z-10 transition-all duration-500 ${
            heroScroll >= 0.9 ? "border-blue-500 scale-105" : "border-slate-800"
          }`}>
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src="/Zimnext solutions.png"
                alt="Zimnext Solutions Logo"
                className="object-contain max-h-full max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
