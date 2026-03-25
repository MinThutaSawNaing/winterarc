import Script from 'next/script'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Technologies from '@/components/Technologies'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import LoliAssistant from '@/components/LoliAssistant'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import {
  contactDetails,
  siteDescription,
  siteName,
  siteUrl,
} from '@/lib/site'

export default function Home() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteName,
    description: siteDescription,
    areaServed: 'Myanmar',
    serviceType: [
      'Freelance software services',
      'Web development',
      'Mobile app development',
      'Cloud solutions',
      'Custom software development',
    ],
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
    url: siteUrl || undefined,
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    description: siteDescription,
    url: siteUrl || undefined,
    inLanguage: 'en',
  }

  return (
    <main
      id="main-content"
      className="relative isolate min-h-screen overflow-x-hidden bg-[var(--color-bg)] text-[var(--color-ink)]"
    >
      <Script
        id="winter-arc-schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, websiteSchema]),
        }}
      />
      <div className="hero-orb left-[-5rem] top-[7rem] h-56 w-56 bg-[rgba(15,118,110,0.16)]" />
      <div className="hero-orb right-[-2rem] top-[16rem] h-64 w-64 bg-[rgba(180,83,9,0.16)]" />
      <div className="pointer-events-none absolute inset-0 enterprise-grid opacity-50" />
      <Header />
      <Hero />
      <Services />
      <About />
      <Technologies />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <LoliAssistant />
    </main>
  )
}
