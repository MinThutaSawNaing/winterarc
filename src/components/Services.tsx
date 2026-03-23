import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCloud,
  faGear,
  faLaptopCode,
  faMobileScreen,
} from '@fortawesome/free-solid-svg-icons'
import LocalizedText from '@/components/LocalizedText'

const services = [
  {
    enTitle: 'Web Platforms',
    myTitle: 'Web Platform များ',
    enDescription:
      'Marketing sites, dashboards, and custom web apps built for speed, clarity, and long-term maintainability.',
    myDescription:
      'အမြန်နှုန်းကောင်းပြီး ရှင်းလင်းသဘောပေါက်လွယ်ကာ ရေရှည်ထိန်းသိမ်းနိုင်သော marketing website, dashboard နှင့် custom web app များ။',
    icon: faLaptopCode,
    accent: 'bg-blue-950 text-blue-200',
  },
  {
    enTitle: 'Mobile Products',
    myTitle: 'Mobile Product များ',
    enDescription:
      'Cross-platform mobile experiences that feel polished on real devices and stay aligned with your product goals.',
    myDescription:
      'စက်ပစ္စည်းအမျိုးမျိုးပေါ်တွင် ကောင်းမွန်စွာအသုံးပြုနိုင်ပြီး သင့်ရည်မှန်းချက်နှင့်ကိုက်ညီသော mobile product များ။',
    icon: faMobileScreen,
    accent: 'bg-slate-900 text-white',
  },
  {
    enTitle: 'Cloud Delivery',
    myTitle: 'Cloud စနစ်များ',
    enDescription:
      'Scalable deployment, infrastructure planning, and cloud workflows that support reliable launches and growth.',
    myDescription:
      'စွမ်းဆောင်ရည်မြင့် deployment, infrastructure planning နှင့် cloud workflow များဖြင့် တိုးတက်မှုကို ပံ့ပိုးပေးသည်။',
    icon: faCloud,
    accent: 'bg-blue-900 text-blue-100',
  },
  {
    enTitle: 'Custom Systems',
    myTitle: 'Custom System များ',
    enDescription:
      'Business tools tailored around internal operations, integrations, and the way your team actually works.',
    myDescription:
      'သင့်အဖွဲ့၏ လုပ်ငန်းစဉ်များ၊ integration များနှင့် ကိုက်ညီသော custom business system များ။',
    icon: faGear,
    accent: 'bg-slate-800 text-slate-100',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-slate-950 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="inline-block rounded-full border border-blue-500/20 bg-blue-950/50 px-4 py-1.5 text-sm font-medium text-blue-100">
              <LocalizedText en="Services" my="ဝန်ဆောင်မှုများ" />
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
              <LocalizedText
                en="Capabilities shaped for launch, growth, and day-to-day usability."
                my="စတင်တည်ဆောက်ခြင်း၊ တိုးတက်ခြင်းနှင့် နေ့စဉ်အသုံးပြုရလွယ်ကူမှုအတွက် ဖန်တီးထားသော ဝန်ဆောင်မှုများ"
              />
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            <LocalizedText
              en="Businesses searching for freelance web development, freelance software services, or custom product delivery in Myanmar can work with us on practical, scalable solutions."
              my="မြန်မာနိုင်ငံတွင် freelance web development, freelance software service သို့မဟုတ် custom product တည်ဆောက်မှု လိုအပ်သော လုပ်ငန်းများအတွက် လက်တွေ့ကျပြီး တိုးချဲ့နိုင်သော ဖြေရှင်းချက်များကို ပေးဆောင်ပါသည်။"
            />
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.enTitle}
              className="group rounded-[2rem] border border-slate-800 bg-slate-900 p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-700/40 hover:shadow-lg"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl text-xl ${service.accent}`}
              >
                <FontAwesomeIcon icon={service.icon} />
              </div>

              <h3 className="mt-5 text-xl font-semibold text-white">
                <LocalizedText en={service.enTitle} my={service.myTitle} />
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                <LocalizedText
                  en={service.enDescription}
                  my={service.myDescription}
                />
              </p>

              <div className="mt-6 h-px w-full bg-slate-800" />
              <p className="mt-4 text-sm font-medium text-slate-400">
                <LocalizedText
                  en="Clear scopes, thoughtful UX, and maintainable implementation."
                  my="ရှင်းလင်းသော scope၊ စဉ်းစားထားသော UX နှင့် ထိန်းသိမ်းရလွယ်ကူသော implementation"
                />
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
