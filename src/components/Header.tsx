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
          ? 'border-b border-[var(--color-line)] bg-white/95 shadow-[0_1px_3px_rgba(0,0,0,0.04)] backdrop-blur-md'
          : 'bg-white'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#home"
          className="flex items-center gap-2.5"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('#home')
          }}
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-lg bg-[var(--color-panel-dark)]">
            <Image
              src="/icon.png"
              alt="Winter Arc Myanmar"
              fill
              className="scale-110 object-cover object-center"
              priority
              sizes="40px"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-[-0.02em] text-[var(--color-ink)]">
              Winter Arc Myanmar
            </span>
            <span className="hidden text-[10px] font-semibold tracking-[0.24em] text-[var(--color-muted)] lg:block">
              DIGITAL DELIVERY
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-3 xl:flex">
          <nav
            aria-label="Primary"
            className="flex items-center gap-0.5"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className="rounded-lg px-3 py-2 text-xs font-semibold text-[var(--color-muted)] transition-all duration-200 hover:bg-[var(--color-brand-soft)] hover:text-[var(--color-brand-deep)]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => scrollToSection('#contact')}
            className="rounded-lg bg-[var(--color-brand)] px-4 py-2.5 text-xs font-semibold text-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-brand-deep)] hover:shadow-[0_4px_6px_rgba(37,99,235,0.2)]"
          >
            Book a Call
          </button>
        </div>

        <button
          type="button"
          aria-controls={mobileNavId}
          aria-haspopup="dialog"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="rounded-lg border border-[var(--color-line)] bg-white p-2.5 text-[var(--color-ink)] shadow-[var(--shadow-card)] transition-colors hover:bg-[var(--color-bg-alt)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(37,99,235,0.12)] xl:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 z-40 xl:hidden">
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setMobileMenuOpen(false)}
            className="absolute inset-0 z-0 h-[calc(100vh-4rem)] w-full cursor-default bg-[rgba(15,23,42,0.24)] backdrop-blur-[2px]"
          />
          <nav
            id={mobileNavId}
            aria-label="Primary"
            className="relative z-10 mx-4 max-h-[calc(100vh-5rem)] overflow-y-auto rounded-xl border border-[var(--color-line)] bg-white p-4 shadow-[var(--shadow-elevated)]"
          >
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                Navigation
              </p>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg border border-[var(--color-line)] bg-white px-3 py-1.5 text-xs font-semibold text-[var(--color-ink)]"
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
                className="block rounded-lg border border-transparent bg-[var(--color-bg-alt)] px-4 py-3 text-sm font-semibold text-[var(--color-ink)] transition-all duration-200 hover:border-[rgba(37,99,235,0.14)] hover:bg-[var(--color-brand-soft)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(37,99,235,0.1)]"
              >
                {item.name}
              </Link>
            ))}

            <button
              onClick={() => scrollToSection('#contact')}
              className="mt-3 rounded-lg bg-[var(--color-brand)] px-4 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-brand-deep)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(37,99,235,0.16)]"
            >
              Book a Call
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
