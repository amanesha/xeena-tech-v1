import { useState } from 'react'
import { motion } from 'motion/react'
import { CheckCircle2, Clock, Mail, MessagesSquare, Phone, ShieldCheck } from 'lucide-react'
import { Reveal } from '../components/ui/Reveal'
import { cn } from '../lib/cn'
import { Card, IconBadge } from '../components/ui/Card'
import contactHero from '../assets/contactusimage.png'

const reasons = [
  {
    icon: Clock,
    title: 'Fast Response',
    desc: 'Our team responds to every enquiry within one business day.',
  },
  {
    icon: MessagesSquare,
    title: 'Real Conversations',
    desc: "Talk to a specialist who understands your business, not a queue.",
  },
  {
    icon: ShieldCheck,
    title: 'No Obligation',
    desc: 'Book a demo or ask a question — no commitment required.',
  },
]

const inputClasses =
  'w-full rounded-lg border border-navy/10 bg-white px-4 py-3 text-sm text-navy placeholder:text-muted/70 outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20'

export function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    reason: 'Book a Demo',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    // TODO: wire this up to a real contact/demo-request endpoint
    setTimeout(() => setStatus('success'), 900)
  }

  return (
    <>
      <section className="relative overflow-hidden bg-navy pb-20 pt-32 lg:pb-28 lg:pt-40">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${contactHero})` }}
        />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
        <Reveal className="relative mx-auto max-w-2xl px-6 text-center lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold">
            Contact Xeena Tech
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let&apos;s Build Something Great Together.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
            Book a demo or speak with our team about banking, cards, crypto payments,
            tokenization, corporate tools, or a fully managed launch.
          </p>
        </Reveal>
      </section>

      <section className="bg-offwhite py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:px-8">
          <Reveal>
            <h2 className="text-xl font-bold text-navy">Why reach out</h2>
            <div className="mt-6 space-y-4">
              {reasons.map((r) => (
                <Card key={r.title} className="p-5">
                  <div className="flex flex-row items-start gap-4">
                    <IconBadge icon={r.icon} />
                    <div>
                      <h3 className="text-sm font-bold text-navy">{r.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{r.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-navy/8 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold-tint text-gold-hover">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">E-mail</p>
                  <p className="mt-0.5 text-sm font-medium text-navy">info@xeena.tech</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold-tint text-gold-hover">
                  <Phone size={18} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">Office</p>
                  <p className="mt-0.5 text-sm font-medium text-navy">+971 4 335 8111</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold-tint text-gold-hover">
                  <Phone size={18} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">Mobile</p>
                  <p className="mt-0.5 text-sm font-medium text-navy">+971 54 460 8063</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex h-full flex-col">
            <div className="flex flex-1 flex-col rounded-2xl border border-navy/8 bg-white p-6 shadow-sm sm:p-8">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-tint text-gold-hover">
                    <CheckCircle2 size={30} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-navy">Message sent</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                    Thanks, {form.name.split(' ')[0] || 'there'} — our team will get back to you
                    within one business day.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name">
                      <input
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Doe"
                        className={inputClasses}
                      />
                    </Field>
                    <Field label="Work email">
                      <input
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className={inputClasses}
                      />
                    </Field>
                  </div>

                  <Field label="Company">
                    <input
                      required
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Company name"
                      className={inputClasses}
                    />
                  </Field>

                  <Field label="I'm interested in">
                    <select
                      name="reason"
                      value={form.reason}
                      onChange={handleChange}
                      className={cn(inputClasses, 'appearance-none')}
                    >
                      <option>Book a Demo</option>
                      <option>SaaS Neo-Banking Platform</option>
                      <option>BaaS on Partner Licenses</option>
                      <option>Launch & Management Consulting</option>
                      <option>Financial Provider Scouting</option>
                      <option>Tailormade Solutions</option>
                      <option>General Inquiry</option>
                    </select>
                  </Field>

                  <Field label="Message">
                    <textarea
                      required
                      rows={4}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us a bit about your business and what you need..."
                      className={cn(inputClasses, 'resize-none')}
                    />
                  </Field>

                  <motion.button
                    type="submit"
                    disabled={status === 'submitting'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full rounded-full bg-gradient-to-r from-gold-light to-gold px-6 py-3.5 text-sm font-semibold text-navy shadow-lg shadow-gold/30 transition-all hover:brightness-105 disabled:opacity-60"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted">
        {label}
      </span>
      {children}
    </label>
  )
}
