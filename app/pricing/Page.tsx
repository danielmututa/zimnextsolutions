"use client"

import { useState } from "react"
import { Check, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

type ServiceCategory = "web" | "mobile" | "ios" | "android" | "marketing" | "uiux"

interface PricingPlan {
  tier: string
  subtitle: string
  price: string
  colorClasses: {
    gradient: string
    dot: string
  }
  features: boolean[]
  featureList: string[]
}

const pricingData: Record<ServiceCategory, PricingPlan[]> = {
  web: [
    {
      tier: "Portfolio Website",
      subtitle: "Perfect for freelancers",
      price: "299.99",
      colorClasses: {
        gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
        dot: "bg-blue-600",
      },
      features: [true, true, true, true, true, true, false, false],
      featureList: [
        "Responsive Design",
        "Up to 5 Pages",
        "Contact Form",
        "SEO Optimization",
        "Gallery Section",
        "Social Media Integration",
        "Blog System",
        "Advanced Analytics",
      ],
    },
    {
      tier: "Company Website",
      subtitle: "For growing businesses",
      price: "799.99",
      colorClasses: {
        gradient: "bg-gradient-to-br from-cyan-500 to-cyan-600",
        dot: "bg-cyan-600",
      },
      features: [true, true, true, true, true, true, true, false],
      featureList: [
        "Responsive Design",
        "Up to 15 Pages",
        "Contact Form",
        "Advanced SEO",
        "Team Section",
        "Blog System",
        "Analytics Dashboard",
        "E-commerce Integration",
      ],
    },
    {
      tier: "Web Chatbot",
      subtitle: "AI-powered customer support",
      price: "1299.99",
      colorClasses: {
        gradient: "bg-gradient-to-br from-teal-500 to-teal-600",
        dot: "bg-teal-600",
      },
      features: [true, true, true, true, true, true, true, true],
      featureList: [
        "AI Chatbot Integration",
        "Natural Language Processing",
        "Multi-language Support",
        "Custom Training",
        "Analytics Dashboard",
        "24/7 Automated Responses",
        "CRM Integration",
        "API Access",
      ],
    },
  ],
  mobile: [
    {
      tier: "Basic Mobile App",
      subtitle: "Cross-platform solution",
      price: "1999.99",
      colorClasses: {
        gradient: "bg-gradient-to-br from-purple-500 to-purple-600",
        dot: "bg-purple-600",
      },
      features: [true, true, true, true, true, false, false, false],
      featureList: [
        "iOS & Android",
        "React Native",
        "Up to 10 Screens",
        "Push Notifications",
        "User Authentication",
        "Payment Integration",
        "Real-time Features",
        "Offline Mode",
      ],
    },
    {
      tier: "Professional App",
      subtitle: "Feature-rich application",
      price: "4999.99",
      colorClasses: {
        gradient: "bg-gradient-to-br from-pink-500 to-pink-600",
        dot: "bg-pink-600",
      },
      features: [true, true, true, true, true, true, true, false],
      featureList: [
        "iOS & Android",
        "Unlimited Screens",
        "Push Notifications",
        "User Authentication",
        "Payment Integration",
        "Real-time Chat",
        "Advanced Analytics",
        "Custom Backend",
      ],
    },
    {
      tier: "Enterprise App",
      subtitle: "Complete solution",
      price: "9999.99",
      colorClasses: {
        gradient: "bg-gradient-to-br from-orange-500 to-orange-600",
        dot: "bg-orange-600",
      },
      features: [true, true, true, true, true, true, true, true],
      featureList: [
        "iOS & Android",
        "Unlimited Screens",
        "Advanced Features",
        "Dedicated Backend",
        "Payment Gateway",
        "Real-time Everything",
        "AI Integration",
        "Priority Support",
      ],
    },
  ],
  ios: [
    {
      tier: "iOS Starter",
      subtitle: "Native iOS development",
      price: "2499.99",
      colorClasses: {
        gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
        dot: "bg-blue-600",
      },
      features: [true, true, true, true, true, false, false, false],
      featureList: [
        "Swift Development",
        "Up to 8 Screens",
        "App Store Submission",
        "Push Notifications",
        "User Authentication",
        "In-App Purchases",
        "CloudKit Integration",
        "HealthKit/ARKit",
      ],
    },
    {
      tier: "iOS Pro",
      subtitle: "Advanced iOS features",
      price: "5499.99",
      colorClasses: {
        gradient: "bg-gradient-to-br from-cyan-500 to-cyan-600",
        dot: "bg-cyan-600",
      },
      features: [true, true, true, true, true, true, true, false],
      featureList: [
        "SwiftUI & UIKit",
        "Unlimited Screens",
        "App Store Optimization",
        "Advanced Notifications",
        "Complete Auth System",
        "In-App Purchases",
        "CloudKit & Core Data",
        "Custom Widgets",
      ],
    },
    {
      tier: "iOS Enterprise",
      subtitle: "Premium iOS solution",
      price: "11999.99",
      colorClasses: {
        gradient: "bg-gradient-to-br from-teal-500 to-teal-600",
        dot: "bg-teal-600",
      },
      features: [true, true, true, true, true, true, true, true],
      featureList: [
        "Full Native Swift",
        "Unlimited Everything",
        "Complete ASO",
        "Advanced Features",
        "Enterprise Auth",
        "All Apple Services",
        "Watch & iPad Apps",
        "Priority Support",
      ],
    },
  ],
  android: [
    {
      tier: "Android Starter",
      subtitle: "Native Android development",
      price: "2299.99",
      colorClasses: {
        gradient: "bg-gradient-to-br from-green-500 to-green-600",
        dot: "bg-green-600",
      },
      features: [true, true, true, true, true, false, false, false],
      featureList: [
        "Kotlin Development",
        "Up to 8 Screens",
        "Play Store Submission",
        "Push Notifications",
        "User Authentication",
        "In-App Billing",
        "Firebase Integration",
        "Material Design 3",
      ],
    },
    {
      tier: "Android Pro",
      subtitle: "Advanced Android features",
      price: "5299.99",
      colorClasses: {
        gradient: "bg-gradient-to-br from-lime-500 to-lime-600",
        dot: "bg-lime-600",
      },
      features: [true, true, true, true, true, true, true, false],
      featureList: [
        "Jetpack Compose",
        "Unlimited Screens",
        "Play Store Optimization",
        "Advanced Notifications",
        "Complete Auth System",
        "In-App Billing",
        "Full Firebase Suite",
        "Wear OS Support",
      ],
    },
    {
      tier: "Android Enterprise",
      subtitle: "Premium Android solution",
      price: "11499.99",
      colorClasses: {
        gradient: "bg-gradient-to-br from-emerald-500 to-emerald-600",
        dot: "bg-emerald-600",
      },
      features: [true, true, true, true, true, true, true, true],
      featureList: [
        "Full Native Kotlin",
        "Unlimited Everything",
        "Complete ASO",
        "Advanced Features",
        "Enterprise Auth",
        "All Google Services",
        "Tablet & TV Apps",
        "Priority Support",
      ],
    },
  ],
  marketing: [
    {
      tier: "SEO Optimization",
      subtitle: "Boost your rankings",
      price: "499.99",
      colorClasses: {
        gradient: "bg-gradient-to-br from-red-500 to-red-600",
        dot: "bg-red-600",
      },
      features: [true, true, true, true, true, false, false, false],
      featureList: [
        "Keyword Research",
        "On-page SEO",
        "Technical SEO Audit",
        "Content Optimization",
        "Monthly Reports",
        "Link Building",
        "Local SEO",
        "Advanced Analytics",
      ],
    },
    {
      tier: "Social Media Marketing",
      subtitle: "Engage your audience",
      price: "899.99",
      colorClasses: {
        gradient: "bg-gradient-to-br from-rose-500 to-rose-600",
        dot: "bg-rose-600",
      },
      features: [true, true, true, true, true, true, true, false],
      featureList: [
        "Content Strategy",
        "3 Platforms Management",
        "Post Scheduling",
        "Community Management",
        "Paid Advertising",
        "Influencer Outreach",
        "Monthly Analytics",
        "Video Content Creation",
      ],
    },
    {
      tier: "Full Digital Marketing",
      subtitle: "Complete marketing suite",
      price: "2499.99",
      colorClasses: {
        gradient: "bg-gradient-to-br from-orange-500 to-orange-600",
        dot: "bg-orange-600",
      },
      features: [true, true, true, true, true, true, true, true],
      featureList: [
        "SEO & SEM",
        "Social Media Marketing",
        "Email Campaigns",
        "PPC Management",
        "Content Marketing",
        "Analytics & Reporting",
        "CRO Optimization",
        "Brand Strategy",
      ],
    },
  ],
  uiux: [
    {
      tier: "UI Design",
      subtitle: "Beautiful interfaces",
      price: "799.99",
      colorClasses: {
        gradient: "bg-gradient-to-br from-indigo-500 to-indigo-600",
        dot: "bg-indigo-600",
      },
      features: [true, true, true, true, true, false, false, false],
      featureList: [
        "Up to 10 Screens",
        "High-fidelity Mockups",
        "Design System",
        "Responsive Design",
        "Interactive Prototype",
        "Usability Testing",
        "Animation Design",
        "Developer Handoff",
      ],
    },
    {
      tier: "UX Research & Design",
      subtitle: "User-centered approach",
      price: "1499.99",
      colorClasses: {
        gradient: "bg-gradient-to-br from-violet-500 to-violet-600",
        dot: "bg-violet-600",
      },
      features: [true, true, true, true, true, true, true, false],
      featureList: [
        "User Research",
        "Wireframing",
        "Up to 20 Screens",
        "Complete Design System",
        "Interactive Prototypes",
        "Usability Testing",
        "User Flow Diagrams",
        "Accessibility Audit",
      ],
    },
    {
      tier: "Complete UI/UX",
      subtitle: "End-to-end design solution",
      price: "3999.99",
      colorClasses: {
        gradient: "bg-gradient-to-br from-purple-500 to-purple-600",
        dot: "bg-purple-600",
      },
      features: [true, true, true, true, true, true, true, true],
      featureList: [
        "Complete User Research",
        "Full UX Strategy",
        "Unlimited Screens",
        "Advanced Design System",
        "Motion Design",
        "A/B Testing",
        "Accessibility Compliance",
        "Ongoing Support",
      ],
    },
  ],
}

const categories = [
  { id: "web" as ServiceCategory, label: "Web Development" },
  { id: "mobile" as ServiceCategory, label: "Mobile Development" },
  { id: "ios" as ServiceCategory, label: "iOS Development" },
  { id: "android" as ServiceCategory, label: "Android Development" },
  { id: "marketing" as ServiceCategory, label: "Digital Marketing" },
  { id: "uiux" as ServiceCategory, label: "UI/UX Design" },
]

export default function PricingSection() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>("web")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const currentPlans = pricingData[selectedCategory]
  const currentCategoryLabel = categories.find((cat) => cat.id === selectedCategory)?.label

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(255,255,255,0.3) 100px, rgba(255,255,255,0.3) 101px)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-balance">Our Services & Pricing</h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto text-pretty">
            Professional digital solutions tailored to your needs. Choose your service category and find the perfect
            package.
          </p>
        </div>

        {/* Category Filter - Desktop */}
        <div className="hidden lg:flex justify-center mb-12 gap-3 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-white text-slate-900 shadow-lg scale-105"
                  : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/10"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Category Filter - Mobile Dropdown */}
        <div className="lg:hidden mb-12">
          <div className="relative">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-4 rounded-2xl font-semibold flex items-center justify-between hover:bg-white/20 transition-all"
            >
              <span>{currentCategoryLabel}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${mobileMenuOpen ? "rotate-180" : ""}`}
              />
            </button>

            {mobileMenuOpen && (
              <div className="absolute top-full mt-2 w-full bg-slate-800 border border-white/20 rounded-2xl overflow-hidden shadow-2xl z-50">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id)
                      setMobileMenuOpen(false)
                    }}
                    className={`w-full px-6 py-4 text-left font-medium transition-colors ${
                      selectedCategory === category.id
                        ? "bg-white/20 text-white"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {currentPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              {/* Header */}
              <div className="pt-8 pb-4 px-6 text-center">
                <h3 className="text-slate-800 font-bold text-2xl mb-1">{plan.tier}</h3>
                <p className="text-slate-500 text-sm">{plan.subtitle}</p>
              </div>

              {/* Price banner */}
              <div className={`${plan.colorClasses.gradient} py-4 px-6`}>
                <p className="text-white font-bold text-center text-xl">
                  ${plan.price}
                  <span className="text-sm font-normal opacity-90 ml-1">/project</span>
                </p>
              </div>

              {/* Features */}
              <div className="py-6 px-6 space-y-3 min-h-[320px]">
                {plan.featureList.map((featureName, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${plan.colorClasses.dot} flex-shrink-0`} />
                    <span className="text-slate-600 text-sm flex-grow">{featureName}</span>
                    {plan.features[featureIndex] ? (
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" strokeWidth={3} />
                    ) : (
                      <X className="w-5 h-5 text-red-400 flex-shrink-0" strokeWidth={2} />
                    )}
                  </div>
                ))}
              </div>

              {/* Subscribe button */}
              <div className="px-6 pb-8">
                <Button
                  className={`w-full ${plan.colorClasses.gradient} text-white font-bold py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                >
                  GET STARTED
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need a Custom Solution?</h2>
            <p className="text-slate-400 mb-6 text-pretty">
              {"Can't find exactly what you're looking for? We offer custom packages tailored to your specific needs."}
            </p>
            <Button className="bg-white text-slate-900 hover:bg-slate-100 font-bold py-6 px-8 rounded-full text-lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/your-number"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-2xl transition-all duration-300 z-50 flex items-center justify-center group hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        <span className="absolute right-full mr-3 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
          Chat with us
        </span>
      </a>
    </div>
  )
}
