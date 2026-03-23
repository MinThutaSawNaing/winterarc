import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLaptopCode,
  faMobileScreen,
  faCloud,
  faGear,
} from '@fortawesome/free-solid-svg-icons'

const services = [
  {
    title: 'Web Development',
    description:
      'Modern, scalable, and high-performance websites and web applications.',
    icon: faLaptopCode,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Mobile App Development',
    description:
      'Cross-platform mobile apps with modern UI and strong performance.',
    icon: faMobileScreen,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Cloud Solutions',
    description:
      'Secure cloud infrastructure and scalable deployment systems.',
    icon: faCloud,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Custom Software',
    description:
      'Tailored software solutions built around your business needs.',
    icon: faGear,
    color: 'bg-orange-100 text-orange-600',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-600">
            Our Services
          </span>

          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
            Professional Software Services
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            We provide modern digital solutions designed to help businesses grow,
            scale, and operate more efficiently.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl bg-blue-600 p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:bg-blue-700"
            >

              {/* Icon */}
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${service.color}`}
              >
                <FontAwesomeIcon icon={service.icon} />
              </div>

              {/* Title */}
              <h3 className="mt-5 text-xl font-semibold text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-7font-semibold text-blue-100">
                {service.description}
              </p>

              

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}