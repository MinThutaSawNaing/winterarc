const englishPoints = [
  'Freelance software services in Myanmar for websites, mobile apps, and internal business systems.',
  'Freelance web development in Myanmar for company websites, landing pages, dashboards, and e-commerce platforms.',
  'Custom software development in Myanmar for operations, workflow automation, and cloud-based products.',
]

const myanmarPoints = [
  'မြန်မာနိုင်ငံအတွက် website, mobile app နှင့် business software များကို freelance service အဖြစ် ဖန်တီးပေးပါသည်။',
  'ကုမ္ပဏီ website, landing page, admin dashboard နှင့် e-commerce platform များကို မြန်မာဈေးကွက်အတွက် တည်ဆောက်ပေးနိုင်ပါသည်။',
  'လုပ်ငန်းအတွက် custom software, workflow automation နှင့် cloud-based system များကို ရေးသားတည်ဆောက်ပေးပါသည်။',
]

const keywordChips = [
  'Freelancer Myanmar',
  'Freelance Software Myanmar',
  'Freelance Web Development Myanmar',
  'မြန်မာ software service',
  'မြန်မာ website development',
  'ရန်ကုန် freelance developer',
]

export default function MyanmarSeoSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#020617_0%,#000000_100%)] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-6 shadow-[0_24px_80px_rgba(2,6,23,0.45)] sm:p-8 lg:p-10">
          <div className="max-w-4xl">
            <span className="inline-block rounded-full border border-blue-500/20 bg-blue-950/50 px-4 py-1.5 text-sm font-medium text-blue-100">
              Myanmar SEO Content
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
              Freelance software services in Myanmar
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Winter Arc Myanmar provides freelance software services in
              Myanmar for businesses that need modern websites, mobile
              applications, UI/UX improvements, cloud systems, and custom
              software delivery.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-200">
              Winter Arc Myanmar သည် မြန်မာနိုင်ငံရှိ လုပ်ငန်းများအတွက်
              website, mobile app, UI/UX design, cloud system နှင့် custom
              software development service များကို ပေးဆောင်ပါသည်။
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-xl font-semibold text-white">
                English Search Coverage
              </h3>
              <div className="mt-5 space-y-4">
                {englishPoints.map((item) => (
                  <p key={item} className="text-base leading-8 text-slate-300">
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-xl font-semibold text-white">
                Myanmar Language Coverage
              </h3>
              <div className="mt-5 space-y-4">
                {myanmarPoints.map((item) => (
                  <p key={item} className="text-base leading-8 text-slate-300">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {keywordChips.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
