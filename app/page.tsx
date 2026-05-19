import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import ServicesCarousel from "@/components/services-carousel"
import Testimonials from "@/components/testimonials"
import Team from "@/components/team"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/ScrollReveal"

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
      
      {/* Hero section loads immediately without scroll delay */}
      <Hero />
      
      {/* Services Section with Reveal */}
      <ScrollReveal variant="fade-up" delay={100}>
        <Services />
      </ScrollReveal>

      {/* Services Carousel Section with Reveal */}
      <ScrollReveal variant="fade-up" delay={100}>
        <ServicesCarousel />
      </ScrollReveal>

      {/* Partners Section with Reveal */}
      <ScrollReveal variant="fade-up" delay={100}>
        <section className="py-24 bg-slate-950 relative border-t border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 font-bold text-xs uppercase tracking-wider">
                Collaboration
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Our Partners</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
                Working with leading organizations to bring digital value and connection.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {partners.map((partner, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center p-6 bg-slate-900/40 border border-white/5 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 group hover:bg-slate-900/60"
                >
                  <div className="h-16 w-32 relative flex items-center justify-center filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
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

      {/* Team Section with Reveal */}
      <ScrollReveal variant="fade-up" delay={100}>
        <Team />
      </ScrollReveal>

      {/* Testimonials Section with Reveal */}
      <ScrollReveal variant="fade-up" delay={100}>
        <Testimonials />
      </ScrollReveal>

      <Footer />
    </main>
  )
}
