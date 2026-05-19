"use client"

import React, { useEffect, useRef, useState } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  variant?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "fade"
  delay?: number // in ms
  duration?: number // in ms
  threshold?: number // 0 to 1
  className?: string
}

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 800,
  threshold = 0.1,
  className = "",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Once it reveals, we can unobserve if we want it to stay revealed
          if (ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px", // triggers slightly before entering viewport
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  // Map variants to initial tailwind styles
  const getVariantStyles = () => {
    if (isVisible) {
      return "opacity-100 translate-x-0 translate-y-0 scale-100"
    }

    switch (variant) {
      case "fade-up":
        return "opacity-0 translate-y-12"
      case "fade-down":
        return "opacity-0 -translate-y-12"
      case "fade-left":
        return "opacity-0 -translate-x-12"
      case "fade-right":
        return "opacity-0 translate-x-12"
      case "scale":
        return "opacity-0 scale-90 translate-y-4"
      case "fade":
        return "opacity-0"
      default:
        return "opacity-0 translate-y-12"
    }
  }

  const transitionStyle = {
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)", // ultra-smooth ease-out
  }

  return (
    <div
      ref={ref}
      style={transitionStyle}
      className={`${getVariantStyles()} ${className}`}
    >
      {children}
    </div>
  )
}
