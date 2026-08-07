import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Navigate, useParams } from 'react-router-dom'
import { CallToAction } from '../components/common/CallToAction'
import { PageHero } from '../components/common/PageHero'
import { RelatedServices } from '../components/common/RelatedServices'
import { Button } from '../components/ui/Button'
import { getService, legacyServiceRedirects } from '../data/services'
import { useSeo } from '../hooks/useSeo'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = getService(slug)
  const legacyDestination = slug ? legacyServiceRedirects[slug] : undefined
  useSeo({ title: service?.title ?? 'Service not found', description: service?.summary ?? 'The requested service could not be found.', path: `/services/${slug ?? ''}` })
  if (legacyDestination) return <Navigate to={legacyDestination} replace />
  if (!service) return <Navigate to="/404" replace />
  const Icon = service.icon

  return (
    <>
      <PageHero eyebrow={service.category} title={service.title} description={service.summary} parent={{ label: 'Services', href: '/services' }} image={service.image} imageAlt={service.imageAlt} />
      <section className="section section--white">
        <div className="container content-layout">
          <div className="prose">
            {service.brandLogo && <div className="service-brand"><img src={service.brandLogo} alt={service.brandLogoAlt} decoding="async" /></div>}
            <div className="service-kicker"><div className="card__icon" aria-hidden="true"><Icon size={24} /></div><span>Service overview</span></div>
            <h2>A focused approach to {service.title.toLowerCase()}</h2>
            <p>{service.description}</p>
            <div className="detail-grid">
              <section className="detail-box detail-box--accent"><span className="detail-box__label">Potential value</span><h2>Service focus</h2><ul>{service.outcomes.map((item) => <li key={item}><CheckCircle2 size={17} aria-hidden="true" />{item}</li>)}</ul></section>
              <section className="detail-box"><span className="detail-box__label">Scope definition</span><h2>Details to confirm</h2><ul>{service.deliverables.map((item) => <li key={item}><CheckCircle2 size={17} aria-hidden="true" />{item}</li>)}</ul></section>
            </div>
          </div>
          <aside className="aside-panel">
            <h2>Plan your enquiry</h2>
            <p>Helpful details include the source format, approximate quantity, current condition, location and intended digital result.</p>
            <div className="button-row">
              <Button to="/contact" variant="ghost">Enquiry</Button>
            </div>
          </aside>
        </div>
      </section>
      <section className="section section--tint">
        <div className="container service-details">
          <div>
            <p className="eyebrow">Typical applications</p>
            <h2 className="heading">Designed around the material and intended result.</h2>
            <div className="application-grid">{service.applications.map((item, index) => <article key={item}><span>0{index + 1}</span><h3>{item}</h3></article>)}</div>
          </div>
          <div className="workflow-card">
            <p className="eyebrow">How an engagement can progress</p>
            {service.steps.map((step, index) => <div className="workflow-card__step" key={step}><span>0{index + 1}</span><div><h3>{step}</h3><p>{index === 0 ? 'Clarify the source, scale, condition and intended use.' : index === 1 ? 'Define the practical method, responsibilities and required output.' : 'Complete the agreed work and verify the handover requirements.'}</p></div></div>)}
            <Button to="/process" variant="ghost">View the full process <ArrowRight size={16} /></Button>
          </div>
        </div>
      </section>
      <RelatedServices current={service} />
      <CallToAction title={`Planning a ${service.title.toLowerCase()} project?`} />
    </>
  )
}
