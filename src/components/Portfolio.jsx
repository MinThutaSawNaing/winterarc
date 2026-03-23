import Image from 'next/image'

const projects = [
  {
    title: 'AIaaS',
    category: 'AI solution',
    description:
      'Automation and intelligence tools that help teams streamline repetitive workflows and surface better insights.',
    tech: ['Python', 'AWS', 'API integration'],
    image: '/images/portfolio/aiaas.png',
  },
  {
    title: 'SaaS',
    category: 'Software platform',
    description:
      'Subscription-ready products with dashboards, user management, and the foundations needed for repeatable growth.',
    tech: ['Next.js', 'Node.js', 'Docker'],
    image: '/images/portfolio/saas.png',
  },
  {
    title: 'Cloud Migration Platform',
    category: 'Cloud solution',
    description:
      'Migration workflows and infrastructure planning that make modernization feel controlled, secure, and practical.',
    tech: ['AWS', 'Docker', 'Cloud architecture'],
    image: '/images/portfolio/cloud.png',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[linear-gradient(180deg,#020617_0%,#0b1120_100%)] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:max-w-3xl">
          <span className="inline-block w-fit rounded-full border border-blue-500/20 bg-blue-950/50 px-4 py-1.5 text-sm font-medium text-blue-100">
            Selected work
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
            A focused portfolio of products built to solve specific business problems.
          </h2>
          <p className="text-base leading-8 text-slate-300 md:text-lg">
            These examples highlight the kinds of platforms and capabilities we
            help clients bring to market with stronger UX, cleaner structure,
            and dependable technical foundations.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 shadow-sm transition hover:-translate-y-1 hover:border-blue-700/40 hover:shadow-lg"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>

              <div className="p-6">
                <span className="inline-flex rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
                  {project.category}
                </span>

                <h3 className="mt-4 text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-200"
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
