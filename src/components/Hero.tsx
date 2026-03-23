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
      className="relative overflow-hidden bg-[linear-gradient(180deg,#0f172a_0%,#13264a_46%,#f8fafc_46%,#f8fafc_100%)] pt-28"
    >
      <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.28),transparent_36%),radial-gradient(circle_at_top_right,rgba(245,158,11,0.18),transparent_28%)]" />
      <div className="absolute left-1/2 top-32 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium tracking-wide text-blue-50 backdrop-blur">
              Software partner for ambitious businesses in Myanmar
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              Digital products that feel clear, credible, and ready to grow.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Winter Arc Myanmar designs and builds modern websites, cloud
              platforms, and custom systems that help teams launch faster,
              simplify operations, and present a stronger brand online.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-base font-semibold text-slate-900 transition hover:bg-slate-100"
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

            <div className="mt-8 flex flex-col gap-3 text-sm text-slate-200 sm:flex-row sm:flex-wrap sm:gap-6">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
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
                    <p className="text-sm font-medium text-slate-300">
                      Delivery model
                    </p>
                    <p className="mt-1 text-xl font-semibold">
                      Strategy to launch
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-200">
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
                          <p className="mt-1 text-sm leading-7 text-slate-300">
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

        <div className="mt-14 grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-3 sm:p-6">
          {metrics.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.5rem] bg-slate-50 px-5 py-4 text-center sm:text-left"
            >
              <div className="text-2xl font-semibold text-slate-950">
                {item.value}
              </div>
              <div className="mt-1 text-sm font-medium text-slate-600">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
