import { useMemo, useState } from 'react'
import { ServiceCard } from '../components/common/Cards'
import { CallToAction } from '../components/common/CallToAction'
import { ConfirmationNotice } from '../components/common/ConfirmationNotice'
import { PageHero } from '../components/common/PageHero'
import { serviceCategories, services } from '../data/services'
import { useSeo } from '../hooks/useSeo'
import type { ServiceCategory } from '../types'

type Filter = 'All' | ServiceCategory

export default function ServicesPage() {
  const [filter, setFilter] = useState<Filter>('All')
  const filtered = useMemo(() => filter === 'All' ? services : services.filter((service) => service.category === filter), [filter])
  useSeo({ title: 'Services', description: 'Explore SATSB’s published document digitization, audiovisual conversion, records management, imaging consultation and GIS service areas.', path: '/services' })
  return (
    <>
      <PageHero eyebrow="Published services" title="Five service areas supported by the legacy company website." description="Descriptions have been professionally rewritten from the existing SATSB website without reusing its design, code, images or interface structure." />
      <section className="section">
        <div className="container">
          <div className="filters" role="group" aria-label="Filter services by category">
            {(['All', ...serviceCategories] as Filter[]).map((item) => <button type="button" className={`filter ${filter === item ? 'active' : ''}`} aria-pressed={filter === item} key={item} onClick={() => setFilter(item)}>{item}</button>)}
          </div>
          <p className="sr-only" aria-live="polite">Showing {filtered.length} services</p>
          <div className="grid grid--3">{filtered.map((service) => <ServiceCard service={service} key={service.slug} />)}</div>
          <ConfirmationNotice>Technical specifications, security controls, products, platforms, GIS scope and detailed deliverables require company-owner confirmation.</ConfirmationNotice>
        </div>
      </section>
      <CallToAction title="Not sure which service fits?" description="Describe the material or workflow, approximate quantity and intended result so SATSB can discuss the requirement with you." />
    </>
  )
}
