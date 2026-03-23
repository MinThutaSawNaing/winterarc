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
  { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-slate-950' },
  { name: 'React', icon: <FontAwesomeIcon icon={faReact} />, color: 'text-cyan-500' },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss />,
    color: 'text-sky-500',
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
    color: 'text-blue-600',
  },
  { name: 'Node.js', icon: <FontAwesomeIcon icon={faNodeJs} />, color: 'text-green-600' },
  { name: 'Python', icon: <FontAwesomeIcon icon={faPython} />, color: 'text-yellow-500' },
  { name: 'AWS', icon: <FontAwesomeIcon icon={faAws} />, color: 'text-orange-500' },
  { name: 'Laravel', icon: <SiLaravel />, color: 'text-red-600' },
]

export default function Technologies() {
  return (
    <section id="technologies" className="bg-slate-50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="inline-block rounded-full border border-slate-200 bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-700">
                Technologies
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Modern tools, chosen to keep products scalable and maintainable.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-slate-600">
              Our stack supports fast interfaces, reliable backend workflows,
              and cloud-ready deployment without adding unnecessary complexity.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="rounded-[1.5rem] border border-slate-200 bg-slate-50 px-5 py-6 text-center transition hover:border-slate-300 hover:bg-white"
              >
                <div className={`text-4xl ${tech.color}`}>{tech.icon}</div>
                <p className="mt-4 text-sm font-semibold text-slate-800">
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
