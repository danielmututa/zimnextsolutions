"use client"

import { useState, useEffect, useRef } from "react"
import { Lightbulb, Layers, Cpu } from "lucide-react"

const pillars = [
  {
    icon: Lightbulb,
    title: "Research & Development",
    desc: "Analysing operational bottlenecks, system constraints, and industry data to map out clean-slate project blueprints before writing code.",
    threshold: 0.20
  },
  {
    icon: Layers,
    title: "Technology Design",
    desc: "Prototyping responsive layouts, graphic systems, and wireframes that guarantee high user engagement and beautiful user interfaces.",
    threshold: 0.55
  },
  {
    icon: Cpu,
    title: "Systems Integration",
    desc: "Plugging in APIs, custom web hooks, backend clouds, payment gateways, and databases without breaking existing system structures.",
    threshold: 0.85
  }
]

export default function InteractivePillars() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
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
    <section ref={containerRef} className="py-20 sm:py-32 bg-slate-950 border-t border-b border-white/5 relative overflow-hidden">

      {/* Starting circle "2" — desktop only */}
      <div className="hidden sm:flex absolute left-1/2 top-4 w-8 h-8 rounded-full border-2 border-sky-400 bg-slate-950 -translate-x-1/2 items-center justify-center z-10 font-bold text-xs text-sky-400 shadow-md">
        2
      </div>

      {/* Vertical scroll track — desktop only */}
      <div className="hidden sm:block absolute left-1/2 top-12 bottom-12 w-0.5 -translate-x-1/2 pointer-events-none">
        <div className="absolute inset-0 border-l-2 border-dashed border-slate-800" />
        <div
          className="absolute top-0 left-0 w-full bg-sky-400 transition-all duration-150"
          style={{ height: `${scrollProgress * 100}%` }}
        />
        <div
          className="absolute left-1/2 w-4 h-4 rounded-full bg-white border-2 border-sky-400 shadow-lg shadow-sky-400/50 -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-100"
          style={{ top: `${scrollProgress * 100}%` }}
        />
        <div
          className="absolute left-1/2 w-2 h-2 rounded-full bg-sky-200 -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-100"
          style={{ top: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Background vector rings */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full min-w-[800px]" viewBox="0 0 1000 1000" fill="none">
          <circle cx="200" cy="500" r="200" stroke="#0284c7" strokeWidth="2" />
          <circle cx="200" cy="500" r="300" stroke="#0369a1" strokeWidth="3" />
          <circle cx="200" cy="500" r="400" stroke="#0c4a6e" strokeWidth="4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">

        {/* Left: Blueprint ring graphic — desktop only */}
        <div className="lg:col-span-5 hidden lg:flex justify-center relative min-h-[400px]">
          <div className="w-[350px] h-[350px] rounded-full border border-sky-500/20 flex items-center justify-center relative">
            <div className="w-[250px] h-[250px] rounded-full border border-sky-500/30 flex items-center justify-center">
              <div className="w-[150px] h-[150px] rounded-full border-2 border-sky-500/40 flex items-center justify-center bg-slate-900/50">
                <Cpu className="h-10 w-10 text-sky-400 animate-pulse" />
              </div>
            </div>
            <div className="absolute top-1/2 left-0 -translate-x-1.5 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-sky-500" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1.5 w-3.5 h-3.5 rounded-full bg-sky-300" />
            <div className="absolute bottom-12 right-12 w-3.5 h-3.5 rounded-full bg-sky-600" />
          </div>
        </div>

        {/* Right: Pillar cards */}
        <div className="lg:col-span-7 space-y-4">
          {pillars.map((pillar, index) => {
            const PillarIcon = pillar.icon
            const isPassed = scrollProgress >= pillar.threshold

            return (
              <div
                key={index}
                className={`flex items-start gap-4 p-5 sm:p-8 rounded-2xl border transition-all duration-500 ${
                  isPassed
                    ? "bg-slate-900 border-sky-500/30 shadow-2xl sm:scale-[1.01]"
                    : "bg-slate-900/40 border-white/5 opacity-60"
                }`}
              >
                {/* Icon badge */}
                <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
                  isPassed
                    ? "bg-sky-500/20 border-sky-500 text-sky-400"
                    : "bg-slate-950 border-white/10 text-slate-500"
                }`}>
                  <PillarIcon className="h-5 w-5" />
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1 space-y-1">
                  <h3 className={`text-base sm:text-xl font-bold leading-snug transition-colors ${
                    isPassed ? "text-sky-400" : "text-white"
                  }`}>
                    {pillar.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}