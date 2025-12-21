"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const carouselItems = [
  {
    title: "Web Development",
    description: "Building responsive, high-performance websites that drive results",
    image: "/programmer-home-office-concentrating-finding-bugs-while-he-codes.jpg",
    href: "/web-development",
  },
  {
    title: "Mobile Development",
    description: "Creating seamless mobile experiences across all platforms",
    image: "/mobile-app-development.png",
    href: "/mobile-development",
  },
  {
    title: "iOS Development",
    description: "Native iOS apps with stunning design and performance",
    image: "/ios-iphone-app-development-apple-swift.jpg",
    href: "/ios-development",
  },
  {
    title: "Android Development",
    description: "Powerful Android applications for the world's largest mobile platform",
    image: "/android-app-development-smartphone-kotlin.jpg",
    href: "/android-development",
  },
  {
    title: "Digital Marketing",
    description: "Data-driven strategies to grow your online presence",
    image: "/digital-marketing-analytics-social-media-seo.png",
    href: "/digital-marketing",
  },
  {
    title: "UI/UX Design",
    description: "Beautiful interfaces that users love to interact with",
    image: "/uiux-design-interface-user-experience.jpg",
    href: "/uiux-design",
  },
]

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

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
    <section className="py-20 bg-slate-50">
      <div className="max-w-full">
        <div className="text-center mb-12 px-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 text-balance">Explore Our Expertise</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto text-balance">
            Professional solutions across all platforms
          </p>
        </div>

        <div className="relative">
          {/* Carousel */}
          <div className="relative h-[500px] overflow-hidden">
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                  <h3 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{item.title}</h3>
                  <p className="text-xl md:text-2xl mb-6 text-blue-100 text-balance max-w-2xl">{item.description}</p>
                  <Link href={item.href}>
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
                      View Projects
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all border border-white/30"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all border border-white/30"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-blue-600 w-8" : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
