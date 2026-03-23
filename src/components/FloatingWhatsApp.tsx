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
        className="group flex items-center gap-3 rounded-full border border-white/60 bg-[rgba(18,94,56,0.92)] px-4 py-3 text-white shadow-[0_20px_45px_rgba(15,81,48,0.35)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-[rgba(18,94,56,1)]"
      >
        <span className="absolute inset-0 -z-10 rounded-full bg-[rgba(30,122,77,0.35)] blur-xl transition-opacity duration-300 group-hover:opacity-100 animate-halo" />
        <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />

        <span className="hidden text-sm font-semibold tracking-wide md:inline">
          WhatsApp Us
        </span>
      </a>
    </div>
  )
}
