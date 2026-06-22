import Image from 'next/image'

const teamMembers = [
  {
    name: 'Eric Thuta',
    role: 'Founder',
    image: '/images/TeamMembers/Eric%20Thuta%20Founder.jpg',
    description:
      'Visionary leader driving the strategic direction of Winter Arc Myanmar with deep expertise in software delivery.',
  },
  {
    name: 'Htet Wai Yan',
    role: 'Chief Executive Officer(CEO)',
    image: '/images/TeamMembers/Htet%20Wai%20Yan%20Co-Founder.jpg',
    description:
      'Co-creator of the platform, bringing technical insight and operational excellence to every engagement.',
  },
  {
    name: 'Thurein',
    role: 'Chief Technology Officer(CTO)',
    image: '/images/TeamMembers/Thurein%20Development%20Manager.jpg',
    description:
      'Oversees engineering execution, ensuring every project meets rigorous quality, UX, and performance standards.',
  },
]

export default function TeamMembers() {
  return (
    <section id="team" className="section-shell bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Our Team</span>
          <h2 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-[var(--color-ink)] md:text-3xl lg:text-4xl">
            Meet the people behind Winter Arc Myanmar
          </h2>
          <p className="mt-5 text-sm leading-7 text-[var(--color-muted)] md:text-base">
            A focused group of product-minded professionals committed to delivering
            software that earns trust and works beautifully.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="panel-card group rounded-xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
            >
              <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-xl bg-[var(--color-bg-alt)]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-center transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 192px, 192px"
                />
              </div>

              <div className="mt-5 text-center">
                <h3 className="text-lg font-bold tracking-[-0.02em] text-[var(--color-ink)]">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-[var(--color-brand)]">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
