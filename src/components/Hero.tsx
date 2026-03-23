'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-700 to-blue-500">
        <div className="animate-shimmer absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.35),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(29,78,216,0.45),transparent_45%)]" />
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(18)].map((_, i) => (
          <span
            key={i}
            className="animate-float absolute h-2 w-2 rounded-full bg-white/10"
            style={{
              left: `${(i * 13) % 100}%`,
              top: `${(i * 17) % 100}%`,
              animationDelay: `${i * 0.25}s`,
              animationDuration: `${4 + (i % 4)}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-28 text-center sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium text-white/90">
              Professional Software Solution Company
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Building Modern
            <span className="mt-2 block bg-gradient-to-r from-blue-200 via-cyan-200 to-white bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-blue-100 sm:text-xl">
            Winter Arc Myanmar delivers modern web, mobile, and cloud solutions
            that help businesses launch faster, scale smarter, and build trust online.
          </p>

          <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() => scrollToSection('#contact')}
              className="rounded-xl bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-blue-50"
            >
              Get Started
            </button>

            <button
              onClick={() => scrollToSection('#portfolio')}
              className="rounded-xl border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
            >
              View Our Work
            </button>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {[
              ['10+', 'Happy Clients'],
              ['10+', 'Projects Done'],
              ['4+', 'Years Experience'],
              ['24/7', 'Support'],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
              >
                <div className="text-2xl font-bold text-white">{value}</div>
                <div className="mt-1 text-sm text-blue-200">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}