"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowRight, Globe, Smartphone, ShieldCheck, Paintbrush } from "lucide-react"
import Link from "next/link"

const solutionItems = [
  {
    num: "01",
    title: "Web Applications",
    desc: "Bespoke web platforms built using React, Next.js, and Node.js for extreme speed and robustness.",
    icon: Globe,
    href: "/web-development",
    threshold: 0.15
  },
  {
    num: "02",
    title: "Mobile Development",
    desc: "Custom iOS and Android solutions leveraging Swift, Kotlin, and Flutter frameworks.",
    icon: Smartphone,
    href: "/mobile-apps",
    threshold: 0.40
  },
  {
    num: "03",
    title: "System Integration",
    desc: "Connecting enterprise clouds, data pipelines, APIs, and microservices securely.",
    icon: ShieldCheck,
    href: "/web-development",
    threshold: 0.65
  },
  {
    num: "04",
    title: "UI/UX & Brand Design",
    desc: "Figma wireframes, visual systems, and user flows designed to capture and retain customers.",
    icon: Paintbrush,
    href: "/ui-ux",
    threshold: 0.90
  }
]

export default function SolutionsList() {
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
    <section ref={containerRef} className="py-20 sm:py-32 bg-slate-950/90 relative overflow-visible">

      {/* Starting circle — desktop only */}
      <div className="hidden sm:flex absolute left-1/2 top-[-16px] w-8 h-8 rounded-full border-2 border-blue-500 bg-slate-950 -translate-x-1/2 items-center justify-center z-30 font-bold text-xs text-blue-400 shadow-lg">
        1
      </div>

      {/* Vertical scroll track — desktop only */}
      <div className="hidden sm:block absolute left-1/2 top-[16px] bottom-12 w-0.5 -translate-x-1/2 pointer-events-none">
        {/* Dashed background track */}
        <div className="absolute inset-0 border-l-2 border-dashed border-slate-800" />

        {/* Active fill */}
        <div
          className="absolute top-0 left-0 w-full bg-blue-600 transition-all duration-150"
          style={{ height: `${scrollProgress * 100}%` }}
        />

        {/* Moving dot — outer */}
        <div
          className="absolute left-1/2 w-4 h-4 rounded-full bg-white border-2 border-blue-500 shadow-lg shadow-blue-500/50 -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-100"
          style={{ top: `${scrollProgress * 100}%` }}
        />
        {/* Moving dot — inner */}
        <div
          className="absolute left-1/2 w-2 h-2 rounded-full bg-blue-300 -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-100"
          style={{ top: `${scrollProgress * 100}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start relative z-10">

        {/* Left: Section intro */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-36">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Move your industry <br />
            forward.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-light leading-relaxed max-w-sm">
            We partner with businesses to architect, build, and optimize software systems that drive digital growth.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-800 hover:border-blue-500 text-slate-200 hover:text-white rounded-full bg-slate-900/50 hover:bg-slate-900 transition-all font-semibold"
            >
              Request a proposal
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Right: Cards */}
        <div className="lg:col-span-7 space-y-4">
          {solutionItems.map((item, index) => {
            const IconComponent = item.icon
            const isPassed = scrollProgress >= item.threshold
            return (
              <Link
                key={index}
                href={item.href}
                className={`group flex items-start gap-4 p-5 sm:p-8 rounded-2xl transition-all duration-500 border ${
                  isPassed
                    ? "bg-slate-900 border-blue-500/30 shadow-2xl sm:scale-[1.01]"
                    : "bg-slate-900/40 border-white/5 opacity-60"
                }`}
              >
                {/* Number badge */}
                <span className={`shrink-0 text-sm font-bold font-mono w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
                  isPassed
                    ? "bg-blue-500/20 border-blue-500 text-blue-400"
                    : "bg-slate-950 border-white/10 text-slate-500"
                }`}>
                  {item.num}
                </span>

                {/* Text content */}
                <div className="min-w-0 flex-1 space-y-1">
                  <div className="flex items-center gap-2.5">
                    <IconComponent className={`h-5 w-5 shrink-0 transition-colors ${
                      isPassed ? "text-blue-400" : "text-slate-500"
                    }`} />
                    <h3 className={`text-base sm:text-xl font-bold transition-colors leading-snug ${
                      isPassed ? "text-blue-400" : "text-white"
                    }`}>
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Arrow */}
                <div className={`shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                  isPassed
                    ? "border-blue-500/50 text-white"
                    : "border-slate-800 text-slate-500"
                }`}>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            )
          })}
        </div>

      </div>
    </section>
  )
}