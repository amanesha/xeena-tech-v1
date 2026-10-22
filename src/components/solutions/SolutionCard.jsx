import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Card } from '../ui/Card'

export function SolutionCard({ solution, description }) {
  const Icon = solution.icon

  return (
    <Link to={`/solutions/${solution.slug}`} className="block h-full">
      <Card className="flex h-full min-h-[320px] flex-col">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-mono font-semibold tracking-wide text-gold-dark">
            {solution.num}
          </span>
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/25 bg-gradient-to-br from-gold-light/20 to-gold/20 text-gold-dark">
            <Icon size={20} strokeWidth={1.8} />
          </span>
        </div>

        <h3 className="mt-5 text-xl font-bold text-navy">{solution.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {description ?? solution.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {solution.chips.map((chip) => (
            <li
              key={chip}
              className="rounded-full border border-navy/8 bg-navy/5 px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-wide text-muted"
            >
              {chip}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-gold-dark transition-all duration-300 group-hover:gap-3.5">
          Explore {solution.title}
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </Card>
    </Link>
  )
}
