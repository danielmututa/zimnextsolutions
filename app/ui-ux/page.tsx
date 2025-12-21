import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServiceBanner from "@/components/service-ui-ux"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Palette, Eye, Zap, Users } from "lucide-react"

const projects = [
  // {
  //   title: "E-Commerce Redesign",
  //   description: "Complete UX overhaul increasing conversion by 45%",
  //   image: "/modern-ecommerce-website.png",
  // },
  // {
  //   title: "Mobile Banking App",
  //   description: "Intuitive financial management interface",
  //   image: "/banking-app-ui.png",
  // },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard with beautiful data visualization",
    image: "/saas-dashboard-analytics-ui.jpg",
  },
  {
    title: "Healthcare Portal",
    description: "Patient-friendly medical records interface",
    image: "/healthcare-patient-portal-design.jpg",
  },
  // {
  //   title: "Travel Booking App",
  //   description: "Seamless booking experience for travelers",
  //   image: "/travel-booking-app.png",
  // },
  {
    title: "Social Media Platform",
    description: "Engaging social networking interface design",
    image: "/social-media-platform-ui-design.jpg",
  },
]

const features = [
  {
    icon: Palette,
    title: "Visual Design",
    description: "Beautiful, cohesive designs that align with your brand identity.",
  },
  {
    icon: Eye,
    title: "User Research",
    description: "Data-driven insights to understand user needs and behaviors.",
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description: "Quick iterations to validate ideas before development.",
  },
  {
    icon: Users,
    title: "User Testing",
    description: "Continuous feedback loops to ensure optimal user experience.",
  },
]

export default function UIUXDesignPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <ServiceBanner
        title="UI/UX Design"
        description="Crafting beautiful, intuitive experiences that users love"
        imageQuery="UI UX design interface user experience wireframes"
      />

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

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Our Design Projects</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Explore our portfolio of beautiful user experiences
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
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">View Live Project</Button>
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
