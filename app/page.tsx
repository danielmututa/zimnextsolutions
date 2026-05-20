import Navbar from "@/components/navbar"
import HeroAccerstus from "@/components/HeroAccerstus"
import SolutionsList from "@/components/SolutionsList"
import InteractivePillars from "@/components/InteractivePillars"
import ShowcaseGrid from "@/components/ShowcaseGrid"
import TeamTimeline from "@/components/TeamTimeline"
import CapabilitiesList from "@/components/CapabilitiesList"
import ContactFormSection from "@/components/ContactFormSection"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/ScrollReveal"
import CookieConsentFlow from "@/components/CookieConsentFlow"
import AiVideoSection from "@/components/AiVideoSection"

export default function Home() {
  const partners = [
    { img: "/Black_White_Mini.png", name: "Black & White Mini" },
    { img: "/Ominiview.png", name: "Omniview" },
    { img: "/neonspark.png", name: "NeonSpark" },
    { img: "/Eight Tech - blue-B9VBXCZ7.png", name: "Eight Tech" },
  ]

  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />
      
      {/* 1. Accerstus Style Hero Section */}
      <HeroAccerstus />
      
      {/* 2. Solutions Stacked List */}
      <ScrollReveal variant="fade-up" delay={100}>
        <SolutionsList />
      </ScrollReveal>

      {/* 3. Core Blueprint Pillars */}
      <ScrollReveal variant="fade-up" delay={100}>
        <InteractivePillars />
      </ScrollReveal>

      {/* 4. Highlights / Showcase Images */}
      <ScrollReveal variant="fade-up" delay={100}>
        <ShowcaseGrid />
      </ScrollReveal>

      {/* 5. AI Video Autoplay Section */}
      <ScrollReveal variant="fade-up" delay={100}>
        <AiVideoSection />
      </ScrollReveal>

      {/* 6. Team Timeline Offset Circles */}
      <ScrollReveal variant="fade-up" delay={100}>
        <TeamTimeline />
      </ScrollReveal>

      {/* 6. Capabilities checklist */}
      <ScrollReveal variant="fade-up" delay={100}>
        <CapabilitiesList />
      </ScrollReveal>

      {/* 7. Partners Stripe Section */}
      <ScrollReveal variant="fade-up" delay={100}>
        <section className="py-24 bg-slate-950 relative border-t border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 space-y-4">
              <span className="text-xs uppercase tracking-widest font-bold text-blue-500">Collaboration</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Our Partners</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {partners.map((partner, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center p-6 bg-white border border-slate-200/80 rounded-2xl transition-all duration-300 group hover:shadow-xl hover:scale-[1.02] cursor-pointer"
                >
                  <div className="h-16 w-32 relative flex items-center justify-center transition-all duration-300">
                    <img 
                      src={partner.img} 
                      className="object-contain max-h-full max-w-full" 
                      alt={partner.name} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 8. Accerstus Style Contact form */}
      <ScrollReveal variant="fade-up" delay={100}>
        <ContactFormSection />
      </ScrollReveal>

      <Footer />

      {/* Cookie Consent & Onboarding Survey Modal */}
      <CookieConsentFlow />
    </main>
  )
}
