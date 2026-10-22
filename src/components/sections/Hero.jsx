import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import networkImg from '../../assets/xeena global white version.png'

export function Hero() {
  return (
    // aspect-[1916/821] matches the image's own pixel dimensions, same technique
    // as xeena/coming-soon's hero — the section's height is derived from the
    // image's real proportions so background-size:cover never crops it oddly,
    // instead of an arbitrary h-full that cuts off the top/bottom.
    <section id="tophero" className="relative bg-white px-6 pt-36 pb-16 md:aspect-[1916/821] md:pb-24 lg:pt-44">
      {/* top-16 clears the fixed navbar's own height — inset-0 here would let
          the image start at the literal top of the section, so the navbar
          overlaps and hides the top of the phone mockup underneath it */}
      <div className="absolute inset-x-0 top-16 bottom-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundColor: '#ffffff',
            backgroundImage: `url(${networkImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
          }}
          initial={{ scale: 1.06 }}
          animate={{ scale: [1.06, 1.01, 1.06] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <h1 className="text-3xl font-bold leading-[1.1] tracking-tight text-navy sm:text-4xl lg:text-5xl">
            The technology we build <span className="text-gold-dark">behind modern digital banks.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            One platform, one partner. Xeena Tech delivers proven banking and crypto technology,
            access to regulated partner licenses, and a team that stays from build to daily
            operations.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href="#banking" variant="primary">
              Explore Platform
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button to="/contact" variant="outline">
              Speak to Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
