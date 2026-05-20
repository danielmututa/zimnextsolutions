"use client"

import { Cpu } from "lucide-react"

export default function AiVideoSection() {
  return (
    <section className="py-32 bg-slate-950/90 relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-16">
        
        {/* Header content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs uppercase tracking-widest font-bold text-blue-500 flex items-center gap-2">
              <Cpu className="h-4 w-4 animate-spin text-blue-400" />
              Machine Learning Solutions
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Artificial Intelligence & Automated Systems
            </h2>
            <p className="text-lg text-slate-400 font-light max-w-2xl leading-relaxed">
              We design and integrate custom deep learning models, neural pipelines, and natural language speech engines directly into enterprise software environments.
            </p>
          </div>
        </div>

        {/* YouTube Video Player Frame Container */}
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl aspect-video w-full max-w-5xl mx-auto">
          {/* YouTube iframe - autoplay=1, mute=1 (required for autoplay), loop=1 */}
          <iframe
            src="https://www.youtube.com/embed/2IK3DFHRFfw?autoplay=1&mute=1&loop=1&playlist=2IK3DFHRFfw&controls=1&rel=0&modestbranding=1&showinfo=0"
            className="w-full h-full absolute inset-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="AI and Machine Learning Technology"
            frameBorder="0"
          />

          {/* Floating visual indicator on top left */}
          <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/10 flex items-center gap-2 z-10 pointer-events-none">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-semibold text-slate-200 uppercase tracking-widest">AI SPOTLIGHT</span>
          </div>
        </div>

      </div>
    </section>
  )
}
