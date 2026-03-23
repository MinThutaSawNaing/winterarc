import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faLocationDot,
  faEnvelope,
  faPhone,
  faClock,
} from '@fortawesome/free-solid-svg-icons'

import {
  faWhatsapp,
  faFacebook,
  faFacebookMessenger,
} from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300">
            Contact Us
          </span>

          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Get In Touch
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Contact Winter Arc Myanmar for software solutions and project inquiries.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {/* Company */}
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FontAwesomeIcon icon={faBuilding} className="text-blue-400 text-xl" />
            <div>
              <p className="text-sm text-slate-400">Company</p>
              <p className="mt-1 font-semibold text-white">
                Winter Arc Myanmar
              </p>
            </div>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/959977144320"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition cursor-pointer"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-green-400 text-xl" />
            <div>
              <p className="text-sm text-slate-400">WhatsApp</p>
              <p className="mt-1 font-semibold text-white">
                +95 9 977 144 320
              </p>
            </div>
          </a>

          {/* Location */}
          <a
            href="https://maps.google.com/?q=Insein,Yangon,Myanmar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition cursor-pointer"
          >
            <FontAwesomeIcon icon={faLocationDot} className="text-red-400 text-xl" />
            <div>
              <p className="text-sm text-slate-400">Location</p>
              <p className="mt-1 font-semibold text-white">
                Insein, Yangon, Myanmar, 11011
              </p>
            </div>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1Hjr6iVb7q/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition cursor-pointer"
          >
            <FontAwesomeIcon icon={faFacebook} className="text-blue-500 text-xl" />
            <div>
              <p className="text-sm text-slate-400">Facebook Page</p>
              <p className="mt-1 font-semibold text-white">
                WinterArc Myanmar
              </p>
            </div>
          </a>

          {/* Email */}
            <a
              href="mailto:winterarcmyanmar@yahoo.com?subject=Inquiry%20from%20Website&body=Hello%20Winter%20Arc%20Myanmar,"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition cursor-pointer"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-violet-400 text-xl" />
              <div>
                <p className="text-sm text-slate-400">Email</p>
                <p className="mt-1 font-semibold text-white">
                  winterarcmyanmar@yahoo.com
                </p>
              </div>
            </a>

          {/* Messenger */}
          <a
            href="https://www.facebook.com/share/1Hjr6iVb7q/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition cursor-pointer"
          >
            <FontAwesomeIcon icon={faFacebookMessenger} className="text-blue-400 text-xl" />
            <div>
              <p className="text-sm text-slate-400">Messenger</p>
              <p className="mt-1 font-semibold text-white">
                WinterArc Myanmar
              </p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+959977144320"
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition cursor-pointer"
          >
            <FontAwesomeIcon icon={faPhone} className="text-green-400 text-xl" />
            <div>
              <p className="text-sm text-slate-400">Phone</p>
              <p className="mt-1 font-semibold text-white">
                +95 9 977 144 320
              </p>
            </div>
          </a>

          {/* Business Hours */}
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
            <FontAwesomeIcon icon={faClock} className="text-orange-400 text-xl" />
            <div>
              <p className="text-sm text-slate-400">Business Hours</p>
              <p className="mt-1 font-semibold text-white">
                Monday – Friday, 9:00 AM – 6:00 PM
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}