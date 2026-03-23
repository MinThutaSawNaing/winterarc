import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCloud,
  faGear,
  faLaptopCode,
  faMobileScreen,
} from '@fortawesome/free-solid-svg-icons'

const services = [
  {
    title: 'Web Platforms',
    description:
      'Marketing sites, dashboards, and custom web apps built for speed, clarity, and long-term maintainability.',
    icon: faLaptopCode,
    accent: 'bg-blue-950 text-blue-200',
  },
  {
    title: 'Mobile Products',
    description:
      'Cross-platform mobile experiences that feel polished on real devices and stay aligned with your product goals.',
    icon: faMobileScreen,
    accent: 'bg-slate-900 text-white',
  },
  {
    title: 'Cloud Delivery',
    description:
      'Scalable deployment, infrastructure planning, and cloud workflows that support reliable launches and growth.',
    icon: faCloud,
    accent: 'bg-blue-900 text-blue-100',
  },
  {
    title: 'Custom Systems',
    description:
      'Business tools tailored around internal operations, integrations, and the way your team actually works.',
    icon: faGear,
    accent: 'bg-slate-800 text-slate-100',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-slate-950 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="inline-block rounded-full border border-blue-500/20 bg-blue-950/50 px-4 py-1.5 text-sm font-medium text-blue-100">
              Services
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
              Capabilities shaped for launch, growth, and day-to-day usability.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Businesses searching for freelance web development, freelance
            software services, or custom product delivery in Myanmar can work
            with us on practical, scalable solutions.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-[2rem] border border-slate-800 bg-slate-900 p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-700/40 hover:shadow-lg"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl text-xl ${service.accent}`}
              >
                <FontAwesomeIcon icon={service.icon} />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                {service.description}
              </p>

              <div className="mt-6 h-px w-full bg-slate-800" />
              <p className="mt-4 text-sm font-medium text-slate-400">
                Clear scopes, thoughtful UX, and maintainable implementation.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
