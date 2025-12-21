import { Card } from "@/components/ui/card"
import { Users, Target, Award } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Our talented team brings years of experience in cutting-edge technologies.",
  },
  {
    icon: Target,
    title: "Client-Focused",
    description: "We prioritize your goals and deliver solutions that exceed expectations.",
  },
  {
    icon: Award,
    title: "Quality Driven",
    description: "Committed to excellence in every project we undertake.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 text-balance">About Us</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto text-balance">
            We are a team of passionate developers and marketers dedicated to helping businesses thrive in the digital
            age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </Card>
            )
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4 text-balance">Ready to Start Your Project?</h3>
          <p className="text-xl text-blue-50 mb-6 text-balance">{"Let's work together to bring your vision to life"}</p>
        </div>
      </div>
    </section>
  )
}
