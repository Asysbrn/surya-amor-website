import { useMemo, useState } from 'react'
import { ServiceCard } from '../components/common/Cards'
import { CallToAction } from '../components/common/CallToAction'
import { PageHero } from '../components/common/PageHero'
import { serviceCategories, services } from '../data/services'
import { useSeo } from '../hooks/useSeo'
import type { ServiceCategory } from '../types'

type Filter = 'All' | ServiceCategory

export default function ServicesPage() {
  const [filter, setFilter] = useState<Filter>('All')
  const filtered = useMemo(() => filter === 'All' ? services : services.filter((service) => service.category === filter), [filter])
  useSeo({ title: 'Services', description: 'Explore SATSB’s scanning, digitization, data conversion, audiovisual transfer, records management, imaging consultation, GIS and supporting technology services.', path: '/services' })
  return (
    <>
      <PageHero eyebrow="Complete service catalogue" title="Digitization expertise for every information format." description="Explore SATSB’s broad service areas and the focused scanning, conversion and technology capabilities identified in the available company profile material." />
      <section className="section">
        <div className="container">
          <div className="filters" role="group" aria-label="Filter services by category">
            {(['All', ...serviceCategories] as Filter[]).map((item) => <button type="button" className={`filter ${filter === item ? 'active' : ''}`} aria-pressed={filter === item} key={item} onClick={() => setFilter(item)}>{item}</button>)}
          </div>
          <p className="sr-only" aria-live="polite">Showing {filtered.length} services</p>
          <div className="grid grid--3">{filtered.map((service) => <ServiceCard service={service} key={service.slug} />)}</div>
        </div>
      </section>
      <CallToAction title="Not sure which service fits?" description="Describe the material or workflow, approximate quantity and intended result so SATSB can discuss the requirement with you." />
    </>
  )
}
