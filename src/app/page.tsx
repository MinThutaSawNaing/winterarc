import Header from '@/components/Header'
import Hero from '@/components/Hero'
import DeliveryModel from '@/components/DeliveryModel'
import Services from '@/components/Services'
import About from '@/components/About'
// import TeamMembers from '@/components/TeamMembers'
import Technologies from '@/components/Technologies'
import Customers from '@/components/Customers'
import Portfolio from '@/components/Portfolio'
import ProjectFaq from '@/components/ProjectFaq'
import LoliAssistant from '@/components/LoliAssistant'
import ScrollToTop from '@/components/ScrollToTop'
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
    '@id': `${siteUrl}/#organization`,
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
      addressRegion: 'Yangon Region',
      postalCode: '11011',
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
    '@id': `${siteUrl}/#website`,
    publisher: { '@id': `${siteUrl}/#organization` },
    name: siteName,
    description: siteDescription,
    url: siteUrl || undefined,
    inLanguage: 'en',
  }

  return (
    <>
      <Header />
      <main
        id="main-content"
        className="relative min-h-screen overflow-x-clip bg-[var(--color-bg)] text-[var(--color-ink)]"
      >
        <script
          id="winter-arc-schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]).replace(/</g, '\\u003c'),
          }}
        />
        <Hero />
        <Customers />
        <DeliveryModel />
        <Services />
        <About />
        {/* <TeamMembers /> */}
        <Technologies />
        <Portfolio />
        <ProjectFaq />
        <Contact />
        <LoliAssistant />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
