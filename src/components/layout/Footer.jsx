import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'
import logo from '../../assets/xeena-logo-light.png'
import { solutions } from '../../data/solutions'

const services = [
  { label: 'SaaS Neo-Banking', href: '/#launch' },
  { label: 'BaaS on Partner Licenses', href: '/#launch' },
  { label: 'Launch Consulting', href: '/#launch' },
  { label: 'Provider Scouting', href: '/#launch' },
]

const company = [
  { label: 'Contact', href: '/contact' },
  { label: 'Trust & Compliance', href: '/#trust' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Acceptable Use Policy', href: '/acceptable-use-policy' },
]

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const socials = [
  { icon: FacebookIcon, label: 'Facebook', href: 'https://www.facebook.com/xeenaglobal/' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/xeenaglobal/' },
  { icon: XIcon, label: 'X (Twitter)', href: null },
  { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/company/xeenaglobal' },
]

export function Footer() {
  const location = useLocation()
  const navigate = useNavigate()

  // Plain <Link to="/#anchor"> never scrolls to the anchor — React Router
  // doesn't do that on its own, and ScrollToTop explicitly skips when a hash
  // is present. Same fix as the Navbar's own hash links.
  function handleHashLink(e, href) {
    if (!href.includes('#')) return
    e.preventDefault()
    const [path, anchor] = href.split('#')
    if (location.pathname !== (path || '/')) {
      navigate(href)
      return
    }
    document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-gold/40 bg-offwhite text-muted">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Xeena Tech" className="h-28 w-auto object-contain" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              The technology behind modern digital banks. Banking, cards, crypto payments,
              tokenization, and corporate tools engineered as one platform.
            </p>

            <div className="mt-5 flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-navy/10 bg-navy/5 text-muted transition-all duration-300 hover:border-gold/30 hover:bg-gold/15 hover:text-navy"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <span
                    key={label}
                    aria-label={label}
                    className="flex h-8 w-8 cursor-default items-center justify-center rounded-lg border border-navy/10 bg-navy/5 text-muted"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                )
              )}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-dark">Solutions</h3>
            <ul className="mt-4 space-y-3">
              {solutions.map((s) => (
                <li key={s.slug}>
                  <Link to={`/solutions/${s.slug}`} className="text-sm hover:text-gold-dark">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-dark">Services</h3>
            <ul className="mt-4 space-y-3">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    onClick={(e) => handleHashLink(e, item.href)}
                    className="text-sm hover:text-gold-dark"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-dark">Company</h3>
            <ul className="mt-4 space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    onClick={(e) => handleHashLink(e, item.href)}
                    className="text-sm hover:text-gold-dark"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-navy/8 pt-6 text-xs space-y-3">
          <p className="text-navy/70">
            Legal Entity: XEENA IT INFRASTRUCTURE L.L.C | Licence Number: 1522077 | United Arab Emirates
          </p>
          <p>
            Xeena Tech is a technology solutions provider. Regulated financial services referenced
            on this website — card issuing, crypto-asset services, and tokenization — are provided
            through licensed partner institutions and are subject to eligibility, verification,
            AML/KYC requirements and applicable jurisdictional restrictions.
          </p>
          <p>
            Nothing on this website constitutes financial, investment, legal, or tax advice.
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-navy/8 pt-6 text-xs">
          <p>© {new Date().getFullYear()} Xeena Tech. All rights reserved.</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-navy/10 bg-navy/5 text-muted transition-all duration-300 hover:border-gold/30 hover:bg-gold/15 hover:text-navy"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
