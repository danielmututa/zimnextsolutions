interface ServiceBannerProps {
  title: string
  description: string
  imageQuery: string
}

export default function ServiceBanner({ title, description, imageQuery }: ServiceBannerProps) {
  return (
    <section
      className="relative pt-32 pb-24 overflow-hidden"
      style={{
        backgroundImage: `url(/social-media-platform-ui-design.jpg?height=600&width=1920&query=${encodeURIComponent(imageQuery)})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-cyan-900/80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white text-balance drop-shadow-2xl">
          {title}
        </h1>
        <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto text-balance drop-shadow-lg">{description}</p>
      </div>
    </section>
  )
}
