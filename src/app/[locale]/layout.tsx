import type { Metadata } from 'next'
import { Manrope, Padauk, Space_Grotesk } from 'next/font/google'
import { notFound } from 'next/navigation'
import { isLocale, locales, localizedSite, languageAlternates, localizedPath } from '@/lib/i18n'
import '@/lib/fontawesome'
import {
  googleSiteVerification,
  siteDescription,
  siteKeywords,
  siteName,
  siteTitle,
  siteUrl,
} from '@/lib/site'
import '../globals.css'

const burmeseFont = Padauk({ weight: ['400', '700'], subsets: ['myanmar'], variable: '--font-myanmar', display: 'swap' })

const bodyFont = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
})

const displayFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
})

const baseMetadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: siteTitle,
  description: siteDescription,
  keywords: siteKeywords,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl || undefined }],
  creator: siteName,
  publisher: siteName,
  category: 'technology',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: siteUrl
    ? {
        canonical: siteUrl,
      }
    : undefined,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: siteTitle,
    description: siteDescription,
    siteName,
    url: siteUrl || undefined,
    images: siteUrl
      ? [
          {
            url: `${siteUrl}/opengraph-image`,
            width: 1200,
            height: 630,
            alt: `${siteName} — web, mobile and custom software development`,
          },
        ]
      : undefined,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: siteUrl ? [`${siteUrl}/opengraph-image`] : undefined,
  },
  manifest: '/site.webmanifest',
  verification: googleSiteVerification
    ? {
        google: googleSiteVerification,
      }
    : undefined,
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/favicon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const text = localizedSite[locale]
  return {
    ...baseMetadata,
    title: text.title,
    description: text.description,
    alternates: { canonical: `${siteUrl}${localizedPath(locale)}`, languages: languageAlternates() },
    openGraph: { ...baseMetadata.openGraph, title: text.title, description: text.description, url: `${siteUrl}/${locale}`, locale: locale === 'my' ? 'my_MM' : 'en_US', alternateLocale: locale === 'my' ? ['en_US'] : ['my_MM'] },
    twitter: { ...baseMetadata.twitter, title: text.title, description: text.description },
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return (
    <html lang={locale}>
      <body
        className={`${bodyFont.variable} ${displayFont.variable} ${burmeseFont.variable} bg-[var(--color-bg)] text-[var(--color-ink)] antialiased`}
      >
        <div className="relative">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--color-ink)] focus:shadow-[0_18px_40px_rgba(15,23,42,0.16)]"
          >
            {locale === 'my' ? 'အကြောင်းအရာသို့ သွားရန်' : 'Skip to content'}
          </a>
          {children}
        </div>
      </body>
    </html>
  )
}
