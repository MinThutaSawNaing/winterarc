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
  faFacebookMessenger,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

const contactMethods = [
  {
    label: 'WhatsApp',
    value: '+95 9 977 144 320',
    href: 'https://wa.me/959977144320',
    icon: faWhatsapp,
    iconClass: 'text-emerald-400',
  },
  {
    label: 'Email',
    value: 'winterarcmyanmar@yahoo.com',
    href: 'mailto:winterarcmyanmar@yahoo.com?subject=Inquiry%20from%20Website&body=Hello%20Winter%20Arc%20Myanmar,',
    icon: faEnvelope,
    iconClass: 'text-amber-300',
  },
  {
    label: 'Phone',
    value: '+95 9 977 144 320',
    href: 'tel:+959977144320',
    icon: faPhone,
    iconClass: 'text-blue-300',
  },
  {
    label: 'Facebook',
    value: 'Winter Arc Myanmar',
    href: 'https://www.facebook.com/share/1Hjr6iVb7q/',
    icon: faFacebook,
    iconClass: 'text-sky-300',
  },
  {
    label: 'Messenger',
    value: 'Chat with our team',
    href: 'https://www.facebook.com/share/1Hjr6iVb7q/',
    icon: faFacebookMessenger,
    iconClass: 'text-indigo-300',
  },
  {
    label: 'Location',
    value: 'Insein, Yangon, Myanmar 11011',
    href: 'https://maps.google.com/?q=Insein,Yangon,Myanmar',
    icon: faLocationDot,
    iconClass: 'text-rose-300',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-950 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <span className="inline-block rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-1.5 text-sm font-medium text-slate-100">
              Contact
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
              Start the conversation with a team that values clear communication.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
              Reach out for project inquiries, product discussions, or support
              planning. We respond with practical next steps and a realistic
              path forward.
            </p>

            <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-slate-100">
                  <FontAwesomeIcon icon={faBuilding} />
                </div>
                <div>
                  <p className="text-sm text-slate-300">Company</p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    Winter Arc Myanmar
                  </p>
                  <div className="mt-4 flex items-start gap-3 text-sm leading-7 text-slate-200">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="mt-1 text-amber-300"
                    />
                    <span>Monday - Friday, 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
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
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ${item.iconClass}`}
                >
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <p className="mt-4 text-sm text-slate-300">{item.label}</p>
                <p className="mt-1 text-base font-semibold leading-7 text-white">
                  {item.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
