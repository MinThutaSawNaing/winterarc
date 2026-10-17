import type { Locale } from '@/lib/i18n'

const stats = [
  { value: 'Discovery', label: 'Understand the problem before choosing the solution' },
  { value: 'Design', label: 'Make key user journeys clear and practical' },
  { value: 'Development', label: 'Build around the agreed requirements' },
  { value: 'Handover', label: 'Plan documentation, access and ongoing support' },
]

const principles = [
  {
    title: 'Business context comes first',
    description:
      'We connect design and engineering decisions to business goals, risk, and operational realities before defining the solution.',
  },
  {
    title: 'Polish is treated as a requirement',
    description:
      'Spacing, navigation, hierarchy, and micro-decisions shape trust. We build with that level of care from the start.',
  },
  {
    title: 'Delivery stays collaborative',
    description:
      'Stakeholders get a clear line of sight into priorities, progress, and next decisions instead of surprises.',
  },
]

export default function About({ locale = 'en' }: { locale?: Locale }) {
  const my = locale === 'my'
  const localizedStats = my ? [
    { value: 'လေ့လာဆန်းစစ်ခြင်း', label: 'ဖြေရှင်းနည်း မရွေးချယ်မီ ပြဿနာကို နားလည်အောင် လေ့လာခြင်း' },
    { value: 'ဒီဇိုင်းရေးဆွဲခြင်း', label: 'အဓိကအသုံးပြုမှုအဆင့်များကို ရှင်းလင်းပြီး လက်တွေ့ကျအောင် ဖန်တီးခြင်း' },
    { value: 'တည်ဆောက်ခြင်း', label: 'သဘောတူထားသည့် လိုအပ်ချက်များအတိုင်း တည်ဆောက်ခြင်း' },
    { value: 'လွှဲပြောင်းအပ်နှံခြင်း', label: 'စာရွက်စာတမ်း၊ ဝင်ရောက်အသုံးပြုခွင့်နှင့် ဆက်လက်ပံ့ပိုးမှုကို စီစဉ်ခြင်း' },
  ] : stats
  const localizedPrinciples = my ? [
    { title: 'လုပ်ငန်းအခြေအနေကို ဦးစားပေးပါသည်', description: 'ဖြေရှင်းနည်းကို မသတ်မှတ်မီ ဒီဇိုင်းနှင့် နည်းပညာဆိုင်ရာ ဆုံးဖြတ်ချက်များကို လုပ်ငန်းရည်မှန်းချက်များ၊ အန္တရာယ်များနှင့် လက်တွေ့လုပ်ငန်းအခြေအနေတို့နှင့် ချိတ်ဆက်စဉ်းစားပါသည်။' },
    { title: 'သပ်ရပ်မှုကို လိုအပ်ချက်တစ်ခုအဖြစ် သတ်မှတ်ပါသည်', description: 'အကွာအဝေးသတ်မှတ်မှု၊ လမ်းညွှန်မှု၊ အကြောင်းအရာအဆင့်ဆင့် စီစဉ်မှုနှင့် အသေးစိတ်ဆုံးဖြတ်ချက်များက ယုံကြည်မှုကို ပုံဖော်ပေးပါသည်။ အစကတည်းက ထိုအသေးစိတ်များကို ဂရုစိုက်တည်ဆောက်ပါသည်။' },
    { title: 'ပူးပေါင်းဆောင်ရွက်မှုဖြင့် အကောင်အထည်ဖော်ပါသည်', description: 'သက်ဆိုင်သူများသည် မမျှော်လင့်ထားသည့် အခြေအနေများနှင့် ကြုံတွေ့ရမည့်အစား ဦးစားပေးအချက်များ၊ တိုးတက်မှုနှင့် နောက်ထပ်ဆုံးဖြတ်ရမည့်အချက်များကို ရှင်းလင်းစွာ သိရှိနိုင်ပါသည်။' },
  ] : principles
  return (
    <section id="about" className="section-shell bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <span className="section-label">{my ? 'Winter Arc Myanmar အကြောင်း' : 'About Winter Arc Myanmar'}</span>

            <h2 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-[var(--color-ink)] md:text-3xl lg:text-4xl">
              {my ? 'မိမိတို့လုပ်ငန်းကဲ့သို့ ခိုင်မာအားကောင်းသော ဆော့ဖ်ဝဲကို လိုလားသည့် အဖွဲ့အစည်းများအတွက် ထုတ်ကုန်အမြင်ဖြင့် စဉ်းစားသည့်အဖွဲ့။' : 'A product-minded team for organizations that want software to feel as strong as their business.'}
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--color-muted)] md:text-base">
              {my ? 'ရှင်းလင်းသော အသုံးပြုမှုအတွေ့အကြုံ၊ နည်းပညာ အကောင်အထည်ဖော်မှုနှင့် လက်တွေ့ကျသော ဆုံးဖြတ်ချက်ချမှတ်မှုတို့ကို ပေါင်းစပ်လုပ်ဆောင်ပါသည်။ ထို့ကြောင့် အချိတ်အဆက်မရှိသော လုပ်ငန်းရလဒ်များ လျော့နည်းပြီး ပထမဆုံးဆွေးနွေးမှုမှ စတင်အသုံးပြုချိန်အထိ ပိုမိုစုစည်းညီညွတ်သော ထုတ်ကုန်တစ်ခု ရရှိစေပါသည်။' : <>We work at the intersection of UX clarity, technical execution, and
              practical decision-making. That means fewer disconnected deliverables
              and a more coherent product from first conversation to launch.</>}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {localizedStats.map((item) => (
                <div
                  key={item.label}
                  className="panel-card rounded-xl p-5"
                >
                  <div className="text-xl font-bold tracking-[-0.02em] text-[var(--color-brand)] md:text-2xl">
                    {item.value}
                  </div>
                  <div className="mt-2 text-sm font-medium leading-6 text-[var(--color-muted)]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div data-snow-surface="dark" className="panel-card-dark rounded-2xl p-6 sm:p-8">
            <div className="rounded-xl border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/70">
                {my ? 'ကျွန်ုပ်တို့ကို ရွေးချယ်ရသည့် အကြောင်းရင်းများ' : 'Why teams choose us'}
              </p>

              <div className="mt-6 grid gap-4">
                {localizedPrinciples.map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/8 bg-white/[0.04] p-5"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-xs font-semibold text-blue-100">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-slate-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
