import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Footer from '@/components/Footer'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { getServices } from '@/lib/services'
import { isLocale, languageAlternates, localizedPath } from '@/lib/i18n'
import { siteName, siteUrl } from '@/lib/site'

type ServicesPageProps = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const title = locale === 'my'
    ? `မြန်မာနိုင်ငံအတွက် ဆော့ဖ်ဝဲ ဖန်တီးရေးဝန်ဆောင်မှုများ | ${siteName}`
    : `Software Development Services in Myanmar | ${siteName}`
  const description = locale === 'my'
    ? 'Winter Arc Myanmar ၏ ဝက်ဘ်ဆိုက်၊ မိုဘိုင်းအက်ပ်၊ Cloud နှင့် လုပ်ငန်းလိုအပ်ချက်အလိုက် ဆော့ဖ်ဝဲ ဖန်တီးရေးဝန်ဆောင်မှုများကို လေ့လာပါ။ လုပ်ငန်းအတိုင်းအတာ၊ ပေးအပ်မည့်ရလဒ်များနှင့် ကြိုတင်ပြင်ဆင်ရန်အချက်များကို ကြည့်ရှုနိုင်ပါသည်။'
    : 'Explore web development, mobile app development, cloud solutions, and custom software from Winter Arc Myanmar. Review scope, deliverables, and how to prepare.'
  const url = `${siteUrl}${localizedPath(locale, '/services')}`
  return {
    title,
    description,
    alternates: { canonical: url, languages: languageAlternates('/services') },
    openGraph: {
      type: 'website',
      locale: locale === 'my' ? 'my_MM' : 'en_US',
      alternateLocale: locale === 'my' ? 'en_US' : 'my_MM',
      siteName,
      title,
      description,
      url,
      images: [{ url: `${siteUrl}/opengraph-image`, alt: siteName }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteUrl}/opengraph-image`],
    },
  }
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const services = getServices(locale)
  const t = (en: string, my: string) => locale === 'my' ? my : en
  const url = `${siteUrl}${localizedPath(locale, '/services')}`
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      ...services.map((service) => ({
        '@type': 'Service',
        '@id': `${siteUrl}${localizedPath(locale, service.href)}#service`,
        inLanguage: locale,
        name: service.title,
        serviceType: service.title,
        description: service.description,
        url: `${siteUrl}${localizedPath(locale, service.href)}`,
        provider: { '@id': `${siteUrl}/#organization` },
        areaServed: { '@type': 'Country', name: t('Myanmar', 'မြန်မာနိုင်ငံ') },
      })),
      {
        '@type': 'BreadcrumbList',
        inLanguage: locale,
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: t('Home', 'ပင်မစာမျက်နှာ'), item: `${siteUrl}${localizedPath(locale, '/')}` },
          { '@type': 'ListItem', position: 2, name: t('Services', 'ဝန်ဆောင်မှုများ'), item: url },
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
            <Link href={localizedPath(locale, '/services')} aria-current="page" className="inline-flex min-h-11 items-center rounded-lg bg-[var(--color-brand-soft)] px-3 text-[var(--color-brand-deep)] focus-visible:outline-2 focus-visible:outline-[var(--color-brand)]">{t('Services', 'ဝန်ဆောင်မှုများ')}</Link>
            <Link href={localizedPath(locale, '/#contact')} className="inline-flex min-h-11 items-center rounded-lg bg-[var(--color-brand)] px-4 text-white transition-colors hover:bg-[var(--color-brand-deep)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand)]">{t('Contact', 'ဆက်သွယ်ရန်')}</Link>
            <LanguageSwitcher locale={locale} />
          </nav>
        </div>
      </header>

      <main id="main-content" className="relative bg-[var(--color-bg)]">
        <script
          id="services-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
        />
        <section className="section-shell bg-[var(--color-bg-alt)] py-12 sm:py-16 lg:py-20" aria-labelledby="services-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav aria-label={t('Breadcrumb', 'စာမျက်နှာလမ်းကြောင်း')} className="mb-10 text-sm text-[var(--color-muted)]">
              <ol className="flex flex-wrap items-center gap-3">
                <li><Link href={localizedPath(locale, '/')} className="inline-flex min-h-11 items-center rounded underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-[var(--color-brand)]">{t('Home', 'ပင်မစာမျက်နှာ')}</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">{t('Services', 'ဝန်ဆောင်မှုများ')}</li>
              </ol>
            </nav>
            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
              <div>
                <span className="section-label">{t('Software services · Myanmar', 'ဆော့ဖ်ဝဲဝန်ဆောင်မှုများ · မြန်မာနိုင်ငံ')}</span>
                <h1 id="services-heading" className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  {t('The right software starts with a clear scope.', 'သင့်လုပ်ငန်းနှင့် ကိုက်ညီသော ဆော့ဖ်ဝဲအတွက် လိုအပ်ချက်ကို ဦးစွာ ရှင်းလင်းစွာ သတ်မှတ်ပါ။')}
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
                  {t('Websites, mobile apps, cloud infrastructure, and business systems. Explore what each service covers, what you can expect to receive, and what to bring to the first conversation.', 'ဝက်ဘ်ဆိုက်၊ မိုဘိုင်းအက်ပ်၊ Cloud အခြေခံအဆောက်အအုံနှင့် လုပ်ငန်းသုံးစနစ်များ။ ဝန်ဆောင်မှုတစ်ခုချင်းစီ၏ အတိုင်းအတာ၊ ပေးအပ်မည့်ရလဒ်များနှင့် ပထမဆုံးဆွေးနွေးမှုအတွက် ပြင်ဆင်ရမည့်အချက်များကို လေ့လာပါ။')}
                </p>
              </div>
              <aside className="panel-card p-6 sm:p-8" aria-label={t('Choosing a service', 'ဝန်ဆောင်မှုရွေးချယ်ခြင်း')}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-deep)]">{t('Start with the problem', 'ဖြေရှင်းလိုသော ပြဿနာမှ စတင်ပါ')}</p>
                <h2 className="mt-3 text-xl font-bold">{t('Not sure which service fits?', 'မည်သည့်ဝန်ဆောင်မှုကို ရွေးချယ်ရမည် မသေချာသေးပါသလား။')}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {t('Tell us what your team or customers need to do, what is getting in the way, and which tools you already use. We can discuss the appropriate starting point before defining a project.', 'သင့်အဖွဲ့ သို့မဟုတ် ဖောက်သည်များ လုပ်ဆောင်လိုသည့်အရာများ၊ လက်ရှိအခက်အခဲများနှင့် အသုံးပြုနေသော ကိရိယာများကို ပြောပြပါ။ ပရောဂျက်အတွက် အသေးစိတ် မသတ်မှတ်မီ မည်သည့်အပိုင်းမှ စတင်သင့်သည်ကို အတူဆွေးနွေးနိုင်ပါသည်။')}
                </p>
                <Link href={localizedPath(locale, '/#contact')} className="mt-4 inline-flex min-h-11 items-center gap-3 rounded text-sm font-semibold text-[var(--color-brand-deep)] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand)]">
                  {t('Discuss your project', 'သင့်ပရောဂျက်အကြောင်း ဆွေးနွေးပါ')} <span aria-hidden="true">→</span>
                </Link>
              </aside>
            </div>
          </div>
        </section>

        <section className="section-shell py-16 lg:py-24" aria-labelledby="capabilities-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 id="capabilities-heading" className="text-2xl font-bold sm:text-3xl">{t('Explore our services', 'ကျွန်ုပ်တို့၏ ဝန်ဆောင်မှုများကို လေ့လာပါ')}</h2>
              <p className="text-sm text-[var(--color-muted)]">{t('A focused starting point. A scope shaped together.', 'ဦးစားပေးလုပ်ဆောင်မည့်အပိုင်းမှ စတင်ပါ။ လုပ်ငန်းအတိုင်းအတာကို အတူတကွ သတ်မှတ်ပါ။')}</p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {services.map((service, index) => (
                <Link
                  key={service.slug}
                  href={localizedPath(locale, service.href)}
                  className="panel-card group flex flex-col p-6 transition-colors hover:border-[var(--color-brand)] hover:bg-[var(--color-brand-soft)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand)] sm:p-8"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-brand-soft)] text-sm font-bold text-[var(--color-brand-deep)]">0{index + 1}</span>
                    <span aria-hidden="true" className="text-2xl text-[var(--color-brand)]">↗</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold">{service.title}</h3>
                  <p className="mt-3 text-base leading-8 text-[var(--color-muted)]">{service.description}</p>
                  <p className="mt-5 border-t border-[var(--color-line)] pt-5 text-sm leading-7 text-[var(--color-muted)]">
                    <span className="font-semibold text-[var(--color-ink)]">{t('A good fit for: ', 'သင့်လျော်သော လုပ်ငန်းများ — ')}</span>{service.bestFor}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-3 pt-6 text-sm font-semibold text-[var(--color-brand-deep)] group-hover:underline group-hover:underline-offset-4">
                    {t('Explore scope and deliverables', 'လုပ်ငန်းအတိုင်းအတာနှင့် ပေးအပ်မည့်ရလဒ်များကို လေ့လာပါ')} <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell bg-[var(--color-brand-soft)] py-14 sm:py-16" aria-labelledby="contact-heading">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
            <div className="max-w-2xl">
              <h2 id="contact-heading" className="text-2xl font-bold sm:text-3xl">{t('Bring the context. We can work through the scope.', 'သင့်လုပ်ငန်းအခြေအနေကို ပြောပြပါ။ လုပ်ငန်းအတိုင်းအတာကို အတူသတ်မှတ်နိုင်ပါသည်။')}</h2>
              <p className="mt-4 leading-8 text-[var(--color-muted)]">
                {t('Share your goal, current setup, essential features, and any timing constraints. Deliverables, dependencies, and responsibilities are discussed before implementation begins.', 'သင့်ရည်မှန်းချက်၊ လက်ရှိစနစ်၊ မရှိမဖြစ်လုပ်ဆောင်ချက်နှင့် အချိန်ကန့်သတ်ချက်များကို မျှဝေပါ။ အကောင်အထည်မဖော်မီ ပေးအပ်မည့်ရလဒ်များ၊ ဆက်စပ်လိုအပ်ချက်များနှင့် တာဝန်များကို ဆွေးနွေးပါသည်။')}
              </p>
            </div>
            <Link href={localizedPath(locale, '/#contact')} className="inline-flex min-h-12 items-center justify-center gap-3 justify-self-start rounded-lg bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand-deep)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand)]">
              {t('Start a conversation', 'စတင်ဆွေးနွေးပါ')} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  )
}