import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServiceBanner from "@/components/service-ios"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Apple, Zap, Shield, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Health & Wellness App",
    description: "HealthKit integration for comprehensive health tracking",
    image: "/ios-health-fitness-app.jpg",
    url: "https://example.com/health-app",
  },
  {
    title: "Photo Editor Pro",
    description: "Professional photo editing with AI-powered features",
    image: "/ios-photo-editor-app.jpg",
    url: "https://example.com/photo-editor-app",
  },
  {
    title: "Task Manager",
    description: "Productivity app with widgets and notifications",
    image: "/ios-task-manager-productivity.jpg",
    url: "https://example.com/task-manager-app",
  },
  // {
  //   title: "Music Streaming",
  //   description: "Audio streaming app with offline playback",
  //   image: "/ios-music-streaming-app.jpg",
  //   url: "https://example.com/music-streaming-app",
  // },
  // {
  //   title: "AR Shopping",
  //   description: "Augmented reality furniture preview app",
  //   image: "/ios-ar-shopping-furniture.jpg",
  //   url: "https://example.com/ar-shopping-app",
  // },
  // {
  //   title: "Banking App",
  //   description: "Secure mobile banking with Face ID authentication",
  //   image: "/ios-banking-finance-app.jpg",
  //   url: "https://example.com/banking-app",
  // },
]

const features = [
  {
    icon: Apple,
    title: "Native iOS",
    description: "Built exclusively for iOS using Swift and SwiftUI for best performance.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for iOS hardware with smooth 60fps animations.",
  },
  {
    icon: Shield,
    title: "Secure by Design",
    description: "Leverage iOS security features like Face ID and Keychain.",
  },
  {
    icon: Sparkles,
    title: "Latest Features",
    description: "Implement cutting-edge iOS features like widgets and Live Activities.",
  },
]

export default function IOSDevelopmentPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section replaced with ServiceBanner component */}
      <ServiceBanner
        title="iOS Development"
        description="Premium iOS applications crafted with Swift and SwiftUI"
        imageQuery="iOS iPhone app development Swift programming Apple"
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
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Our iOS Projects</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Explore our portfolio of premium iOS applications
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
