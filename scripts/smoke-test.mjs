import assert from 'node:assert/strict'
import test from 'node:test'

const base = process.env.TEST_BASE_URL || 'http://localhost:3100'
const origin = 'https://winterarc.asia'
const paths = ['/', '/services', '/services/web-development', '/services/mobile-app-development', '/services/cloud-solutions', '/services/custom-software', '/privacy', '/terms', '/cookies']

test('public pages have unique metadata, canonical URLs, landmarks and policies', async () => {
  const titles = new Set()
  for (const path of paths) {
    const response = await fetch(`${base}${path}`)
    assert.equal(response.status, 200, path)
    const html = await response.text()
    const title = html.match(/<title>(.*?)<\/title>/)?.[1]
    assert.ok(title, `title: ${path}`)
    assert.ok(!titles.has(title), `unique title: ${path}`)
    titles.add(title)
    assert.ok(html.includes(`rel="canonical" href="${origin}${path === '/' ? '' : path}"`) || html.includes(`rel="canonical" href="${origin}${path}"`), `canonical: ${path}`)
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `one h1: ${path}`)
    assert.ok(html.includes('id="main-content"'), path)
    for (const policy of ['/privacy', '/terms', '/cookies']) assert.ok(html.includes(`href="${policy}"`), `${path}: ${policy}`)
    assert.ok(html.includes('name="description"'), path)
    assert.ok(!html.includes('class="brand-intro'), 'No blocking intro')
    assert.equal(response.headers.get('x-content-type-options'), 'nosniff')
    assert.equal(response.headers.get('x-frame-options'), 'DENY')
  }
})

test('sitemap, robots, sharing image and invalid routes', async () => {
  const sitemap = await (await fetch(`${base}/sitemap.xml`)).text()
  for (const path of paths) assert.ok(sitemap.includes(`${origin}${path}`), path)
  assert.equal((sitemap.match(/<url>/g) || []).length, paths.length)
  const robots = await (await fetch(`${base}/robots.txt`)).text()
  assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`))
  assert.ok(robots.includes('Disallow: /api/'))
  const image = await fetch(`${base}/opengraph-image`)
  assert.equal(image.status, 200)
  assert.ok(image.headers.get('content-type')?.startsWith('image/png'))
  assert.ok((await image.arrayBuffer()).byteLength > 1000)
  assert.equal((await fetch(`${base}/services/not-a-service`)).status, 404)
})

test('AI usage check sets no cookie and chat rejects missing consent', async () => {
  const usage = await fetch(`${base}/api/loli`)
  assert.equal(usage.status, 200)
  assert.equal(usage.headers.get('set-cookie'), null)
  assert.equal((await usage.json()).usage.limit, 6)
  for (const privacyAcknowledged of [undefined, false, 'true']) {
    const response = await fetch(`${base}/api/loli`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: [{ role: 'user', content: 'Hello' }], privacyAcknowledged }),
    })
    assert.equal(response.status, 400)
    assert.equal(response.headers.get('set-cookie'), null)
    assert.ok((await response.json()).message.includes('privacy notice'))
  }
})

test('AI endpoint rejects cross-origin requests, wrong content type and oversized bodies', async () => {
  const crossOrigin = await fetch(`${base}/api/loli`, {
    method: 'POST', headers: { Origin: 'https://unrelated.example', 'Content-Type': 'application/json' }, body: '{}',
  })
  assert.equal(crossOrigin.status, 403)
  const text = await fetch(`${base}/api/loli`, { method: 'POST', body: '{}' })
  assert.equal(text.status, 415)
  const oversized = await fetch(`${base}/api/loli`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text: 'a'.repeat(33000) }),
  })
  assert.equal(oversized.status, 413)
})