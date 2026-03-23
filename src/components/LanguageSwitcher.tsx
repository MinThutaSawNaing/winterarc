'use client'

const navigateToLanguage = (language: 'en' | 'my') => {
  const currentUrl = window.location.href

  if (language === 'en') {
    window.location.href = currentUrl
    return
  }

  window.location.href = `https://translate.google.com/translate?sl=auto&tl=${language}&u=${encodeURIComponent(currentUrl)}`
}

type LanguageSwitcherProps = {
  mobile?: boolean
}

export default function LanguageSwitcher({
  mobile = false,
}: LanguageSwitcherProps) {
  const baseClass = mobile
    ? 'inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-900'
    : 'inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-900'

  return (
    <div
      className={`flex items-center gap-2 ${mobile ? 'mt-1' : ''}`}
      aria-label="Language switcher"
    >
      <button
        type="button"
        onClick={() => navigateToLanguage('en')}
        className={baseClass}
      >
        English
      </button>
      <button
        type="button"
        onClick={() => navigateToLanguage('my')}
        className={`${baseClass} ${mobile ? '' : 'border-green-800 bg-green-950/70 hover:bg-green-900'}`}
      >
        မြန်မာ
      </button>
    </div>
  )
}
