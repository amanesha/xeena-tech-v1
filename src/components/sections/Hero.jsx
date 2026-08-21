import { motion } from 'motion/react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '../ui/Button'
import heroVideo from '../../assets/hero_video.mp4'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-navy/80" />

      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-gold/[0.07] blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-20 lg:grid-cols-2 lg:px-8 lg:pb-32 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold">
            <Sparkles size={14} />
            The technology arm of Xeena
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Technology That Powers <span className="text-gold">Modern Business.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Xeena Tech delivers intelligent business technology, from CRM and invoicing to
            payroll and custom integrations, helping companies streamline operations, automate
            workflows, and scale with confidence. One technology partner. Every tool your
            business needs.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact" variant="primary">
              Book a Demo
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button href="#solutions" variant="outlineLight">
              Explore Solutions
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <DashboardMock />
        </motion.div>
      </div>
    </section>
  )
}

function DashboardMock() {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="relative rounded-2xl border border-white/10 bg-navy-light p-5 shadow-lg shadow-black/20"
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <span className="text-[11px] font-medium text-white/40">Xeena Tech Suite</span>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {['Revenue', 'Invoices', 'Payroll'].map((label, i) => (
          <div key={label} className="rounded-lg border border-white/10 bg-navy p-3">
            <p className="text-[10px] uppercase tracking-wide text-white/40">{label}</p>
            <p className="mt-1.5 text-lg font-semibold text-white">
              {i === 0 ? '$248K' : i === 1 ? '312' : '48'}
            </p>
            <div className="mt-2 h-1 w-full rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${60 + i * 12}%` }}
                transition={{ duration: 1.2, delay: 0.4 + i * 0.15, ease: 'easeOut' }}
                className="h-full rounded-full bg-gold"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-lg border border-white/10 bg-navy p-4">
        <div className="flex items-end gap-2">
          {[40, 65, 45, 80, 60, 95, 70].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.8, delay: 0.6 + i * 0.06, ease: 'easeOut' }}
              className="w-full rounded-t-sm bg-gold/70"
              style={{ maxHeight: 64 }}
            />
          ))}
        </div>
      </div>

      <div className="absolute -right-6 -top-6 flex items-center gap-2 rounded-lg border border-white/10 bg-navy px-3 py-2 shadow-lg">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        <span className="text-[11px] font-medium text-white/80">Synced across 6 tools</span>
      </div>
    </motion.div>
  )
}
