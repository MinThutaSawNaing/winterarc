import { PoweredByWinterArc } from '@/components/poweredByWinterArcAnimation'
import { contactDetails } from '@/lib/site'

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/#about' },
  { name: 'Our Approach', href: '/#delivery' },
  { name: 'Solution Examples', href: '/#portfolio' },
  { name: 'Contact', href: '/#contact' },
]

export default function Footer() {
  return (
    <footer data-snow-surface="dark" className="bg-[var(--color-panel-dark)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="max-w-md">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600">
                <span className="text-sm font-bold">W</span>
              </div>
              <h3 className="text-base font-bold tracking-[-0.02em] text-white">
                Winter Arc Myanmar
              </h3>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Websites, platforms, and software systems designed to feel clear,
              credible, and ready to support long-term growth.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Navigation
              </p>
              <nav aria-label="Footer" className="mt-4 flex flex-col gap-2.5">
                {footerLinks.slice(0, 3).map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm text-slate-300 transition hover:text-white"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                More
              </p>
              <nav aria-label="Footer secondary" className="mt-4 flex flex-col gap-2.5">
                {footerLinks.slice(3).map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm text-slate-300 transition hover:text-white"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Contact
              </p>
              <div className="mt-4 flex flex-col gap-2.5 text-sm text-slate-300">
                <p>{contactDetails.location}</p>
                <a href={`mailto:${contactDetails.email}`} className="break-all transition hover:text-white">
                  {contactDetails.email}
                </a>
                <a href={`tel:${contactDetails.phone.replace(/\s/g, '')}`} className="transition hover:text-white">
                  {contactDetails.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Winter Arc Myanmar. All rights reserved.
          </p>
          <nav aria-label="Policies" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300">
            <a href="/privacy" className="inline-flex min-h-11 items-center hover:text-white">Privacy Policy</a>
            <a href="/terms" className="inline-flex min-h-11 items-center hover:text-white">Terms of Use</a>
            <a href="/cookies" className="inline-flex min-h-11 items-center hover:text-white">Cookie Information</a>
          </nav>
        </div>

        <div className="mt-8 flex justify-center overflow-x-clip border-t border-white/10 px-2 pt-8 sm:px-4">
          <div className="dark w-full max-w-full sm:w-auto">
            <PoweredByWinterArc variant="footer" />
          </div>
        </div>
      </div>
    </footer>
  )
}
