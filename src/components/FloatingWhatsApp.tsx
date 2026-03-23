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
    <div className="fixed bottom-5 right-5 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex items-center gap-3 rounded-full bg-green-500 px-4 py-3 text-white shadow-lg shadow-green-500/40 transition-all duration-300 hover:scale-105 hover:bg-green-600 whatsapp-pulse"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />

        <span className="hidden text-sm font-semibold md:inline">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  )
}