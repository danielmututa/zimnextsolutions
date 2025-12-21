// "use client"

// import { useEffect, useRef } from "react"

// export default function SmoothScroll({ children }: { children: React.ReactNode }) {
//   const scrollRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     let locomotiveScroll: any

//     const initScroll = async () => {
//       try {
//         const LocomotiveScroll = (await import("locomotive-scroll")).default

//         if (scrollRef.current) {
//           locomotiveScroll = new LocomotiveScroll({
//             el: scrollRef.current,
//             smooth: true,
//             multiplier: 0.8,
//             lerp: 0.1,
//             class: "is-reveal",
//             smartphone: {
//               smooth: true,
//               multiplier: 0.6,
//             },
//             tablet: {
//               smooth: true,
//               multiplier: 0.7,
//             },
//           })

//           // Update on resize
//           const handleResize = () => {
//             if (locomotiveScroll) {
//               locomotiveScroll.update()
//             }
//           }

//           window.addEventListener("resize", handleResize)

//           return () => {
//             window.removeEventListener("resize", handleResize)
//           }
//         }
//       } catch (error) {
//         console.error("Locomotive Scroll error:", error)
//       }
//     }

//     // Small delay to ensure DOM is ready
//     const timer = setTimeout(() => {
//       initScroll()
//     }, 100)

//     return () => {
//       clearTimeout(timer)
//       if (locomotiveScroll) {
//         locomotiveScroll.destroy()
//       }
//     }
//   }, [])

//   return (
//     <div ref={scrollRef} data-scroll-container className="smooth-scroll-wrapper">
//       {children}
//     </div>
//   )
// }