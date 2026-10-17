import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { contactDetails, siteName, siteUrl } from '@/lib/site'

type PolicyPath = '/privacy' | '/terms' | '/cookies'

type PolicySection = {
  id: string
  title: string
  content: ReactNode
}

export function policyMetadata(
  title: string,
  description: string,
  path: PolicyPath
): Metadata {
  const fullTitle = `${title} | ${siteName}`
  const url = `${siteUrl}${path}`
  const image = `${siteUrl}/opengraph-image`

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName,
      title: fullTitle,
      description,
      url,
      images: [{ url: image, alt: siteName }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [{ url: image, alt: siteName }],
    },
    // Next's Twitter metadata type has no URL field.
    other: { 'twitter:url': url },
  }
}

export default function PolicyPage({
  title,
  summary,
  path,
  sections,
}: {
  title: string
  summary: string
  path: PolicyPath
  sections: PolicySection[]
}) {
  return (
    <>
      <header className="border-b border-slate-200 bg-white">
        <nav
          aria-label="Policy page navigation"
          className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-6"
        >
          <Link href="/" className="font-bold text-slate-900 hover:underline">
            {siteName}
          </Link>
          <Link href="/#contact" className="text-sm font-semibold text-blue-700 hover:underline">
            Contact
          </Link>
        </nav>
      </header>

      <main id="main-content" className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16">
        <article aria-labelledby="policy-title">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
            Website policies
          </p>
          <h1 id="policy-title" className="mt-3 text-4xl font-bold text-slate-950 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{summary}</p>
          <p className="mt-4 text-sm text-slate-500">
            Last updated: <time dateTime="2026-10-17">October 17, 2026</time>
          </p>

          <nav aria-label="Website policies" className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-y border-slate-200 py-4 text-sm">
            {[
              { href: '/privacy', label: 'Privacy policy' },
              { href: '/terms', label: 'Terms of use' },
              { href: '/cookies', label: 'Cookie policy' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={path === item.href ? 'page' : undefined}
                className="font-semibold text-blue-700 underline decoration-blue-200 underline-offset-4 hover:decoration-blue-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <section key={section.id} aria-labelledby={section.id}>
                <h2 id={section.id} className="text-2xl font-bold text-slate-900">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 leading-8 text-slate-600 [&_a]:text-blue-700 [&_a]:underline [&_a]:underline-offset-4 [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
                  {section.content}
                </div>
              </section>
            ))}

            <section aria-labelledby="policy-contact" className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <h2 id="policy-contact" className="text-2xl font-bold text-slate-900">
                Questions or requests
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                Contact {siteName} about these policies or a privacy request. You can use direct contact instead of the AI assistant.
              </p>
              <ul className="mt-4 space-y-3 break-words text-sm font-medium text-blue-700 [&_a]:underline [&_a]:underline-offset-4">
                <li><a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a></li>
                <li><a href={`tel:${contactDetails.phone.replace(/\s/g, '')}`}>{contactDetails.phone}</a></li>
                <li><a href={contactDetails.whatsapp}>WhatsApp</a> or <Link href="/#contact">all contact options</Link></li>
              </ul>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}