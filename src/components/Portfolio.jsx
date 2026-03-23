import Image from 'next/image'

const projects = [
  {
    title: 'AIaaS',
    category: 'AI Solution',
    description:
      'AI-as-a-Service solutions for automation, smart workflows, predictive insights, and business intelligence.',
    tech: ['Python', 'AWS', 'API Integration'],
    image: '/images/portfolio/aiaas.png',
  },
  {
    title: 'SaaS',
    category: 'Software Platform',
    description:
      'Scalable SaaS platforms with subscription models, user management, dashboards, and cloud-based delivery.',
    tech: ['Next.js', 'Node.js', 'Docker'],
    image: '/images/portfolio/saas.png',
  },
  {
    title: 'Cloud Migration Platform',
    category: 'Cloud Solution',
    description:
      'Modern cloud migration services for moving applications, infrastructure, and workloads securely to the cloud.',
    tech: ['AWS', 'Docker', 'Cloud Architecture'],
    image: '/images/portfolio/cloud.png',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-600">
              Portfolio
            </span>

            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
              Our Recent Work
            </h2>

            <p className="max-w-2xl text-lg text-slate-600">
              We focus on practical digital products that help businesses scale,
              modernize operations, and deliver smarter services.
            </p>
          </div>

          
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                  {project.category}
                </span>

                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">
                  {project.description}
                </p>

                

                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}