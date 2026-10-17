import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faClock,
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { contactDetails } from '@/lib/site'

const contactMethods = [
  {
    label: 'WhatsApp',
    value: contactDetails.phone,
    href: contactDetails.whatsapp,
    icon: faWhatsapp,
    iconClass: 'text-emerald-600',
  },
  {
    label: 'Email',
    value: contactDetails.email,
    href: `mailto:${contactDetails.email}?subject=Project%20inquiry`,
    icon: faEnvelope,
    iconClass: 'text-blue-600',
  },
  {
    label: 'Phone',
    value: contactDetails.phone,
    href: `tel:${contactDetails.phone.replace(/\s/g, '')}`,
    icon: faPhone,
    iconClass: 'text-[var(--color-brand)]',
  },
  {
    label: 'Facebook',
    value: 'Winter Arc Myanmar',
    href: contactDetails.facebook,
    icon: faFacebook,
    iconClass: 'text-blue-600',
  },
  {
    label: 'Location',
    value: contactDetails.location,
    href: 'https://maps.google.com/?q=Insein,Yangon,Myanmar',
    icon: faLocationDot,
    iconClass: 'text-amber-600',
  },
]

const conversationPoints = [
  'Your business goals and user needs',
  'Timeline, scope, and delivery risks',
  'The most practical path from idea to launch',
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-shell bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div data-snow-surface="dark" className="panel-card-dark rounded-2xl p-6 sm:p-8">
            <span className="inline-flex rounded-lg border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">
              Contact
            </span>

            <h2 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-white md:text-3xl lg:text-4xl">
              Tell us what you want to build.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              Reach out for project inquiries, product planning, redesign work,
              or support discussions. We aim to make the next step feel clear,
              practical, and easy to act on.
            </p>

            <div className="mt-8 rounded-xl border border-white/8 bg-white/[0.04] p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 text-slate-200">
                  <FontAwesomeIcon icon={faBuilding} />
                </div>
                <div>
                  <p className="text-sm text-slate-300">Your project contact</p>
                  <p className="mt-1 text-base font-bold text-white">
                    Winter Arc Myanmar
                  </p>
                  <div className="mt-4 flex items-start gap-3 text-sm leading-7 text-slate-200">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="mt-1 text-blue-200"
                    />
                    <span>Monday - Friday, 9:00 AM - 6:00 PM (Myanmar Time)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200/70">
                A good first conversation covers
              </p>
              <div className="mt-4 grid gap-3">
                {conversationPoints.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-white/8 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-100"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactMethods.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="panel-card rounded-xl p-5 transition hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-brand-soft)] ${item.iconClass}`}
                >
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <p className="mt-4 text-sm font-medium text-[var(--color-muted)]">
                  {item.label}
                </p>
                <p className="mt-1 break-words text-sm font-bold leading-6 text-[var(--color-ink)] md:text-base">
                  {item.value}
                </p>
              </a>
            ))}
          </div>
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-7 text-[var(--color-muted)]">
          To get started, share your goals, the features you need and your preferred timeline.
          Please don&apos;t send passwords, financial details or patient records.
          External contact services have their own privacy practices. Read our{' '}
          <a href="/privacy" className="font-semibold text-[var(--color-brand-deep)] underline underline-offset-4">Privacy Policy</a>.
        </p>
      </div>
    </section>
  )
}
