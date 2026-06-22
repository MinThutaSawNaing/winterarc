import { PoweredByWinterArc } from '@/components/poweredByWinterArcAnimation'

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Technologies', href: '#technologies' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[var(--color-panel-dark)] text-white">
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
                <p>Insein, Yangon, Myanmar</p>
                <a href="mailto:winterarcmyanmar@yahoo.com" className="transition hover:text-white">
                  winterarcmyanmar@yahoo.com
                </a>
                <a href="tel:+959977144320" className="transition hover:text-white">
                  +95 9 977 144 320
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Winter Arc Myanmar. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 sm:text-right">
            Enterprise digital delivery for Myanmar.
          </p>
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
