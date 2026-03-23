'use client'

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type Language = 'en' | 'my'

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') {
      return 'en'
    }

    const savedLanguage = window.localStorage.getItem('winter-arc-language')
    return savedLanguage === 'my' ? 'my' : 'en'
  })

  useEffect(() => {
    const html = document.documentElement
    html.lang = language === 'my' ? 'my' : 'en'
    html.dataset.lang = language
    window.localStorage.setItem('winter-arc-language', language)
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return context
}
