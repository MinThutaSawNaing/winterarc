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
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
              Winter Arc Myanmar
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Websites, platforms, and software systems designed to feel clear,
              credible, and ready to support long-term growth.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-300"
          >
            {footerLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="text-sm text-slate-400">
            Copyright 2026 Winter Arc Myanmar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
