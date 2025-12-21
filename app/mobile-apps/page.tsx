import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServiceBanner from "@/components/service-mobile"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Users, Layers, Battery } from "lucide-react"
import { Button } from "@/components/ui/button" // Fixed Button import to use named export

const projects = [
  {
    title: "Fitness Tracking App",
    description: "Cross-platform fitness app with workout plans and progress tracking",
    image: "/fitness-app-interface.png",
    liveUrl: "https://fitness-tracking-app.com", // Example live URL
  },
  {
    title: "Food Delivery App",
    description: "On-demand food ordering with real-time tracking",
    image: "/food-delivery-app-mobile.png",
    liveUrl: "https://food-delivery-app.com", // Example live URL
  },
  {
    title: "Finance Manager",
    description: "Personal finance management with budgeting tools",
    image: "/finance-app-budget-tracker.jpg",
    liveUrl: "https://finance-manager-app.com", // Example live URL
  },
  // {
  //   title: "Travel Companion",
  //   description: "Trip planning and travel guide mobile application",
  //   image: "/travel-app-booking.jpg",
  //   liveUrl: "https://travel-companion-app.com", // Example live URL
  // },
  // {
  //   title: "Social Chat App",
  //   description: "Real-time messaging with media sharing capabilities",
  //   image: "/chat-messaging-app.png",
  //   liveUrl: "https://social-chat-app.com", // Example live URL
  // },
  // {
  //   title: "E-Learning Platform",
  //   description: "Educational app with video courses and quizzes",
  //   image: "/elearning-education-app.jpg",
  //   liveUrl: "https://e-learning-platform.com", // Example live URL
  // },
]

const features = [
  {
    icon: Smartphone,
    title: "Cross-Platform",
    description: "Build once, deploy everywhere with React Native and Flutter frameworks.",
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description: "Intuitive interfaces designed for optimal mobile user experience.",
  },
  {
    icon: Layers,
    title: "Native Performance",
    description: "Smooth animations and fast load times for seamless interactions.",
  },
  {
    icon: Battery,
    title: "Battery Efficient",
    description: "Optimized code that respects device resources and battery life.",
  },
]

export default function MobileDevelopmentPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <ServiceBanner
        title="Mobile Development"
        description="Create stunning mobile experiences for iOS and Android platforms"
        imageQuery="mobile app development smartphone interface design"
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
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Our Mobile Projects</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Explore our portfolio of successful mobile applications
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
