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
      'Marketing sites, portals, dashboards, and custom web applications designed for clarity, performance, and maintainability.',
    outcome: 'Ideal for brand refreshes, service launches, and operational visibility.',
    icon: faLaptopCode,
  },
  {
    title: 'Mobile Products',
    description:
      'Cross-platform mobile experiences with polished interaction design, practical architecture, and a release plan built around real users.',
    outcome: 'Best for teams launching customer experiences or field operations tools.',
    icon: faMobileScreen,
  },
  {
    title: 'Cloud Delivery',
    description:
      'Infrastructure planning, deployment pipelines, and scalable hosting patterns that support reliable launches and healthy growth.',
    outcome: 'Useful when uptime, deployment confidence, and future scale matter early.',
    icon: faCloud,
  },
  {
    title: 'Custom Systems',
    description:
      'Internal business software shaped around workflows, reporting needs, integrations, and the way your team already operates.',
    outcome: 'A strong fit for digitizing manual processes without adding unnecessary complexity.',
    icon: faGear,
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="section-shell relative bg-[var(--color-bg-alt)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <span className="section-label">Services</span>
            <h2 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-[var(--color-ink)] md:text-3xl lg:text-4xl">
              Capabilities that deliver sharper UX and more dependable execution.
            </h2>
          </div>

          <div className="panel-card rounded-xl p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-deep)]">
              Engagement approach
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] md:text-base">
              We help teams move from fragmented requirements and unclear interfaces
              toward software that feels deliberate, scalable, and ready to represent
              the business well.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="panel-card group rounded-xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-brand-soft)] text-lg text-[var(--color-brand)]">
                <FontAwesomeIcon icon={service.icon} />
              </div>

              <h3 className="mt-5 text-lg font-bold tracking-[-0.02em] text-[var(--color-ink)]">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                {service.description}
              </p>

              <div className="mt-6 h-px w-full bg-[var(--color-line)]" />
              <p className="mt-4 text-sm font-medium leading-7 text-[var(--color-ink)]">
                {service.outcome}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
