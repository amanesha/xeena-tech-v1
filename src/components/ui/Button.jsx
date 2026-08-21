import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { cn } from '../../lib/cn'

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 whitespace-nowrap'

const variants = {
  primary:
    'bg-gradient-to-r from-gold-light to-gold text-navy shadow-lg shadow-gold/30 hover:brightness-105 hover:shadow-gold/40',
  outline: 'border border-navy/20 text-navy hover:bg-navy/5',
  outlineLight: 'border border-white/20 text-white hover:bg-white/10',
  ghost: 'text-navy hover:text-gold',
}

const MotionLink = motion.create(Link)

export function Button({ children, variant = 'primary', to, href, className, ...props }) {
  const classes = cn(base, variants[variant], className)
  const motionProps = { whileHover: { scale: 1.05 }, whileTap: { scale: 0.97 } }

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
