import { Link } from 'react-router-dom'

const links = [
  { label: 'Partners', href: '/#partners' },
  { label: 'Blog', href: '#' },
  { label: 'News', href: '#' },
  { label: 'Contact', href: '/contact' },
]

const legal = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookie Policy', href: '#' },
]

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white/60">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold text-base font-extrabold text-navy">
                X
              </span>
              <span className="text-lg font-bold tracking-tight text-white">
                Xeena <span className="font-normal text-white/60">Tech</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Technology that powers modern business. Part of the Nexa Group ecosystem.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Legal</h3>
            <ul className="mt-4 space-y-3">
              {legal.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm hover:text-gold">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Xeena Tech. All rights reserved.</p>
          <p>xeena.tech is a technology solutions provider. Financial services are provided at xeena.io.</p>
        </div>
      </div>
    </footer>
  )
}
