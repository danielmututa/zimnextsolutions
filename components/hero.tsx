"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Sparkles, Terminal, Smartphone, Database } from "lucide-react"

export default function Hero() {
  // Typewriter effect state
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  const phrases = [
    "Next-Gen Web Applications.",
    "Native iOS & Android Apps.",
    "Stunning UI/UX Product Designs.",
    "Enterprise System Architecture.",
    "High-Performance Marketing."
  ]

  useEffect(() => {
    let timer: NodeJS.Timeout

    const handleType = () => {
      const fullPhrase = phrases[currentPhraseIndex]
      
      if (!isDeleting) {
        // Typing
        setCurrentText(fullPhrase.substring(0, currentText.length + 1))
        setTypingSpeed(75) // normal typing speed

        if (currentText === fullPhrase) {
          // Pause at the end of phrase
          timer = setTimeout(() => setIsDeleting(true), 2000)
          return
        }
      } else {
        // Deleting
        setCurrentText(fullPhrase.substring(0, currentText.length - 1))
        setTypingSpeed(40) // faster delete speed

        if (currentText === "") {
          setIsDeleting(false)
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
          setTypingSpeed(300) // pause before starting next word
          return
        }
      }

      timer = setTimeout(handleType, typingSpeed)
    }

    timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentPhraseIndex, typingSpeed])

  return (
    <section
      id="home"
      className="relative w-full min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Background Neon Glow Orbs */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-600 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cyan-600 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side Info */}
        <div className="lg:col-span-7 text-left space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-cyan-400 font-semibold text-xs tracking-wide uppercase">
            <Sparkles className="h-4 w-4" />
            Leading Digital Agency
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-none text-balance">
            We Design & Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
              {currentText}
            </span>
            <span className="cursor-blink text-cyan-400 ml-1">|</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-light text-pretty leading-relaxed">
            Professional web development, mobile apps, and enterprise systems optimized for speed, scalability, and premium design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 py-6 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 group"
              onClick={() => (window.location.href = "/contact")}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1.5 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-800 text-slate-200 hover:text-white bg-slate-900/50 hover:bg-slate-900 hover:border-slate-700 font-semibold px-8 py-6 rounded-full backdrop-blur-sm"
              onClick={() => {
                const servicesSec = document.getElementById("services")
                if (servicesSec) servicesSec.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Our Expertise
            </Button>
          </div>
        </div>

        {/* Right Side Visual (Mock IDE / Interactive Code Sandbox) */}
        <div className="lg:col-span-5 w-full flex justify-center">
          <div className="w-full max-w-[480px] rounded-2xl bg-slate-900/80 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-md relative group">
            {/* Header bar */}
            <div className="px-4 py-3 bg-slate-950/80 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                <Terminal className="h-3 w-3 text-cyan-400" />
                zimnext-solutions.ts
              </div>
              <div className="w-12 h-1" />
            </div>

            {/* Code Body */}
            <div className="p-6 font-mono text-xs sm:text-sm text-slate-300 space-y-4 overflow-x-auto min-h-[320px] bg-slate-900/40">
              <div>
                <span className="text-pink-400">import</span> {"{"} Developer, Solution {"}"} <span className="text-pink-400">from</span> <span className="text-emerald-300">"zimnext"</span>
              </div>
              <div>
                <span className="text-pink-400">const</span> clientProject = {"{"} <br />
                &nbsp;&nbsp;platform: <span className="text-emerald-300">"mobile & web"</span>,<br />
                &nbsp;&nbsp;customCode: <span className="text-amber-400">true</span>,<br />
                &nbsp;&nbsp;animations: <span className="text-emerald-300">"scroll-reveals"</span>,<br />
                &nbsp;&nbsp;performance: <span className="text-emerald-300">"ultra-fast"</span><br />
                {"}"}
              </div>
              <div>
                <span className="text-pink-400">function</span> <span className="text-blue-400">buildSuperSite</span>(specs) {"{"}
                <div className="pl-4">
                  <span className="text-pink-400">return</span> <span className="text-indigo-400">new</span> <span className="text-blue-400">Solution</span>({"{"}
                  <div className="pl-4">
                    design: <span className="text-emerald-300">"glassmorphic"</span>,<br />
                    speed: <span className="text-emerald-300">"99/100 Lighthouse"</span>,<br />
                    status: <span className="text-emerald-300">"launched"</span>
                  </div>
                  {"})"}
                </div>
                {"}"}
              </div>
              <div className="pt-2 text-slate-500 italic">
                // output: Zimnext Solutions loading...
              </div>
            </div>

            {/* Floating Visual Pill Overlay inside Mock IDE */}
            <div className="absolute -bottom-6 -right-6 bg-slate-950 border border-white/10 rounded-2xl p-4 shadow-2xl flex items-center gap-3 backdrop-blur-xl animate-bounce delay-700 max-w-[200px]">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-400/30">
                <Code2 className="h-5 w-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-500">Platform</div>
                <div className="text-xs font-semibold text-white">Fullstack systems</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom curved aesthetic layout */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  )
}
