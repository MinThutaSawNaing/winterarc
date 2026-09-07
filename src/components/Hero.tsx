import TypewriterText from '@/components/TypewriterText'
import CustomerHoverGallery from '@/components/customers/CustomerHoverGallery'
import { Reveal, StaggerItem, StaggerReveal } from '@/components/Reveal'

const highlights = [
  'Executive-ready product strategy',
  'Design systems that scale across teams',
  'Reliable delivery with launch support',
]

const metrics = [
  { value: '30+', label: 'Projects delivered' },
  { value: '4+', label: 'Years of experience' },
  { value: 'End-to-end', label: 'Strategy, UX, engineering' },
  { value: 'Myanmar-based', label: 'Local presence, global standards' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="section-shell relative overflow-hidden bg-white pt-24"
    >
      <div className="absolute inset-0 enterprise-grid opacity-60" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="max-w-3xl">
            <Reveal>
              <span className="section-label">
                Enterprise digital delivery for ambitious teams
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-6 max-w-4xl text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-[var(--color-ink)] sm:text-4xl lg:text-5xl">
                <TypewriterText text="Build software that earns trust in the boardroom and works beautifully in the real world." />
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                Winter Arc Myanmar partners with businesses to shape modern websites,
                internal tools, mobile products, and cloud platforms with the rigor,
                clarity, and UX standards expected from mature digital teams.
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:bg-[var(--color-brand-deep)] hover:shadow-[0_4px_6px_rgba(37,99,235,0.18)]"
                >
                  Start a Conversation
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center rounded-lg border border-[var(--color-line)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-ink)] shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:bg-[var(--color-bg-alt)]"
                >
                  View Our Work
                </a>
              </div>
            </Reveal>

            <StaggerReveal
              className="mt-10 grid gap-3 text-sm text-[var(--color-ink)] sm:grid-cols-3"
              stagger={0.09}
            >
              {highlights.map((item) => (
                <StaggerItem key={item} className="panel-card rounded-xl px-5 py-5">
                  <div className="mb-3 h-1 w-10 rounded-full bg-[var(--color-brand)]" />
                  <span className="font-semibold leading-6">{item}</span>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>

          <div className="min-w-0 lg:justify-self-end">
            <Reveal>
              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                  Our Customers
                </p>
                <p className="mt-2 text-base font-semibold leading-6 tracking-[-0.01em] text-[var(--color-ink)] sm:text-lg">
                  Real partnerships across clinics, fitness, and enterprise teams.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.06} className="min-w-0">
              <CustomerHoverGallery />
            </Reveal>
          </div>
        </div>

        <StaggerReveal
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.08}
          delayChildren={0.06}
        >
          {metrics.map((item) => (
            <StaggerItem key={item.label} className="panel-card rounded-xl px-5 py-5">
              <div className="text-lg font-bold tracking-[-0.02em] text-[var(--color-brand)] sm:text-2xl">
                {item.value}
              </div>
              <div className="mt-1.5 text-sm leading-6 text-[var(--color-muted)]">
                {item.label}
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
