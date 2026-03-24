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
      'We connect design and engineering decisions to business goals, risk, and operational realities before we define the solution.',
  },
  {
    title: 'Polish is treated as a requirement',
    description:
      'Spacing, navigation, hierarchy, and micro-decisions shape trust. We build with that level of care from the start.',
  },
  {
    title: 'Delivery stays collaborative',
    description:
      'Stakeholders get a clear line of sight into priorities, progress, and next decisions instead of being handed surprises late.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-shell bg-[var(--color-bg)] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <span className="section-label">About Winter Arc Myanmar</span>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink)] md:text-4xl lg:text-5xl">
              A product-minded team for organizations that want software to feel as strong as their business.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] md:text-lg">
              We work at the intersection of UX clarity, technical execution, and
              practical decision-making. That means fewer disconnected deliverables
              and a more coherent product from first conversation to launch.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="panel-card rounded-[1.6rem] p-5 shadow-[0_14px_30px_rgba(15,23,42,0.05)]"
                >
                  <div className="text-2xl font-semibold tracking-[-0.03em] text-[var(--color-ink)] md:text-3xl">
                    {item.value}
                  </div>
                  <div className="mt-2 text-sm font-medium leading-6 text-[var(--color-muted)]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel-card-dark rounded-[2rem] p-5 sm:p-7">
            <div className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 sm:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-white/65">
                Why teams choose us
              </p>

              <div className="mt-6 grid gap-5">
                {principles.map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-sm font-semibold text-slate-100">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
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
