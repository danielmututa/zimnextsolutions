"use client"

import type React from "react"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

const services = [
  "Web Development",
  "Mobile Development",
  "iOS Development",
  "Android Development",
  "Digital Marketing",
  "Ui / Ux Design",
]

export default function ContactPage() {
  const [selectedService, setSelectedService] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedService) {
      alert("Please select a service you're interested in")
      return
    }
    alert(`Thank you for your inquiry about ${selectedService}! We'll get back to you soon.`)
    setFormData({ name: "", email: "", message: "" })
    setSelectedService("")
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white text-balance drop-shadow-2xl">
              Let's Build Something Amazing
            </h1>
            <p className="text-xl sm:text-2xl text-blue-200 max-w-3xl mx-auto text-balance">
              Share your vision with us and we'll bring it to life
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <Card className="lg:col-span-2 bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Full Name *</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">Email Address *</label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-sm font-semibold text-white mb-3">
                    Select Service * <span className="text-blue-300 text-xs ml-2">Choose what you need</span>
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className={`px-5 py-3 rounded-xl text-sm font-medium transition-all ${
                          selectedService === service
                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/50 scale-105"
                            : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                  {selectedService && <p className="text-sm text-blue-300 mt-2 font-medium">✓ {selectedService}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Project Details *</label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    className="min-h-40 resize-none bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={!selectedService}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all"
                >
                  <Send className="h-5 w-5 mr-2" />
                  {selectedService ? `Send Message` : "Select a service first"}
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-300" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Email</p>
                      <p className="text-blue-200 text-sm">zimnextsolutions@gmail.com</p>
                      
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-blue-300" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Phone</p>
                      <p className="text-blue-200 text-sm">+263 777 187 003</p>
                      <p className="text-blue-300 text-xs">Mon-Fri 8am-6pm PST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-300" />
                    </div>
                    <div>
                      <p className="font-semibold text-white mb-1">Office</p>
                      <p className="text-blue-200 text-sm">Harare</p>
                  
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl p-6">
                <p className="text-sm text-blue-100 leading-relaxed">
                  🌍 Global Team • 🚀 Fast Response • 💼 Professional Service
                  <br />
                  <br />
                  We serve clients worldwide. No matter where you are, we're ready to help transform your ideas into
                  reality.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
