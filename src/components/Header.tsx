'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import '@/components/poweredByWinterArcAnimation/poweredByWinterArcAnimation.css'
import { LOLI_OPEN_EVENT } from '@/lib/loli-config'
import ContactModal from '@/components/ContactModal'
import MobileNav, { AnimatedMenuIcon } from '@/components/MobileNav'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import type { Locale } from '@/lib/i18n'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  // { name: 'Team', href: '#team' },
  { name: 'Our Approach', href: '#delivery' },
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

export default function Header({ locale = 'en' }: { locale?: Locale }) {
  const my = locale === 'my'
  const items = navItems.map((item, index) => ({ ...item, name: my ? ['ပင်မစာမျက်နှာ', 'ဝန်ဆောင်မှုများ', 'ကျွန်ုပ်တို့အကြောင်း', 'လုပ်ငန်းစဉ်', 'Loli', 'ဆက်သွယ်ရန်'][index] : item.name }))
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
      element.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' })
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
          <div className="flex min-w-0 flex-col">
            <span className="header-brand-name truncate text-[0.95rem] font-bold leading-tight tracking-[-0.02em] sm:text-[1.05rem]">
              Winter Arc Myanmar
            </span>
            <span className="header-brand-tagline mt-0.5 hidden truncate text-[0.62rem] font-semibold uppercase tracking-[0.2em] min-[420px]:block sm:text-[0.7rem] md:text-[0.75rem]">
              {my ? 'ဒစ်ဂျစ်တယ် နည်းပညာဝန်ဆောင်မှုများ' : 'Digital Delivery'}
            </span>
          </div>
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-end gap-2 xl:flex xl:gap-3">
          <nav aria-label={my ? 'အဓိက မီနူး' : 'Primary'} className="header-nav-rail min-w-0 shrink">
            {items.map((item) => (
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
            <span>{my ? 'ဆွေးနွေးရန်' : "Let's Talk"}</span>
          </button>
        </div>

        <LanguageSwitcher locale={locale} />

        <button
          type="button"
          aria-controls={mobileNavId}
          aria-haspopup="dialog"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className={`header-menu-toggle shrink-0 p-2.5 text-[var(--color-ink)] focus-visible:outline-none xl:hidden ${
            mobileMenuOpen ? 'header-menu-toggle--open' : ''
          }`}
          aria-label={my ? (mobileMenuOpen ? 'မီနူးပိတ်ရန်' : 'မီနူးဖွင့်ရန်') : (mobileMenuOpen ? 'Close menu' : 'Open menu')}
          aria-expanded={mobileMenuOpen}
        >
          <AnimatedMenuIcon open={mobileMenuOpen} />
        </button>
      </div>

      <MobileNav
        locale={locale}
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navId={mobileNavId}
        navItems={items}
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onBookCall={() => {
          setContactModalOpen(true)
          setMobileMenuOpen(false)
        }}
      />

      <ContactModal locale={locale} open={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </header>
  )
}
