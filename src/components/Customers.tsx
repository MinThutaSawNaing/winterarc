import Image from 'next/image'

const clients = [
  {
    name: '1777363222508040',
    src: '/images/clients/1777363222508040.png',
    width: 800,
    height: 400,
  },
  {
    name: '1777363339466601',
    src: '/images/clients/1777363339466601.png',
    width: 1500,
    height: 1500,
  },
  {
    name: 'Flex',
    src: '/images/clients/Flex.png',
    width: 225,
    height: 225,
  },
  {
    name: 'NCC',
    src: '/images/clients/NCC.jpg',
    width: 1024,
    height: 1024,
  },
  {
    name: 'Unity',
    src: '/images/clients/Unity.jpg',
    width: 1600,
    height: 1600,
  },
]

export default function Customers() {
  return (
    <section
      id="customers"
      className="section-shell bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-5 md:max-w-3xl">
          <span className="section-label">Trusted By</span>
          <h2 className="text-2xl font-bold tracking-[-0.03em] text-[var(--color-ink)] md:text-3xl lg:text-4xl">
            Organizations that chose us to deliver with clarity, quality, and momentum.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="panel-card flex items-center justify-center rounded-xl p-5 transition hover:-translate-y-1"
            >
              <Image
                src={client.src}
                alt={client.name}
                width={client.width}
                height={client.height}
                className="h-14 w-auto max-w-full object-contain sm:h-16"
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 16vw"
              />
            </div>
          ))}

          <div data-snow-surface="dark" className="panel-card-dark flex flex-col items-center justify-center rounded-xl p-5 text-center transition hover:-translate-y-1">
            <span className="text-xl font-bold tracking-[-0.02em] text-white sm:text-2xl">
              50+
            </span>
            <span className="mt-1 text-xs font-medium text-slate-300 sm:text-sm">
              more clients
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
