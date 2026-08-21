import { Link } from 'react-router-dom'
import logo from '../../assets/xeena-logo.png'

const links = [
  { label: 'Partners', locked: true },
  { label: 'Blog', locked: true },
  { label: 'News', locked: true },
  { label: 'Contact', href: '/contact' },
]

const legal = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Acceptable Use Policy', href: '/acceptable-use-policy' },
]

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white/60">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Xeena Tech" className="h-28 w-auto object-contain brightness-125 contrast-125" />
            </Link>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-3">
              {links.map((link) =>
                link.locked ? (
                  <li key={link.label}>
                    <span className="cursor-not-allowed text-sm text-white/35">
                      {link.label}
                    </span>
                  </li>
                ) : (
                  <li key={link.label}>
                    <Link to={link.href} className="text-sm hover:text-gold">
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Legal</h3>
            <ul className="mt-4 space-y-3">
              {legal.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-sm hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs space-y-3">
          <p className="text-white/70">
            Legal Entity: XEENA IT INFRASTRUCTURE L.L.C | Licence Number: 1522077 | United Arab Emirates
          </p>
          <p>
            Xeena Tech is a technology solutions provider offering business software, CRM, invoicing, payroll, accounting, integrations, and related technology services.
          </p>
          <p>
            Xeena Tech does not directly provide banking, payment, electronic money, card, investment, or other financial services through xeena.tech. Financial solutions referenced on this website are available through the XEENA FINTECH LTD platform at xeena.io and may be provided by regulated third-party institutions or service providers.
          </p>
          <p>
            Financial solutions are subject to applicable laws, eligibility, verification, AML/KYC requirements, jurisdictional restrictions, and applicable terms. Availability may vary by jurisdiction.
          </p>
          <p>
            Nothing on this website constitutes financial, investment, legal, or tax advice.
          </p>
        </div>

        <div className="mt-6 border-t border-white/10 pt-6 text-xs">
          <p>© {new Date().getFullYear()} Xeena Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
