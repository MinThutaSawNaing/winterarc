import LocalizedText from '@/components/LocalizedText'

const stats = [
  { value: '4+', en: 'Years of experience', my: 'အတွေ့အကြုံနှစ်များ' },
  { value: '10+', en: 'Products and launches', my: 'ထုတ်ကုန်နှင့် launch များ' },
  { value: '10+', en: 'Client partnerships', my: 'ဖောက်သည်ပူးပေါင်းမှုများ' },
  { value: '24/7', en: 'Responsive support', my: 'အမြန်တုံ့ပြန်မှု ပံ့ပိုးမှု' },
]

const principles = [
  {
    enTitle: 'Built around real business goals',
    myTitle: 'တကယ့်လုပ်ငန်းလိုအပ်ချက်အပေါ် အခြေခံခြင်း',
    enDescription:
      'We connect design and engineering decisions to the outcomes your team actually needs.',
    myDescription:
      'Design နှင့် engineering ဆိုင်ရာဆုံးဖြတ်ချက်များကို သင့်အဖွဲ့တကယ်လိုအပ်သော ရလဒ်များနှင့် ချိတ်ဆက်ပေးပါသည်။',
  },
  {
    enTitle: 'Small details handled carefully',
    myTitle: 'အသေးစိတ်အချက်များကိုလည်း အလေးထားခြင်း',
    enDescription:
      'From mobile spacing to interface clarity, the product should feel considered at every step.',
    myDescription:
      'Mobile spacing မှစ၍ interface clarity အထိ အဆင့်တိုင်းတွင် စဉ်းစားထားသောထုတ်ကုန်အဖြစ် ခံစားရစေပါသည်။',
  },
  {
    enTitle: 'Partnership beyond launch',
    myTitle: 'Launch ပြီးနောက်လည်း ဆက်လက်လက်တွဲခြင်း',
    enDescription:
      'We stay involved with refinement, support, and next-phase planning after release.',
    myDescription:
      'Release ပြီးနောက် refinement, support နှင့် နောက်အဆင့်အစီအစဉ်များတွင်လည်း ဆက်လက်ကူညီပေးပါသည်။',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-[linear-gradient(180deg,#020617_0%,#0f172a_100%)] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="inline-block rounded-full border border-blue-500/20 bg-blue-950/50 px-4 py-1.5 text-sm font-medium text-blue-100">
              <LocalizedText
                en="About Winter Arc Myanmar"
                my="Winter Arc Myanmar အကြောင်း"
              />
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
              <LocalizedText
                en="A product-minded team focused on dependable digital delivery."
                my="ယုံကြည်စိတ်ချရသော digital delivery ကို အလေးထားသော product-minded team"
              />
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              <LocalizedText
                en="We help businesses move from ideas and operational pain points to software that feels modern, efficient, and credible. Our work blends design clarity, practical engineering, and close collaboration throughout the process."
                my="လုပ်ငန်းများ၏ စိတ်ကူးများနှင့် အလုပ်လုပ်ရခက်ခဲသောအချက်များကို modern ဖြစ်ပြီး ထိရောက်ကာ ယုံကြည်စိတ်ချရသော software အဖြစ် ပြောင်းလဲနိုင်ရန် ကူညီပေးပါသည်။ ကျွန်ုပ်တို့၏အလုပ်တွင် design clarity, practical engineering နှင့် နီးကပ်သောပူးပေါင်းဆောင်ရွက်မှု ပါဝင်ပါသည်။"
              />
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((item) => (
                <div
                  key={item.en}
                  className="rounded-[1.75rem] border border-slate-800 bg-slate-900 p-5"
                >
                  <div className="text-2xl font-semibold text-white md:text-3xl">
                    {item.value}
                  </div>
                  <div className="mt-2 text-sm font-medium text-slate-300">
                    <LocalizedText en={item.en} my={item.my} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-800 bg-slate-950 p-5 sm:p-7">
            <div className="rounded-[1.75rem] bg-[linear-gradient(180deg,#0f172a_0%,#172554_100%)] p-6 text-white sm:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-200">
                <LocalizedText en="How we work" my="ကျွန်ုပ်တို့၏ လုပ်ပုံလုပ်နည်း" />
              </p>

              <div className="mt-6 grid gap-5">
                {principles.map((item, index) => (
                  <div
                    key={item.enTitle}
                    className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-sm font-semibold text-slate-100">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold">
                          <LocalizedText en={item.enTitle} my={item.myTitle} />
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-slate-200">
                          <LocalizedText
                            en={item.enDescription}
                            my={item.myDescription}
                          />
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
