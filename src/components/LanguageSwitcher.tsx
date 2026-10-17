'use client'

import { usePathname } from 'next/navigation'
import { useRef } from 'react'
import type { Locale } from '@/lib/i18n'

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname()
  const path = useRef<HTMLInputElement>(null)
  return (
    <form action="/api/language" method="post" className="language-switcher inline-flex shrink-0 items-center rounded-lg border border-slate-200 bg-white p-0.5 text-xs font-semibold text-slate-700" aria-label={locale === 'my' ? 'ဘာသာစကား ရွေးချယ်ရန်' : 'Choose language'} onSubmit={() => {
      if (path.current) path.current.value = window.location.pathname + window.location.search + window.location.hash
    }}>
      <input ref={path} type="hidden" name="path" value={pathname} readOnly />
      <button type="submit" name="locale" value="my" lang="my" aria-pressed={locale === 'my'} className={`min-h-11 rounded-md px-2.5 transition hover:bg-blue-50 ${locale === 'my' ? 'bg-blue-50 text-blue-800' : ''}`}>မြန်မာ</button>
      <button type="submit" name="locale" value="en" lang="en" aria-pressed={locale === 'en'} className={`min-h-11 rounded-md px-2.5 transition hover:bg-blue-50 ${locale === 'en' ? 'bg-blue-50 text-blue-800' : ''}`}>EN<span className="sr-only"> — English</span></button>
    </form>
  )
}