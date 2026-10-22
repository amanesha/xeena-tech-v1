import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'

export function Breadcrumb({ num, title, light }) {
  return (
    <p className={cn('font-mono text-[11px] font-medium uppercase tracking-[0.16em]', light ? 'text-muted' : 'text-white/50')}>
      <Link to="/solutions" className="transition-colors hover:text-gold">
        Solutions
      </Link>
      <span className="mx-2">/</span>
      <span className="text-gold">
        {num} &middot; {title}
      </span>
    </p>
  )
}
