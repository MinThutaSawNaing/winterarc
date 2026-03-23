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
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-bold text-white">Winter Arc Myanmar</h3>
            <p className="mt-2 max-w-md text-sm font-semibold leading-7 text-slate-400">
              Professional software solutions for businesses that want strong,
              modern, and scalable digital products.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {footerLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-slate-400 transition hover:text-blue-400"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500 font-semibold">
            © 2026 Winter Arc Myanmar. All rights reserved.
          </p>

          
        </div>
      </div>
    </footer>
  )
}