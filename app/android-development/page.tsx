import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServiceBanner from "@/components/service-android"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Cpu, Palette, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Prepaid Lockapp",
    description: "Quick device access with simpe payment options",
    image: "/Artboard 2.png",
    link: "https://example.com/ride-sharing-app",
  },
  
  // {
  //   title: "Fitness Tracker",
  //   description: "Workout tracking with Google Fit integration",
  //   image: "/android-fitness-workout-tracker.jpg",
  //   link: "https://example.com/fitness-tracker",
  // },
 
  // {
  //   title: "Expense Tracker",
  //   description: "Budget management with spending analytics",
  //   image: "/placeholder.svg?height=400&width=600",
  //   link: "https://example.com/expense-tracker",
  // },
  // {
  //   title: "Video Player",
  //   description: "Advanced media player with subtitle support",
  //   image: "/placeholder.svg?height=400&width=600",
  //   link: "https://example.com/video-player",
  // },
]

const features = [
  {
    icon: Smartphone,
    title: "Material Design",
    description: "Beautiful Android UI following Material Design 3 guidelines.",
  },
  {
    icon: Cpu,
    title: "High Performance",
    description: "Optimized code using Kotlin coroutines and modern architecture.",
  },
  {
    icon: Palette,
    title: "Jetpack Compose",
    description: "Modern declarative UI toolkit for stunning interfaces.",
  },
  {
    icon: Zap,
    title: "Google Services",
    description: "Deep integration with Google Play Services and Firebase.",
  },
]

export default function AndroidDevelopmentPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <ServiceBanner
        title="Android Development"
        description="Powerful Android apps built with Kotlin and Jetpack Compose"
        imageQuery="Android app development smartphone Kotlin programming"
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
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Our Android Projects</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Explore our portfolio of successful Android applications
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
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Download</Button>
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
