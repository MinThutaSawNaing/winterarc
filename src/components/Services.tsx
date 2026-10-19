import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { localizedPath, type Locale } from '@/lib/i18n'
import {
  faCloud,
  faGear,
  faLaptopCode,
  faMobileScreen,
} from '@fortawesome/free-solid-svg-icons'

const services = [
  {
    title: 'Web Platforms',
    slug: 'web-development',
    description:
      'Marketing sites, portals, dashboards, and custom web applications designed for clarity, performance, and maintainability.',
    outcome: 'Ideal for brand refreshes, service launches, and operational visibility.',
    icon: faLaptopCode,
  },
  {
    title: 'Mobile Products',
    slug: 'mobile-app-development',
    description:
      'Cross-platform mobile experiences with polished interaction design, practical architecture, and a release plan built around real users.',
    outcome: 'Best for teams launching customer experiences or field operations tools.',
    icon: faMobileScreen,
  },
  {
    title: 'Cloud Delivery',
    slug: 'cloud-solutions',
    description:
      'Infrastructure planning, deployment pipelines, and scalable hosting patterns that support reliable launches and healthy growth.',
    outcome: 'Useful when uptime, deployment confidence, and future scale matter early.',
    icon: faCloud,
  },
  {
    title: 'Custom Systems',
    slug: 'custom-software',
    description:
      'Internal business software shaped around workflows, reporting needs, integrations, and the way your team already operates.',
    outcome: 'A strong fit for digitizing manual processes without adding unnecessary complexity.',
    icon: faGear,
  },
]

