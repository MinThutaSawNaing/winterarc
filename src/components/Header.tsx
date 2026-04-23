'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LOLI_OPEN_EVENT } from '@/lib/loli-config'
import { lockBodyScroll, unlockBodyScroll } from '@/lib/body-scroll-lock'

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
  const mobileNavId = 'primary-navigation'

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
    if (!mobileMenuOpen) {
      return
    }

    lockBodyScroll()

    return () => {
      unlockBodyScroll()
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    if (!mobileMenuOpen) {
      return
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [mobileMenuOpen])

  const scrollToSection = (href: string) => {
    if (href === '#loli') {
      window.dispatchEvent(new CustomEvent(LOLI_OPEN_EVENT))
      window.history.replaceState(null, '', href)
      setMobileMenuOpen(false)
      return
    }

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
            <span className="text-sm font-bold tracking-[-0.02em] text-[var(--color-ink)] md:text-base">
              Winter Arc Myanmar
            </span>
            <span className="hidden text-[11px] font-semibold tracking-[0.26em] text-[var(--color-muted)] lg:block">
              ENTERPRISE DIGITAL DELIVERY
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-3 xl:flex">
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
                className="rounded-full px-4 py-2 text-xs font-semibold text-[var(--color-muted)] transition-all duration-200 hover:bg-[var(--color-brand-soft)] hover:text-[var(--color-ink)]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => scrollToSection('#contact')}
            className="rounded-full bg-[var(--color-accent)] px-5 py-3 text-xs font-semibold text-white shadow-[0_16px_30px_rgba(180,83,9,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#9a470a]"
          >
            Book a Discovery Call
          </button>
        </div>

        <button
          type="button"
          aria-controls={mobileNavId}
          aria-haspopup="dialog"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="rounded-full border border-white/70 bg-white/80 p-2.5 text-[var(--color-ink)] shadow-[0_12px_24px_rgba(15,23,42,0.07)] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(15,118,110,0.16)] xl:hidden"
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
        <div className="fixed inset-x-0 top-[5.25rem] z-40 xl:hidden">
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setMobileMenuOpen(false)}
            className="absolute inset-0 z-0 h-[calc(100vh-5.25rem)] w-full cursor-default bg-[rgba(16,24,39,0.28)] backdrop-blur-[2px]"
          />
          <nav
            id={mobileNavId}
            aria-label="Primary"
            className="relative z-10 mx-4 max-h-[calc(100vh-6.25rem)] overflow-y-auto rounded-[1.75rem] border border-[rgba(18,26,40,0.08)] bg-[rgba(247,245,239,0.98)] px-4 py-4 shadow-[0_24px_60px_rgba(15,23,42,0.18)] backdrop-blur-2xl"
          >
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Quick navigation
              </p>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full border border-[rgba(18,26,40,0.08)] bg-white px-3 py-1.5 text-xs font-semibold text-[var(--color-ink)]"
              >
                Close
              </button>
            </div>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className="rounded-[1.35rem] border border-transparent bg-white px-4 py-3 text-sm font-semibold text-[var(--color-ink)] shadow-[0_10px_20px_rgba(15,23,42,0.04)] transition-all duration-200 hover:border-[rgba(15,118,110,0.18)] hover:bg-[rgba(15,118,110,0.04)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(15,118,110,0.14)]"
              >
                {item.name}
              </Link>
            ))}

            <button
              onClick={() => scrollToSection('#contact')}
              className="mt-3 rounded-[1.35rem] bg-[var(--color-accent)] px-4 py-3 font-semibold text-white transition-colors hover:bg-[#9a470a] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(180,83,9,0.18)]"
            >
              Book a Discovery Call
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
