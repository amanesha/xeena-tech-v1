import { motion } from 'motion/react'
import { getAccent } from '../../lib/accents'
import { cn } from '../../lib/cn'

export function Card({ children, className, dark = false, accent = 0, index }) {
  const a = getAccent(index ?? accent)
  const tone = dark ? a.dark : a.light

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'rounded-2xl border p-6 transition-colors duration-200',
        dark
          ? cn('border-white/10 bg-white/[0.03]', tone.border)
          : cn('border-navy/8 bg-white shadow-sm hover:shadow-md', tone.border),
        className
      )}
    >
      {children}
    </motion.div>
  )
}

export function IconBadge({ icon: Icon, dark = false, accent = 0, index, size = 20 }) {
  const a = getAccent(index ?? accent)
  const tone = dark ? a.dark : a.light

  return (
    <div
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center rounded-lg',
        tone.iconBg,
        tone.iconText
      )}
    >
      <Icon size={size} strokeWidth={2} />
    </div>
  )
}
