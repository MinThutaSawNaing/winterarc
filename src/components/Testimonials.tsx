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
    <section
      className="section-shell bg-[linear-gradient(180deg,#152033_0%,#101827_100%)] py-20 text-white md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-5 md:max-w-3xl">
          <span className="inline-flex w-fit rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-amber-100">
            Testimonials
          </span>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl lg:text-5xl">
            Clients trust us to bring structure, calm communication, and professional finish to the work.
          </h2>
          <p className="text-base leading-8 text-slate-300 md:text-lg">
            Good delivery is not only about shipping features. It is also about
            making the process feel clear, collaborative, and under control.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_40px_rgba(0,0,0,0.14)] backdrop-blur-sm"
            >
              <div className="flex items-center gap-1 text-amber-300">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>

              <p className="mt-5 text-base leading-8 text-slate-100">
                &ldquo;{item.feedback}&rdquo;
              </p>

              <div className="mt-6 border-t border-white/10 pt-5">
                <h3 className="text-base font-semibold text-white">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-slate-400">{item.company}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
