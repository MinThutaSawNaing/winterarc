import CustomerHoverGallery from '@/components/customers/CustomerHoverGallery'
import { Reveal, StaggerItem, StaggerReveal } from '@/components/Reveal'
import type { Locale } from '@/lib/i18n'

const highlights = [
  'Websites built around your customers',
  'Software that fits your workflows',
  'A clear path from idea to launch',
]

const metrics = [
  { value: 'Web & mobile', label: 'Customer-facing digital experiences' },
  { value: 'Custom software', label: 'Tools for day-to-day operations' },
  { value: 'Design to delivery', label: 'UX, engineering and launch planning' },
  { value: 'Yangon, Myanmar', label: 'Talk directly with our team' },
]

export default function Hero({ locale = 'en' }: { locale?: Locale }) {
  const my = locale === 'my'
  const localizedHighlights = my ? [
    'ဖောက်သည်များကို ဗဟိုပြု တည်ဆောက်ထားသော ဝက်ဘ်ဆိုက်များ',
    'သင့်လုပ်ငန်းစဉ်များနှင့် ကိုက်ညီသော ဆော့ဖ်ဝဲ',
    'စိတ်ကူးမှ စတင်အသုံးပြုနိုင်သည်အထိ ရှင်းလင်းသော လမ်းကြောင်း',
  ] : highlights
  const localizedMetrics = my ? [
    { value: 'ဝက်ဘ်နှင့် မိုဘိုင်း', label: 'ဖောက်သည်များ တိုက်ရိုက်အသုံးပြုမည့် ဒစ်ဂျစ်တယ်အတွေ့အကြုံများ' },
    { value: 'လိုအပ်ချက်အလိုက် ဆော့ဖ်ဝဲ', label: 'နေ့စဉ်လုပ်ငန်းလည်ပတ်မှုအတွက် ကိရိယာများ' },
    { value: 'ဒီဇိုင်းမှ လွှဲပြောင်းပေးအပ်ခြင်းအထိ', label: 'အသုံးပြုသူအတွေ့အကြုံ၊ နည်းပညာနှင့် စတင်အသုံးပြုရေး အစီအစဉ်' },
    { value: 'ရန်ကုန်၊ မြန်မာ', label: 'ကျွန်ုပ်တို့အဖွဲ့နှင့် တိုက်ရိုက် ဆွေးနွေးပါ' },
  ] : metrics
  return (
    <section
      id="home"
      className="section-shell relative overflow-hidden bg-white pt-28 sm:pt-32"
    >
      <div className="absolute inset-0 enterprise-grid opacity-60" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="max-w-3xl">
            <Reveal>
              <span className="section-label">
                {my ? 'ဝက်ဘ်နှင့် ဆော့ဖ်ဝဲ ဖန်တီးခြင်း · ရန်ကုန်၊ မြန်မာ' : 'Web & software development · Yangon, Myanmar'}
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.12] tracking-[-0.04em] text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
                {my ? 'သင့်လုပ်ငန်းကို ' : 'Software that makes '}<span className="text-[var(--color-brand)]">{my ? 'ပိုမိုလွယ်ကူစေသော ဆော့ဖ်ဝဲ။' : 'business simpler.'}</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                {my ? 'မြန်မာနိုင်ငံရှိ လုပ်ငန်းများအတွက် ဝက်ဘ်ဆိုက်၊ မိုဘိုင်းအက်ပ်နှင့် လိုအပ်ချက်အလိုက် ဆော့ဖ်ဝဲများကို ဒီဇိုင်းရေးဆွဲ တည်ဆောက်ပေးပါသည်။ စိတ်ကူးအသစ်တစ်ခု သို့မဟုတ် အချိန်ကုန်နေသော လုပ်ငန်းစဉ်တစ်ခုကို သင့်အဖွဲ့နှင့် ဖောက်သည်များ ယုံကြည်စိတ်ချစွာ အသုံးပြုနိုင်သော ဒစ်ဂျစ်တယ်အတွေ့အကြုံအဖြစ် ပြောင်းလဲပေးပါသည်။' : <>We design and develop websites, mobile apps and custom software for
                businesses in Myanmar. Turn a new idea or a time-consuming workflow
                into a digital experience your team and customers can use with confidence.</>}
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition hover:-translate-y-0.5 hover:bg-[var(--color-brand-deep)] hover:shadow-[0_4px_6px_rgba(37,99,235,0.18)]"
                >
                  {my ? 'သင့်ပရောဂျက်အကြောင်း ဆွေးနွေးပါ' : 'Discuss Your Project'}
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center rounded-lg border border-[var(--color-line)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-ink)] shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:bg-[var(--color-bg-alt)]"
                >
                  {my ? 'ကျွန်ုပ်တို့၏ လက်ရာများကို ကြည့်ပါ' : 'View Our Work'}
                </a>
              </div>
              <p className="mt-4 text-xs leading-6 text-[var(--color-muted)]">
                {my ? 'သင့်လိုအပ်ချက်ကို ပြောပြပါ။ လုပ်ငန်းမစတင်မီ ဆောင်ရွက်မည့်နယ်ပယ်၊ အချိန်ဇယားနှင့် ကုန်ကျစရိတ်ကို သဘောတူညီထားမည်ဖြစ်သည်။' : 'Tell us what you need. Scope, timeline and pricing are agreed before project work begins.'}
              </p>
            </Reveal>

            <StaggerReveal
              className="mt-10 grid gap-3 text-sm text-[var(--color-ink)] sm:grid-cols-3"
              stagger={0.09}
            >
              {localizedHighlights.map((item) => (
                <StaggerItem key={item} className="panel-card rounded-xl px-5 py-5">
                  <div className="mb-3 h-1 w-10 rounded-full bg-[var(--color-brand)]" />
                  <span className="font-semibold leading-6">{item}</span>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>

          <div className="min-w-0 lg:justify-self-end">
            <Reveal>
              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
                  {my ? 'ကျွန်ုပ်တို့၏ ဖောက်သည်များ' : 'Our Customers'}
                </p>
                <p className="mt-2 text-base font-semibold leading-6 tracking-[-0.01em] text-[var(--color-ink)] sm:text-lg">
                  {my ? 'ဆေးခန်း၊ ကိုယ်ကာယလေ့ကျင့်ရေးနှင့် စီးပွားရေးလုပ်ငန်း နယ်ပယ်အသီးသီးမှ မိတ်ဖက်များနှင့် ပူးပေါင်းဆောင်ရွက်မှုများ။' : 'Real partnerships across clinics, fitness, and enterprise teams.'}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.06} className="min-w-0">
              <CustomerHoverGallery locale={locale} />
            </Reveal>
          </div>
        </div>

        <StaggerReveal
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.08}
          delayChildren={0.06}
        >
          {localizedMetrics.map((item) => (
            <StaggerItem key={item.label} className="panel-card rounded-xl px-5 py-5">
              <div className="text-lg font-bold tracking-[-0.02em] text-[var(--color-brand)] sm:text-2xl">
                {item.value}
              </div>
              <div className="mt-1.5 text-sm leading-6 text-[var(--color-muted)]">
                {item.label}
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
