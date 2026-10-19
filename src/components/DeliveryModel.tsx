import { Reveal, StaggerItem, StaggerReveal } from '@/components/Reveal'
import type { Locale } from '@/lib/i18n'

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
export default function DeliveryModel({ locale = 'en' }: { locale?: Locale }) {
  const my = locale === 'my'
  const localizedTracks = my ? [
    { name: 'လိုအပ်ချက် လေ့လာဆန်းစစ်ခြင်း', description: 'အကောင်အထည်မဖော်မီ ရည်မှန်းချက်များ၊ အသုံးပြုပုံအဆင့်ဆင့်နှင့် ဆောင်ရွက်မည့်နယ်ပယ်ကို ညှိနှိုင်းသတ်မှတ်ပါသည်။' },
    { name: 'အသုံးပြုသူအတွေ့အကြုံ ဒီဇိုင်း', description: 'ရှင်းလင်းသော မျက်နှာပြင်များ၊ ပြန်လည်အသုံးပြုနိုင်သော ဒီဇိုင်းပုံစံများနှင့် သက်ဆိုင်သူများထံ တင်ပြရန် အသင့်ဖြစ်အောင် သပ်ရပ်စွာ ပြင်ဆင်ထားမှု။' },
    { name: 'နည်းပညာဖြင့် တည်ဆောက်ခြင်း', description: 'ယုံကြည်စိတ်ချရသော အကောင်အထည်ဖော်မှု၊ Cloud ဖွဲ့စည်းပုံနှင့် စတင်အသုံးပြုရန် အသင့်ဖြစ်မှု။' },
  ] : deliveryTracks
  return (
    <section
      id="delivery"
      data-snow-surface="dark"
      className="section-shell bg-[var(--color-panel-dark)] py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 sm:p-8 lg:p-10">
          <Reveal>
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-100">
                  {my ? 'အကောင်အထည်ဖော် ဆောင်ရွက်ပုံ' : 'Delivery model'}
                </span>
                <h2 className="mt-4 max-w-3xl text-2xl font-bold tracking-[-0.03em] text-white md:text-3xl lg:text-4xl">
                  {my ? 'မဟာဗျူဟာ၊ အသုံးပြုသူအတွေ့အကြုံနှင့် နည်းပညာတည်ဆောက်မှုတို့ကို လုပ်ငန်းစဉ်တစ်ခုတည်းတွင် ပေါင်းစပ်ထားပါသည်။' : 'Strategy, UX, and engineering in one integrated workflow.'}
                </h2>
              </div>
              <span className="rounded-lg border border-emerald-400/30 bg-emerald-500/12 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-200">
                {my ? 'ပရောဂျက်များ လက်ခံနေပါသည်' : 'Available'}
              </span>
            </div>
          </Reveal>

          <StaggerReveal className="mt-8 grid gap-4 md:grid-cols-3" stagger={0.09}>
            {localizedTracks.map((track, index) => (
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
                  {my ? 'အဓိကလုပ်ဆောင်သည့် နယ်ပယ်များ' : 'Focus areas'}
                </p>
                <p className="mt-2 text-sm leading-6 text-white sm:max-w-xl">
                  {my ? 'ဝက်ဘ်ဆိုက်များ၊ လုပ်ငန်းသုံးစနစ်များ၊ SaaS ပလက်ဖောင်းများနှင့် ဒစ်ဂျစ်တယ်နည်းပညာ အဆင့်မြှင့်တင်ခြင်း။' : 'Websites, business systems, SaaS platforms, and digital modernization.'}
                </p>
              </div>
              <p className="rounded-lg border border-white/8 bg-white/[0.04] px-3 py-2.5 text-sm text-slate-200 sm:max-w-[15rem]">
                {my ? 'လုပ်ဆောင်ချက်စာရင်းတစ်ခုတည်းကို မဟုတ်ဘဲ လုပ်ငန်းအခြေအနေကိုပါ အခြေခံ၍ ဆောင်ရွက်မည့်နယ်ပယ်ကို သတ်မှတ်ပါသည်။' : 'Scoped with business context, not just feature lists.'}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
