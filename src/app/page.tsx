import Script from 'next/script'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Technologies from '@/components/Technologies'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import MyanmarSeoSection from '@/components/MyanmarSeoSection'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import {
  contactDetails,
  siteDescription,
  siteDescriptionMy,
  siteName,
  siteNameMy,
  siteUrl,
  serviceCatalog,
  serviceCatalogMy,
} from '@/lib/site'

export default function Home() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteName,
    alternateName: siteNameMy,
    description: `${siteDescription} ${siteDescriptionMy}`,
    areaServed: 'Myanmar',
    keywords: [...serviceCatalog, ...serviceCatalogMy],
    serviceType: [...serviceCatalog, ...serviceCatalogMy],
    knowsLanguage: ['en', 'my'],
    availableLanguage: ['English', 'Burmese'],
    email: contactDetails.email,
    telephone: contactDetails.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Yangon',
      addressCountry: 'MM',
      streetAddress: contactDetails.location,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: contactDetails.email,
        telephone: contactDetails.phone,
        areaServed: 'Myanmar',
      },
    ],
    sameAs: [contactDetails.facebook, contactDetails.whatsapp],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software services in Myanmar',
      itemListElement: [...serviceCatalog, ...serviceCatalogMy].map((item) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: item,
        },
      })),
    },
    url: siteUrl || undefined,
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    alternateName: siteNameMy,
    description: `${siteDescription} ${siteDescriptionMy}`,
    url: siteUrl || undefined,
    inLanguage: ['en', 'my'],
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--color-surface)] text-[var(--color-ink)]">
      <Script
        id="winter-arc-schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, websiteSchema]),
        }}
      />
      <Header />
      <Hero />
      <Services />
      <MyanmarSeoSection />
      <About />
      <Technologies />
      <Portfolio />
      <Testimonials />
      <FloatingWhatsApp />
      <Contact />
      <Footer />
    </main>
  )
}
