const highlights = [
  'Executive-ready product framing',
  'Design systems that scale across teams',
  'Launch support with practical delivery rhythm',
]

const metrics = [
  { value: '10+', label: 'Engagements shipped' },
  { value: '4+', label: 'Years of delivery experience' },
  { value: 'Cross-functional', label: 'Strategy, UX, engineering' },
  { value: 'Myanmar-based', label: 'Local partnership, global standards' },
]

const deliveryTracks = [
  {
    name: 'Discovery',
    description: 'Goals, user journeys, priorities, and scope alignment before execution begins.',
  },
  {
    name: 'Experience Design',
    description: 'Clear interface systems, reusable patterns, and stakeholder-facing polish.',
  },
  {
    name: 'Engineering',
    description: 'Reliable implementation, cloud-ready architecture, and launch preparedness.',
  },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="section-shell relative overflow-hidden pt-28 text-[var(--color-ink)]"
    >
      <div className="absolute inset-x-0 top-0 h-[42rem] bg-[linear-gradient(180deg,#f6f3ed_0%,#efe8dd_55%,transparent_100%)]" />
      <div className="hero-orb left-[8%] top-24 h-64 w-64 bg-[rgba(15,118,110,0.12)]" />
      <div className="hero-orb right-[6%] top-20 h-72 w-72 bg-[rgba(180,83,9,0.14)]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="max-w-3xl">
            <span className="section-label">
              Enterprise-grade digital delivery for ambitious teams in Myanmar
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[var(--color-ink)] sm:text-5xl lg:text-7xl">
              Build software that looks credible in the boardroom and works beautifully in the real world.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              Winter Arc Myanmar partners with businesses to shape modern websites,
              internal tools, mobile products, and cloud platforms with the rigor,
              clarity, and UX standards expected from mature digital teams.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-7 py-3.5 text-base font-semibold text-white shadow-[0_18px_34px_rgba(15,118,110,0.22)] transition hover:-translate-y-0.5 hover:bg-[var(--color-brand-deep)]"
              >
                Start a Strategic Conversation
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-full border border-[rgba(18,26,40,0.1)] bg-white/80 px-7 py-3.5 text-base font-semibold text-[var(--color-ink)] shadow-[0_12px_28px_rgba(15,23,42,0.06)] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
              >
                Review Selected Work
              </a>
            </div>

            <div className="mt-9 grid gap-3 text-sm text-[var(--color-ink)] sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="panel-card rounded-[1.4rem] px-4 py-4 shadow-[0_10px_22px_rgba(15,23,42,0.05)]"
                >
                  <div className="mb-3 h-1.5 w-12 rounded-full bg-[var(--color-accent)]" />
                  <span className="font-semibold leading-6">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="panel-card-dark overflow-hidden rounded-[2rem] p-6 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/[0.6]">
                    Delivery model
                  </p>
                  <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
                    Strategy, UX, and software execution in one workflow
                  </p>
                </div>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-500/[0.12] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
                  Available for new projects
                </span>
              </div>

              <div className="mt-6 grid gap-4">
                {deliveryTracks.map((track, index) => (
                  <div
                    key={track.name}
                    className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-sm font-semibold text-white/80">
                        0{index + 1}
                      </span>
                      <div>
                        <h2 className="text-lg font-semibold text-white">
                          {track.name}
                        </h2>
                        <p className="mt-2 text-sm leading-7 text-slate-300">
                          {track.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/[0.55]">
                      Typical focus areas
                    </p>
                    <p className="mt-2 text-base font-medium text-white">
                      Websites, business systems, SaaS platforms, and digital modernization projects.
                    </p>
                  </div>
                  <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-slate-200">
                    Scoped with business context, not just feature lists.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((item) => (
            <div
              key={item.label}
              className="panel-card rounded-[1.5rem] px-5 py-5 shadow-[0_10px_24px_rgba(15,23,42,0.05)]"
            >
              <div className="text-lg font-semibold tracking-[-0.03em] text-[var(--color-ink)] sm:text-2xl">
                {item.value}
              </div>
              <div className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
