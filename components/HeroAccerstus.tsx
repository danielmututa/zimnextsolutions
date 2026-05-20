"use client"

import { useState, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"

export default function HeroAccerstus() {
  const [heroScroll, setHeroScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const heroHeight = window.innerHeight || 800
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

  // Calculate coordinates for moving dots on segment paths
  let dot1X = 280
  let dot1Y = 40
  let dot2X = 360
  let dot2Y = 90
  let dot3X = 120
  let dot3Y = 110

  if (heroScroll <= 0.7) {
    const p = heroScroll / 0.7
    dot1X = 280 + (200 - 280) * p
    dot1Y = 40 + (180 - 40) * p

    dot2X = 360 + (200 - 360) * p
    dot2Y = 90 + (180 - 90) * p

    dot3X = 120 + (200 - 120) * p
    dot3Y = 110 + (180 - 110) * p
  } else {
    const p = (heroScroll - 0.7) / 0.3
    dot1X = 200
    dot1Y = 180 + (260 - 180) * p

    dot2X = 200
    dot2Y = 180 + (260 - 180) * p

    dot3X = 200
    dot3Y = 180 + (260 - 180) * p
  }

  return (
    <section className="relative w-full pt-44 pb-0 flex items-center justify-center bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side Content */}
        <div className="lg:col-span-6 text-left space-y-8 pb-12 lg:pb-0">
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
        <div className="lg:col-span-6 w-full flex justify-center relative min-h-[580px] self-stretch">
          <div className="relative w-[450px] min-h-[580px] flex justify-center">
            
            {/* Dashed connector line that runs from the bottom of the logo circle to the bottom of the Hero section */}
            <div className="absolute left-1/2 top-[292px] bottom-0 w-0.5 border-l-2 border-dashed border-slate-800 -translate-x-1/2 pointer-events-none z-0" />
            
            {/* SVG Visual Graphic container */}
            <svg 
              className="w-full h-[400px] absolute top-0 left-0 pointer-events-none z-10" 
              viewBox="0 0 400 400" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Branching SVG Paths (Merging at 200, 180) */}
              <line x1="280" y1="40" x2="200" y2="180" stroke="#1e40af" strokeWidth="4" strokeLinecap="round" />
              <line x1="360" y1="90" x2="200" y2="180" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" />
              <line x1="120" y1="110" x2="200" y2="180" stroke="#60a5fa" strokeWidth="4" strokeLinecap="round" />
              
              {/* Single connecting line from merge node to the top of the big circle */}
              <line x1="200" y1="180" x2="200" y2="260" stroke="#1d4ed8" strokeWidth="5" strokeLinecap="round" />
              
              {/* Node base dots */}
              <circle cx="280" cy="40" r="10" fill="#1e40af" />
              <circle cx="360" cy="90" r="12" fill="#3b82f6" />
              <circle cx="120" cy="110" r="10" fill="#60a5fa" />
              <circle cx="200" cy="180" r="8" fill="#1d4ed8" />

              {/* Scroll linked moving dots (Merging and traveling down the single path) */}
              <circle cx={dot1X} cy={dot1Y} r="6" fill="#60a5fa" />
              <circle cx={dot2X} cy={dot2Y} r="7" fill="#ffffff" />
              <circle cx={dot3X} cy={dot3Y} r="6" fill="#3b82f6" />
            </svg>

            {/* Central big circle containing the logo, aligned directly below the single connection line */}
            <div 
              style={{ top: "292px" }}
              className={`absolute w-72 h-72 md:w-80 md:h-80 rounded-full border-4 bg-white p-8 shadow-2xl flex items-center justify-center z-20 transition-all duration-500 ${
                heroScroll >= 0.95 ? "border-blue-500 scale-105 shadow-blue-500/20" : "border-slate-800"
              }`}
            >
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
      </div>
    </section>
  )
}
