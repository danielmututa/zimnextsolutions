import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "CEO",
    content:
      "TechDev transformed our web presence completely. Their attention to detail and technical expertise is unmatched. Our conversion rate increased by 150%!",
    rating: 5,
    image: "/professional-woman-portrait.png",
  },
  {
    name: "Michael Chen",
    company: "MobileFirst Solutions",
    role: "Product Manager",
    content:
      "The mobile app they built for us exceeded all expectations. Clean code, beautiful design, and delivered on time. Highly recommend their iOS development team.",
    rating: 5,
    image: "/professional-man-portrait.png",
  },
  {
    name: "Emily Rodriguez",
    company: "GrowthLabs",
    role: "Marketing Director",
    content:
      "Their digital marketing strategies helped us triple our online reach in just 6 months. The team is responsive, creative, and results-driven.",
    rating: 5,
    image: "/professional-woman-marketing-portrait.png",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 text-balance">What Our Clients Say</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto text-balance">
            Trusted by local businesses to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2  hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
              <CardContent className="pt-6 pb-5">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-6 text-base  leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">
                      {testimonial.role} at {testimonial.company}
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
