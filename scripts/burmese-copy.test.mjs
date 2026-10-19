import assert from 'node:assert/strict'
import { readFileSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'
import test from 'node:test'
import vm from 'node:vm'
import ts from 'typescript'

const root = fileURLToPath(new URL('../', import.meta.url))
const myanmar = /[\u1000-\u109f]/u

function sourceFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name)
    return entry.isDirectory() ? sourceFiles(path) : /\.(ts|tsx|jsx)$/.test(path) ? [path] : []
  })
}

test('localized source is valid Unicode and avoids retired literal terminology', () => {
  let localizedFiles = 0
  for (const path of sourceFiles(join(root, 'src'))) {
    const source = readFileSync(path, 'utf8')
    if (!myanmar.test(source)) continue
    localizedFiles++
    assert.doesNotMatch(source, /\ufffd/u, `replacement character: ${path}`)
    assert.doesNotMatch(source, /အလုပ်စီးဆင်းမှု|အသုံးပြုသူခရီးစဉ်|ရရှိမည့်အရာများ|ထိရှလွယ်သော/u, path)
  }
  assert.ok(localizedFiles > 20, 'scan must include pages, components and service data')
})

test('localized TypeScript and JSX source has no syntax errors', () => {
  for (const path of sourceFiles(join(root, 'src'))) {
    const source = readFileSync(path, 'utf8')
    if (!myanmar.test(source)) continue
    const file = ts.createSourceFile(path, source, ts.ScriptTarget.Latest, true)
    assert.equal(file.parseDiagnostics.length, 0, `syntax: ${path}`)
  }
})

test('Burmese services preserve routes, structure and fully localized content', () => {
  const source = readFileSync(join(root, 'src/lib/services.ts'), 'utf8')
  const output = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText
  const context = { exports: {} }
  vm.runInNewContext(output, context)
  const en = context.exports.getServices('en')
  const my = context.exports.getServices('my')
  assert.equal(my.length, 4)
  assert.equal(my.length, en.length)

  function localizedLeaves(value, path) {
    if (typeof value === 'string') {
      assert.match(value, myanmar, path)
    } else if (Array.isArray(value)) {
      assert.ok(value.length > 0, path)
      value.forEach((item, index) => localizedLeaves(item, `${path}[${index}]`))
    } else {
      for (const [key, item] of Object.entries(value)) localizedLeaves(item, `${path}.${key}`)
    }
  }

  my.forEach((service, index) => {
    const english = en[index]
    assert.equal(service.slug, english.slug)
    assert.equal(service.href, english.href)
    for (const key of ['scope', 'deliverables', 'preparation', 'process', 'faqs']) {
      assert.equal(service[key].length, english[key].length, `${service.slug}.${key}`)
    }
    const { slug, href, ...copy } = service
    assert.ok(slug && href)
    localizedLeaves(copy, service.slug)
  })
})