import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { Button } from '../ui/Button'
import { cn } from '../../lib/cn'
import logo from '../../assets/xeena-logo.png'

const navLinks = [
  { label: 'Home', hash: '/' },
  { label: 'Solutions', hash: '/#solutions' },
  { label: 'Contact', hash: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
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
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b border-white/10 backdrop-blur-[20px] transition-all duration-500',
        scrolled ? 'bg-navy/[0.92] shadow-[0_4px_30px_rgba(0,0,0,0.2)]' : 'bg-white/[0.03] shadow-none'
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <Link to="/" className="flex items-center group">
          <img
            src={logo}
            alt="Xeena Tech"
            className="h-24 w-auto object-contain brightness-125 contrast-125 transition-opacity group-hover:opacity-90"
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.hash}
              onClick={(e) => handleNavClick(e, link.hash)}
              className="group relative text-base font-bold text-white transition-colors hover:text-gold"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="https://calendly.com/marketing-xeenaio/30min" target="_blank" variant="primary" className="px-6 py-2.5 text-base">
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
                  className="rounded-lg px-2 py-2.5 text-base font-bold text-white hover:bg-white/5 hover:text-gold"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-2">
                <Button href="https://calendly.com/marketing-xeenaio/30min" target="_blank" variant="primary" className="w-full text-base">
                  Book a Demo
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
