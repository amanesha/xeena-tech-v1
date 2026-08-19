import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'
import { getAccent } from '../../lib/accents'
import { cn } from '../../lib/cn'

const faqs = [
  {
    q: 'What solutions does Xeena Tech provide?',
    a: 'Xeena Tech provides a connected business technology suite covering CRM & customer management, invoicing & billing, payroll & HR tools, accounting & expense tools, e-commerce & website tools, and APIs & custom integrations — all from one platform.',
  },
  {
    q: 'Is Xeena Tech suitable for small businesses?',
    a: 'Yes. Xeena Tech is built for startups and small-to-medium businesses that want to streamline daily operations, while scaling up to enterprise-grade infrastructure as your business grows.',
  },
  {
    q: 'Can I integrate Xeena Tech with my existing software?',
    a: 'Yes. Xeena Tech connects with leading accounting platforms, CRM systems, e-commerce platforms, communication tools, and cloud storage, plus supports custom integrations through REST APIs and webhooks.',
  },
  {
    q: 'Does Xeena Tech offer custom development?',
    a: 'Yes. Beyond our developer-friendly APIs, our team offers custom development support to help you build the exact integrations and workflows your business needs.',
  },
  {
    q: 'How is my business data protected?',
    a: 'Your data is protected with encryption, secure cloud infrastructure, role-based access controls, continuous monitoring, and regular backups, backed by a 99.9% uptime commitment.',
  },
  {
    q: 'What is the difference between xeena.tech and xeena.io?',
    a: 'xeena.tech is our business technology platform — CRM, invoicing, payroll, and integrations. It does not offer accounts, cards, or payments directly. Those financial services live on xeena.io, our dedicated fintech platform.',
  },
  {
    q: 'How do I access Xeena financial solutions?',
    a: 'Financial solutions are accessed through xeena.io. They are available in selected jurisdictions and are subject to eligibility, verification, and regulatory requirements.',
  },
  {
    q: 'How do I get started or book a demo?',
    a: 'Use the "Book a Demo" button anywhere on this page, or head to our Contact page to speak with our team directly.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Answers to Common Questions."
        />

        <div className="mt-12 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i
            const a = getAccent(i)
            return (
              <Reveal key={item.q} delay={i * 0.03}>
                <div
                  className={cn(
                    'overflow-hidden rounded-2xl border-l-4 bg-offwhite',
                    a.solid.replace('bg-', 'border-l-')
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-sm font-semibold text-navy sm:text-base">{item.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={cn('shrink-0', a.light.iconText)}
                    >
                      <ChevronDown size={18} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-4 text-sm leading-relaxed text-muted">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
