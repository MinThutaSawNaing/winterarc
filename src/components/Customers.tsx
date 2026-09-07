'use client'

import CustomerLogoStrip from '@/components/customers/CustomerLogoStrip'
import SpinningGlobe from '@/components/customers/SpinningGlobe'
import { Reveal, StaggerItem, StaggerReveal } from '@/components/Reveal'
import { motion } from 'framer-motion'

const highlights = [
  'Real partnerships across clinics, fitness, and enterprise teams',
  'Delivery milestones celebrated with clients on site',
  'Long-term support beyond launch day',
]

/**
 * Partner proof that used to sit next to the client photo gallery. The photo
 * showcase itself now lives in the hero's right column (see Hero.tsx), so this
 * section pairs the globe with the partnership highlights and logo strip.
 */
export default function Customers() {
  return (
    <section
      id="customers"
      className="section-shell overflow-x-clip bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-5 md:max-w-3xl">
          <Reveal>
            <span className="section-label">Our Customers</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="text-2xl font-bold tracking-[-0.03em] text-[var(--color-ink)] md:text-3xl lg:text-4xl">
              Partners who trust Winter Arc Myanmar to deliver with clarity and care.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              From dental centers to fitness brands and growing businesses, we build
              digital products that earn confidence in the room and perform in production.
            </p>
          </Reveal>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-16">
          <motion.div
            className="min-w-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <SpinningGlobe />
          </motion.div>

          <StaggerReveal className="min-w-0 grid gap-3" stagger={0.08}>
            {highlights.map((item) => (
              <StaggerItem
                key={item}
                className="panel-card rounded-xl px-6 py-5 text-sm font-semibold leading-6 text-[var(--color-ink)]"
              >
                <div className="mb-3 h-1 w-10 rounded-full bg-[var(--color-brand)]" />
                {item}
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>

        <CustomerLogoStrip />
      </div>
    </section>
  )
}

