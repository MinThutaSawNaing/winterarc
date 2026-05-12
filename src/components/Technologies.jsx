import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAws,
  faNodeJs,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import {
  SiLaravel,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

const technologies = [
  { name: 'Next.js', icon: <SiNextdotjs size="1em" className="inline-block" />, color: 'text-white' },
  { name: 'React', icon: <FontAwesomeIcon icon={faReact} />, color: 'text-cyan-300' },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss />,
    color: 'text-sky-300',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
    color: 'text-blue-300',
  },
  { name: 'Node.js', icon: <FontAwesomeIcon icon={faNodeJs} />, color: 'text-emerald-300' },
  { name: 'Python', icon: <FontAwesomeIcon icon={faPython} />, color: 'text-amber-300' },
  { name: 'AWS', icon: <FontAwesomeIcon icon={faAws} />, color: 'text-orange-300' },
  { name: 'Laravel', icon: <SiLaravel />, color: 'text-rose-300' },
]

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="section-shell bg-[var(--color-panel-dark)] py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="inline-flex items-center rounded-lg border border-white/[0.1] bg-white/[0.06] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">
                Technologies
              </span>
              <h2 className="mt-4 max-w-3xl text-2xl font-bold tracking-[-0.03em] text-white md:text-3xl">
                Modern tools selected for stability, maintainability, and long-term growth.
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              Our stack supports fast interfaces, dependable backend workflows,
              and cloud-ready delivery while staying pragmatic about complexity.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="rounded-xl border border-white/8 bg-white/[0.04] px-5 py-6 text-center transition hover:-translate-y-1 hover:border-white/16 hover:bg-white/[0.06]"
              >
                <div className={`text-3xl ${tech.color}`}>{tech.icon}</div>
                <p className="mt-3 text-xs font-semibold tracking-[0.01em] text-white sm:text-sm">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
