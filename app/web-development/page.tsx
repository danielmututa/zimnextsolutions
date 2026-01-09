import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServiceBanner from "@/components/service-banner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Rocket, Zap, Shield, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Astromobile",
    description: "Astromobile offers secure mobile shopping with seamless checkout and real-time orders.",
    image: "/Screenshot 2025-12-22 165827.png",
    liveUrl: "https://www.astromobile.io/",
  },
  // {
  //   title: "SaaS Dashboard",
  //   description: "Analytics dashboard for business intelligence",
  //   image: "/saas-dashboard-analytics.jpg",
  //   liveUrl: "#",
  // },
  {
    title: "Multimart Online Shop",
    description: "Creative portfolio showcase with smooth animations",
    image: "/modern-ecommerce-website.png",
    liveUrl: "https://mmshop.co.zw",
  },
  {
    title: "Kanda Solar",
    description: "Power Your Future With Reliable Solar Energy",
    image: "/kandasolarbanner.png",
    liveUrl: "https://kandasolar.co.zw",
  },
  // {
  //   title: "Social Network",
  //   description: "Community platform with real-time messaging",
  //   image: "/social-media-platform.png",
  //   liveUrl: "#",
  // },
]

const features = [
  {
    icon: Code,
    title: "Modern Technologies",
    description: "We use cutting-edge frameworks and tools to build fast, scalable web applications.",
  },
  {
    icon: Rocket,
    title: "Performance Optimized",
    description: "Lightning-fast load times and smooth user experiences across all devices.",
  },
  {
    icon: Zap,
    title: "Rapid Development",
    description: "Agile methodology ensures quick turnaround times without compromising quality.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security and 99.9% uptime for your peace of mind.",
  },
]

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Service Banner */}
      <ServiceBanner
        title="Web Development"
        description="Build powerful, scalable web applications that drive business growth"
        imageQuery="modern web development coding programming workspace laptop"
      />

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Portfolio */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Our Web Projects</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Explore our portfolio of successful web development projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-slate-900">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={project.liveUrl} target="_blank">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live Project
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
