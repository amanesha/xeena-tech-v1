import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { StaggerGroup, StaggerItem } from '../ui/Reveal'
import { Button } from '../ui/Button'
import { SolutionCard } from '../solutions/SolutionCard'
import { solutions } from '../../data/solutions'

export function SolutionsSuite() {
  return (
    <section id="solutions-preview" className="relative scroll-mt-20 bg-offwhite py-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Six Products, One Platform"
          title={
            <>
              Six products, <span className="text-gold">one platform.</span>
            </>
          }
          subtitle="Xeena Tech delivers a complete financial technology stack for modern operators. Each product runs standalone, and every product is designed to work with the others."
        />

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <StaggerItem key={solution.slug}>
              <SolutionCard solution={solution} description={solution.shortDescription} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="mt-12 flex justify-center">
          <Button to="/solutions" variant="outline">
            See all solutions in detail
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
