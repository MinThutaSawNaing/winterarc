import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { services } from '@/lib/services'
import { siteName, siteUrl } from '@/lib/site'

const title = `Software Development Services in Myanmar | ${siteName}`
const description =
  'Explore web development, mobile app development, cloud solutions, and custom software from Winter Arc Myanmar. Review scope, deliverables, and how to prepare.'
const url = `${siteUrl}/services`

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    type: 'website',
    locale: 'en_US',
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

export default function ServicesPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      ...services.map((service) => ({
        '@type': 'Service',
        '@id': `${siteUrl}${service.href}#service`,
        name: service.title,
        serviceType: service.title,
        description: service.description,
        url: `${siteUrl}${service.href}`,
        provider: { '@id': `${siteUrl}/#organization` },
        areaServed: { '@type': 'Country', name: 'Myanmar' },
      })),
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Services', item: url },
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
            <Link href="/services" aria-current="page" className="inline-flex min-h-11 items-center rounded-lg bg-[var(--color-brand-soft)] px-3 text-[var(--color-brand-deep)] focus-visible:outline-2 focus-visible:outline-[var(--color-brand)]">Services</Link>
            <Link href="/#contact" className="inline-flex min-h-11 items-center rounded-lg bg-[var(--color-brand)] px-4 text-white transition-colors hover:bg-[var(--color-brand-deep)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand)]">Contact</Link>
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
            <nav aria-label="Breadcrumb" className="mb-10 text-sm text-[var(--color-muted)]">
              <ol className="flex flex-wrap items-center gap-3">
                <li><Link href="/" className="inline-flex min-h-11 items-center rounded underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-[var(--color-brand)]">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">Services</li>
              </ol>
            </nav>
            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
              <div>
                <span className="section-label">Software services · Myanmar</span>
                <h1 id="services-heading" className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  The right software starts with a clear scope.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
                  Websites, mobile apps, cloud infrastructure, and business systems.
                  Explore what each service covers, what you can expect to receive,
                  and what to bring to the first conversation.
                </p>
              </div>
              <aside className="panel-card p-6 sm:p-8" aria-label="Choosing a service">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-deep)]">Start with the problem</p>
                <h2 className="mt-3 text-xl font-bold">Not sure which service fits?</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  Tell us what your team or customers need to do, what is getting in
                  the way, and which tools you already use. We can discuss the
                  appropriate starting point before defining a project.
                </p>
                <Link href="/#contact" className="mt-4 inline-flex min-h-11 items-center gap-3 rounded text-sm font-semibold text-[var(--color-brand-deep)] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand)]">
                  Discuss your project <span aria-hidden="true">→</span>
                </Link>
              </aside>
            </div>
          </div>
        </section>

        <section className="section-shell py-16 lg:py-24" aria-labelledby="capabilities-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 id="capabilities-heading" className="text-2xl font-bold sm:text-3xl">Explore our services</h2>
              <p className="text-sm text-[var(--color-muted)]">A focused starting point. A scope shaped together.</p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {services.map((service, index) => (
                <Link
                  key={service.slug}
                  href={service.href}
                  className="panel-card group flex flex-col p-6 transition-colors hover:border-[var(--color-brand)] hover:bg-[var(--color-brand-soft)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand)] sm:p-8"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-brand-soft)] text-sm font-bold text-[var(--color-brand-deep)]">0{index + 1}</span>
                    <span aria-hidden="true" className="text-2xl text-[var(--color-brand)]">↗</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold">{service.title}</h3>
                  <p className="mt-3 text-base leading-8 text-[var(--color-muted)]">{service.description}</p>
                  <p className="mt-5 border-t border-[var(--color-line)] pt-5 text-sm leading-7 text-[var(--color-muted)]">
                    <span className="font-semibold text-[var(--color-ink)]">A good fit for: </span>{service.bestFor}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-3 pt-6 text-sm font-semibold text-[var(--color-brand-deep)] group-hover:underline group-hover:underline-offset-4">
                    Explore scope and deliverables <span aria-hidden="true">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell bg-[var(--color-brand-soft)] py-14 sm:py-16" aria-labelledby="contact-heading">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
            <div className="max-w-2xl">
              <h2 id="contact-heading" className="text-2xl font-bold sm:text-3xl">Bring the context. We can work through the scope.</h2>
              <p className="mt-4 leading-8 text-[var(--color-muted)]">
                Share your goal, current setup, essential features, and any timing
                constraints. Deliverables, dependencies, and responsibilities are
                discussed before implementation begins.
              </p>
            </div>
            <Link href="/#contact" className="inline-flex min-h-12 items-center justify-center gap-3 justify-self-start rounded-lg bg-[var(--color-brand)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand-deep)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-brand)]">
              Start a conversation <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}