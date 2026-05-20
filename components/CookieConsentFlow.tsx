"use client"

import { useState, useEffect } from "react"
import { Check, X, ShieldAlert, Laptop, MessageSquareText, Mail, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CookieConsentFlow() {
  const [showCookieBanner, setShowCookieBanner] = useState(false)
  const [showSurveyModal, setShowSurveyModal] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  
  // Form states
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [projectType, setProjectType] = useState("Web Application")
  const [description, setDescription] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    // Check localStorage status
    const cookiesAccepted = localStorage.getItem("cookies_accepted")
    const surveyDone = localStorage.getItem("survey_completed") || localStorage.getItem("survey_dismissed")

    if (!cookiesAccepted) {
      // First-time visit: show cookie consent banner
      const timer = setTimeout(() => {
        setShowCookieBanner(true)
      }, 1500)
      return () => clearTimeout(timer)
    } else if (!surveyDone) {
      // Second visit or return visit: show full screen lead questionnaire
      const timer = setTimeout(() => {
        setShowSurveyModal(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptCookies = () => {
    localStorage.setItem("cookies_accepted", "true")
    setShowCookieBanner(false)
    
    // Trigger the survey modal after a short delay
    setTimeout(() => {
      const surveyDone = localStorage.getItem("survey_completed") || localStorage.getItem("survey_dismissed")
      if (!surveyDone) {
        setShowSurveyModal(true)
      }
    }, 1000)
  }

  const handleDeclineCookies = () => {
    localStorage.setItem("cookies_accepted", "declined")
    setShowCookieBanner(false)
  }

  const handleSkipSurvey = () => {
    localStorage.setItem("survey_dismissed", "true")
    setShowSurveyModal(false)
  }

  const handleSubmitSurvey = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name.trim() || !email.trim() || !description.trim()) {
      setError("Please fill out all fields.")
      return
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.")
      return
    }

    setError("")
    
    // Save lead data mock submission
    const lead = {
      name,
      email,
      projectType,
      description,
      submittedAt: new Date().toISOString()
    }
    
    const existingLeads = JSON.parse(localStorage.getItem("survey_leads") || "[]")
    existingLeads.push(lead)
    localStorage.setItem("survey_leads", JSON.stringify(existingLeads))
    localStorage.setItem("survey_completed", "true")
    
    setFormSubmitted(true)
    
    // Close modal after success animation delay
    setTimeout(() => {
      setShowSurveyModal(false)
    }, 2000)
  }

  return (
    <>
      {/* 1. Cookie Consent Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md bg-slate-900 border border-white/10 p-5 rounded-2xl shadow-2xl z-50 flex flex-col gap-4 animate-fade-in">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-400/20 text-cyan-400 shrink-0">
              <ShieldAlert className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-white text-sm">Cookie Settings</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                We use cookies to analyze web traffic and optimize your system experience. By accepting, you consent to our privacy terms.
              </p>
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <button
              onClick={handleDeclineCookies}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              Decline
            </button>
            <button
              onClick={handleAcceptCookies}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-lg shadow-blue-500/10 transition-all"
            >
              Accept Cookies
            </button>
          </div>
        </div>
      )}

      {/* 2. Full-Screen Questionnaire Modal */}
      {showSurveyModal && (
        <div className="fixed inset-0 bg-slate-950/95 backdrop-blur-2xl z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="w-full max-w-xl bg-slate-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden my-8 relative">
            
            {/* Close / Skip button */}
            <button
              onClick={handleSkipSurvey}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Skip survey"
            >
              <X className="h-5 w-5" />
            </button>

            {!formSubmitted ? (
              <form onSubmit={handleSubmitSurvey} className="p-8 sm:p-10 space-y-6">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mx-auto text-blue-400 mb-4">
                    <Laptop className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    What are you building?
                  </h3>
                  <p className="text-sm text-slate-400 max-w-sm mx-auto">
                    Let us know what kind of project you have in mind so we can provide the correct technical staff.
                  </p>
                </div>

                {error && (
                  <div className="p-3 bg-rose-500/10 border border-rose-500/25 rounded-xl text-xs font-semibold text-rose-400 text-center">
                    {error}
                  </div>
                )}

                <div className="space-y-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-500" />
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-950 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-500" />
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-950 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Project Type
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Web Application", "Mobile App", "Custom System", "UI/UX Design"].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setProjectType(type)}
                          className={`py-3 px-4 rounded-xl border text-xs font-semibold transition-all text-center cursor-pointer ${
                            projectType === type
                              ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/10"
                              : "bg-slate-950 border-white/10 text-slate-400 hover:text-white hover:bg-slate-950/80"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Description field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Tell us about your requirements
                    </label>
                    <div className="relative">
                      <MessageSquareText className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-500" />
                      <textarea
                        rows={3}
                        placeholder="Provide details on features, target audience, timelines, etc..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full bg-slate-950 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleSkipSurvey}
                    className="w-full sm:w-1/3 py-3 border border-white/5 bg-slate-950 hover:bg-slate-950/80 text-slate-400 hover:text-white font-semibold rounded-xl text-sm transition-all"
                  >
                    Skip
                  </button>
                  <button
                    type="submit"
                    className="w-full sm:w-2/3 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm shadow-lg shadow-blue-500/20 transition-all"
                  >
                    Submit Spec Request
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-10 text-center space-y-6 flex flex-col items-center justify-center min-h-[400px] animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-400/25 flex items-center justify-center text-emerald-400">
                  <Check className="h-8 w-8 stroke-[3]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-white">Project Spec Received!</h3>
                  <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{name}</span>. Our lead developers will review your requirements and reach out to you at <span className="text-white font-semibold">{email}</span>.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
