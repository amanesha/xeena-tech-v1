import { motion } from 'motion/react'
import { Reveal, StaggerGroup, StaggerItem } from '../ui/Reveal'
import { Card } from '../ui/Card'

const stats = [
  { value: '<15m', label: 'Response SLA' },
  { value: '99.9%', label: 'Uptime' },
  { value: '1:1', label: 'Named Contact' },
]

export function Support() {
  return (
    <section id="why-us" className="relative scroll-mt-20 bg-offwhite py-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal className="order-2 flex flex-col items-center gap-4 lg:order-1">
            <SupportClockMock />
            <span className="font-mono text-sm font-bold uppercase tracking-wide text-gold-dark">24/7 Operations</span>
          </Reveal>

          <Reveal className="order-1 lg:order-2">
            <span className="mb-1 block text-sm font-semibold uppercase tracking-widest text-gold-dark">
              Support & Assistance
            </span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">
              Money never sleeps. <span className="text-gold-dark">Neither do we.</span>
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              A named contact, a committed response time, and a platform built to stay up —
              around the clock, every day of the year.
            </p>

            <StaggerGroup className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((s) => (
                <StaggerItem key={s.label}>
                  <Card className="text-center">
                    <p className="text-2xl font-bold text-gold-dark">{s.value}</p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted">{s.label}</p>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function SupportClockMock() {
  return (
    <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-gold/30 shadow-[0_0_40px_-10px_rgba(217,178,92,0.4)] sm:h-64 sm:w-64">
      <div className="absolute inset-3 rounded-full border border-white/10 bg-navy-light" />
      {['12', '3', '6', '9'].map((num, i) => (
        <span
          key={num}
          className="absolute text-xs font-semibold text-white/40"
          style={{
            top: i === 0 ? '14%' : i === 2 ? '80%' : '50%',
            left: i === 1 ? '80%' : i === 3 ? '14%' : '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {num}
        </span>
      ))}
      <motion.span
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        className="absolute h-16 w-[3px] origin-bottom rounded-full bg-gold"
        style={{ bottom: '50%' }}
      />
      <motion.span
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        className="absolute h-20 w-[2px] origin-bottom rounded-full bg-white/60"
        style={{ bottom: '50%' }}
      />
      <span className="absolute h-2.5 w-2.5 rounded-full bg-gold" />
    </div>
  )
}
