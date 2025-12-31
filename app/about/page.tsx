import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Users, Globe, Heart, Award, TrendingUp, Sparkles, Zap, Shield, Lightbulb } from "lucide-react"

export default function PartnersPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background z-30" />
        <img src="/about.jpeg" className="absolute inset-0 w-full h-full -z-20 object-cover" alt="" />
        <div className="container  mx-auto z-50 px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Pioneering the Future of{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Digital Experiences</span>
            </h1>
            <p className="text-lg md:text-xl  leading-relaxed text-pretty text-white">
              We are a visionary technology company pioneering the future of digital experiences through AI, quantum computing, and immersive design.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We empower businesses with innovative solutions that merge creativity, design, and technology. We bridge the gap between human imagination and technological possibility, creating experiences that go beyond traditional digital boundaries.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="outline">Innovation</Badge>
                  <Badge variant="outline">Creativity</Badge>
                  <Badge variant="outline">Human-Centered Design</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-accent/20">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Globe className="w-7 h-7 text-accent" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be Africa's leading solutions company, setting benchmarks in design, engineering, and marketing by 2026. We envision a future where technology seamlessly integrates with human potential, creating limitless opportunities for growth and innovation.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="outline">Leadership</Badge>
                  <Badge variant="outline">Future-ready</Badge>
                  <Badge variant="outline">Digital Transformation</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that drive our innovation
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Innovation First</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Pushing boundaries with AI-driven solutions, scalable platforms, and immersive digital experiences.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Human-Centered</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Technology should enhance human potential, not replace human creativity
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Global Vision</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Connecting Africa to the world through cutting-edge technology and cross-cultural digital collaboration.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg">Excellence</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Delivering high-quality solutions with meticulous attention to detail, creativity, and forward-thinking design.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Futuristic Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Futuristic Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the visionaries shaping tomorrow's technology
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto flex items-center justify-center text-2xl font-bold text-white">
                  DM
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Daniel Mututa</h3>
                  <p className="text-sm text-muted-foreground">CEO & Lead Developer</p>
                  <p className="text-xs text-muted-foreground mt-1">Quantum Computing & AI</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-primary mx-auto flex items-center justify-center text-2xl font-bold text-white">
                  EM
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Emmanuel Mututa</h3>
                  <p className="text-sm text-muted-foreground">CTO & Lead Developer</p>
                  <p className="text-xs text-muted-foreground mt-1">Quantum Computing & AI</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-primary mx-auto flex items-center justify-center text-2xl font-bold text-white">
                  KM
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Kelvin Mutukwa</h3>
                  <p className="text-sm text-muted-foreground">Creative Director</p>
                  <p className="text-xs text-muted-foreground mt-1">3D Design & AR/VR</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 space-y-4 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto flex items-center justify-center text-2xl font-bold text-white">
                  SM
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Sean Manjegwa</h3>
                  <p className="text-sm text-muted-foreground">Digital Marketing Lead</p>
                  <p className="text-xs text-muted-foreground mt-1">Predictive Analytics & Campaigns</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Shaping the future, one innovation at a time
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold">2027</div>
              <div className="text-primary-foreground/80">Founded for the Future</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold">7+</div>
              <div className="text-primary-foreground/80">Projects Completed</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold">1+</div>
              <div className="text-primary-foreground/80">Countries Reached</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold">98%</div>
              <div className="text-primary-foreground/80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Join the Future with Us</h2>
            <p className="text-lg text-muted-foreground">
              Ready to transform your business with cutting-edge technology?
            </p>
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}