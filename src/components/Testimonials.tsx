import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const testimonials = [
  {
    name: 'Aung Min',
    company: 'Digital Commerce Co.',
    feedback:
      'Winter Arc Myanmar delivered a polished solution with strong communication and clean technical execution.',
  },
  {
    name: 'Su Mon',
    company: 'Growth Hub Myanmar',
    feedback:
      'Their team understood our vision quickly and turned it into a professional digital product we are proud to use.',
  },
  {
    name: 'Ko Htet',
    company: 'Smart Operations Ltd.',
    feedback:
      'We appreciated their responsiveness, practical mindset, and ability to deliver on time.',
  },
]

export default function Testimonials() {
  return (
    <section className="section-shell bg-[var(--color-bg-alt)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-5 md:max-w-3xl">
          <span className="section-label">
            Testimonials
          </span>
          <h2 className="text-2xl font-bold tracking-[-0.03em] text-[var(--color-ink)] md:text-3xl lg:text-4xl">
            Clients trust us to bring structure, calm communication, and professional finish to the work.
          </h2>
          <p className="text-sm leading-7 text-[var(--color-muted)] md:text-base">
            Good delivery is not only about shipping features. It is also about
            making the process feel clear, collaborative, and under control.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="panel-card rounded-xl p-6"
            >
              <div className="flex items-center gap-1 text-amber-400" aria-label="Five out of five stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} aria-hidden="true" className="text-sm" />
                ))}
              </div>

              <p className="mt-4 text-sm leading-7 text-[var(--color-ink)] md:text-base">
                &ldquo;{item.feedback}&rdquo;
              </p>

              <div className="mt-6 border-t border-[var(--color-line)] pt-5">
                <h3 className="text-sm font-bold text-[var(--color-ink)] md:text-base">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{item.company}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
