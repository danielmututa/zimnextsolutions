import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ServiceBanner from "@/components/service-team"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Briefcase } from "lucide-react"
import Link from "next/link"

const positions = [
  {
    title: "Senior Web Developer",
    department: "Web Development",
    location: "Remote / Harare",
    type: "Full-time",
    description:
      "We're looking for an experienced web developer to build modern web applications using React, Next.js, and TypeScript.",
    requirements: ["5+ years of web development experience", "Expert in React and Next.js", "Strong TypeScript skills"],
  },
  {
    title: "Web Development Intern",
    department: "Web Development",
    location: "San Harare",
    type: "Internship",
    description:
      "Join our web development team and gain hands-on experience building real-world web applications with modern technologies.",
    requirements: [
      "Currently pursuing CS degree or bootcamp",
      "Basic knowledge of React or Vue",
      "Passion for web development",
    ],
  },
  {
    title: "Digital Marketing Manager",
    department: "Digital Marketing",
    location: "Remote",
    type: "Full-time",
    description:
      "Lead our digital marketing initiatives including SEO, content marketing, social media, and paid advertising campaigns.",
    requirements: [
      "3+ years of digital marketing experience",
      "Proven track record of ROI growth",
      "Expert in SEO and analytics",
    ],
  },
  {
    title: "Digital Marketing Specialist",
    department: "Digital Marketing",
    location: "Remote / Harare",
    type: "Full-time",
    description:
      "Execute digital marketing campaigns across multiple channels and analyze performance to optimize results.",
    requirements: [
      "2+ years of marketing experience",
      "Knowledge of Google Ads and Facebook Ads",
      "Strong analytical skills",
    ],
  },
]

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <ServiceBanner
        title="Join Our Team"
        description="Build your career with us and work on exciting projects that make an impact"
        imageQuery="professional team office workplace collaboration careers"
      />

      {/* Why Join Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Why Join TechDev?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We offer competitive benefits and an amazing work culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Growth Opportunities</h3>
              <p className="text-slate-600">Continuous learning and career advancement paths</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Competitive Salary</h3>
              <p className="text-slate-600">Industry-leading compensation and benefits</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏖️</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Work-Life Balance</h3>
              <p className="text-slate-600">Flexible hours and remote work options</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Open Positions</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Find your next opportunity and apply today</p>
          </div>

          <div className="space-y-6">
            {positions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-slate-900 mb-2">{position.title}</CardTitle>
                      <CardDescription className="text-base">{position.description}</CardDescription>
                    </div>
                    
                      <Button className="bg-blue-300 whitespace-nowrap">Not Hiring</Button>
                  
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Briefcase className="h-4 w-4" />
                      <span className="text-sm">{position.department}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{position.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{position.type}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600">
                          <span className="text-blue-600 mt-1">•</span>
                          <span className="text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
