import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A modern e-commerce solution with advanced features and seamless checkout experience.",
    image: "/modern-ecommerce-website.png",
  },
  {
    title: "Fitness Tracking App",
    category: "Mobile Development",
    description: "Cross-platform mobile app for tracking workouts and nutrition with real-time sync.",
    image: "/fitness-app-interface.png",
  },
  {
    title: "Financial Dashboard",
    category: "iOS Development",
    description: "Native iOS app for personal finance management with beautiful data visualizations.",
    image: "/financial-dashboard-ios-app.jpg",
  },
  {
    title: "Social Media App",
    category: "Android Development",
    description: "Android application for connecting communities with real-time messaging features.",
    image: "/social-media-android-app.jpg",
  },
  {
    title: "Brand Campaign",
    category: "Digital Marketing",
    description: "Multi-channel marketing campaign that increased brand awareness by 200%.",
    image: "/digital-marketing-campaign.png",
  },
  {
    title: "SaaS Platform",
    category: "Web Development",
    description: "Cloud-based business management platform serving thousands of users globally.",
    image: "/modern-saas-dashboard.png",
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 text-balance">Our Portfolio</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto text-balance">
            Explore our recent projects and success stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">{project.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
