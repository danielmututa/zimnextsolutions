"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const showcases = [
  {
    category: "Web Platforms",
    title: "Next-gen web engineering built for high-performance scale.",
    image: "/modern-web-development-workspace-code-screen.jpg",
    href: "/web-development"
  },
  {
    category: "Mobile Apps & UI",
    title: "Native interfaces designed for maximum user engagement.",
    image: "/uiux-design-interface-user-experience.jpg",
    href: "/mobile-apps"
  }
]

export default function ShowcaseGrid() {
  return (
    <section className="py-24 bg-slate-950/80 relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-16">
        
        {/* Header */}
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-blue-500">Highlights</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Recent Implementations</h2>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {showcases.map((showcase, index) => (
            <Link 
              key={index} 
              href={showcase.href} 
              className="group block space-y-6"
            >
              {/* Image Frame */}
              <div className="relative h-80 w-full overflow-hidden rounded-3xl bg-slate-900 border border-white/10">
                <Image
                  src={showcase.image}
                  alt={showcase.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40" />
              </div>

              {/* Text info */}
              <div className="space-y-3">
                <div className="inline-block px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs font-semibold text-slate-300">
                  {showcase.category}
                </div>
                <h3 className="text-2xl font-bold text-white leading-snug group-hover:text-blue-400 transition-colors flex items-center gap-2">
                  {showcase.title}
                  <ArrowUpRight className="h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
