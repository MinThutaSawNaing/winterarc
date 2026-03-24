'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function FloatingWhatsApp() {
  const whatsappNumber = '959977144320'

  const message = encodeURIComponent(
    'Hello Winter Arc Myanmar, I would like to know more about your software services.'
  )

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <div className="fixed bottom-5 right-5 z-40 md:bottom-7 md:right-7">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center gap-3 rounded-full border border-white/80 bg-white/90 px-4 py-3 text-[var(--color-ink)] shadow-[0_24px_42px_rgba(15,23,42,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white"
      >
        <span className="absolute inset-0 -z-10 rounded-full bg-[rgba(15,118,110,0.16)] blur-xl transition-opacity duration-300 group-hover:opacity-100 animate-halo" />
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-brand)] text-white">
          <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
        </span>

        <span className="hidden text-sm font-semibold tracking-[0.01em] md:inline">
          WhatsApp Us
        </span>
      </a>
    </div>
  )
}
