import { Landmark, CreditCard, Coins, Layers, Briefcase, Compass } from 'lucide-react'

export const solutions = [
  {
    slug: 'banking',
    num: '01',
    icon: Landmark,
    title: 'Banking Management',
    description:
      "A complete banking core — frontend, backend, and CRM — already running Xeena's own consumer and business products.",
    shortDescription: 'A complete banking core already running Xeena’s own products.',
    chips: ['Frontend', 'Backend', 'CRM', 'APIs'],
  },
  {
    slug: 'cards',
    num: '02',
    icon: CreditCard,
    title: 'Card Solutions',
    description:
      'Consumer, corporate, and crypto card programs on Visa and Mastercard rails — issued in days, spending anywhere.',
    shortDescription: 'Consumer, corporate, and crypto cards on Visa and Mastercard rails.',
    chips: ['Consumer', 'Corporate', 'Crypto', 'Premium'],
  },
  {
    slug: 'crypto-payments',
    num: '03',
    icon: Coins,
    title: 'Crypto Payments',
    description:
      'Native crypto rails inside your banking platform. Accept, hold, exchange, and settle across major networks.',
    shortDescription: 'Native crypto rails inside your banking platform.',
    chips: ['Accounts', 'On/Off Ramp', 'Merchant', 'Wallet-to-Wallet'],
  },
  {
    slug: 'tokenization',
    num: '04',
    icon: Layers,
    title: 'Real World Tokenization',
    description:
      'Turn real-world assets into liquid, on-chain instruments. Powered by Tokera and YOB Assets — issuance to marketplace, end to end.',
    shortDescription: 'Turn real-world assets into liquid, on-chain instruments.',
    chips: ['Tokera', 'YOB Assets', 'Marketplace', 'Fractional'],
  },
  {
    slug: 'corporate-tools',
    num: '05',
    icon: Briefcase,
    title: 'Corporate Tools',
    description:
      'Payroll and invoicing embedded in the banking core. Fiat or crypto pay-outs, multi-currency invoicing, zero reconciliation.',
    shortDescription: 'Payroll and invoicing embedded in the banking core.',
    chips: ['Payroll', 'Invoicing', 'Expense', 'Treasury'],
  },
  {
    slug: 'consulting',
    num: '06',
    icon: Compass,
    title: 'Consulting & Start Up',
    description:
      'From idea to a live private bank. Strategy, licensing, providers, platform, launch and operations — one accountable team.',
    shortDescription: 'From idea to a live private bank — one accountable team.',
    chips: ['Discovery', 'Licensing', 'Launch', 'Operations'],
  },
]

export function getSolutionBySlug(slug) {
  return solutions.find((s) => s.slug === slug)
}

export function getAdjacentSolutions(slug) {
  const index = solutions.findIndex((s) => s.slug === slug)
  return {
    prev: index > 0 ? solutions[index - 1] : null,
    next: index >= 0 && index < solutions.length - 1 ? solutions[index + 1] : null,
  }
}