export default function Services({ locale = 'en' }: { locale?: Locale }) {
  const my = locale === 'my'
  const translations = [
    { title: 'ဝက်ဘ်ပလက်ဖောင်းများ', description: 'မားကတ်တင်းဝက်ဘ်ဆိုက်များ၊ ပေါ်တယ်များ၊ ဒက်ရှ်ဘုတ်များနှင့် လိုအပ်ချက်အလိုက် ဝက်ဘ်အက်ပ်များကို ရှင်းလင်းမှု၊ စွမ်းဆောင်ရည်နှင့် ထိန်းသိမ်းရလွယ်ကူမှုတို့အတွက် ဒီဇိုင်းရေးဆွဲပေးပါသည်။', outcome: 'အမှတ်တံဆိပ်ပုံရိပ် အသစ်ပြောင်းခြင်း၊ ဝန်ဆောင်မှုအသစ် မိတ်ဆက်ခြင်းနှင့် လုပ်ငန်းလည်ပတ်မှုကို ရှင်းလင်းစွာ မြင်တွေ့လိုခြင်းတို့အတွက် သင့်လျော်ပါသည်။' },
    { title: 'မိုဘိုင်းထုတ်ကုန်များ', description: 'သပ်ရပ်သော အပြန်အလှန်တုံ့ပြန်မှုဒီဇိုင်း၊ လက်တွေ့ကျသော နည်းပညာဖွဲ့စည်းပုံနှင့် အမှန်တကယ်အသုံးပြုသူများကို အခြေခံသည့် ဖြန့်ချိရေးအစီအစဉ်တို့ပါဝင်သော ပလက်ဖောင်းစုံ မိုဘိုင်းအတွေ့အကြုံများ။', outcome: 'ဖောက်သည်အတွေ့အကြုံအသစ် သို့မဟုတ် ကွင်းဆင်းလုပ်ငန်းသုံးကိရိယာများ စတင်မည့်အဖွဲ့များအတွက် သင့်လျော်ပါသည်။' },
    { title: 'Cloud ဖြေရှင်းချက်များ', description: 'ယုံကြည်စိတ်ချရသော စတင်အသုံးပြုမှုနှင့် ရေရှည်တိုးတက်မှုကို ပံ့ပိုးပေးသော အခြေခံအဆောက်အအုံစီမံခြင်း၊ ဖြန့်ချိတင်ဆက်ရေးလုပ်ငန်းစဉ်များနှင့် လိုအပ်သလို တိုးချဲ့နိုင်သော ဆာဗာဝန်ဆောင်မှုပုံစံများ။', outcome: 'စနစ်မပြတ်တောက်ရေး၊ ယုံကြည်စိတ်ချစွာ ဖြန့်ချိနိုင်ရေးနှင့် နောင်တိုးချဲ့နိုင်ရေးကို အစောပိုင်းကတည်းက ဦးစားပေးလိုချိန်တွင် အသုံးဝင်ပါသည်။' },
    { title: 'လိုအပ်ချက်အလိုက် လုပ်ငန်းစနစ်များ', description: 'သင့်လုပ်ငန်းစဉ်များ၊ အစီရင်ခံစာလိုအပ်ချက်များ၊ အခြားစနစ်များနှင့် ချိတ်ဆက်မှုနှင့် သင့်အဖွဲ့၏ လက်ရှိလုပ်ကိုင်ပုံတို့နှင့် ကိုက်ညီအောင် ဖန်တီးထားသော လုပ်ငန်းတွင်းသုံး ဆော့ဖ်ဝဲ။', outcome: 'မလိုအပ်သော ရှုပ်ထွေးမှုများ မတိုးစေဘဲ လက်ဖြင့်လုပ်ဆောင်နေရသော လုပ်ငန်းစဉ်များကို ဒစ်ဂျစ်တယ်စနစ်သို့ ပြောင်းလဲရန် သင့်လျော်ပါသည်။' },
  ]
  const localizedServices = services.map((service, index) => my ? { ...service, ...translations[index] } : service)
  return (
    <section
      id="services"
      className="section-shell relative bg-[var(--color-bg-alt)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <span className="section-label">{my ? 'ဝန်ဆောင်မှုများ' : 'Services'}</span>
            <h2 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-[var(--color-ink)] md:text-3xl lg:text-4xl">
              {my ? 'အသုံးပြုရလွယ်ကူပြီး ယုံကြည်စိတ်ချရသော ဆော့ဖ်ဝဲများအတွက် ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများ။' : 'Capabilities that deliver sharper UX and more dependable execution.'}
            </h2>
          </div>

          <div className="panel-card rounded-xl p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-deep)]">
              {my ? 'ပူးပေါင်းဆောင်ရွက်ပုံ' : 'Engagement approach'}
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] md:text-base">
              {my ? 'ပြန့်ကျဲနေသော လိုအပ်ချက်များနှင့် မရှင်းလင်းသော မျက်နှာပြင်များမှ စနစ်တကျစီစဉ်ထားပြီး တိုးချဲ့နိုင်ကာ လုပ်ငန်းကို ကောင်းစွာကိုယ်စားပြုနိုင်သော ဆော့ဖ်ဝဲဆီသို့ အဖွဲ့များ ကူးပြောင်းနိုင်အောင် ကူညီပေးပါသည်။' : <>We help teams move from fragmented requirements and unclear interfaces
              toward software that feels deliberate, scalable, and ready to represent
              the business well.</>}
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {localizedServices.map((service) => (
            <article
              key={service.title}
              className="panel-card group rounded-xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-brand-soft)] text-lg text-[var(--color-brand)]">
                <FontAwesomeIcon icon={service.icon} />
              </div>

              <h3 className="mt-5 text-lg font-bold tracking-[-0.02em] text-[var(--color-ink)]">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                {service.description}
              </p>

              <div className="mt-6 h-px w-full bg-[var(--color-line)]" />
              <p className="mt-4 text-sm font-medium leading-7 text-[var(--color-ink)]">
                {service.outcome}
              </p>
              <a href={localizedPath(locale, `/services/${service.slug}`)} className="mt-5 inline-flex min-h-11 items-center gap-2 rounded font-semibold text-[var(--color-brand-deep)] underline underline-offset-4">
                {my ? `${service.title} အကြောင်း လေ့လာရန်` : `Explore ${service.title.toLowerCase()}`} <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
