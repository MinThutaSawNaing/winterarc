import Image from 'next/image'
import LocalizedText from '@/components/LocalizedText'

const projects = [
  {
    title: 'AIaaS',
    enCategory: 'AI solution',
    myCategory: 'AI ဖြေရှင်းချက်',
    enDescription:
      'Automation and intelligence tools that help teams streamline repetitive workflows and surface better insights.',
    myDescription:
      'အဖွဲ့များ၏ ထပ်ခါတလဲလဲ workflow များကို လျှော့ချပြီး insight ပိုမိုကောင်းမွန်စေရန် ကူညီသော automation နှင့် intelligence tool များ။',
    tech: ['Python', 'AWS', 'API integration'],
    image: '/images/portfolio/aiaas.png',
  },
  {
    title: 'SaaS',
    enCategory: 'Software platform',
    myCategory: 'Software platform',
    enDescription:
      'Subscription-ready products with dashboards, user management, and the foundations needed for repeatable growth.',
    myDescription:
      'Dashboard, user management နှင့် ရေရှည်တိုးတက်မှုအတွက် လိုအပ်သော အခြေခံများပါဝင်သော subscription-ready product များ။',
    tech: ['Next.js', 'Node.js', 'Docker'],
    image: '/images/portfolio/saas.png',
  },
  {
    title: 'Cloud Migration Platform',
    enCategory: 'Cloud solution',
    myCategory: 'Cloud ဖြေရှင်းချက်',
    enDescription:
      'Migration workflows and infrastructure planning that make modernization feel controlled, secure, and practical.',
    myDescription:
      'Modernization လုပ်ငန်းစဉ်ကို ထိန်းချုပ်နိုင်ပြီး လုံခြုံကာ လက်တွေ့အသုံးဝင်စေသော migration workflow နှင့် infrastructure planning များ။',
    tech: ['AWS', 'Docker', 'Cloud architecture'],
    image: '/images/portfolio/cloud.png',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[linear-gradient(180deg,#020617_0%,#0b1120_100%)] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:max-w-3xl">
          <span className="inline-block w-fit rounded-full border border-blue-500/20 bg-blue-950/50 px-4 py-1.5 text-sm font-medium text-blue-100">
            <LocalizedText en="Selected Work" my="ရွေးချယ်ထားသော လုပ်ငန်းများ" />
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
            <LocalizedText
              en="A focused portfolio of products built to solve specific business problems."
              my="တိကျသော လုပ်ငန်းလိုအပ်ချက်များကို ဖြေရှင်းရန် တည်ဆောက်ခဲ့သော product portfolio"
            />
          </h2>
          <p className="text-base leading-8 text-slate-300 md:text-lg">
            <LocalizedText
              en="These examples highlight the kinds of platforms and capabilities we help clients bring to market with stronger UX, cleaner structure, and dependable technical foundations."
              my="ဤဥပမာများသည် UX ပိုမိုကောင်းမွန်ခြင်း၊ ဖွဲ့စည်းပုံရှင်းလင်းခြင်းနှင့် ယုံကြည်စိတ်ချရသော နည်းပညာအခြေခံများဖြင့် ဖောက်သည်များကိုဈေးကွက်ထဲသို့ တင်ပို့ကူညီခဲ့သော platform နှင့် capability များကို ပြသပါသည်။"
            />
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 shadow-sm transition hover:-translate-y-1 hover:border-blue-700/40 hover:shadow-lg"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>

              <div className="p-6">
                <span className="inline-flex rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
                  <LocalizedText
                    en={project.enCategory}
                    my={project.myCategory}
                  />
                </span>

                <h3 className="mt-4 text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  <LocalizedText
                    en={project.enDescription}
                    my={project.myDescription}
                  />
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-200"
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
