import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { cn } from '../../lib/cn'

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors duration-200 whitespace-nowrap'

const variants = {
  primary: 'bg-gold text-navy hover:bg-gold-hover',
  outline: 'border border-navy/15 text-navy hover:border-navy/30 hover:bg-navy/[0.03]',
  outlineLight: 'border border-white/20 text-white hover:border-white/40 hover:bg-white/5',
  ghost: 'text-navy hover:text-gold',
}

const MotionLink = motion.create(Link)

export function Button({ children, variant = 'primary', to, href, className, ...props }) {
  const classes = cn(base, variants[variant], className)
  const motionProps = { whileHover: { scale: 1.015 }, whileTap: { scale: 0.985 } }

  if (to) {
    return (
      <MotionLink to={to} className={classes} {...motionProps} {...props}>
        {children}
      </MotionLink>
    )
  }

  if (href) {
    return (
      <motion.a
        href={href}
        target={props.target}
        rel={props.target === '_blank' ? 'noreferrer' : undefined}
        className={classes}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type="button" className={classes} {...motionProps} {...props}>
      {children}
    </motion.button>
  )
}
