import LocalizedText from '@/components/LocalizedText'

const footerLinks = [
  { en: 'Home', my: 'ပင်မ', href: '#home' },
  { en: 'Services', my: 'ဝန်ဆောင်မှုများ', href: '#services' },
  { en: 'About', my: 'အကြောင်းအရာ', href: '#about' },
  { en: 'Technologies', my: 'နည်းပညာများ', href: '#technologies' },
  { en: 'Portfolio', my: 'လုပ်ဆောင်ခဲ့သည့်အရာများ', href: '#portfolio' },
  { en: 'Contact', my: 'ဆက်သွယ်ရန်', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h3 className="text-xl font-semibold text-white">
              <LocalizedText en="Winter Arc Myanmar" my="ဝင်းတာအာ့ခ် မြန်မာ" />
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-200">
              <LocalizedText
                en="Modern websites, platforms, and software systems designed to feel clear, credible, and easy to use."
                my="ရှင်းလင်းပြီး ယုံကြည်စိတ်ချရကာ အသုံးပြုရလွယ်ကူသော website, platform နှင့် software system များကို တည်ဆောက်ပေးပါသည်။"
              />
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-300"
          >
            {footerLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-300 transition hover:text-white"
              >
                <LocalizedText en={item.en} my={item.my} />
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6">
          <p className="text-sm text-slate-400">
            <LocalizedText
              en="Copyright 2026 Winter Arc Myanmar. All rights reserved."
              my="မူပိုင်ခွင့် 2026 Winter Arc Myanmar။ မူပိုင်ခွင့်အားလုံး ထိန်းသိမ်းထားသည်။"
            />
          </p>
        </div>
      </div>
    </footer>
  )
}
