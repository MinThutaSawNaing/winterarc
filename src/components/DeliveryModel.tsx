import { Reveal, StaggerItem, StaggerReveal } from '@/components/Reveal'

const deliveryTracks = [
  {
    name: 'Discovery',
    description: 'Align goals, user journeys, and scope before execution begins.',
  },
  {
    name: 'Experience Design',
    description: 'Clear interfaces, reusable patterns, and stakeholder-ready polish.',
  },
  {
    name: 'Engineering',
    description: 'Reliable implementation, cloud architecture, and launch readiness.',
  },
]

/**
 * The delivery-model content that previously lived as the dark card on the
 * right side of the hero. It is now a full-width section of its own so the
 * hero's right column can host the customer showcase instead.
 */
export default function DeliveryModel() {
  return (
    <section
      id="delivery-model"
      data-snow-surface="dark"
      className="section-shell bg-[var(--color-panel-dark)] py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 sm:p-8 lg:p-10">
          <Reveal>
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">
                  Delivery model
                </span>
                <h2 className="mt-4 max-w-3xl text-2xl font-bold tracking-[-0.03em] text-white md:text-3xl lg:text-4xl">
                  Strategy, UX, and engineering in one integrated workflow.
                </h2>
              </div>
              <span className="rounded-lg border border-emerald-400/30 bg-emerald-500/12 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-200">
                Available
              </span>
            </div>
          </Reveal>

          <StaggerReveal className="mt-8 grid gap-4 md:grid-cols-3" stagger={0.09}>
            {deliveryTracks.map((track, index) => (
              <StaggerItem
                key={track.name}
                className="rounded-xl border border-white/8 bg-white/[0.04] p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-xs font-semibold text-blue-200">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{track.name}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-slate-300">
                      {track.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>

          <Reveal delay={0.12}>
            <div className="mt-6 flex flex-col gap-4 rounded-xl border border-white/8 bg-white/[0.03] p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-200/70">
                  Focus areas
                </p>
                <p className="mt-2 text-sm leading-6 text-white sm:max-w-xl">
                  Websites, business systems, SaaS platforms, and digital modernization.
                </p>
              </div>
              <p className="rounded-lg border border-white/8 bg-white/[0.04] px-3 py-2.5 text-sm text-slate-200 sm:max-w-[15rem]">
                Scoped with business context, not just feature lists.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
