import Image from 'next/image'
import { Reveal } from '@/components/Reveal'
import './customer-showcase.css'

const clients = [
  {
    name: 'My Dentist',
    src: '/images/clients/1777363222508040.png',
    width: 800,
    height: 400,
  },
  {
    name: 'Partner brand',
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
    name: 'Unity Fitness',
    src: '/images/clients/Unity.jpg',
    width: 1600,
    height: 1600,
  },
] as const

export default function CustomerLogoStrip() {
  return (
    <Reveal delay={0.06}>
      <div className="customer-logo-strip">
        <p className="customer-logo-strip__label">Trusted by</p>
        <div className="customer-logo-strip__grid">
          {clients.map((client) => (
            <div key={client.src} className="customer-logo-strip__item panel-card">
              <Image
                src={client.src}
                alt={`${client.name} logo`}
                width={client.width}
                height={client.height}
                className="customer-logo-strip__image"
                sizes="(max-width: 640px) 40vw, (max-width: 1024px) 28vw, 140px"
              />
            </div>
          ))}

          <div className="customer-logo-strip__more panel-card-dark">
            <span className="customer-logo-strip__more-count">50+</span>
            <span className="customer-logo-strip__more-label">more clients</span>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
