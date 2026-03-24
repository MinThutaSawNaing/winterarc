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
      'Marketing sites, portals, dashboards, and custom web applications designed for clarity, performance, and long-term maintainability.',
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
      className="section-shell relative bg-[linear-gradient(180deg,#f4f1ea_0%,#efeae0_100%)] py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <span className="section-label">Services</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink)] md:text-4xl lg:text-5xl">
              The capabilities companies need when they want sharper UX and more dependable delivery.
            </h2>
          </div>

          <div className="panel-card rounded-[1.75rem] p-6 shadow-[0_16px_36px_rgba(15,23,42,0.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-deep)]">
              Engagement approach
            </p>
            <p className="mt-3 text-base leading-8 text-[var(--color-muted)] md:text-lg">
              We help teams move from fragmented requirements and unclear interfaces
              toward software that feels deliberate, scalable, and ready to represent
              the business well.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="panel-card group rounded-[1.9rem] p-6 shadow-[0_18px_36px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-[1.15rem] bg-[linear-gradient(180deg,rgba(15,118,110,0.12),rgba(15,118,110,0.22))] text-xl text-[var(--color-brand-deep)]">
                <FontAwesomeIcon icon={service.icon} />
              </div>

              <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                {service.description}
              </p>

              <div className="mt-6 h-px w-full bg-[rgba(18,26,40,0.08)]" />
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
