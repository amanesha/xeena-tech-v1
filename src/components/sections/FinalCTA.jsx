import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Reveal } from '../ui/Reveal'
import { Button } from '../ui/Button'

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(211,156,0,0.15)_0%,_transparent_65%)]" />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="pointer-events-none absolute -bottom-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-gold/20 blur-[120px]"
      />

      <Reveal className="relative mx-auto max-w-2xl px-6 text-center lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Ready to Power Your Business with Better Technology?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
          Join businesses choosing Xeena Tech to simplify operations, automate workflows, and grow
          without limits.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="https://calendly.com/marketing-xeenaio/30min" target="_blank" variant="primary">
            Book a Demo
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          <Button to="/contact" variant="outlineLight">
            Speak to Our Team
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
