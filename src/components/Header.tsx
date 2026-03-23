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
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
      element.scrollIntoView({ behavior: 'smooth' })
      window.history.replaceState(null, '', href)
    }

    setMobileMenuOpen(false)
  }

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-[var(--color-line)] bg-[rgba(255,255,255,0.88)] shadow-[0_12px_36px_rgba(15,23,42,0.08)] backdrop-blur-xl"
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 md:h-20 lg:px-8">
        <Link
          href="#home"
          className="flex items-center gap-3"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('#home')
          }}
        >
          <div className="relative h-12 w-14 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-[rgba(15,23,42,0.1)] md:h-14 md:w-16">
            <Image
              src="/icon.png"
              alt="Winter Arc Myanmar"
              fill
              className="scale-[1.28] object-cover object-center"
              priority
              sizes="(min-width: 768px) 64px, 56px"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-base font-bold text-[var(--color-brand-deep)] md:text-lg">
              Winter Arc Myanmar
            </span>
            <span className="hidden text-xs font-medium tracking-[0.24em] text-slate-500 sm:block">
              DIGITAL PRODUCT STUDIO
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          <nav
            aria-label="Primary"
            className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50/90 px-2 py-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className="rounded-full px-4 py-2 text-sm font-semibold text-[var(--color-muted)] transition-all duration-200 hover:bg-[var(--color-brand-soft)] hover:text-[var(--color-brand-deep)]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => scrollToSection('#contact')}
            className="rounded-full bg-[var(--color-brand)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(37,99,235,0.24)] transition-all duration-300 hover:bg-[var(--color-brand-deep)]"
          >
            Start a Project
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="rounded-full border border-slate-200 bg-slate-50 p-2.5 text-[var(--color-brand-deep)] transition-colors hover:bg-white md:hidden"
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
        <div className="border-t border-[var(--color-line)] bg-[rgba(255,255,255,0.96)] shadow-2xl backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className="rounded-2xl border border-transparent bg-slate-50 px-4 py-3 text-base font-semibold text-[var(--color-brand-deep)] transition-all duration-200 hover:border-slate-200 hover:bg-white"
              >
                {item.name}
              </Link>
            ))}

            <button
              onClick={() => scrollToSection('#contact')}
              className="mt-3 rounded-2xl bg-[var(--color-brand)] px-4 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-brand-deep)]"
            >
              Start a Project
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
