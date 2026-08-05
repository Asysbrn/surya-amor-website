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
  useSeo({ title: 'Services', description: 'Explore document scanning, OCR, indexing, digital preservation, records management, software, equipment and on-site digitization capabilities.', path: '/services' })
  return (
    <>
      <PageHero eyebrow="Complete capability catalogue" title="Services built around real collections and workflows." description="Combine specialist capture, structured data, preservation and technology capabilities into one practical programme." />
      <section className="section">
        <div className="container">
          <div className="filters" role="group" aria-label="Filter services by category">
            {(['All', ...serviceCategories] as Filter[]).map((item) => <button type="button" className={`filter ${filter === item ? 'active' : ''}`} aria-pressed={filter === item} key={item} onClick={() => setFilter(item)}>{item}</button>)}
          </div>
          <p className="sr-only" aria-live="polite">Showing {filtered.length} services</p>
          <div className="grid grid--3">{filtered.map((service) => <ServiceCard service={service} key={service.slug} />)}</div>
        </div>
      </section>
      <CallToAction title="Not sure which services belong together?" description="Describe your collection and target outcome. The recommended workflow may combine capture, OCR, indexing, preservation and system integration." />
    </>
  )
}
