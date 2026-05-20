"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { MapPin, Clock, Briefcase, ChevronDown, ChevronUp, AlertTriangle, Mail, ArrowRight, Search } from "lucide-react"
import Image from "next/image"

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
    location: "Harare",
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
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Contract",
    description:
      "Create stunning user interfaces and seamless user experiences for web and mobile applications.",
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma and Adobe Suite",
      "Strong portfolio of shipped products",
    ],
  },
  {
    title: "Mobile App Developer",
    department: "Mobile Development",
    location: "Harare",
    type: "Full-time",
    description:
      "Build cross-platform mobile applications using React Native and Flutter for iOS and Android.",
    requirements: [
      "3+ years of mobile development",
      "Experience with React Native or Flutter",
      "Published apps on App Store or Play Store",
    ],
  },
]

const departments = ["All departments", "Web Development", "Digital Marketing", "Design", "Mobile Development"]

const faqItems = [
  {
    question: "Hiring stages",
    answer: "Our hiring process typically involves: 1) Application review, 2) Initial phone screening, 3) Technical assessment or portfolio review, 4) Team interview, 5) Final offer. The entire process usually takes 2-3 weeks."
  },
  {
    question: "Reasonable accommodation",
    answer: "Zimnext Solutions is committed to providing reasonable accommodations for candidates with disabilities. If you need assistance during the application or interview process, please contact our HR team."
  },
  {
    question: "Inclusion and equal opportunities",
    answer: "We are an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees regardless of race, gender, age, religion, or background."
  },
  {
    question: "Right to work",
    answer: "All candidates must have the legal right to work in the country where the position is based. We may require documentation to verify your work authorization."
  },
  {
    question: "Agency disclaimer",
    answer: "Zimnext Solutions does not accept unsolicited resumes from recruitment agencies. Any resumes submitted without a prior written agreement will be considered the property of Zimnext Solutions."
  }
]

const careerLocations = [
  { name: "Harare", country: "Zimbabwe", description: "Our headquarters and main development hub.", image: "/baner.jpg" },
  { name: "Remote", country: "Global", description: "Join our distributed team from anywhere in the world.", image: "/modern-web-development-workspace-code-screen.jpg" },
]

export default function CareersPage() {
  const [activeDept, setActiveDept] = useState("All departments")
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const filteredPositions = activeDept === "All departments"
    ? positions
    : positions.filter(p => p.department === activeDept)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.includes("@")) {
      setSubscribed(true)
      setEmail("")
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero Section - Dark with blue accent */}
      <section className="pt-40 pb-20 bg-slate-950 relative overflow-hidden">
        {/* Background decorative circles */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-blue-500/5 -translate-x-1/4 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-blue-500">Careers</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
              Jobs
            </h1>
            <p className="text-xl text-slate-400 font-light max-w-lg leading-relaxed">
              Want to create positive impact through software? Join us.
            </p>
          </div>

          {/* Hero image */}
          <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden border border-white/10">
            <Image
              src="/about.jpeg"
              alt="Team collaboration"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Fraudulent Recruitment Warning */}
      <section className="py-16 bg-slate-950 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-8 space-y-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0" />
              <h3 className="text-xl font-bold text-white">Fraudulent Recruitment Activity</h3>
            </div>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              We are aware of unauthorised individuals and organisations that may misrepresent themselves as Zimnext Solutions representatives. Please be advised that Zimnext Solutions will never ask candidates for payment at any stage of the recruitment process. All official communications will come from our verified company email addresses.
            </p>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              If you receive a suspicious recruitment offer, please verify it by contacting us directly at{" "}
              <a href="mailto:careers@zimnext.com" className="text-blue-400 hover:text-blue-300 underline transition-colors">
                careers@zimnext.com
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* Explore Open Roles */}
      <section className="py-20 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Explore open roles
            </h2>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center border-b border-slate-200 pb-6">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  activeDept === dept
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPositions.map((position, index) => (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300 space-y-4"
              >
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    {position.department}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {position.title}
                  </h3>
                </div>

                <p className="text-slate-500 text-sm font-light leading-relaxed">
                  {position.description}
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
                    <MapPin className="h-3.5 w-3.5" />
                    {position.location}
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
                    <Clock className="h-3.5 w-3.5" />
                    {position.type}
                  </div>
                </div>

                <div className="pt-2">
                  <button className="text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors cursor-pointer group/btn">
                    View role
                    <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredPositions.length === 0 && (
            <div className="text-center py-16 space-y-4">
              <Search className="h-12 w-12 text-slate-300 mx-auto" />
              <p className="text-slate-500 text-lg">No open positions in this department right now.</p>
              <p className="text-slate-400 text-sm">Check back soon or subscribe to get notified.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stay on top of new opportunities */}
      <section className="py-20 bg-slate-50 text-slate-900 border-t border-slate-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Stay on top of new opportunities
          </h2>
          <p className="text-slate-500 font-light">
            Receive notifications about new roles that match your interests.
          </p>

          {subscribed ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-2">
              <p className="text-emerald-700 font-bold">You&apos;re subscribed!</p>
              <p className="text-emerald-600 text-sm">We&apos;ll notify you when new positions open up.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-slate-300 rounded-xl py-3 pl-11 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm shadow-lg shadow-blue-500/25 transition-all cursor-pointer whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white text-slate-900 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight text-center">
            FAQs
          </h2>

          <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
            {faqItems.map((faq, index) => (
              <div key={index}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
                >
                  <h3 className={`text-lg font-bold transition-colors ${
                    openFaq === index ? "text-blue-600" : "text-slate-900 group-hover:text-blue-600"
                  }`}>
                    {faq.question}
                  </h3>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 ml-4 transition-all ${
                    openFaq === index
                      ? "border-blue-500 bg-blue-50 text-blue-600"
                      : "border-slate-300 text-slate-400"
                  }`}>
                    {openFaq === index ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </div>
                </button>
                {openFaq === index && (
                  <div className="pb-6 -mt-2">
                    <p className="text-slate-500 text-sm font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore other career pages */}
      <section className="py-20 bg-slate-50 text-slate-900 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore other career pages
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {careerLocations.map((loc, index) => (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={loc.image}
                    alt={loc.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                </div>
                <div className="p-6 space-y-2">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {loc.name}
                    </h3>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                      {loc.country}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm font-light">{loc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
