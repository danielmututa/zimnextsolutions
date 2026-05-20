"use client"

import { useState } from "react"
import { Send, Check, Mail, MessageSquare, User, Building } from "lucide-react"

export default function ContactFormSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please complete all required fields.")
      return
    }

    if (!email.includes("@")) {
      setError("Please check your email address format.")
      return
    }

    setError("")
    
    // Save to local storage mock list
    const contactLead = {
      name,
      email,
      company,
      message,
      submittedAt: new Date().toISOString()
    }
    
    const currentLeads = JSON.parse(localStorage.getItem("contact_leads") || "[]")
    currentLeads.push(contactLead)
    localStorage.setItem("contact_leads", JSON.stringify(currentLeads))
    
    setSubmitted(true)
    
    // Reset form fields
    setName("")
    setEmail("")
    setCompany("")
    setMessage("")
  }

  return (
    <section id="contact-section" className="py-32 bg-slate-950/90 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Side text */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs uppercase tracking-widest font-bold text-blue-500">Contact Us</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Have a question? <br />
            Drop us a line
          </h2>
          <p className="text-lg text-slate-400 font-light leading-relaxed max-w-sm">
            Whether you want to build a mobile app, migrate legacy databases, or hire technical specialists, our leads are ready to collaborate.
          </p>
        </div>

        {/* Right Side Form Container */}
        <div className="lg:col-span-7 bg-slate-900/40 border border-white/5 p-8 sm:p-10 rounded-3xl backdrop-blur-md">
          {submitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-400/25 flex items-center justify-center text-emerald-400">
                <Check className="h-8 w-8 stroke-[3]" />
              </div>
              <h3 className="text-2xl font-extrabold text-white">Message Dispatched!</h3>
              <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
                Thank you. One of our engineers will review your request and get in touch with you shortly.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-4 text-xs font-semibold text-blue-500 hover:text-blue-400 cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-3 bg-rose-500/10 border border-rose-500/25 rounded-xl text-xs font-semibold text-rose-400 text-center">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-500" />
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-slate-700 focus:outline-none focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-500" />
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-slate-700 focus:outline-none focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Company */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Company / Organization
                </label>
                <div className="relative">
                  <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-500" />
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-slate-700 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Project Brief or Inquiry *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-500" />
                  <textarea
                    rows={4}
                    placeholder="Briefly describe what you'd like to build, timelines, or questions..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-slate-700 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    required
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}
