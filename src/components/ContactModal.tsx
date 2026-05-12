'use client'

import { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { contactDetails } from '@/lib/site'

interface ContactModalProps {
  open: boolean
  onClose: () => void
}

const contactOptions = [
  {
    label: 'Call',
    value: contactDetails.phone,
    href: `tel:${contactDetails.phone.replace(/\s/g, '')}`,
    icon: faPhone,
    iconClass: 'text-[var(--color-brand)]',
    description: 'Speak directly with our team',
  },
  {
    label: 'Email',
    value: contactDetails.email,
    href: `mailto:${contactDetails.email}?subject=Inquiry%20from%20Website&body=Hello%20Winter%20Arc%20Myanmar,`,
    icon: faEnvelope,
    iconClass: 'text-blue-400',
    description: 'Send us a detailed message',
  },
  {
    label: 'WhatsApp',
    value: contactDetails.phone,
    href: contactDetails.whatsapp,
    icon: faWhatsapp,
    iconClass: 'text-emerald-400',
    description: 'Chat with us instantly',
  },
]

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (open && !dialog.open) {
      dialog.showModal()
    } else if (!open && dialog.open) {
      dialog.close()
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [open, onClose])

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const target = e.target as HTMLElement
    if (target.tagName === 'DIALOG') onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      onClose={onClose}
      className="fixed inset-0 z-[60] m-auto w-full max-w-md rounded-2xl border border-white/8 bg-[var(--color-panel-dark)] p-0 shadow-[var(--shadow-elevated)] backdrop:bg-[rgba(15,23,42,0.48)] backdrop:backdrop-blur-[2px]"
    >
      <div className="relative p-6 sm:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close contact dialog"
          className="absolute right-4 top-4 rounded-lg border border-white/10 bg-white/[0.06] p-2 text-slate-300 transition-colors hover:bg-white/[0.12] hover:text-white"
        >
          <FontAwesomeIcon icon={faXmark} className="text-sm" />
        </button>

        <span className="inline-flex rounded-lg border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">
          Let&apos;s Talk
        </span>

        <h2 className="mt-4 text-xl font-bold tracking-[-0.03em] text-white sm:text-2xl">
          Choose how you&apos;d like to reach us
        </h2>

        <p className="mt-2 text-sm leading-7 text-slate-300">
          Select a contact method below and we&apos;ll get back to you promptly.
        </p>

        <div className="mt-6 grid gap-3">
          {contactOptions.map((option) => (
            <a
              key={option.label}
              href={option.href}
              target={option.label === 'WhatsApp' ? '_blank' : undefined}
              rel={
                option.label === 'WhatsApp'
                  ? 'noopener noreferrer'
                  : undefined
              }
              onClick={() => {
                setTimeout(onClose, 100)
              }}
              className="group flex items-center gap-4 rounded-xl border border-white/8 bg-white/[0.04] p-4 transition hover:border-white/16 hover:bg-white/[0.06]"
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/[0.08] text-lg ${option.iconClass}`}
              >
                <FontAwesomeIcon icon={option.icon} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white">
                  {option.label}
                </p>
                <p className="mt-0.5 text-xs text-slate-400">
                  {option.description}
                </p>
                <p className="mt-0.5 truncate text-sm font-medium text-slate-200">
                  {option.value}
                </p>
              </div>
              <div className="ml-auto shrink-0 text-slate-500 transition-transform group-hover:translate-x-0.5">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-5 text-center text-xs text-slate-400">
          Available Monday - Friday, 9:00 AM - 6:00 PM (Myanmar Time)
        </p>
      </div>
    </dialog>
  )
}
