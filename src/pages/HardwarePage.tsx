import { CheckCircle2, Filter, PackageCheck, ScanLine, Server } from 'lucide-react'
import { useMemo, useState } from 'react'
import scannerHardwareImage from '../assets/images/scanner-it-hardware.webp'
import { CallToAction } from '../components/common/CallToAction'
import { PageHero } from '../components/common/PageHero'
import { hardwareCategories, hardwareItems, type HardwareCategory } from '../data/hardware'
import { useSeo } from '../hooks/useSeo'

type HardwareFilter = 'All equipment' | HardwareCategory

export default function HardwarePage() {
  const [activeCategory, setActiveCategory] = useState<HardwareFilter>('All equipment')
  const visibleItems = useMemo(() => activeCategory === 'All equipment' ? hardwareItems : hardwareItems.filter((product) => product.category === activeCategory), [activeCategory])

  useSeo({ title: 'Hardware Catalogue', description: 'A consolidated catalogue of scanners, workstations, storage, networking and supporting equipment recorded in the SAT asset workbook.', path: '/hardware' })

  return (
    <>
      <PageHero eyebrow="Equipment catalogue" title="Hardware supporting capture, processing and delivery." description="A deduplicated view of equipment recorded in SAT’s supplied asset workbook, organized by practical technology category." parent={{ label: 'Services', href: '/services' }} image={scannerHardwareImage} imageAlt="Professional document scanner and supporting IT equipment" />
      <section className="section section--white hardware-intro">
        <div className="container">
          <div className="hardware-summary">
            <div>
              <p className="eyebrow">Workbook overview</p>
              <h2 className="heading">One clear catalogue from a detailed equipment register.</h2>
              <p className="lead">Repeated serial-number rows have been consolidated into unique model records. The workbook confirms equipment identity and recorded quantities; current availability, supply terms and configurations must be confirmed for each enquiry.</p>
            </div>
            <div className="hardware-summary__metrics" aria-label="Hardware catalogue summary">
              <article><strong>{hardwareItems.length}</strong><span>Unique equipment entries</span></article>
              <article><strong>{hardwareCategories.length}</strong><span>Supported categories</span></article>
              <article><strong>59</strong><span>Workbook asset rows reviewed</span></article>
            </div>
          </div>
          <div className="hardware-assurance">
            <ScanLine size={20} aria-hidden="true" />
            <p>Product visuals have been separated from the supplied equipment catalogue image and matched to their corresponding workbook entries. Confirm the exact model, configuration and current commercial availability with SATSB.</p>
          </div>
        </div>
      </section>
      <section className="section section--tint hardware-catalogue" aria-labelledby="hardware-catalogue-title">
        <div className="container">
          <div className="hardware-catalogue__heading">
            <div>
              <p className="eyebrow">Browse equipment</p>
              <h2 className="heading" id="hardware-catalogue-title">Filter by hardware category.</h2>
            </div>
            <p className="hardware-catalogue__count" aria-live="polite">Showing {visibleItems.length} unique {visibleItems.length === 1 ? 'entry' : 'entries'}</p>
          </div>
          <div className="hardware-filters" aria-label="Filter hardware catalogue">
            <button type="button" className={activeCategory === 'All equipment' ? 'active' : ''} aria-pressed={activeCategory === 'All equipment'} onClick={() => setActiveCategory('All equipment')}><Filter size={15} aria-hidden="true" />All equipment <span>{hardwareItems.length}</span></button>
            {hardwareCategories.map(({ name, count }) => <button type="button" key={name} className={activeCategory === name ? 'active' : ''} aria-pressed={activeCategory === name} onClick={() => setActiveCategory(name)}>{name}<span>{count}</span></button>)}
          </div>
          <div className="hardware-grid">
            {visibleItems.map((product) => (
              <article className="hardware-card" key={product.id} data-category={product.category}>
                <div className="hardware-card__media">
                  <img src={product.image} alt={product.imageAlt} loading="lazy" decoding="async" />
                </div>
                <div className="hardware-card__body">
                  <div className="hardware-card__meta"><span>{product.category}</span><strong>{product.brand}</strong></div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="hardware-card__facts">
                    <h4>Key features</h4>
                    <ul>{product.features.map((feature) => <li key={feature}><CheckCircle2 size={14} aria-hidden="true" />{feature}</li>)}</ul>
                  </div>
                  <div className="hardware-card__usage"><Server size={17} aria-hidden="true" /><div><strong>Typical usage</strong><span>{product.usage}</span></div></div>
                  <footer><span><PackageCheck size={16} aria-hidden="true" />Recorded units</span><strong>{product.recordedUnits}</strong></footer>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CallToAction title="Discuss equipment requirements with SATSB." />
    </>
  )
}
