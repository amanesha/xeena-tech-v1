import { motion } from 'motion/react'

const EASE = [0.22, 1, 0.36, 1]
const CARD_EASE = [0.16, 1, 0.3, 1]

export function Reveal({ children, delay = 0, className, y = 24 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      // amount: 0.25 requires 25% of the element's OWN height to be visible
      // at once — mathematically impossible once the element is taller than
      // ~4x the viewport (e.g. a long legal document), so it never fires and
      // stays invisible forever. A fixed pixel margin works regardless of
      // how tall the content is.
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerGroup({ children, className, stagger = 0.09 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: 0.08 } } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className, y = 34 }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y, scale: 0.95 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: CARD_EASE } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
