"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from 'next/image';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative w-full h-[500px] lg:h-[600px] xl:min-h-screen flex items-center justify-center overflow-hidden"
      // style={{
      //   backgroundImage:
      //     "url(/placeholder.svg?height=1080&width=1920&query=abstract+tech+code+programming+background+dark+blue)",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}

      
    >



     
      <div className="relative top-0  inset-0 bg-slate-900/80 backdrop-blur-sm" />
<img src="/586b010189e55d7737bbedba7ef32690.jpg" className="h-full w-full object-cover absolute" alt="" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      {/* sm:px-6 lg:px-8 py-20 */}

      <div className="absolute bg-white-20 pt-13   w-full h-full flex flex-col justify-center  text-center z-10">
        <h1 className="text-4xl sm:text-4xl lg:text-7xl font-bold text-white mb-6 text-balance drop-shadow-2xl">
          Transform Your Digital Vision Into Reality
        </h1>
        <p className="text-xl sm:text-2xl text-white italic mb-8 max-w-3xl mx-auto text-balance drop-shadow-lg">
          Professional web development, mobile apps, and digital marketing solutions for modern businesses
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 shadow-xl hover:shadow-2xl transition-all"
            onClick={() => (window.location.href = "/contact")}
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
