// Single restrained accent system: gold, used sparingly and consistently.
// getAccent(index) keeps its signature so call sites stay unchanged even
// though we no longer rotate through multiple hues per card.
const gold = {
  key: 'gold',
  light: {
    iconBg: 'bg-gold-tint',
    iconText: 'text-gold-hover',
    border: 'hover:border-gold/30',
  },
  dark: {
    iconBg: 'bg-gold/15',
    iconText: 'text-gold',
    border: 'hover:border-gold/30',
  },
  solid: 'bg-gold',
}

export function getAccent() {
  return gold
}
