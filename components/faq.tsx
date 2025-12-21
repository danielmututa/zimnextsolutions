"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer comprehensive web development, mobile app development (iOS & Android), UI/UX design, and digital marketing services. Our team specializes in creating custom solutions tailored to your business needs.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on scope and complexity. A basic website typically takes 4-6 weeks, while a full mobile application can take 3-6 months. We provide detailed timelines during our initial consultation.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, we offer comprehensive maintenance and support packages. This includes bug fixes, updates, security patches, and feature enhancements to ensure your product continues to perform optimally.",
    },
    {
      question: "What is your development process?",
      answer:
        "We follow an agile development methodology with regular sprints and client check-ins. This includes discovery, design, development, testing, and deployment phases with continuous communication throughout.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">TRUSTED BY</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                  {openIndex === index ? (
                    <Minus className="h-4 w-4 text-gray-600" />
                  ) : (
                    <Plus className="h-4 w-4 text-gray-600" />
                  )}
                </div>
              </button>
              {openIndex === index && <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
