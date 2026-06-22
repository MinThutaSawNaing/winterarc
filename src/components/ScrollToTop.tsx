'use client'

import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const SHOW_AFTER_PX = 320

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER_PX)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })

    window.history.replaceState(null, '', '#home')
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`scroll-to-top fixed bottom-4 left-4 z-40 flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(255,255,255,0.55)] bg-[rgba(255,255,255,0.88)] text-[var(--color-brand)] shadow-[0_1px_2px_rgba(15,23,42,0.06),0_8px_24px_rgba(15,23,42,0.08)] backdrop-blur-[14px] transition-[opacity,transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[var(--color-brand-deep)] hover:shadow-[0_2px_4px_rgba(15,23,42,0.08),0_12px_28px_rgba(37,99,235,0.18)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(37,99,235,0.14)] sm:bottom-6 sm:left-6 sm:h-12 sm:w-12 ${
        visible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-2 opacity-0'
      }`}
    >
      <FontAwesomeIcon icon={faArrowUp} className="h-4 w-4 sm:h-[1.125rem] sm:w-[1.125rem]" />
    </button>
  )
}
