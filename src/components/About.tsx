const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Completed' },
  { value: '10+', label: 'Happy Clients' },
  { value: '24/7', label: 'Support Available' },
]

const highlights = [
  {
    title: 'Professional Team',
    description:
      'A dedicated team focused on practical solutions, modern design, and stable development.',
  },
  {
    title: 'Business-Oriented Approach',
    description:
      'We design software that solves real business problems and improves daily operations.',
  },
  {
    title: 'Long-Term Partnership',
    description:
      'From planning to launch and ongoing support, we help clients succeed over time.',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-600">
            About Us
          </span>

          <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl lg:text-5xl">
            Building trusted digital experiences for growing businesses
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Winter Arc Myanmar is a software solutions company focused on
            creating modern, reliable, and user-friendly digital products for
            businesses that want to grow confidently.
          </p>

          <p className="mt-4 text-base font-semibold leading-7 text-slate-600">
            We build websites, apps, cloud platforms, and custom systems with a
            strong emphasis on performance, design quality, and business value.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="text-2xl font-bold text-blue-600 md:text-3xl">
                  {item.value}
                </div>
                <div className="mt-1 text-sm font-semibold text-slate-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 font-bold text-white">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 font-semibold text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}