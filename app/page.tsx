import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import ServicesCarousel from "@/components/services-carousel"
import Testimonials from "@/components/testimonials"
import PricingCard from "@/components/packaging"
import Team from "@/components/team"
import Footer from "@/components/footer"

export default function Home() {


const partner = [
  {img:"/Black_White_Mini.png"},
  {img:"/Ominiview.png"},
  {img:"/neonspark.png"},
  {img:"/Eight Tech - blue-B9VBXCZ7.png"},
]

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <ServicesCarousel />
   {/* Partners Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Partners</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Working with leading  network operators to bring connectivity to millions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partner.map((partner, i) => (
              <div
              
              key={i}
              className="flex items-center justify-center p-6 bg-blue-50 rounded-xl hover:bg-muted/70 transition-colors"
              >


                <div className="text-xl font-bold text-muted-foreground">
                 
                  <img src= {partner.img} className="object-contain h-18 w-35" alt="" />
                  
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingCard />
      <Team />
          <Testimonials />
      <Footer />
    </main>
  )
}
