"use client"

import Image from "next/image"
import { Linkedin, Facebook, ArrowUpRight } from "lucide-react"

export default function Team() {
  const teamMembers = [
    {
      name: "Daniel Mututa",
      role: "CEO & Lead Developer",
      image: "/Me.jpg",
      linkedin: "https://www.linkedin.com/in/daniel-mututa-7483032aa/",
      facebook: "https://www.facebook.com/profile.php?id=61576359646287",
    },
    {
      name: "Emmanuel Mututa",
      role: "CTO & Lead Developer",
      image: "/emmanuel pic.png",
      linkedin: "https://www.linkedin.com/in/emmanuel-mututa-355a6a356/",
      facebook: "https://www.facebook.com/profile.php?id=61576359646287",
    },
    {
      name: "Kelvin Mutukwa",
      role: "Head of Design",
      image: "/kelvin mutukwa.png",
      linkedin: "https://www.linkedin.com/in/kelvin-mutukwa-436b22349/",
      facebook: "https://www.facebook.com/profile.php?id=61576359646287",
    },
    {
      name: "Sean Manjengwa",
      role: "Marketing Director",
      image: "/Untitled-5.png",
      linkedin: "https://www.linkedin.com/in/sean-manjengwa-a49807279/",
      facebook: "https://www.facebook.com/profile.php?id=61576359646287",
    },
  ]

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-cyan-400 font-bold text-xs uppercase tracking-wider">
            Our Crew
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Meet Our Team</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Passionate tech professionals and designers dedicated to delivering excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-slate-900/40 border border-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group hover:border-cyan-500/30 flex flex-col justify-between"
            >
              {/* Profile Image */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-950/80">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  sizes="(max-w-768px) 100vw, 25vw"
                  priority={index < 2} // prioritize loading first 2 images for LCP optimization
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                {/* Visual shade gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
              </div>

              {/* Description details */}
              <div className="p-6 text-center space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-slate-400 text-sm font-light">{member.role}</p>
                </div>

                {/* Social media connections */}
                <div className="flex items-center justify-center gap-3 pt-2">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                    aria-label={`${member.name} LinkedIn Profile`}
                  >
                    <Linkedin className="h-4.5 w-4.5" />
                  </a>
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-indigo-600 transition-all duration-300"
                    aria-label={`${member.name} Facebook Profile`}
                  >
                    <Facebook className="h-4.5 w-4.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
