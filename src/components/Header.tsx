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
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    let frameId = 0

    const handleScroll = () => {
      if (frameId !== 0) {
        return
      }

      frameId = window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 24)
        frameId = 0
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId)
      }
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
      element.scrollIntoView({ behavior: 'smooth' })
      window.history.replaceState(null, '', href)
    }

    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-[var(--color-line)] bg-[rgba(248,251,246,0.9)] shadow-[0_12px_40px_rgba(17,32,21,0.08)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
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
          <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-white/50 shadow-lg shadow-[rgba(17,32,21,0.12)] md:h-14 md:w-14">
            <Image
              src="/logo.jpg"
              alt="Winter Arc Myanmar"
              fill
              className="object-cover"
              priority
              sizes="56px"
            />
          </div>

          <div className="flex flex-col">
            <span
              className={`text-base font-bold transition-colors duration-300 md:text-lg ${
                isScrolled ? 'text-[var(--color-brand-deep)]' : 'text-white'
              }`}
            >
              Winter Arc Myanmar
            </span>
            <span
              className={`hidden text-xs font-medium tracking-[0.24em] transition-colors duration-300 sm:block ${
                isScrolled ? 'text-[var(--color-muted)]' : 'text-white/70'
              }`}
            >
              DIGITAL PRODUCT STUDIO
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          <nav
            aria-label="Primary"
            className={`flex items-center gap-1 rounded-full border px-2 py-2 ${
              isScrolled
                ? 'border-[var(--color-line)] bg-white/80'
                : 'border-white/[0.18] bg-white/10 backdrop-blur-md'
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  isScrolled
                    ? 'text-[var(--color-muted)] hover:bg-[var(--color-brand-soft)] hover:text-[var(--color-brand-deep)]'
                    : 'text-white/[0.84] hover:bg-white/[0.12] hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => scrollToSection('#contact')}
            className={`rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
              isScrolled
                ? 'bg-[var(--color-brand)] text-white shadow-lg shadow-[rgba(30,122,77,0.28)] hover:bg-[var(--color-brand-deep)]'
                : 'bg-white text-[var(--color-brand-deep)] hover:bg-[var(--color-brand-soft)]'
            }`}
          >
            Start a Project
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className={`rounded-full border p-2.5 transition-colors md:hidden ${
            isScrolled
              ? 'border-[var(--color-line)] bg-white/80 text-[var(--color-brand-deep)] hover:bg-white'
              : 'border-white/[0.16] bg-white/10 text-white hover:bg-white/[0.14]'
          }`}
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
        <div className="border-t border-[var(--color-line)] bg-[rgba(248,251,246,0.96)] shadow-2xl backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className="rounded-2xl border border-transparent bg-white/70 px-4 py-3 text-base font-semibold text-[var(--color-brand-deep)] transition-all duration-200 hover:border-[rgba(30,122,77,0.15)] hover:bg-white"
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
