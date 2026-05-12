const stats = [
  { value: '4+', label: 'Years of experience' },
  { value: '10+', label: 'Products and launches' },
  { value: '10+', label: 'Client partnerships' },
  { value: '24/7 mindset', label: 'Responsive collaboration' },
]

const principles = [
  {
    title: 'Business context comes first',
    description:
      'We connect design and engineering decisions to business goals, risk, and operational realities before defining the solution.',
  },
  {
    title: 'Polish is treated as a requirement',
    description:
      'Spacing, navigation, hierarchy, and micro-decisions shape trust. We build with that level of care from the start.',
  },
  {
    title: 'Delivery stays collaborative',
    description:
      'Stakeholders get a clear line of sight into priorities, progress, and next decisions instead of surprises.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-shell bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <span className="section-label">About Winter Arc Myanmar</span>

            <h2 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-[var(--color-ink)] md:text-3xl lg:text-4xl">
              A product-minded team for organizations that want software to feel as strong as their business.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--color-muted)] md:text-base">
              We work at the intersection of UX clarity, technical execution, and
              practical decision-making. That means fewer disconnected deliverables
              and a more coherent product from first conversation to launch.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="panel-card rounded-xl p-5"
                >
                  <div className="text-xl font-bold tracking-[-0.02em] text-[var(--color-brand)] md:text-2xl">
                    {item.value}
                  </div>
                  <div className="mt-2 text-sm font-medium leading-6 text-[var(--color-muted)]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel-card-dark rounded-2xl p-6 sm:p-8">
            <div className="rounded-xl border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/70">
                Why teams choose us
              </p>

              <div className="mt-6 grid gap-4">
                {principles.map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/8 bg-white/[0.04] p-5"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-xs font-semibold text-blue-100">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-slate-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
