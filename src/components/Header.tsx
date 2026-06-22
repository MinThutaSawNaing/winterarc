'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { WinterArcLogo3D } from '@/components/poweredByWinterArcAnimation/WinterArcLogo3D'
import '@/components/poweredByWinterArcAnimation/poweredByWinterArcAnimation.css'
import { LOLI_OPEN_EVENT } from '@/lib/loli-config'
import { lockBodyScroll, unlockBodyScroll } from '@/lib/body-scroll-lock'
import ContactModal from '@/components/ContactModal'

const navItems = [
  { name: 'Overview', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Team', href: '#team' },
  { name: 'Technologies', href: '#technologies' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Loli', href: '#loli' },
  { name: 'Contact', href: '#contact' },
] as const

const sectionIds = navItems.map((item) => item.href.replace('#', ''))

function CalendarIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg className="h-4 w-4 text-[var(--color-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [contactModalOpen, setContactModalOpen] = useState(false)
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
    const visibleSections = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id
          if (!id) return

          if (entry.isIntersecting) {
            visibleSections.set(id, entry.intersectionRatio)
          } else {
            visibleSections.delete(id)
          }
        })

        if (visibleSections.size === 0) return

        const nextActive = [...visibleSections.entries()].sort((a, b) => b[1] - a[1])[0]?.[0]
        if (nextActive) {
          setActiveSection(nextActive)
        }
      },
      {
        rootMargin: '-32% 0px -52% 0px',
        threshold: [0, 0.15, 0.35, 0.55, 0.75],
      }
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
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
      setActiveSection(targetId)
    }

    setMobileMenuOpen(false)
  }

  const isActive = (href: string) => activeSection === href.replace('#', '')

  return (
    <header
      className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}
    >
      <div className="site-header__inner mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-3 pt-[env(safe-area-inset-top,0px)] sm:gap-3 sm:px-6 lg:gap-4 lg:px-8">
        <Link
          href="#home"
          className="header-brand-lockup group flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3 lg:flex-none"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('#home')
          }}
        >
          <div
            className="header-logo-tile relative h-10 w-10 shrink-0 overflow-hidden rounded-[0.7rem] bg-[var(--color-panel-dark)]"
            aria-hidden
          >
            <WinterArcLogo3D size={40} iconVariant="dark" contained />
          </div>

          <div className="flex min-w-0 flex-col">
            <span className="header-brand-name truncate text-[0.82rem] font-bold leading-tight tracking-[-0.02em] sm:text-[0.9rem]">
              Winter Arc Myanmar
            </span>
            <span className="header-brand-tagline mt-0.5 hidden truncate text-[0.52rem] font-semibold uppercase tracking-[0.2em] min-[420px]:block sm:text-[0.58rem] md:text-[0.62rem]">
              Digital Delivery
            </span>
          </div>
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-end gap-2 lg:flex xl:gap-3">
          <nav aria-label="Primary" className="header-nav-rail min-w-0 shrink">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className={`header-nav-link whitespace-nowrap ${
                  isActive(item.href) ? 'header-nav-link--active' : ''
                }`}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <button type="button" onClick={() => setContactModalOpen(true)} className="header-cta shrink-0">
            <CalendarIcon />
            <span className="hidden xl:inline">Book a Call</span>
            <span className="xl:hidden">Book</span>
          </button>
        </div>

        <button
          type="button"
          aria-controls={mobileNavId}
          aria-haspopup="dialog"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className={`header-menu-toggle shrink-0 p-2.5 text-[var(--color-ink)] focus-visible:outline-none lg:hidden ${
            mobileMenuOpen ? 'header-menu-toggle--open' : ''
          }`}
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
        <div className="fixed inset-x-0 top-16 z-40 lg:hidden">
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setMobileMenuOpen(false)}
            className="header-mobile-backdrop absolute inset-0 z-0 h-[calc(100dvh-4rem)] w-full cursor-default"
          />
          <nav
            id={mobileNavId}
            aria-label="Primary"
            className="header-mobile-panel relative z-10 mx-2 max-h-[calc(100dvh-5.25rem)] overflow-y-auto rounded-2xl p-3 sm:mx-4"
          >
            <div className="mb-3 flex items-center justify-between border-b border-[var(--color-line)] px-1 pb-3">
              <div>
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Menu
                </p>
                <p className="mt-0.5 text-sm font-semibold text-[var(--color-ink)]">Navigate the site</p>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg border border-[var(--color-line)] bg-white px-3 py-1.5 text-xs font-semibold text-[var(--color-ink)] transition hover:bg-[var(--color-bg-alt)]"
              >
                Close
              </button>
            </div>

            <div className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className={`header-mobile-link ${
                    isActive(item.href) ? 'header-mobile-link--active' : ''
                  }`}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  <span>{item.name}</span>
                  <ChevronIcon />
                </Link>
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                setContactModalOpen(true)
                setMobileMenuOpen(false)
              }}
              className="header-cta mt-3 w-full justify-center py-3 text-sm"
            >
              <CalendarIcon />
              Book a Call
            </button>
          </nav>
        </div>
      )}

      <ContactModal open={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </header>
  )
}
