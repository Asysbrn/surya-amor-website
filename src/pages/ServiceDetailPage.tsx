import { CheckCircle2 } from 'lucide-react'
import { Navigate, useParams } from 'react-router-dom'
import { CallToAction } from '../components/common/CallToAction'
import { PageHero } from '../components/common/PageHero'
import { Button } from '../components/ui/Button'
import { getService, services } from '../data/services'
import { useSeo } from '../hooks/useSeo'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = getService(slug)
  useSeo({ title: service?.title ?? 'Service not found', description: service?.summary ?? 'The requested service could not be found.', path: `/services/${slug ?? ''}` })
  if (!service) return <Navigate to="/404" replace />
  const Icon = service.icon

  return (
    <>
      <PageHero eyebrow={service.category} title={service.title} description={service.summary} parent={{ label: 'Services', href: '/services' }} />
      <section className="section section--white">
        <div className="container content-layout">
          <div className="prose">
            <div className="card__icon" aria-hidden="true"><Icon size={24} /></div>
            <h2>A workflow shaped around the material</h2>
            <p>{service.description}</p>
            <p>Before production begins, representative samples should be reviewed to confirm handling, capture, naming, metadata, quality and delivery expectations. Exact methods and throughput depend on the material supplied and must be confirmed in the project plan.</p>
            <div className="detail-grid">
              <section className="detail-box"><h2>Potential outcomes</h2><ul>{service.outcomes.map((item) => <li key={item}><CheckCircle2 size={17} aria-hidden="true" />{item}</li>)}</ul></section>
              <section className="detail-box"><h2>Typical deliverables</h2><ul>{service.deliverables.map((item) => <li key={item}><CheckCircle2 size={17} aria-hidden="true" />{item}</li>)}</ul></section>
            </div>
            <h2>What we clarify first</h2>
            <ul><li>Source format, condition, quantity and location</li><li>Intended users and retrieval requirements</li><li>File formats, image quality and metadata expectations</li><li>Handling, confidentiality and access constraints</li><li>Acceptance tests, delivery packaging and retention needs</li></ul>
          </div>
          <aside className="aside-panel">
            <h2>Explore related services</h2>
            <p>A programme often combines several connected capabilities.</p>
            <div className="aside-links">{services.filter((item) => item.slug !== service.slug).slice(0, 5).map((item) => <Button key={item.slug} to={`/services/${item.slug}`} variant="ghost">{item.title}</Button>)}</div>
          </aside>
        </div>
      </section>
      <CallToAction title={`Planning a ${service.title.toLowerCase()} project?`} />
    </>
  )
}
