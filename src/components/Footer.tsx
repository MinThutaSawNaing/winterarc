import { PoweredByWinterArc } from '@/components/poweredByWinterArcAnimation'
import { contactDetails } from '@/lib/site'
import { localizedPath, type Locale } from '@/lib/i18n'
import LanguageSwitcher from '@/components/LanguageSwitcher'

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/#about' },
  { name: 'Our Approach', href: '/#delivery' },
  { name: 'Solution Examples', href: '/#portfolio' },
  { name: 'Contact', href: '/#contact' },
]

export default function Footer({ locale = 'en' }: { locale?: Locale }) {
  const my = locale === 'my'
  const links = footerLinks.map((item, index) => ({ name: my ? ['ပင်မစာမျက်နှာ', 'ဝန်ဆောင်မှုများ', 'ကျွန်ုပ်တို့အကြောင်း', 'လုပ်ငန်းစဉ်', 'ဖြေရှင်းချက် နမူနာများ', 'ဆက်သွယ်ရန်'][index] : item.name, href: localizedPath(locale, item.href) }))
  return (
    <footer data-snow-surface="dark" className="bg-[var(--color-panel-dark)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="max-w-md">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600">
                <span className="text-sm font-bold">W</span>
              </div>
              <h3 className="text-base font-bold tracking-[-0.02em] text-white">
                Winter Arc Myanmar
              </h3>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {my ? 'အသုံးပြုရ ရှင်းလင်းလွယ်ကူပြီး ရေရှည်တိုးတက်မှုကို အထောက်အကူပြုသော ဝက်ဘ်ဆိုက်၊ ပလက်ဖောင်းနှင့် ဆော့ဖ်ဝဲစနစ်များကို ဒီဇိုင်းရေးဆွဲ တည်ဆောက်ပေးပါသည်။' : 'Websites, platforms, and software systems designed to feel clear, credible, and ready to support long-term growth.'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                {my ? 'မီနူး' : 'Navigation'}
              </p>
              <nav aria-label={my ? 'အောက်ခြေ မီနူး' : 'Footer'} className="mt-4 flex flex-col gap-2.5">
                {links.slice(0, 3).map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm text-slate-300 transition hover:text-white"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                {my ? 'အခြား' : 'More'}
              </p>
              <nav aria-label={my ? 'အောက်ခြေ အခြားမီနူး' : 'Footer secondary'} className="mt-4 flex flex-col gap-2.5">
                {links.slice(3).map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm text-slate-300 transition hover:text-white"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                {my ? 'ဆက်သွယ်ရန်' : 'Contact'}
              </p>
              <div className="mt-4 flex flex-col gap-2.5 text-sm text-slate-300">
                <p>{my ? 'အင်းစိန်၊ ရန်ကုန်၊ မြန်မာ ၁၁၀၁၁' : contactDetails.location}</p>
                <a href={`mailto:${contactDetails.email}`} className="break-all transition hover:text-white">
                  {contactDetails.email}
                </a>
                <a href={`tel:${contactDetails.phone.replace(/\s/g, '')}`} className="transition hover:text-white">
                  {contactDetails.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Winter Arc Myanmar. {my ? 'မူပိုင်ခွင့်အားလုံးကို ထိန်းသိမ်းထားပါသည်။' : 'All rights reserved.'}
          </p>
          <nav aria-label={my ? 'မူဝါဒများ' : 'Policies'} className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300">
            <a href={localizedPath(locale, '/privacy')} className="inline-flex min-h-11 items-center hover:text-white">{my ? 'ကိုယ်ရေးအချက်အလက် မူဝါဒ' : 'Privacy Policy'}</a>
            <a href={localizedPath(locale, '/terms')} className="inline-flex min-h-11 items-center hover:text-white">{my ? 'အသုံးပြုမှု စည်းကမ်းချက်များ' : 'Terms of Use'}</a>
            <a href={localizedPath(locale, '/cookies')} className="inline-flex min-h-11 items-center hover:text-white">{my ? 'ကွတ်ကီး မူဝါဒ' : 'Cookie Information'}</a>
          </nav>
          <LanguageSwitcher locale={locale} />
        </div>

        <div className="mt-8 flex justify-center overflow-x-clip border-t border-white/10 px-2 pt-8 sm:px-4">
          <div className="dark w-full max-w-full sm:w-auto">
            <PoweredByWinterArc variant="footer" />
          </div>
        </div>
      </div>
    </footer>
  )
}
