import { CheckCircle2 } from 'lucide-react'
import { motion } from 'motion/react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { Reveal, StaggerGroup, StaggerItem } from '../ui/Reveal'
import securityLottie from '../../assets/pW2HrfBahk.lottie'

const items = [
  'Data Encryption',
  'Secure Cloud Infrastructure',
  'Role-Based Access Controls',
  'Continuous Monitoring',
  'Regular Backups',
  '99.9% Uptime Commitment',
]

export function Security() {
  return (
    <section className="bg-offwhite py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="mb-1 block text-sm font-semibold uppercase tracking-widest text-gold-dark">
              Security &amp; Reliability
            </span>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-navy md:text-5xl">
              Enterprise Security. Always On.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Your business data deserves the highest level of protection. Xeena Tech is built on
              secure, resilient infrastructure with intelligent monitoring at every layer.
            </p>

            <StaggerGroup className="mt-8 grid gap-3 sm:grid-cols-2">
              {items.map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-center gap-2.5 rounded-lg border border-navy/8 bg-white px-4 py-3">
                    <CheckCircle2 size={18} className="shrink-0 text-gold" />
                    <span className="text-sm font-medium text-navy">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </Reveal>

          <Reveal className="relative flex items-center justify-center">
            <div className="relative flex h-80 w-80 items-center justify-center sm:h-[26rem] sm:w-[26rem]">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{ scale: [1, 1.5], opacity: [0.35, 0] }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    delay: i * 0.9,
                    ease: 'easeOut',
                  }}
                  className="absolute h-full w-full rounded-full border border-gold/40"
                />
              ))}
              <div className="absolute h-full w-full rounded-full bg-navy/[0.03]" />
              <div className="relative flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
                <DotLottieReact src={securityLottie} loop autoplay />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
