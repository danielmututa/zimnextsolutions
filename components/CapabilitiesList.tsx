"use client"

import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const capabilities = [
  "Custom Next.js & React single page applications",
  "Native Swift (iOS) & Kotlin (Android) products",
  "Secured Cloud database architectures & API routes",
  "99/100 Lighthouse performance and SEO optimization",
  "Dedicated developer staff support and service plans"
]

const avatarPics = [
  "/Me.jpg",
  "/emmanuel pic.png",
  "/kelvin mutukwa.png",
  "/Untitled-5.png"
]

export default function CapabilitiesList() {
  return (
    <section className="py-24 bg-slate-950 relative border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side Bullets */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-blue-500">Execution</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Our capabilities at a glance</h2>
            <p className="text-slate-400 font-light leading-relaxed max-w-lg">
              We focus on delivering high quality, standards compliant codebases that load fast and adapt to device viewports.
            </p>
          </div>

          <ul className="space-y-4">
            {capabilities.map((item, i) => (
              <li key={i} className="flex gap-3 items-center text-slate-300">
                <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0" />
                <span className="text-base font-light">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Overlapping Avatar Ring */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
          <div className="space-y-4 text-center lg:text-right">
            <div className="flex items-center justify-center lg:justify-end -space-x-4">
              {avatarPics.map((pic, idx) => (
                <div 
                  key={idx} 
                  className="w-20 h-20 rounded-full border-4 border-slate-950 overflow-hidden bg-slate-900 shadow-xl relative transition-transform hover:-translate-y-1.5 duration-300 z-10 hover:z-20"
                >
                  <Image
                    src={pic}
                    alt="Team Avatar"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="space-y-0.5">
              <h4 className="text-lg font-bold text-white">Fullstack Teams</h4>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Zimnext Solutions Staff</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
