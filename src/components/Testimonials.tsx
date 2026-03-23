import LocalizedText from '@/components/LocalizedText'

const testimonials = [
  {
    name: 'Aung Min',
    company: 'Digital Commerce Co.',
    enFeedback:
      'Winter Arc Myanmar delivered a polished solution with strong communication and clean technical execution.',
    myFeedback:
      'Winter Arc Myanmar သည် ဆက်သွယ်မှုကောင်းမွန်ပြီး နည်းပညာအကောင်အထည်ဖော်မှု သန့်ရှင်းကောင်းမွန်သော solution တစ်ခုကို ပေးနိုင်ခဲ့ပါသည်။',
  },
  {
    name: 'Su Mon',
    company: 'Growth Hub Myanmar',
    enFeedback:
      'Their team understood our vision quickly and turned it into a professional digital product we are proud to use.',
    myFeedback:
      'သူတို့၏အဖွဲ့သည် ကျွန်ုပ်တို့၏ရည်မှန်းချက်ကို လျင်မြန်စွာနားလည်ပြီး ကျွန်ုပ်တို့ဂုဏ်ယူစွာ အသုံးပြုနိုင်သော professional digital product အဖြစ် ဖန်တီးပေးခဲ့ပါသည်။',
  },
  {
    name: 'Ko Htet',
    company: 'Smart Operations Ltd.',
    enFeedback:
      'We appreciated their responsiveness, practical mindset, and ability to deliver on time.',
    myFeedback:
      'သူတို့၏ အမြန်တုံ့ပြန်နိုင်မှု၊ လက်တွေ့ကျသောအမြင်နှင့် အချိန်မှီပို့ဆောင်နိုင်မှုကို ကျွန်ုပ်တို့ အလွန်တန်ဖိုးထားပါသည်။',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-black py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-5 md:max-w-3xl">
          <span className="inline-block w-fit rounded-full border border-blue-500/20 bg-blue-950/50 px-4 py-1.5 text-sm font-medium text-blue-100">
            <LocalizedText en="Testimonials" my="ဖောက်သည်အမြင်များ" />
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
            <LocalizedText
              en="Clients trust us to bring calm, clarity, and follow-through to the work."
              my="ဖောက်သည်များသည် ကျွန်ုပ်တို့ကို ယုံကြည်စိတ်ချပြီး ရှင်းလင်းမှုရှိသော လက်တွဲဆောင်ရွက်မှုကို ရရှိကြပါသည်။"
            />
          </h2>
          <p className="text-base leading-8 text-slate-300 md:text-lg">
            <LocalizedText
              en="Good delivery is not only about shipping features. It is also about communication, consistency, and making the process feel manageable."
              my="ကောင်းမွန်သော delivery ဆိုသည်မှာ feature များပို့ဆောင်ခြင်းတင်မကဘဲ ဆက်သွယ်မှုကောင်းခြင်း၊ တည်ငြိမ်မှုရှိခြင်းနှင့် အလုပ်လုပ်ပုံကို စီမံခန့်ခွဲရလွယ်ကူစေခြင်းလည်း ဖြစ်ပါသည်။"
            />
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-[2rem] border border-slate-800 bg-slate-950 p-6 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
                <LocalizedText en="Five-star feedback" my="ကြယ်ငါးပွင့် အမြင်" />
              </p>

              <p className="mt-5 text-base leading-8 text-slate-200">
                &ldquo;<LocalizedText en={item.enFeedback} my={item.myFeedback} />&rdquo;
              </p>

              <div className="mt-6 border-t border-slate-800 pt-5">
                <h3 className="text-base font-semibold text-white">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-slate-400">{item.company}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
