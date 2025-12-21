import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ZimNext Solutions - UI/UX Design, Digital Marketing & Web Development",
  description: "Professional UI UX design services, digital marketing, web development, mobile app development, and software solutions. Expert UI UX designers, SEO services, social media marketing, and custom software development in Zimbabwe.",
  keywords: [
    // UI/UX Design Services (20 keywords)
    "UI UX design services",
    "UI UX design company",
    "professional UI UX designers",
    "website UI design services",
    "mobile app UI UX design",
    "user experience design services",
    "user interface design services",
    "web app UI UX design",
    "dashboard UI UX design",
    "SaaS UI UX design",
    "startup UI UX design",
    "UX research services",
    "UX prototyping services",
    "wireframe design services",
    "interaction design services",
    "usability testing services",
    "design system development",
    "figma UI UX design",
    "mobile UI design services",
    "UI UX designers in Zimbabwe",
    
    // Digital Marketing (20 keywords)
    "digital marketing services",
    "online marketing company",
    "social media marketing services",
    "SEO services",
    "Google Ads management",
    "Facebook advertising services",
    "Instagram marketing services",
    "online advertising company",
    "business marketing services",
    "website traffic growth services",
    "lead generation services",
    "marketing strategy services",
    "brand promotion services",
    "local digital marketing",
    "affordable digital marketing",
    "content marketing services",
    "email marketing services",
    "conversion rate optimization",
    "online brand growth",
    "performance marketing services",
    
    // Web & Software Development (20 keywords)
    "website development company",
    "software development services",
    "custom software development",
    "web application development",
    "business website developers",
    "professional web developers",
    "ecommerce website developers",
    "admin dashboard development",
    "business software solutions",
    "startup software development",
    "mobile app development services",
    "android app development",
    "ios app development",
    "cross platform app development",
    "web design and development",
    "IT solutions company",
    "software company in Zimbabwe",
    "website designers in Harare",
    "affordable website development",
    "enterprise software development",
  ],
  authors: [{ name: "ZimNext Solutions" }],
  creator: "ZimNext Solutions",
  publisher: "ZimNext Solutions",
  generator: "v0.app",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zimnextsolutions.co.zw",
    title: "ZimNext Solutions - UI/UX Design, Digital Marketing & Web Development",
    description: "Professional UI UX design services, digital marketing, web development, mobile app development, and software solutions in Zimbabwe.",
    siteName: "ZimNext Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZimNext Solutions - UI/UX Design, Digital Marketing & Web Development",
    description: "Professional UI UX design services, digital marketing, web development, mobile app development, and software solutions in Zimbabwe.",
  },
  icons: {
    icon: [
      {
        url: "/zimnext solutions.png",
        type: "image/png",
      },
    ],
    apple: "/zimnext solutions.png",
    shortcut: "/zimnext solutions.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/zimnext solutions.png" type="image/png" />
        <link rel="apple-touch-icon" href="/zimnext solutions.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}








// import type React from "react"
// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
// import "./globals.css"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "TechDev Solutions - Web, Mobile & Digital Marketing",
//   description: "Professional web development, mobile app development (iOS & Android), and digital marketing services",
//   generator: "v0.app",
//   icons: {
//     icon: [
//       {
//         url: "/icon-light-32x32.png",
//         media: "(prefers-color-scheme: light)",
//       },
//       {
//         url: "/icon-dark-32x32.png",
//         media: "(prefers-color-scheme: dark)",
//       },
//       {
//         url: "/icon.svg",
//         type: "image/svg+xml",
//       },
//     ],
//     apple: "/apple-icon.png",
//   },
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${inter.className} antialiased`}>
//         {children}
//         <Analytics />
//       </body>
//     </html>
//   )
// }
