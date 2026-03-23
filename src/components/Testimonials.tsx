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
    <section className="bg-black py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-5 md:max-w-3xl">
          <span className="inline-block w-fit rounded-full border border-blue-500/20 bg-blue-950/50 px-4 py-1.5 text-sm font-medium text-blue-100">
            Testimonials
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
            Clients trust us to bring calm, clarity, and follow-through to the work.
          </h2>
          <p className="text-base leading-8 text-slate-300 md:text-lg">
            Good delivery is not only about shipping features. It is also about
            communication, consistency, and making the process feel manageable.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-[2rem] border border-slate-800 bg-slate-950 p-6 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
                Five-star feedback
              </p>

              <p className="mt-5 text-base leading-8 text-slate-200">
                &ldquo;{item.feedback}&rdquo;
              </p>

              <div className="mt-6 border-t border-slate-800 pt-5">
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
