import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { Button } from '../ui/Button'
import { cn } from '../../lib/cn'

const navLinks = [
  { label: 'Home', hash: '/' },
  { label: 'Solutions', hash: '/#solutions' },
  { label: 'Partners', hash: '/#partners' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  function handleNavClick(e, hash) {
    e.preventDefault()
    setOpen(false)
    const [path, anchor] = hash.split('#')
    if (location.pathname !== (path || '/')) {
      navigate(hash)
      return
    }
    if (anchor) {
      document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled ? 'bg-navy border-b border-white/10' : 'bg-navy'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold text-base font-extrabold text-navy">
            X
          </span>
          <span className="text-lg font-bold tracking-tight text-white">
            Xeena <span className="font-normal text-white/60">Tech</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.hash}
              onClick={(e) => handleNavClick(e, link.hash)}
              className="text-sm font-medium text-white/75 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button to="/contact" variant="outlineLight" className="px-5 py-2.5">
            Contact us
          </Button>
          <Button to="/contact" variant="primary" className="px-5 py-2.5">
            Book a Demo
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.hash}
                  onClick={(e) => handleNavClick(e, link.hash)}
                  className="rounded-lg px-2 py-2.5 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-2">
                <Button to="/contact" variant="outlineLight" className="w-full">
                  Contact us
                </Button>
                <Button to="/contact" variant="primary" className="w-full">
                  Book a Demo
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
