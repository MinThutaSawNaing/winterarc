'use client'

import CustomerLogoStrip from '@/components/customers/CustomerLogoStrip'
import SpinningGlobe from '@/components/customers/SpinningGlobe'
import { Reveal, StaggerItem, StaggerReveal } from '@/components/Reveal'
import { motion } from 'framer-motion'
import type { Locale } from '@/lib/i18n'

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
export default function Customers({ locale = 'en' }: { locale?: Locale }) {
  const my = locale === 'my'
  const localizedHighlights = my ? [
    'ဆေးခန်း၊ ကိုယ်ကာယလေ့ကျင့်ရေးနှင့် စီးပွားရေးလုပ်ငန်း နယ်ပယ်အသီးသီးမှ မိတ်ဖက်များနှင့် ပူးပေါင်းဆောင်ရွက်မှုများ',
    'လုပ်ငန်းအဆင့်မှတ်တိုင်များ ပြီးမြောက်မှုကို ဖောက်သည်များနှင့်အတူ ၎င်းတို့၏ လုပ်ငန်းခွင်တွင် ဂုဏ်ပြုခြင်း',
    'စတင်အသုံးပြုပြီးနောက်တွင်လည်း ရေရှည် ပံ့ပိုးကူညီခြင်း',
  ] : highlights
  return (
    <section
      id="customers"
      className="section-shell overflow-x-clip bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-5 md:max-w-3xl">
          <Reveal>
            <span className="section-label">{my ? 'ကျွန်ုပ်တို့၏ ဖောက်သည်များ' : 'Our Customers'}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="text-2xl font-bold tracking-[-0.03em] text-[var(--color-ink)] md:text-3xl lg:text-4xl">
              {my ? 'ရှင်းလင်းတိကျမှုနှင့် ဂရုတစိုက် အကောင်အထည်ဖော်မှုကို ယုံကြည်သော Winter Arc Myanmar ၏ မိတ်ဖက်များ။' : 'Partners who trust Winter Arc Myanmar to deliver with clarity and care.'}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              {my ? 'သွားဆေးခန်းများမှ ကိုယ်ကာယလေ့ကျင့်ရေး အမှတ်တံဆိပ်များနှင့် တိုးတက်နေသော လုပ်ငန်းများအထိ၊ ဆွေးနွေးတင်ပြချိန်တွင် ယုံကြည်မှုရရှိပြီး လက်တွေ့အသုံးပြုချိန်တွင်လည်း ထိရောက်စွာ လုပ်ဆောင်နိုင်သော ဒစ်ဂျစ်တယ်ထုတ်ကုန်များကို တည်ဆောက်ပေးပါသည်။' : <>From dental centers to fitness brands and growing businesses, we build
              digital products that earn confidence in the room and perform in production.</>}
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
            <SpinningGlobe locale={locale} />
          </motion.div>

          <StaggerReveal className="min-w-0 grid gap-3" stagger={0.08}>
            {localizedHighlights.map((item) => (
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

        <CustomerLogoStrip locale={locale} />
      </div>
    </section>
  )
}

