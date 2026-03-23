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
    <section className="bg-slate-50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-5 md:max-w-3xl">
          <span className="inline-block w-fit rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-700">
            Testimonials
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl lg:text-5xl">
            Clients trust us to bring calm, clarity, and follow-through to the work.
          </h2>
          <p className="text-base leading-8 text-slate-600 md:text-lg">
            Good delivery is not only about shipping features. It is also about
            communication, consistency, and making the process feel manageable.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-500">
                Five-star feedback
              </p>

              <p className="mt-5 text-base leading-8 text-slate-700">
                &ldquo;{item.feedback}&rdquo;
              </p>

              <div className="mt-6 border-t border-slate-200 pt-5">
                <h3 className="text-base font-semibold text-slate-950">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{item.company}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
