const highlights = [
  'Strategy-led product planning',
  'Responsive web and mobile delivery',
  'Launch support and ongoing iteration',
]

const metrics = [
  { value: '10+', label: 'Projects delivered' },
  { value: '4+', label: 'Years building products' },
  { value: '24/7', label: 'Support mindset' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#000000_0%,#020617_42%,#0f172a_100%)] pt-28"
    >
      <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.35),transparent_36%),radial-gradient(circle_at_top_right,rgba(15,23,42,0.42),transparent_28%)]" />
      <div className="absolute left-1/2 top-32 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-blue-500/25 bg-blue-950/40 px-4 py-2 text-sm font-medium tracking-wide text-white shadow-sm shadow-slate-950/20 backdrop-blur">
              Freelance software services and digital product delivery in Myanmar
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Digital products that feel clear, credible, and ready to grow.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-100 sm:text-lg">
              Winter Arc Myanmar delivers freelance software services in
              Myanmar, building modern websites, mobile apps, cloud platforms,
              and custom systems that help businesses launch faster and grow
              with confidence.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-lime-300 px-6 py-3.5 text-base font-semibold text-slate-950 shadow-lg shadow-lime-300/20 transition hover:bg-lime-200"
              >
                Start a project
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Explore our work
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-3 text-sm text-slate-100 sm:flex-row sm:flex-wrap sm:gap-6">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl shadow-slate-950/20 backdrop-blur">
              <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-6 text-white">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm font-medium text-slate-200">
                      Delivery model
                    </p>
                    <p className="mt-1 text-xl font-semibold">
                      Strategy to launch
                    </p>
                  </div>
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-100">
                    Available now
                  </span>
                </div>

                <div className="grid gap-4 pt-5">
                  {[
                    ['Discover', 'Clarify goals, users, and project scope.'],
                    ['Design', 'Shape flows, screens, and brand expression.'],
                    ['Build', 'Ship reliable code with performance in mind.'],
                  ].map(([title, description], index) => (
                    <div
                      key={title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-sm font-semibold text-slate-100">
                          0{index + 1}
                        </span>
                        <div>
                          <h2 className="text-base font-semibold">{title}</h2>
                          <p className="mt-1 text-sm leading-7 text-slate-200">
                            {description}
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

        <div className="mt-14 grid gap-4 rounded-[2rem] border border-slate-800 bg-slate-950/80 p-5 shadow-sm sm:grid-cols-3 sm:p-6">
          {metrics.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.5rem] border border-slate-800 bg-slate-900 px-5 py-4 text-center sm:text-left"
            >
              <div className="text-2xl font-semibold text-white">
                {item.value}
              </div>
              <div className="mt-1 text-sm font-medium text-slate-300">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
