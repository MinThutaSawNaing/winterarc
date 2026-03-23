const stats = [
  { value: '4+', label: 'Years of experience' },
  { value: '10+', label: 'Products and launches' },
  { value: '10+', label: 'Client partnerships' },
  { value: '24/7', label: 'Responsive support' },
]

const principles = [
  {
    title: 'Built around real business goals',
    description:
      'We connect design and engineering decisions to the outcomes your team actually needs.',
  },
  {
    title: 'Small details handled carefully',
    description:
      'From mobile spacing to interface clarity, the product should feel considered at every step.',
  },
  {
    title: 'Partnership beyond launch',
    description:
      'We stay involved with refinement, support, and next-phase planning after release.',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-[linear-gradient(180deg,#020617_0%,#0f172a_100%)] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="inline-block rounded-full border border-blue-500/20 bg-blue-950/50 px-4 py-1.5 text-sm font-medium text-blue-100">
              About Winter Arc Myanmar
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
              A product-minded team focused on dependable digital delivery.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              We help businesses move from ideas and operational pain points to
              software that feels modern, efficient, and credible. Our work
              blends design clarity, practical engineering, and close
              collaboration throughout the process.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.75rem] border border-slate-800 bg-slate-900 p-5"
                >
                  <div className="text-2xl font-semibold text-white md:text-3xl">
                    {item.value}
                  </div>
                  <div className="mt-2 text-sm font-medium text-slate-300">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-800 bg-slate-950 p-5 sm:p-7">
            <div className="rounded-[1.75rem] bg-[linear-gradient(180deg,#0f172a_0%,#172554_100%)] p-6 text-white sm:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-200">
                How we work
              </p>

              <div className="mt-6 grid gap-5">
                {principles.map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-sm font-semibold text-slate-100">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-200">
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
