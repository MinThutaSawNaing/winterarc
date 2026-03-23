'use client'

import { useLanguage, type Language } from '@/components/LanguageProvider'

type LanguageSwitcherProps = {
  mobile?: boolean
}

const languages: { code: Language; en: string; my: string }[] = [
  { code: 'en', en: 'English', my: 'အင်္ဂလိပ်' },
  { code: 'my', en: 'Myanmar', my: 'မြန်မာ' },
]

export default function LanguageSwitcher({
  mobile = false,
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage()

  const baseClass = mobile
    ? 'inline-flex items-center justify-center rounded-2xl border px-4 py-3 text-sm font-semibold transition-colors'
    : 'inline-flex items-center justify-center rounded-full border px-3 py-2 text-sm font-semibold transition-colors'

  return (
    <div
      className={`flex items-center gap-2 ${mobile ? 'mt-1' : ''}`}
      aria-label="Language switcher"
    >
      {languages.map((item) => {
        const isActive = language === item.code

        return (
          <button
            key={item.code}
            type="button"
            onClick={() => setLanguage(item.code)}
            className={`${baseClass} ${
              isActive
                ? 'border-green-700 bg-green-800 text-white'
                : 'border-slate-700 bg-slate-950 text-slate-200 hover:bg-slate-900'
            }`}
            aria-pressed={isActive}
          >
            <span className="lang-en">{item.en}</span>
            <span className="lang-my">{item.my}</span>
          </button>
        )
      })}
    </div>
  )
}
