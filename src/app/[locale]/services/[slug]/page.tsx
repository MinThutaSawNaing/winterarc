import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Footer from '@/components/Footer'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { getServices, services } from '@/lib/services'
import { isLocale, languageAlternates, localizedPath } from '@/lib/i18n'
import { siteName, siteUrl } from '@/lib/site'

type ServicePageProps = { params: Promise<{ locale: string; slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()
  const service = getServices(locale).find((item) => item.slug === slug)
  if (!service) notFound()

  const title = locale === 'my' ? `မြန်မာနိုင်ငံအတွက် ${service.title} | ${siteName}` : `${service.title} in Myanmar | ${siteName}`
  const url = `${siteUrl}${localizedPath(locale, service.href)}`

  return {
    title,
    description: service.description,
    alternates: { canonical: url, languages: languageAlternates(service.href) },
    openGraph: {
      type: 'website',
      locale: locale === 'my' ? 'my_MM' : 'en_US',
      alternateLocale: locale === 'my' ? 'en_US' : 'my_MM',
      siteName,
      title,
      description: service.description,
      url,
      images: [{ url: `${siteUrl}/opengraph-image`, alt: siteName }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: service.description,
      images: [`${siteUrl}/opengraph-image`],
    },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()
  const services = getServices(locale)
  const t = (en: string, my: string) => locale === 'my' ? my : en
  const service = services.find((item) => item.slug === slug)
  if (!service) notFound()

  const url = `${siteUrl}${localizedPath(locale, service.href)}`
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        inLanguage: locale,
        '@id': `${url}#service`,
        name: service.title,
        serviceType: service.title,
        description: service.description,
        url,
        provider: { '@id': `${siteUrl}/#organization` },
        areaServed: { '@type': 'Country', name: t('Myanmar', 'မြန်မာနိုင်ငံ') },
      },
      {
        '@type': 'BreadcrumbList',
        inLanguage: locale,
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: t('Home', 'ပင်မစာမျက်နှာ'), item: `${siteUrl}${localizedPath(locale, '/')}` },
          { '@type': 'ListItem', position: 2, name: t('Services', 'ဝန်ဆောင်မှုများ'), item: `${siteUrl}${localizedPath(locale, '/services')}` },
          { '@type': 'ListItem', position: 3, name: service.title, item: url },
        ],
      },
    ],
  }

  return (
    <>
      <header className="relative z-10 border-b border-[var(--color-line)] bg-[var(--color-panel)]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-4 sm:px-6 lg:px-8">
          <Link href={localizedPath(locale, '/')} className="inline-flex min-h-11 items-center gap-3 rounded-lg font-bold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand)]">
            <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-brand)] text-sm text-white">W</span>
            {siteName}
          </Link>
          <nav aria-label={t('Primary', 'အဓိကလမ်းညွှန်')} className="flex flex-wrap items-center gap-1 text-sm font-semibold sm:gap-3">
            <Link href={localizedPath(locale, '/')} className="inline-flex min-h-11 items-center rounded-lg px-3 text-[var(--color-muted)] hover:bg-[var(--color-bg-alt)] focus-visible:outline-2 focus-visible:outline-[var(--color-brand)]">{t('Home', 'ပင်မစာမျက်နှာ')}</Link>
            <Link href={localizedPath(locale, '/services')} className="inline-flex min-h-11 items-center rounded-lg bg-[var(--color-brand-soft)] px-3 text-[var(--color-brand-deep)] hover:bg-[var(--color-bg-alt)] focus-visible:outline-2 focus-visible:outline-[var(--color-brand)]">{t('Services', 'ဝန်ဆောင်မှုများ')}</Link>
            <Link href={localizedPath(locale, '/#contact')} className="inline-flex min-h-11 items-center rounded-lg bg-[var(--color-brand)] px-4 text-white transition-colors hover:bg-[var(--color-brand-deep)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand)]">{t('Contact', 'ဆက်သွယ်ရန်')}</Link>
            <LanguageSwitcher locale={locale} />
          </nav>
        </div>
      </header>

      <main id="main-content" className="relative bg-[var(--color-bg)]">
        <script
          id="service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
        />
        <section className="section-shell bg-[var(--color-bg-alt)] py-12 sm:py-16 lg:py-20" aria-labelledby="service-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav aria-label={t('Breadcrumb', 'စာမျက်နှာလမ်းကြောင်း')} className="mb-10 text-sm text-[var(--color-muted)]">
              <ol className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <li><Link href={localizedPath(locale, '/')} className="inline-flex min-h-11 items-center rounded underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-[var(--color-brand)]">{t('Home', 'ပင်မစာမျက်နှာ')}</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href={localizedPath(locale, '/services')} className="inline-flex min-h-11 items-center rounded underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-[var(--color-brand)]">{t('Services', 'ဝန်ဆောင်မှုများ')}</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">{service.title}</li>
              </ol>
            </nav>
            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
              <div>
                <span className="section-label">{t('Software services · Myanmar', 'ဆော့ဖ်ဝဲဝန်ဆောင်မှုများ · မြန်မာနိုင်ငံ')}</span>
                <h1 id="service-heading" className="mt-5 text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">{service.title}</h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">{service.introduction}</p>
                <Link href={localizedPath(locale, '/#contact')} className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand-deep)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand)]">
                  {t('Discuss your project', 'သင့်ပရောဂျက်အကြောင်း ဆွေးနွေးပါ')} <span aria-hidden="true">→</span>
                </Link>
              </div>
              <aside className="panel-card p-6 sm:p-8" aria-labelledby="fit-heading">
                <h2 id="fit-heading" className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-deep)]">{t('A good fit for', 'သင့်လျော်သော လုပ်ငန်းများ')}</h2>
                <p className="mt-4 leading-8 text-[var(--color-muted)]">{service.bestFor}</p>
                <nav aria-label={t('On this page', 'ဤစာမျက်နှာတွင်')} className="mt-6 border-t border-[var(--color-line)] pt-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">{t('Explore this service', 'ဤဝန်ဆောင်မှုကို လေ့လာပါ')}</p>
                  <ul className="grid gap-x-4 sm:grid-cols-2">
                    {[
                      { href: '#scope', label: t('Scope', 'လုပ်ငန်းအတိုင်းအတာ') },
                      { href: '#deliverables', label: t('Deliverables', 'ပေးအပ်မည့်ရလဒ်များ') },
                      { href: '#prepare', label: t('What to prepare', 'ကြိုတင်ပြင်ဆင်ရန်') },
                      { href: '#process', label: t('Process', 'လုပ်ဆောင်ပုံအဆင့်ဆင့်') },
                      { href: '#faq', label: t('FAQs', 'မေးလေ့ရှိသော မေးခွန်းများ') },
                    ].map((item) => (
                      <li key={item.href}>
                        <a href={`${localizedPath(locale, service.href)}${item.href}`} className="inline-flex min-h-11 items-center rounded text-sm font-semibold text-[var(--color-brand-deep)] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)]">{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>
            </div>
          </div>
        </section>

        <section id="scope" className="section-shell py-16 lg:py-24" aria-labelledby="scope-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="section-label">{t('Scope', 'လုပ်ငန်းအတိုင်းအတာ')}</span>
            <h2 id="scope-heading" className="mt-4 text-2xl font-bold sm:text-3xl">{t('What we can help you build', 'ကျွန်ုပ်တို့ ကူညီတည်ဆောက်ပေးနိုင်သည့်အရာများ')}</h2>
            <p className="mt-4 max-w-2xl leading-8 text-[var(--color-muted)]">{t('These capabilities are a starting point for discussion. The final scope reflects your priorities, existing systems, and project constraints.', 'အောက်ပါဝန်ဆောင်မှုများကို အခြေခံ၍ စတင်ဆွေးနွေးနိုင်ပါသည်။ အမှန်တကယ် ဆောင်ရွက်မည့်အပိုင်းများကို သင့်ဦးစားပေးချက်များ၊ လက်ရှိစနစ်နှင့် ပရောဂျက်၏ ကန့်သတ်ချက်များအလိုက် ညှိနှိုင်းသတ်မှတ်ပါသည်။')}</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {service.scope.map((item) => (
                <article key={item.title} className="panel-card p-6 sm:p-8">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-3 leading-8 text-[var(--color-muted)]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell bg-[var(--color-bg-alt)] py-16 lg:py-24" aria-label={t('Deliverables and preparation', 'ပေးအပ်မည့်ရလဒ်များနှင့် ကြိုတင်ပြင်ဆင်မှု')}>
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <div id="deliverables" className="scroll-mt-24">
              <span className="section-label">{t('Deliverables', 'ပေးအပ်မည့်ရလဒ်များ')}</span>
              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">{t('A clear handover, not just a launch', 'စတင်အသုံးပြုနိုင်အောင် ဆောင်ရွက်ပေးရုံသာမက ရှင်းလင်းစွာ လွှဲပြောင်းပေးခြင်း')}</h2>
              <p className="mt-4 leading-8 text-[var(--color-muted)]">{t('The exact deliverables are agreed before work begins. A typical scope can include:', 'အလုပ်မစမီ ပေးအပ်မည့်ရလဒ်များကို တိကျစွာ သဘောတူပါသည်။ ပုံမှန်အားဖြင့် အောက်ပါတို့ ပါဝင်နိုင်ပါသည်။')}</p>
              <ul className="mt-6 space-y-4">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex gap-3 leading-7 text-[var(--color-muted)]">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-brand)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-xl border border-[var(--color-line)] bg-[var(--color-panel)] p-5">
                <h3 className="text-sm font-bold">{t('Important scope considerations', 'လုပ်ငန်းအတိုင်းအတာဆိုင်ရာ အရေးကြီးသောအချက်များ')}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{service.scopeNote}</p>
              </div>
            </div>
            <div id="prepare" className="scroll-mt-24 rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] p-6 sm:p-8">
              <span className="section-label">{t('Before we start', 'မစတင်မီ')}</span>
              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">{t('What to prepare', 'ကြိုတင်ပြင်ဆင်ရန်')}</h2>
              <p className="mt-4 leading-8 text-[var(--color-muted)]">{t('You do not need a finished specification. The following context helps make the first conversation useful:', 'အပြီးသတ်ရေးဆွဲထားသော လိုအပ်ချက်စာတမ်း ရှိရန်မလိုပါ။ အောက်ပါအချက်များက ပထမဆုံးဆွေးနွေးမှုကို အကျိုးရှိစေပါသည်။')}</p>
              <ul className="mt-6 space-y-5">
                {service.preparation.map((item, index) => (
                  <li key={item} className="flex gap-4 leading-7 text-[var(--color-muted)]">
                    <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-soft)] text-xs font-bold text-[var(--color-brand-deep)]">{index + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-[var(--color-line)] pt-5 text-sm leading-7 text-[var(--color-muted)]">{t('For your initial enquiry, use anonymized examples and avoid sending passwords, credentials, or sensitive customer data.', 'ပထမဆုံးစုံစမ်းမေးမြန်းရာတွင် ကိုယ်ရေးအချက်အလက်များ ဖယ်ရှားထားသော နမူနာများကိုသာ အသုံးပြုပြီး စကားဝှက်၊ အကောင့်ဝင်ရောက်ခွင့်အချက်အလက်နှင့် ဖောက်သည်၏ လျှို့ဝှက်ဒေတာများ မပို့ပါနှင့်။')}</p>
            </div>
          </div>
        </section>

        <section id="process" className="section-shell py-16 lg:py-24" aria-labelledby="process-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="section-label">{t('Process', 'လုပ်ဆောင်ပုံအဆင့်ဆင့်')}</span>
            <h2 id="process-heading" className="mt-4 text-2xl font-bold sm:text-3xl">{t('From first conversation to handover', 'ပထမဆုံးဆွေးနွေးမှုမှ လွှဲပြောင်းပေးသည့်အထိ')}</h2>
            <p className="mt-4 max-w-2xl leading-8 text-[var(--color-muted)]">{t('Review points keep decisions visible. Milestones and timing depend on the agreed scope, access to existing systems, and feedback availability.', 'လုပ်ငန်းအဆင့်အလိုက် အတူပြန်လည်သုံးသပ်ခြင်းဖြင့် ဆုံးဖြတ်ချက်များကို နှစ်ဖက်လုံး ရှင်းလင်းစွာ သိရှိနိုင်ပါသည်။ အဆင့်လိုက် ပြီးစီးရမည့်အချိန်များသည် သဘောတူထားသော လုပ်ငန်းအတိုင်းအတာ၊ လက်ရှိစနစ်များသို့ ဝင်ရောက်အသုံးပြုခွင့်နှင့် တုံ့ပြန်အကြံပြုချက် ရရှိချိန်တို့အပေါ် မူတည်ပါသည်။')}</p>
            <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step, index) => (
                <li key={step.title} className="border-t-2 border-[var(--color-line)] pt-5">
                  <span aria-hidden="true" className="text-sm font-bold text-[var(--color-brand-deep)]">0{index + 1}</span>
                  <h3 className="mt-3 text-lg font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="faq" className="section-shell bg-[var(--color-bg-alt)] py-16 lg:py-24" aria-labelledby="faq-heading">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:px-8">
            <div>
              <span className="section-label">{t('Common questions', 'မေးလေ့ရှိသော မေးခွန်းများ')}</span>
              <h2 id="faq-heading" className="mt-4 text-2xl font-bold sm:text-3xl">{t('Before you get started', 'မစတင်မီ သိထားရန်')}</h2>
              <p className="mt-4 leading-8 text-[var(--color-muted)]">{t('Have a question specific to your setup? Include it when you contact us so we can discuss the relevant dependencies.', 'သင့်စနစ်နှင့် သက်ဆိုင်သော သီးသန့်မေးခွန်း ရှိပါသလား။ ဆက်သွယ်ရာတွင် ထည့်ပြောပေးပါက သက်ဆိုင်ရာ ဆက်စပ်လိုအပ်ချက်များကို ဆွေးနွေးနိုင်ပါသည်။')}</p>
            </div>
            <div className="space-y-4">
              {service.faqs.map((faq) => (
                <details key={faq.question} className="group rounded-xl border border-[var(--color-line)] bg-[var(--color-panel)] open:border-[var(--color-brand)]">
                  <summary className="min-h-12 cursor-pointer rounded-xl px-6 py-5 font-semibold marker:text-[var(--color-brand)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand)]">{faq.question}</summary>
                  <p className="px-6 pb-6 text-sm leading-8 text-[var(--color-muted)]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell bg-[var(--color-brand-soft)] py-14 sm:py-16" aria-labelledby="contact-heading">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
            <div className="max-w-2xl">
              <h2 id="contact-heading" className="text-2xl font-bold sm:text-3xl">{t('Let’s define the next useful step.', 'နောက်တစ်ဆင့်အတွက် အတူတကွ စီစဉ်ကြပါစို့။')}</h2>
              <p className="mt-4 leading-8 text-[var(--color-muted)]">{t('Share what you want to build, who it is for, and the constraints we should understand. We can discuss scope and open questions from there.', 'တည်ဆောက်လိုသောအရာ၊ ရည်ရွယ်ထားသော အသုံးပြုသူများနှင့် ကျွန်ုပ်တို့ သိထားသင့်သော ကန့်သတ်ချက်များကို မျှဝေပါ။ ထိုအချက်များကို အခြေခံ၍ လုပ်ငန်းအတိုင်းအတာနှင့် မရှင်းလင်းသေးသော မေးခွန်းများကို ဆက်လက်ဆွေးနွေးနိုင်ပါသည်။')}</p>
            </div>
            <Link href={localizedPath(locale, '/#contact')} className="inline-flex min-h-12 items-center justify-center gap-3 justify-self-start rounded-lg bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand-deep)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand)]">
              {t('Start a conversation', 'စတင်ဆွေးနွေးပါ')} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className="section-shell py-12 sm:py-16" aria-labelledby="related-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="related-heading" className="text-xl font-bold">{t('Explore other services', 'အခြားဝန်ဆောင်မှုများကို လေ့လာပါ')}</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {services.filter((item) => item.slug !== service.slug).map((item) => (
                <Link key={item.slug} href={localizedPath(locale, item.href)} className="panel-card flex min-h-16 items-center justify-between gap-4 p-5 font-semibold transition-colors hover:border-[var(--color-brand)] hover:bg-[var(--color-brand-soft)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand)]">
                  {item.title}<span aria-hidden="true" className="text-[var(--color-brand)]">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  )
}