import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReact,
  faNodeJs,
  faAws,
  faDocker,
  faPython,
} from '@fortawesome/free-brands-svg-icons'

import { SiNextdotjs, SiTailwindcss, SiTypescript, SiLaravel } from 'react-icons/si'

const technologies = [
  {
    name: 'Next.js',
    icon: <SiNextdotjs />,
    color: 'text-black',
  },
  {
    name: 'React',
    icon: <FontAwesomeIcon icon={faReact} />,
    color: 'text-cyan-500',
  },
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
  {
    name: 'Node.js',
    icon: <FontAwesomeIcon icon={faNodeJs} />,
    color: 'text-green-600',
  },
  {
    name: 'Python',
    icon: <FontAwesomeIcon icon={faPython} />,
    color: 'text-yellow-500',
  },
  {
    name: 'AWS',
    icon: <FontAwesomeIcon icon={faAws} />,
    color: 'text-orange-500',
  },
  {
    name: 'Laravel',
    icon: <SiLaravel />,
    color: 'text-red-600',
  },
  
]

export default function Technologies() {
  return (
    <section id="technologies" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-600">
            Technologies
          </span>

          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
            Technologies We Use
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            We use modern tools and technologies to build scalable,
            high-performance digital products.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-3 lg:grid-cols-4">

          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`text-4xl ${tech.color}`}>
                {tech.icon}
              </div>

              <p className="mt-3 text-sm font-semibold text-slate-800">
                {tech.name}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}