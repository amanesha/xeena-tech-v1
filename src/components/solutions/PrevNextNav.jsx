import { Link } from 'react-router-dom'
import { getAdjacentSolutions } from '../../data/solutions'

export function PrevNextNav({ slug }) {
  const { prev, next } = getAdjacentSolutions(slug)

  return (
    <div className="mt-14 flex items-center justify-between border-t border-white/10 pt-7 font-mono text-[11.5px] uppercase tracking-wide">
      {prev ? (
        <Link to={`/solutions/${prev.slug}`} className="text-white/50 transition-colors hover:text-gold">
          &larr; {prev.num} &middot; {prev.title}
        </Link>
      ) : (
        <span />
      )}

      <Link to="/solutions" className="text-gold transition-colors hover:text-gold-light">
        All Solutions
      </Link>

      {next ? (
        <Link to={`/solutions/${next.slug}`} className="text-white/50 transition-colors hover:text-gold">
          {next.num} &middot; {next.title} &rarr;
        </Link>
      ) : (
        <span />
      )}
    </div>
  )
}
