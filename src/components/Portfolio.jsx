import Image from 'next/image'

const projects = [
  {
    title: 'AIaaS',
    category: 'AI Solution',
    description:
      'Automation and intelligence workflows shaped to reduce repetitive effort while keeping the user experience clear and trustworthy.',
    focus: 'Designed for operational efficiency and better decision support.',
    tech: ['Python', 'AWS', 'API integration'],
    image: '/images/portfolio/aiaas.png',
  },
  {
    title: 'SaaS',
    category: 'Software Platform',
    description:
      'Subscription-ready product foundations with structured dashboards, account management, and a UX system that supports growth.',
    focus: 'Designed for repeatable onboarding and scalable product delivery.',
    tech: ['Next.js', 'Node.js', 'Docker'],
    image: '/images/portfolio/saas.png',
  },
  {
    title: 'Cloud Migration Platform',
    category: 'Cloud Solution',
    description:
      'Modernization workflows and cloud planning designed to make technical change feel controlled, visible, and manageable.',
    focus: 'Designed for complex transitions that need clarity, not disruption.',
    tech: ['AWS', 'Docker', 'Cloud architecture'],
    image: '/images/portfolio/cloud.png',
  },
]

export default function Portfolio({ locale = 'en' }) {
  const my = locale === 'my'
  const translations = [
    {
      title: 'ဝန်ဆောင်မှုအဖြစ် ပေးအပ်သည့် AI (AIaaS)',
      category: 'AI ဖြေရှင်းနည်း',
      description: 'အသုံးပြုမှုအတွေ့အကြုံကို ရှင်းလင်းပြီး ယုံကြည်စိတ်ချရစေသည့်အပြင် ထပ်တလဲလဲလုပ်ရသော အလုပ်များကို လျှော့ချပေးရန် ဖန်တီးထားသည့် အလိုအလျောက်စနစ်နှင့် ဉာဏ်ရည်တုအခြေပြု လုပ်ငန်းစဉ်များ။',
      focus: 'လုပ်ငန်းထိရောက်မှုနှင့် ဆုံးဖြတ်ချက်ချရာတွင် ပိုမိုကောင်းမွန်သော အထောက်အကူရရှိရေးအတွက် ဒီဇိုင်းရေးဆွဲထားပါသည်။',
      tech: ['Python', 'AWS', 'API ချိတ်ဆက်မှု'],
    },
    {
      title: 'အွန်လိုင်းဆော့ဖ်ဝဲဝန်ဆောင်မှု (SaaS)',
      category: 'ဆော့ဖ်ဝဲပလက်ဖောင်း',
      description: 'စနစ်တကျ ဖွဲ့စည်းထားသော စီမံခန့်ခွဲမှုမျက်နှာပြင်များ၊ အကောင့်စီမံမှုနှင့် တိုးတက်မှုကို ပံ့ပိုးသည့် အသုံးပြုမှုဒီဇိုင်းစနစ်တို့ ပါဝင်သည့် အခကြေးငွေပေးသွင်း အသုံးပြုနိုင်သော ထုတ်ကုန်အခြေခံစနစ်များ။',
      focus: 'အသုံးပြုသူအသစ်များကို စနစ်တကျ ကြိုဆိုလမ်းညွှန်နိုင်ရန်နှင့် တိုးချဲ့နိုင်သော ထုတ်ကုန်များ ပေးအပ်နိုင်ရန် ဒီဇိုင်းရေးဆွဲထားပါသည်။',
      tech: ['Next.js', 'Node.js', 'Docker'],
    },
    {
      title: 'ကလောက်စနစ်သို့ ပြောင်းရွှေ့ရေး ပလက်ဖောင်း',
      category: 'ကလောက် ဖြေရှင်းနည်း',
      description: 'နည်းပညာပြောင်းလဲမှုကို ထိန်းချုပ်နိုင်ပြီး ရှင်းလင်းမြင်သာကာ စီမံရလွယ်ကူစေရန် ဒီဇိုင်းရေးဆွဲထားသည့် ခေတ်မီစနစ်သို့ အဆင့်မြှင့်တင်ရေး လုပ်ငန်းစဉ်များနှင့် ကလောက်အစီအစဉ်များ။',
      focus: 'ရှုပ်ထွေးသော စနစ်ပြောင်းရွှေ့မှုများကို ရှင်းလင်းစွာ စီမံနိုင်ရန်နှင့် အနှောင့်အယှက်များ ရှောင်ရှားနိုင်ရန် ဒီဇိုင်းရေးဆွဲထားပါသည်။',
      tech: ['AWS', 'Docker', 'ကလောက်စနစ် ဖွဲ့စည်းပုံ'],
    },
  ]
  const localizedProjects = projects.map((project, index) => my ? { ...project, ...translations[index] } : project)
  return (
    <section
      id="portfolio"
      className="section-shell bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:max-w-3xl">
          <span className="section-label">{my ? 'ဖြေရှင်းနည်း နမူနာများ' : 'Solution Examples'}</span>
          <h2 className="text-2xl font-bold tracking-[-0.03em] text-[var(--color-ink)] md:text-3xl lg:text-4xl">
            {my ? 'လုပ်ဆောင်ချက်များ ပေးအပ်ရုံမျှ မဟုတ်ဘဲ လုပ်ငန်းလိုအပ်ချက်ကို ရှင်းလင်းစွာ အခြေခံတည်ဆောက်ထားသည့် ဒစ်ဂျစ်တယ်ထုတ်ကုန်များ။' : 'Digital products shaped around business clarity, not just feature delivery.'}
          </h2>
          <p className="text-sm leading-7 text-[var(--color-muted)] md:text-base">
            {my ? 'ဤအရာများသည် ဖြေရှင်းနည်းနယ်ပယ် နမူနာများသာဖြစ်ပြီး ဖောက်သည်ပရောဂျက်များအကြောင်း ထုတ်ပြန်ထားသော လေ့လာတင်ပြချက်များ မဟုတ်ပါ။ သက်ဆိုင်ရာ သရုပ်ပြမှုများနှင့် ခွင့်ပြုချက်ဖြင့် မျှဝေနိုင်သော လုပ်ဆောင်မှုများအကြောင်း ကျွန်ုပ်တို့နှင့် ဆွေးနွေးပါ။' : <>Illustrative solution areas, not published client case studies. Talk to us
            about relevant demonstrations and the work we can share with permission.</>}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {localizedProjects.map((project) => (
            <article
              key={project.title}
              className="panel-card overflow-hidden rounded-xl transition hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.04)_0%,rgba(15,23,42,0.48)_100%)]" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex rounded-lg border border-white/20 bg-white/[0.1] px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold tracking-[-0.02em] text-[var(--color-ink)]">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {project.description}
                </p>

                <p className="mt-4 rounded-lg bg-[var(--color-brand-soft)] px-4 py-3 text-sm font-medium leading-6 text-[var(--color-brand-deep)]">
                  {project.focus}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-[var(--color-line)] bg-[var(--color-bg-alt)] px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.06em] text-[var(--color-muted)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
