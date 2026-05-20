"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

const members = [
  {
    name: "Daniel Mututa",
    role: "CEO & Lead Developer",
    image: "/Me.jpg",
    detail: "Over 8 years of software architecture and fullstack system design experience.",
    threshold: 0.12
  },
  {
    name: "Emmanuel Mututa",
    role: "CTO & Lead Developer",
    image: "/emmanuel pic.png",
    detail: "Expert in scalable database architecture, server security, and API networks.",
    threshold: 0.38
  },
  {
    name: "Kelvin Mutukwa",
    role: "Head of Design",
    image: "/kelvin mutukwa.png",
    detail: "UX/UI expert crafting beautiful layouts, wireframes, and design languages.",
    threshold: 0.64
  },
  {
    name: "Sean Manjengwa",
    role: "Marketing Director",
    image: "/Untitled-5.png",
    detail: "Leading organic client acquisition strategy, SEO, and social funnels.",
    threshold: 0.90
  }
]

export default function TeamTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      
      const rect = containerRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      
      // Calculate how much of the timeline container has entered and moved through the viewport
      const totalHeight = rect.height
      const scrolled = viewportHeight / 2 - rect.top
      
      let progress = scrolled / totalHeight
      progress = Math.min(Math.max(progress, 0), 1)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={containerRef} className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative">
        
        {/* Title */}
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight max-w-2xl mx-auto leading-tight text-balance">
            Our unique combination of industry and technology experts
          </h2>
          <p className="text-lg text-slate-400 font-light max-w-md mx-auto">
            Experienced engineers and UI designers collaborating to deliver software.
          </p>
        </div>

        {/* Vertical Timeline Stack */}
        <div className="relative space-y-28">
          
          {/* Big starting circle at the top of the line */}
          <div className="absolute left-[39px] sm:left-1/2 -top-16 w-8 h-8 rounded-full border-2 border-white bg-slate-950 -translate-x-1/2 flex items-center justify-center z-10 font-bold text-xs text-white shadow-md">
            3
          </div>

          {/* Inner Track container (White theme) */}
          <div className="absolute left-[39px] sm:left-1/2 -top-8 bottom-0 w-0.5 -translate-x-1/2 pointer-events-none">
            {/* Dashed line track */}
            <div className="absolute inset-0 border-l-2 border-dashed border-slate-800" />
            
            {/* Active progress track */}
            <div 
              className="absolute top-0 left-0 w-full bg-white transition-all duration-150"
              style={{ height: `${scrollProgress * 100}%` }}
            />

            {/* Scroll-Linked Moving Tracking Dots */}
            <div 
              className="absolute left-1/2 w-4 h-4 rounded-full bg-white border-2 border-white shadow-lg shadow-white/50 -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-100"
              style={{ top: `${scrollProgress * 100}%` }}
            />
            <div 
              className="absolute left-1/2 w-2 h-2 rounded-full bg-slate-300 -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-100"
              style={{ top: `${scrollProgress * 100}%` }}
            />
          </div>

          {members.map((member, index) => {
            const isEven = index % 2 === 0
            const isPassed = scrollProgress >= member.threshold

            return (
              <div 
                key={index} 
                className={`flex flex-col sm:flex-row items-start sm:items-center w-full relative ${
                  isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                
                {/* Timeline Node Image Frame */}
                <div 
                  className={`absolute left-0 sm:left-1/2 top-0 sm:top-1/2 -translate-y-0 sm:-translate-y-1/2 -translate-x-0 sm:-translate-x-1/2 w-20 h-20 rounded-full border-4 overflow-hidden bg-slate-900 shadow-xl z-10 shrink-0 transition-all duration-500 ${
                    isPassed 
                      ? "border-white scale-110 shadow-2xl ring-4 ring-white/10" 
                      : "border-slate-800 scale-100"
                  }`}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover scale-105"
                    />
                  </div>
                </div>

                {/* Content Panel */}
                <div className="w-full sm:w-[45%] pl-24 sm:pl-0 space-y-2">
                  <div className={`sm:text-slate-300 space-y-1 transition-all duration-500 ${
                    isEven ? "sm:text-right sm:pr-8" : "sm:text-left sm:pl-8"
                  } ${isPassed ? "opacity-100" : "opacity-40"}`}>
                    <span className={`text-xs uppercase tracking-widest font-bold transition-colors ${
                      isPassed ? "text-white font-semibold" : "text-slate-500"
                    }`}>
                      {member.role}
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{member.name}</h3>
                    <p className="text-slate-400 text-sm font-light leading-relaxed">
                      {member.detail}
                    </p>
                  </div>
                </div>

                {/* Empty spacer for grid alignment */}
                <div className="hidden sm:block w-[45%]" />

              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}
