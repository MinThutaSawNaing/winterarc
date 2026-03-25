'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navItems = [
  { name: 'Overview', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Technologies', href: '#technologies' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Loli', href: '#loli' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', href)
    }

    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[rgba(18,26,40,0.08)] bg-[rgba(247,245,239,0.82)] shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[5.25rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#home"
          className="flex items-center gap-3"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('#home')
          }}
        >
          <div className="relative h-12 w-14 overflow-hidden rounded-[1.35rem] border border-white/70 bg-[linear-gradient(180deg,#102237_0%,#173152_100%)] shadow-[0_18px_34px_rgba(15,23,42,0.18)] md:h-14 md:w-16">
            <Image
              src="/icon.png"
              alt="Winter Arc Myanmar"
              fill
              className="scale-[1.18] object-cover object-center"
              priority
              sizes="(min-width: 768px) 64px, 56px"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-base font-bold tracking-[-0.03em] text-[var(--color-ink)] md:text-lg">
              Winter Arc Myanmar
            </span>
            <span className="hidden text-[11px] font-semibold tracking-[0.26em] text-[var(--color-muted)] sm:block">
              ENTERPRISE DIGITAL DELIVERY
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          <nav
            aria-label="Primary"
            className="flex items-center gap-1 rounded-full border border-white/70 bg-white/75 p-2 shadow-[0_10px_24px_rgba(15,23,42,0.05)] backdrop-blur-xl"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className="rounded-full px-4 py-2 text-sm font-semibold text-[var(--color-muted)] transition-all duration-200 hover:bg-[var(--color-brand-soft)] hover:text-[var(--color-ink)]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => scrollToSection('#contact')}
            className="rounded-full bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(180,83,9,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#9a470a]"
          >
            Book a Discovery Call
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="rounded-full border border-white/70 bg-white/80 p-2.5 text-[var(--color-ink)] shadow-[0_12px_24px_rgba(15,23,42,0.07)] transition-colors hover:bg-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
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
        <div className="border-t border-[rgba(18,26,40,0.08)] bg-[rgba(247,245,239,0.96)] shadow-[0_18px_42px_rgba(15,23,42,0.09)] backdrop-blur-2xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className="rounded-[1.35rem] border border-transparent bg-white px-4 py-3 text-base font-semibold text-[var(--color-ink)] shadow-[0_10px_20px_rgba(15,23,42,0.04)] transition-all duration-200 hover:border-[rgba(15,118,110,0.18)] hover:bg-[rgba(15,118,110,0.04)]"
              >
                {item.name}
              </Link>
            ))}

            <button
              onClick={() => scrollToSection('#contact')}
              className="mt-3 rounded-[1.35rem] bg-[var(--color-accent)] px-4 py-3 font-semibold text-white transition-colors hover:bg-[#9a470a]"
            >
              Book a Discovery Call
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
