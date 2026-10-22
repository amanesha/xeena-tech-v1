import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Hero } from '../components/sections/Hero'
import { TrustedPartner } from '../components/sections/TrustedPartner'
import { SolutionsSuite } from '../components/sections/SolutionsSuite'
import { Integrations } from '../components/sections/Integrations'
import { Industries } from '../components/sections/Industries'
import { FinancialSolutions } from '../components/sections/FinancialSolutions'
import { Services } from '../components/sections/Services'
import { Consulting } from '../components/sections/Consulting'
import { Tailormade } from '../components/sections/Tailormade'
import { Support } from '../components/sections/Support'
import { Security } from '../components/sections/Security'
import { FinalCTA } from '../components/sections/FinalCTA'

export function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }, [location])

  return (
    <>
      <Hero />
      <TrustedPartner />
      <SolutionsSuite />
      <Integrations />
      <Industries />
      <FinancialSolutions />
      <Services />
      <Consulting />
      <Tailormade />
      <Support />
      <Security />
      <FinalCTA />
    </>
  )
}
