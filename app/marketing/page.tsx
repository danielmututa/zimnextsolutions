import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServiceBanner from "@/components/service-banner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Target, BarChart3, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-Commerce Growth Campaign",
    description: "300% increase in online sales through targeted marketing",
    image: "/placeholder.svg?height=400&width=600",
    url: "https://example.com/e-commerce-growth-campaign",
  },
  {
    title: "SaaS Lead Generation",
    description: "B2B lead generation campaign with content marketing",
    image: "/placeholder.svg?height=400&width=600",
    url: "https://example.com/saas-lead-generation",
  },
  {
    title: "Social Media Campaign",
    description: "Viral social media campaign reaching millions",
    image: "/placeholder.svg?height=400&width=600",
    url: "https://example.com/social-media-campaign",
  },
  {
    title: "SEO Optimization",
    description: "Complete SEO overhaul for local business",
    image: "/placeholder.svg?height=400&width=600",
    url: "https://example.com/seo-optimization",
  },
  {
    title: "Email Marketing",
    description: "Automated email campaigns with high conversion",
    image: "/placeholder.svg?height=400&width=600",
    url: "https://example.com/email-marketing",
  },
  {
    title: "Influencer Campaign",
    description: "Influencer partnership driving brand awareness",
    image: "/placeholder.svg?height=400&width=600",
    url: "https://example.com/influencer-campaign",
  },
]

const features = [
  {
    icon: Target,
    title: "Targeted Campaigns",
    description: "Reach the right audience with precision targeting and segmentation.",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description: "Data-driven strategies designed to maximize ROI and business growth.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Comprehensive analytics to track performance and optimize campaigns.",
  },
  {
    icon: Mail,
    title: "Multi-Channel",
    description: "Integrated marketing across social media, email, SEO, and paid ads.",
  },
]

export default function DigitalMarketingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <ServiceBanner
        title="Digital Marketing"
        description="Drive growth with data-driven marketing strategies that deliver results"
        imageQuery="digital marketing analytics social media SEO strategy"
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

      {/* Case Studies */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Success Stories</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Real results from our digital marketing campaigns
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
