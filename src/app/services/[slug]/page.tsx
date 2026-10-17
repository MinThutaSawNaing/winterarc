import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Footer from '@/components/Footer'
import { services } from '@/lib/services'
import { siteName, siteUrl } from '@/lib/site'

type ServicePageProps = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)
  if (!service) notFound()

  const title = `${service.title} in Myanmar | ${siteName}`
  const url = `${siteUrl}${service.href}`

  return {
    title,
    description: service.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en_US',
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
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)
  if (!service) notFound()

  const url = `${siteUrl}${service.href}`
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: service.title,
        serviceType: service.title,
        description: service.description,
        url,
        provider: { '@id': `${siteUrl}/#organization` },
        areaServed: { '@type': 'Country', name: 'Myanmar' },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/services` },
          { '@type': 'ListItem', position: 3, name: service.title, item: url },
        ],
      },
    ],
  }

  return (
    <>
      <header className="relative z-10 border-b border-[var(--color-line)] bg-[var(--color-panel)]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex min-h-11 items-center gap-3 rounded-lg font-bold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand)]">
            <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-brand)] text-sm text-white">W</span>
            {siteName}
          </Link>
          <nav aria-label="Primary" className="flex flex-wrap items-center gap-1 text-sm font-semibold sm:gap-3">
            <Link href="/" className="inline-flex min-h-11 items-center rounded-lg px-3 text-[var(--color-muted)] hover:bg-[var(--color-bg-alt)] focus-visible:outline-2 focus-visible:outline-[var(--color-brand)]">Home</Link>
            <Link href="/services" className="inline-flex min-h-11 items-center rounded-lg bg-[var(--color-brand-soft)] px-3 text-[var(--color-brand-deep)] hover:bg-[var(--color-bg-alt)] focus-visible:outline-2 focus-visible:outline-[var(--color-brand)]">Services</Link>
            <Link href="/#contact" className="inline-flex min-h-11 items-center rounded-lg bg-[var(--color-brand)] px-4 text-white transition-colors hover:bg-[var(--color-brand-deep)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand)]">Contact</Link>
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
            <nav aria-label="Breadcrumb" className="mb-10 text-sm text-[var(--color-muted)]">
              <ol className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <li><Link href="/" className="inline-flex min-h-11 items-center rounded underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-[var(--color-brand)]">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/services" className="inline-flex min-h-11 items-center rounded underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-[var(--color-brand)]">Services</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">{service.title}</li>
              </ol>
            </nav>
            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
              <div>
                <span className="section-label">Software services · Myanmar</span>
                <h1 id="service-heading" className="mt-5 text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">{service.title}</h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">{service.introduction}</p>
                <Link href="/#contact" className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand-deep)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand)]">
                  Discuss your project <span aria-hidden="true">→</span>
                </Link>
              </div>
              <aside className="panel-card p-6 sm:p-8" aria-labelledby="fit-heading">
                <h2 id="fit-heading" className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-deep)]">A good fit for</h2>
                <p className="mt-4 leading-8 text-[var(--color-muted)]">{service.bestFor}</p>
                <nav aria-label="On this page" className="mt-6 border-t border-[var(--color-line)] pt-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-muted)]">Explore this service</p>
                  <ul className="grid gap-x-4 sm:grid-cols-2">
                    {[
                      { href: '#scope', label: 'Scope' },
                      { href: '#deliverables', label: 'Deliverables' },
                      { href: '#prepare', label: 'What to prepare' },
                      { href: '#process', label: 'Process' },
                      { href: '#faq', label: 'FAQs' },
                    ].map((item) => (
                      <li key={item.href}>
                        <a href={item.href} className="inline-flex min-h-11 items-center rounded text-sm font-semibold text-[var(--color-brand-deep)] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)]">{item.label}</a>
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
            <span className="section-label">Scope</span>
            <h2 id="scope-heading" className="mt-4 text-2xl font-bold sm:text-3xl">What we can help you build</h2>
            <p className="mt-4 max-w-2xl leading-8 text-[var(--color-muted)]">These capabilities are a starting point for discussion. The final scope reflects your priorities, existing systems, and project constraints.</p>
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

        <section className="section-shell bg-[var(--color-bg-alt)] py-16 lg:py-24" aria-label="Deliverables and preparation">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <div id="deliverables" className="scroll-mt-24">
              <span className="section-label">Deliverables</span>
              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">A clear handover, not just a launch</h2>
              <p className="mt-4 leading-8 text-[var(--color-muted)]">The exact deliverables are agreed before work begins. A typical scope can include:</p>
              <ul className="mt-6 space-y-4">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex gap-3 leading-7 text-[var(--color-muted)]">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-brand)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-xl border border-[var(--color-line)] bg-[var(--color-panel)] p-5">
                <h3 className="text-sm font-bold">Important scope considerations</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{service.scopeNote}</p>
              </div>
            </div>
            <div id="prepare" className="scroll-mt-24 rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] p-6 sm:p-8">
              <span className="section-label">Before we start</span>
              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">What to prepare</h2>
              <p className="mt-4 leading-8 text-[var(--color-muted)]">You do not need a finished specification. The following context helps make the first conversation useful:</p>
              <ul className="mt-6 space-y-5">
                {service.preparation.map((item, index) => (
                  <li key={item} className="flex gap-4 leading-7 text-[var(--color-muted)]">
                    <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-soft)] text-xs font-bold text-[var(--color-brand-deep)]">{index + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-[var(--color-line)] pt-5 text-sm leading-7 text-[var(--color-muted)]">For your initial enquiry, use anonymized examples and avoid sending passwords, credentials, or sensitive customer data.</p>
            </div>
          </div>
        </section>

        <section id="process" className="section-shell py-16 lg:py-24" aria-labelledby="process-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="section-label">Process</span>
            <h2 id="process-heading" className="mt-4 text-2xl font-bold sm:text-3xl">From first conversation to handover</h2>
            <p className="mt-4 max-w-2xl leading-8 text-[var(--color-muted)]">Review points keep decisions visible. Milestones and timing depend on the agreed scope, access to existing systems, and feedback availability.</p>
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
              <span className="section-label">Common questions</span>
              <h2 id="faq-heading" className="mt-4 text-2xl font-bold sm:text-3xl">Before you get started</h2>
              <p className="mt-4 leading-8 text-[var(--color-muted)]">Have a question specific to your setup? Include it when you contact us so we can discuss the relevant dependencies.</p>
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
              <h2 id="contact-heading" className="text-2xl font-bold sm:text-3xl">Let’s define the next useful step.</h2>
              <p className="mt-4 leading-8 text-[var(--color-muted)]">Share what you want to build, who it is for, and the constraints we should understand. We can discuss scope and open questions from there.</p>
            </div>
            <Link href="/#contact" className="inline-flex min-h-12 items-center justify-center gap-3 justify-self-start rounded-lg bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand-deep)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand)]">
              Start a conversation <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className="section-shell py-12 sm:py-16" aria-labelledby="related-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="related-heading" className="text-xl font-bold">Explore other services</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {services.filter((item) => item.slug !== service.slug).map((item) => (
                <Link key={item.slug} href={item.href} className="panel-card flex min-h-16 items-center justify-between gap-4 p-5 font-semibold transition-colors hover:border-[var(--color-brand)] hover:bg-[var(--color-brand-soft)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand)]">
                  {item.title}<span aria-hidden="true" className="text-[var(--color-brand)]">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}