import { motion } from 'motion/react'

const EASE = [0.22, 1, 0.36, 1]

export function Reveal({ children, delay = 0, className, y = 28 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerGroup({ children, className, stagger = 0.12 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: 0.05 } } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className, y = 24 }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y, scale: 0.97 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: EASE } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
