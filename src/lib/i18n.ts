import { siteUrl } from '@/lib/site'
import { localizedPath as buildPath } from './locale-routing.mjs'

export const locales = ['en', 'my'] as const
export type Locale = (typeof locales)[number]
export function isLocale(value: unknown): value is Locale {
  return value === 'en' || value === 'my'
}
export function localizedPath(locale: Locale, path = '/') {
  return buildPath(locale, path)
}
export function languageAlternates(path = '/') {
  return {
    en: `${siteUrl}${localizedPath('en', path)}`,
    my: `${siteUrl}${localizedPath('my', path)}`,
    'x-default': `${siteUrl}${path === '/' ? '' : path}`,
  }
}
export const localizedSite = {
  en: {
    title: 'Web & Software Development in Myanmar | Winter Arc Myanmar',
    description: 'Web development, mobile apps, cloud solutions and custom business software from Winter Arc Myanmar in Yangon. Explore our services and discuss your project.',
  },
  my: {
    title: 'မြန်မာနိုင်ငံရှိ ဝက်ဘ်ဆိုက်နှင့် ဆော့ဖ်ဝဲ ဖန်တီးရေးဝန်ဆောင်မှု | Winter Arc Myanmar',
    description: 'ရန်ကုန်အခြေစိုက် Winter Arc Myanmar မှ ဝက်ဘ်ဆိုက်၊ မိုဘိုင်းအက်ပ်နှင့် လုပ်ငန်းသုံးဆော့ဖ်ဝဲများ ဖန်တီးပေးပြီး Cloud ဝန်ဆောင်မှုများလည်း ဆောင်ရွက်ပေးပါသည်။ သင့်ပရောဂျက်အတွက် ဆက်သွယ်ဆွေးနွေးနိုင်ပါသည်။',
  },
}