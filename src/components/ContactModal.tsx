'use client'

import { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { contactDetails } from '@/lib/site'
import type { Locale } from '@/lib/i18n'

interface ContactModalProps {
  open: boolean
  onClose: () => void
  locale?: Locale
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

export default function ContactModal({ open, onClose, locale = 'en' }: ContactModalProps) {
  const my = locale === 'my'
  const options = contactOptions.map((option) => ({
    ...option,
    label: my ? ({ Call: 'ဖုန်းခေါ်ရန်', Email: 'အီးမေးလ်' }[option.label] ?? option.label) : option.label,
    description: my ? ({
      Call: 'ကျွန်ုပ်တို့အဖွဲ့နှင့် တိုက်ရိုက် ပြောဆိုပါ',
      Email: 'အသေးစိတ်အချက်အလက်များကို အီးမေးလ်ဖြင့် ပို့ပါ',
      WhatsApp: 'ချက်ချင်း စတင် စကားပြောပါ',
    }[option.label] ?? option.description) : option.description,
    href: my && option.label === 'Email'
      ? `mailto:${contactDetails.email}?subject=${encodeURIComponent('ဝက်ဘ်ဆိုက်မှ စုံစမ်းမေးမြန်းခြင်း')}&body=${encodeURIComponent('မင်္ဂလာပါ Winter Arc Myanmar၊')}`
      : option.href,
  }))
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
      aria-labelledby="contact-dialog-title"
      className="fixed inset-0 z-[60] m-auto w-full max-w-md rounded-2xl border border-white/8 bg-[var(--color-panel-dark)] p-0 shadow-[var(--shadow-elevated)] backdrop:bg-[rgba(15,23,42,0.48)] backdrop:backdrop-blur-[2px]"
    >
      <div className="relative p-6 sm:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label={my ? 'ဆက်သွယ်ရန်ဝင်းဒိုးကို ပိတ်ရန်' : 'Close contact dialog'}
          className="absolute right-4 top-4 rounded-lg border border-white/10 bg-white/[0.06] p-2 text-slate-300 transition-colors hover:bg-white/[0.12] hover:text-white"
        >
          <FontAwesomeIcon icon={faXmark} className="text-sm" />
        </button>

        <span className="inline-flex rounded-lg border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">
          {my ? 'စကားပြောကြရအောင်' : "Let's Talk"}
        </span>

        <h2 id="contact-dialog-title" className="mt-4 text-xl font-bold tracking-[-0.03em] text-white sm:text-2xl">
          {my ? 'ဆက်သွယ်လိုသည့်နည်းလမ်းကို ရွေးချယ်ပါ' : "Choose how you'd like to reach us"}
        </h2>

        <p className="mt-2 text-sm leading-7 text-slate-300">
          {my ? 'အောက်ပါဆက်သွယ်ရန်နည်းလမ်းတစ်ခုကို ရွေးချယ်ပါ။ ကျွန်ုပ်တို့ အမြန်ဆုံး ပြန်လည်ဆက်သွယ်ပါမည်။' : "Select a contact method below and we'll get back to you promptly."}
        </p>

        <div className="mt-6 grid gap-3">
          {options.map((option) => (
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
          {my ? 'တနင်္လာ - သောကြာ၊ နံနက် ၉:၀၀ - ညနေ ၆:၀၀ (မြန်မာစံတော်ချိန်) အတွင်း ဆက်သွယ်နိုင်ပါသည်' : 'Available Monday - Friday, 9:00 AM - 6:00 PM (Myanmar Time)'}
        </p>
      </div>
    </dialog>
  )
}
