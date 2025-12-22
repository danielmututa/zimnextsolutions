import Image from "next/image"
import { Linkedin, Twitter, Facebook } from "lucide-react"

export default function Team() {
  const teamMembers = [
    {
      name: "Daniel  Mututa",
      role: "CEO & Lead Developer",
      image: "/Me.jpg",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Emmanuel  Mututa",
      role: "CTO & Lead Developer",
      image: "/emmanuel pic.png",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Kelvin Mutukwa",
      role: "Head of Design",
      image: "/kelvin mutukwa.png",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Sean Manjengwa",
      role: "Marketing Director",
      image: "/sean.jpg",
      linkedin: "#",
      facebook: "#",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Passionate professionals dedicated to delivering excellence in every project
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href={member.linkedin}
                    className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.facebook}
                    className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
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
