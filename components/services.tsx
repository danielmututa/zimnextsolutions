import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, Globe, Apple, Monitor } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
    href: "/web-development",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that deliver seamless experiences on all devices.",
    href: "/mobile-apps",
  },
  {
    icon: Apple,
    title: "iOS Development",
    description: "Expert iOS app development using Swift and cutting-edge Apple technologies for the App Store.",
    href: "/ios-development",
  },
  {
    icon: Monitor,
    title: "Android Development",
    description: "High-performance Android applications built with Kotlin and modern Android frameworks.",
    href: "/android-development",
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies including SEO, content marketing, and social media management.",
    href: "/marketing",
  },
  {
    icon: Monitor,
    title: "UI/UX Design",
    description: "Beautiful, intuitive user interfaces and experiences that delight users and drive engagement.",
    href: "/ui-ux",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 text-balance">Our Services</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto text-balance">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="border-2 hover:border-blue-500 transition-all duration-300 hover:shadow-xl h-full flex flex-col"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <CardDescription className="text-base text-slate-600 mb-6">{service.description}</CardDescription>
                  <Link href={service.href}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">View Projects</Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
