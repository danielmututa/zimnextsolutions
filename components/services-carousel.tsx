"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Code2, Smartphone, ShieldCheck, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const carouselItems = [
  {
    title: "Web Development",
    subtitle: "High-Performance Modern Websites",
    description: "Creating lightning-fast, secure, and beautiful websites using React, Next.js, and modern custom code architectures.",
    image: "/modern-web-development-workspace-code-screen.jpg",
    href: "/web-development",
    tag: "Next.js & React"
  },
  {
    title: "iOS Development",
    subtitle: "Native Apple Mobile Applications",
    description: "Engineering sleek, highly responsive, native Apple iOS applications with Swift and cutting-edge design principles.",
    image: "/ios-iphone-app-development-apple-swift.jpg",
    href: "/ios-development",
    tag: "Swift & SwiftUI"
  },
  {
    title: "Android Development",
    subtitle: "Robust Kotlin Google Apps",
    description: "Developing native Android apps optimized for the world's most popular OS. Fully integrated with modern backend APIs.",
    image: "/android-app-development-smartphone-kotlin.jpg",
    href: "/android-development",
    tag: "Kotlin & Jetpack Compose"
  },
  {
    title: "System Architecture",
    subtitle: "Enterprise Code, Mobile, & Systems",
    description: "Building robust databases, microservices, and distributed backend structures. Scalable code architecture for high load.",
    image: "/space.jpeg",
    href: "/web-development", // Leads to general systems page
    tag: "Backend & Clouds"
  },
  {
    title: "UI/UX Product Design",
    subtitle: "Immersive User Interfaces",
    description: "Crafting modern, glassmorphic layout wireframes and user-experience prototypes that turn visitors into users.",
    image: "/uiux-design-interface-user-experience.jpg",
    href: "/ui-ux",
    tag: "Figma & Interaction"
  },
  {
    title: "Digital Marketing",
    subtitle: "Data-Driven SEO & Growth",
    description: "Optimizing landing pages, search engines, and social media funnels to aggressively scale brand visibility.",
    image: "/baner.jpg",
    href: "/marketing",
    tag: "SEO & Campaigns"
  },
  {
    title: "Professional Team & Staff",
    subtitle: "Experienced Software Specialists",
    description: "A highly collaborative group of developers and designers committed to transforming raw ideas into high-end applications.",
    image: "/about.jpeg",
    href: "/about",
    tag: "Zimnext Experts"
  }
]

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isHovered])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length)
  }

  return (
    <section 
      className="py-24 bg-slate-950 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-400 font-bold text-xs uppercase tracking-wider">
            Our Specialties
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Explore Our Expertise</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
            We focus on clean code, responsive mobile layouts, enterprise systems, and collaborative staff execution.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/40 backdrop-blur-md">
          <div className="relative h-[550px] sm:h-[500px] overflow-hidden">
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out flex flex-col md:flex-row ${
                  index === currentIndex 
                    ? "opacity-100 scale-100 translate-x-0 pointer-events-auto" 
                    : "opacity-0 scale-95 translate-x-4 pointer-events-none"
                }`}
              >
                {/* Image panel */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Category Badge Tag */}
                  <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs font-semibold text-slate-300">
                    {item.tag}
                  </div>
                </div>

                {/* Text Description panel */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full p-8 sm:p-12 flex flex-col justify-center bg-slate-950/60 backdrop-blur-md space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-widest font-bold text-indigo-400">{item.subtitle}</span>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
                    {item.description}
                  </p>
                  <div className="pt-2">
                    <Link href={item.href}>
                      <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl px-6 shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-slate-950/60 hover:bg-slate-950 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 transition-all hover:scale-105 hover:border-white/30 cursor-pointer z-20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-slate-950/60 hover:bg-slate-950 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 transition-all hover:scale-105 hover:border-white/30 cursor-pointer z-20"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Indicators Dots */}
        <div className="flex justify-center gap-2.5 mt-8">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex ? "bg-blue-600 w-8" : "bg-slate-800 w-2.5 hover:bg-slate-700"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
