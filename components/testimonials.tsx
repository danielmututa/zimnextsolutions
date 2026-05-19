"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Emmanuel Mhako",
    company: "Kanda Solar",
    role: "Installer & CEO",
    content:
      "Zimnext Solutions transformed our web presence completely. Their attention to detail and technical expertise is unmatched. Our conversion rate increased by 150%!",
    rating: 5,
    image: "/kandasolarCEO.jpg",
  },
  {
    name: "Charles Lungu",
    company: "MobileFirst Solutions",
    role: "Product Manager",
    content:
      "The mobile app they built for us exceeded all expectations. Clean code, beautiful design, and delivered on time. Highly recommend their iOS development team.",
    rating: 5,
    image: "/professional-man-portrait.png",
  },
  {
    name: "Prince Pedzisai",
    company: "NeonSpark",
    role: "Marketing Director",
    content:
      "Their digital marketing strategies helped us triple our online reach in just a month. The team is responsive, creative, and results-driven.",
    rating: 5,
    image: "/prince.jpg",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 font-bold text-xs uppercase tracking-wider">
            Client Success
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">What Our Clients Say</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
            Trusted by businesses to deliver state-of-the-art results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-slate-900/40 border border-white/5 hover:border-cyan-500/30 backdrop-blur-md rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <CardContent className="p-8 flex flex-col justify-between h-full space-y-6">
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4.5 w-4.5 fill-cyan-400 text-cyan-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 italic text-base leading-relaxed font-light">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 relative">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-white text-base leading-snug">{testimonial.name}</p>
                    <p className="text-xs text-slate-400">
                      {testimonial.role} at <span className="text-cyan-400 font-medium">{testimonial.company}</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
