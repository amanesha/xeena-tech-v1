import { motion } from 'motion/react'
import Tilt from 'react-parallax-tilt'
import { cn } from '../../lib/cn'

export function Card({ children, className }) {
  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      scale={1.02}
      perspective={900}
      transitionSpeed={1200}
      glareEnable
      glareMaxOpacity={0.18}
      glareColor="#f0c94a"
      glarePosition="all"
      glareBorderRadius="16px"
      className="h-full rounded-2xl"
    >
      <div
        className={cn(
          'group relative h-full overflow-hidden rounded-2xl border border-gold-dark/50 bg-navy/95 p-6 transition-all duration-500 hover:border-gold/70 hover:shadow-2xl hover:shadow-black/30',
          className
        )}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-[220%] skew-x-12 bg-gradient-to-r from-transparent via-gold/10 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-[420%]"
        />
        <div className="relative">{children}</div>
      </div>
    </Tilt>
  )
}

export function IconBadge({ icon: Icon, size = 20 }) {
  return (
    <motion.div
      whileHover={{ rotate: 8, scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 12 }}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gold/20 bg-gold/15 text-gold"
    >
      <Icon size={size} strokeWidth={2} />
    </motion.div>
  )
}
