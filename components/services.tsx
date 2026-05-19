"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, Globe, Apple, Monitor, Database, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom, high-performance web applications built with modern frameworks for ultimate speed, security, and responsiveness.",
    href: "/web-development",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Tailored native & cross-platform mobile products delivering smooth, seamless interactions across all devices.",
    href: "/mobile-apps",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Apple,
    title: "iOS Development",
    description: "Premium native iOS applications crafted in Swift, complying strictly with Apple's human interface guidelines.",
    href: "/ios-development",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Monitor,
    title: "Android Development",
    description: "Highly performant, stable Android applications built with Kotlin and clean architecture for global scale.",
    href: "/android-development",
    color: "from-emerald-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description:
      "Data-backed advertising, SEO optimization, and social campaigns designed to aggressively grow your online visibility.",
    href: "/marketing",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Monitor, // Let's use database / systems for systems design if we want
    title: "UI/UX Design",
    description: "Immersive, beautiful user interfaces and product flows designed with extreme attention to aesthetic detail.",
    href: "/ui-ux",
    color: "from-purple-500 to-pink-500",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-950/80 relative">
      {/* Background Decorative Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 font-bold text-xs uppercase tracking-wider">
            Capabilities
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight text-balance">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto font-light text-pretty">
            We provide full-lifecycle technical and design solutions engineered to solve complex business problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="service-card-wrapper h-full">
                <Card className="service-card h-full flex flex-col justify-between overflow-hidden rounded-2xl relative border-none">
                  {/* Subtle Top Border Gradient Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`} />
                  
                  <CardHeader className="pt-8 px-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} p-0.5 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/5`}>
                      <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-white tracking-tight mb-2">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="px-6 pb-8 flex-1 flex flex-col justify-between">
                    <CardDescription className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                      {service.description}
                    </CardDescription>
                    
                    <Link href={service.href} className="mt-auto group/btn">
                      <Button className="w-full bg-slate-900 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-1">
                        View Projects
                        <ArrowUpRight className="h-4 w-4 opacity-70 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
