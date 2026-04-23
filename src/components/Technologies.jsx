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
  { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-white' },
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
      className="section-shell bg-[linear-gradient(180deg,#162033_0%,#101827_100%)] py-20 text-white md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 shadow-[0_26px_60px_rgba(0,0,0,0.18)] sm:p-8 lg:p-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="inline-flex items-center rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-100">
                Technologies
              </span>
              <h2 className="mt-4 max-w-3xl text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
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
                className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-6 text-center transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
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
