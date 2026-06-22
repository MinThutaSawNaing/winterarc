'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { lockBodyScroll, unlockBodyScroll } from '@/lib/body-scroll-lock'
import { useEffect } from 'react'

const EASE = [0.22, 1, 0.36, 1] as const

const backdropVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.28, ease: EASE } },
  exit: { opacity: 0, transition: { duration: 0.22, ease: EASE } },
}

const panelVariants = {
  hidden: { opacity: 0, y: -18, scale: 0.985 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.38, ease: EASE },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.99,
    transition: { duration: 0.24, ease: EASE },
  },
}

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05, delayChildren: 0.08 },
  },
  exit: {
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -14 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.32, ease: EASE },
  },
  exit: {
    opacity: 0,
    x: -10,
    transition: { duration: 0.18, ease: EASE },
  },
}

const footerVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.34, delay: 0.22, ease: EASE },
  },
  exit: {
    opacity: 0,
    y: 8,
    transition: { duration: 0.18, ease: EASE },
  },
}

interface NavItem {
  name: string
  href: string
}

interface MobileNavProps {
  open: boolean
  onClose: () => void
  navId: string
  navItems: readonly NavItem[]
  activeSection: string
  onNavigate: (href: string) => void
  onBookCall: () => void
}

function CalendarIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  )
}

export function AnimatedMenuIcon({ open }: { open: boolean }) {
  const reduceMotion = useReducedMotion()
  const transition = reduceMotion ? { duration: 0 } : { duration: 0.28, ease: EASE }

  return (
    <span className="relative block h-5 w-5" aria-hidden>
      <motion.span
        className="absolute left-0 h-0.5 w-5 origin-center rounded-full bg-current"
        animate={
          open
            ? { top: 9, rotate: 45 }
            : { top: 4, rotate: 0 }
        }
        transition={transition}
      />
      <motion.span
        className="absolute left-0 top-[9px] h-0.5 w-5 rounded-full bg-current"
        animate={open ? { opacity: 0, scaleX: 0.2 } : { opacity: 1, scaleX: 1 }}
        transition={transition}
      />
      <motion.span
        className="absolute left-0 h-0.5 w-5 origin-center rounded-full bg-current"
        animate={
          open
            ? { top: 9, rotate: -45 }
            : { top: 14, rotate: 0 }
        }
        transition={transition}
      />
    </span>
  )
}

export default function MobileNav({
  open,
  onClose,
  navId,
  navItems,
  activeSection,
  onNavigate,
  onBookCall,
}: MobileNavProps) {
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (!open) return

    lockBodyScroll()

    return () => {
      unlockBodyScroll()
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-nav-shell"
          className="header-mobile-shell fixed inset-x-0 top-16 z-40 flex flex-col lg:hidden"
          style={{
            height: 'calc(100dvh - 4rem)',
            paddingBottom: 'env(safe-area-inset-bottom, 0px)',
          }}
          initial={reduceMotion ? undefined : { opacity: 0 }}
          animate={reduceMotion ? undefined : { opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.button
            type="button"
            aria-label="Close navigation menu"
            onClick={onClose}
            className="header-mobile-backdrop absolute inset-0 z-0"
            initial={reduceMotion ? false : 'hidden'}
            animate={reduceMotion ? undefined : 'show'}
            exit={reduceMotion ? undefined : 'exit'}
            variants={backdropVariants}
          />

          <motion.nav
            id={navId}
            aria-label="Primary"
            role="dialog"
            aria-modal="true"
            className="header-mobile-panel relative z-10 mx-2 mb-2 flex min-h-0 flex-1 flex-col overflow-hidden sm:mx-3"
            initial={reduceMotion ? false : 'hidden'}
            animate={reduceMotion ? undefined : 'show'}
            exit={reduceMotion ? undefined : 'exit'}
            variants={panelVariants}
          >
            <div className="header-mobile-panel__header flex items-center justify-between border-b border-[var(--color-line)] px-4 py-3.5">
              <div>
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Navigation
                </p>
                <p className="mt-0.5 text-sm font-semibold text-[var(--color-ink)]">
                  Winter Arc Myanmar
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="header-mobile-close inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-line)] bg-white/80 px-3 py-2 text-xs font-semibold text-[var(--color-ink)] transition hover:bg-[var(--color-bg-alt)]"
              >
                Close
              </button>
            </div>

            <motion.div
              className="header-mobile-panel__body flex-1 overflow-y-auto px-3 py-3 sm:px-4"
              initial={reduceMotion ? false : 'hidden'}
              animate={reduceMotion ? undefined : 'show'}
              exit={reduceMotion ? undefined : 'exit'}
              variants={listVariants}
            >
              <ul className="grid gap-2">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.replace('#', '')

                  return (
                    <motion.li key={item.name} variants={reduceMotion ? undefined : itemVariants}>
                      <Link
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault()
                          onNavigate(item.href)
                        }}
                        className={`header-mobile-link group ${
                          isActive ? 'header-mobile-link--active' : ''
                        }`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <span className="flex min-w-0 items-center gap-3">
                          <span className="header-mobile-link__index">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="min-w-0">
                            <span className="block truncate text-[0.9rem] font-semibold leading-tight">
                              {item.name}
                            </span>
                            {isActive && (
                              <span className="mt-0.5 block text-[0.68rem] font-medium text-[var(--color-brand)]">
                                Current section
                              </span>
                            )}
                          </span>
                        </span>
                        <svg
                          className="h-4 w-4 shrink-0 text-[var(--color-muted)] transition group-hover:translate-x-0.5 group-hover:text-[var(--color-brand)]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>
            </motion.div>

            <motion.div
              className="header-mobile-panel__footer border-t border-[var(--color-line)] p-3 sm:p-4"
              initial={reduceMotion ? false : 'hidden'}
              animate={reduceMotion ? undefined : 'show'}
              exit={reduceMotion ? undefined : 'exit'}
              variants={footerVariants}
            >
              <p className="mb-3 text-center text-[0.68rem] font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
                Ready to start a project?
              </p>
              <button
                type="button"
                onClick={onBookCall}
                className="header-cta w-full justify-center py-3.5 text-sm"
              >
                <CalendarIcon />
                Book a Call
              </button>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
