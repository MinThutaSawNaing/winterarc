import Image from 'next/image'

const projects = [
  {
    title: 'AIaaS',
    category: 'AI solution',
    description:
      'Automation and intelligence workflows shaped to reduce repetitive effort while keeping the user experience clear and trustworthy.',
    focus: 'Designed for operational efficiency and better decision support.',
    tech: ['Python', 'AWS', 'API integration'],
    image: '/images/portfolio/aiaas.png',
  },
  {
    title: 'SaaS',
    category: 'Software platform',
    description:
      'Subscription-ready product foundations with structured dashboards, account management, and a UX system that supports growth.',
    focus: 'Designed for repeatable onboarding and scalable product delivery.',
    tech: ['Next.js', 'Node.js', 'Docker'],
    image: '/images/portfolio/saas.png',
  },
  {
    title: 'Cloud Migration Platform',
    category: 'Cloud solution',
    description:
      'Modernization workflows and cloud planning designed to make technical change feel controlled, visible, and manageable.',
    focus: 'Designed for complex transitions that need clarity, not disruption.',
    tech: ['AWS', 'Docker', 'Cloud architecture'],
    image: '/images/portfolio/cloud.png',
  },
]

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section-shell bg-[linear-gradient(180deg,#f3efe7_0%,#ece7dc_100%)] py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:max-w-3xl">
          <span className="section-label">Selected work</span>
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink)] md:text-4xl lg:text-5xl">
            Examples of digital products shaped around business clarity, not just feature delivery.
          </h2>
          <p className="text-base leading-8 text-[var(--color-muted)] md:text-lg">
            These portfolio snapshots reflect the kinds of platforms and solutions
            we help teams bring to market with stronger interface quality and more
            dependable technical structure.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="panel-card overflow-hidden rounded-[2rem] shadow-[0_18px_44px_rgba(15,23,42,0.06)] transition hover:-translate-y-1"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,24,39,0.06)_0%,rgba(16,24,39,0.52)_100%)]" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex rounded-full border border-white/20 bg-white/[0.12] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-[var(--color-ink)]">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {project.description}
                </p>

                <p className="mt-4 rounded-[1.2rem] bg-[rgba(15,118,110,0.06)] px-4 py-3 text-sm font-medium leading-6 text-[var(--color-ink)]">
                  {project.focus}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[rgba(18,26,40,0.08)] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--color-muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
