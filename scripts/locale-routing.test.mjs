import assert from 'node:assert/strict'
import test from 'node:test'
import languageRedirect from '../netlify/edge-functions/language-redirect.mjs'
import { selectLocale, localizedPath, shouldLocalize, languageCookie } from '../src/lib/locale-routing.mjs'

test('language choice takes priority, then Myanmar country, then browser language', () => {
  assert.equal(selectLocale({ preference: 'en', country: 'MM' }), 'en')
  assert.equal(selectLocale({ preference: 'my', country: 'US' }), 'my')
  assert.equal(selectLocale({ country: 'MM', acceptLanguage: 'en-US' }), 'my')
  assert.equal(selectLocale({ country: 'US', acceptLanguage: 'my-MM,en;q=0.8' }), 'my')
  assert.equal(selectLocale({ acceptLanguage: 'en;q=0.9,my;q=0.2' }), 'en')
  assert.equal(selectLocale({ acceptLanguage: 'my;q=0,en' }), 'en')
  assert.equal(selectLocale({ preference: 'invalid', acceptLanguage: 'fr' }), 'en')
})

test('localized paths preserve route, query and anchor without double prefixes', () => {
  assert.equal(localizedPath('my', '/en/services/web-development?ref=one#details'), '/my/services/web-development?ref=one#details')
  assert.equal(localizedPath('en', '/'), '/en')
  assert.equal(localizedPath('my', '/#contact'), '/my/#contact')
  for (const path of ['/my', '/en/services', '/api/loli', '/_next/image', '/favicon.ico', '/sitemap.xml', '/opengraph-image']) assert.equal(shouldLocalize(path), false, path)
  assert.equal(shouldLocalize('/services'), true)
  assert.equal(languageCookie('unrelated=x; site_language=my'), 'my')
  assert.equal(languageCookie('site_language=invalid'), undefined)
})

test('Netlify geo redirect is temporary, private, query preserving and never sets a cookie', async () => {
  const response = languageRedirect(new Request('https://winterarc.asia/services?ref=home'), { geo: { country: { code: 'MM' } } })
  assert.equal(response.status, 307)
  assert.equal(response.headers.get('location'), 'https://winterarc.asia/my/services?ref=home')
  assert.equal(response.headers.get('cache-control'), 'private, no-store')
  assert.equal(response.headers.get('netlify-cdn-cache-control'), 'no-store')
  assert.equal(response.headers.get('set-cookie'), null)
  const preferred = languageRedirect(new Request('https://winterarc.asia/', { headers: { Cookie: 'site_language=en' } }), { geo: { country: { code: 'MM' } } })
  assert.equal(preferred.headers.get('location'), 'https://winterarc.asia/en')
  for (const path of ['/en', '/my/services', '/api/loli', '/sitemap.xml']) {
    const result = await languageRedirect(new Request(`https://winterarc.asia${path}`), { next: () => new Response('pass'), geo: { country: { code: 'MM' } } })
    assert.equal(await result.text(), 'pass')
  }
})