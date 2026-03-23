'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Technologies', href: '#technologies' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      const sections = navItems.map((item) => item.href.replace('#', ''))
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-slate-200 bg-white/95 shadow-lg backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 md:h-20 lg:px-8">
        <Link
          href="#home"
          className="flex items-center gap-3"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('#home')
          }}
        >
          <div className="relative h-12 w-12 md:h-16 md:w-16 overflow-hidden rounded-full">
            <Image
              src="/logo.jpg"
              alt="Winter Arc Myanmar"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col">
            <span
              className={`text-base font-bold transition-colors duration-300 md:text-xl ${
                isScrolled ? 'text-blue-600' : 'text-white'
              }`}
            >
              Winter Arc Myanmar
            </span>
            <span
              className={`hidden text-xs transition-colors duration-300 sm:block ${
                isScrolled ? 'text-slate-600' : 'text-blue-100'
              }`}
            >
              Software Solutions
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '')
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className={`group relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isScrolled
                    ? 'text-slate-700 hover:text-blue-600'
                    : 'text-white/90 hover:text-white'
                } ${isActive ? (isScrolled ? 'text-blue-600' : 'text-white') : ''}`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-blue-500 transition-all duration-300 ${
                    isActive ? 'w-1/2' : 'w-0 group-hover:w-1/2'
                  }`}
                />
              </Link>
            )
          })}

          <button
            onClick={() => scrollToSection('#contact')}
            className={`ml-3 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
              isScrolled
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700'
                : 'bg-white text-blue-600 hover:bg-blue-50'
            }`}
          >
            Get Quote
          </button>
        </nav>

        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className={`rounded-lg p-2 transition-colors md:hidden ${
            isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
          }`}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-slate-100 bg-white shadow-xl md:hidden">
          <nav className="flex flex-col px-4 py-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className={`rounded-lg px-4 py-3 text-base font-medium transition-all duration-200 ${
                    isActive
                      ? 'border-l-4 border-blue-600 bg-blue-50 text-blue-600'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}

            <button
              onClick={() => scrollToSection('#contact')}
              className="mt-4 rounded-lg bg-blue-600 py-3 font-medium text-white transition-colors hover:bg-blue-700"
            >
              Get Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}