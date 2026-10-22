import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Reveal } from '../ui/Reveal'
import { Button } from '../ui/Button'

export function FinalCTA() {
  return (
    <section id="cta" className="relative scroll-mt-20 overflow-hidden bg-offwhite py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(211,156,0,0.12)_0%,_transparent_65%)]" />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="pointer-events-none absolute -bottom-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gold/25 blur-[120px]"
      />

      <Reveal className="relative mx-auto max-w-2xl px-6 text-center lg:px-8">
        <span className="mb-1 block text-sm font-semibold uppercase tracking-widest text-gold-dark">
          Ready When You Are
        </span>
        <h2 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">
          Your platform is one conversation away.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          Book a demo or speak with our team about banking, cards, crypto payments,
          tokenization, corporate tools, or a fully managed launch.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="https://calendly.com/marketing-xeenaio/30min" target="_blank" variant="primary">
            Book a Demo
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          <Button to="/contact" variant="outline">
            Speak to Our Team
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
