import { motion } from 'motion/react'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

const nodes = [
  { label: 'SPEC', title: 'Discovery Workshop', active: false },
  { label: 'BUILD', title: 'Milestone Delivery', active: true },
  { label: 'LIVE', title: 'Ongoing Support', active: false },
]

export function Tailormade() {
  return (
    <section id="tailormade" className="scroll-mt-20 bg-offwhite py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tailormade"
          title={
            <>
              If it doesn&apos;t exist yet, <span className="text-gold-dark">we build it.</span>
            </>
          }
          subtitle="Every business is a little different. When the standard product doesn't cover it, our team scopes, builds, and ships the custom piece — then supports it like the rest of the platform."
        />

        <Reveal className="mt-14 flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          {nodes.map((node) => (
            <div key={node.label} className="flex items-center gap-4 sm:flex-col sm:gap-3 sm:text-center">
              <motion.div
                animate={node.active ? { scale: [1, 1.08, 1] } : {}}
                transition={{ duration: 2.5, repeat: Infinity }}
                className={
                  node.active
                    ? 'flex h-16 w-16 items-center justify-center rounded-2xl border border-gold/40 bg-gold/15 text-xs font-bold text-gold-dark'
                    : 'flex h-16 w-16 items-center justify-center rounded-2xl border border-navy/10 bg-navy/5 text-xs font-bold text-muted'
                }
              >
                {node.label}
              </motion.div>
              <p className={node.active ? 'text-sm font-semibold text-navy' : 'text-sm text-muted'}>
                {node.title}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
