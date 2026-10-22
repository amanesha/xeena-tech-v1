import { motion } from 'motion/react'
import Tilt from 'react-parallax-tilt'
import { cn } from '../../lib/cn'

export function Card({ children, className, ...props }) {
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
          'group relative h-full overflow-hidden rounded-2xl border border-navy/8 bg-card px-8 py-9 shadow-[0_1px_3px_rgba(11,31,58,0.06),0_10px_25px_-12px_rgba(11,31,58,0.15)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_12px_32px_-8px_rgba(11,31,58,0.18),0_4px_8px_rgba(11,31,58,0.06)]',
          className
        )}
        {...props}
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
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold-dark"
    >
      <Icon size={size} strokeWidth={2} />
    </motion.div>
  )
}
