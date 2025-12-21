import Navbar from "@/components/navbar"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      <Navbar />
      <div className="pt-32 pb-20">
        <FAQ />
      </div>
      <Footer />
    </main>
  )
}
