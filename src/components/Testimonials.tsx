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
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-600">
            Testimonials
          </span>
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
            What our clients say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            We focus on creating trustworthy partnerships through quality
            delivery and dependable support.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
            >
              <div className="mb-4 text-lg font-semibold text-yellow-500">★★★★★</div>

              <p className="text-sm font-semibold leading-7 text-slate-600">“{item.feedback}”</p>

              <div className="mt-6 border-t border-slate-200 pt-5">
                <h3 className="text-base font-semibold text-slate-900">
                  {item.name}
                </h3>
                <p className="text-sm font-semibold text-slate-500">{item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}