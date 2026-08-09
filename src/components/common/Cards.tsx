import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Service } from '../../types'

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <article className={`card service-card ${service.imageFit === 'contain' ? 'service-card--contain' : ''}`}>
      <div className="service-card__media">
        <img src={service.image} alt="" loading="lazy" />
        <div className="card__icon" aria-hidden="true"><Icon size={22} /></div>
      </div>
      <div className="service-card__body">
        <p className="card__tag">{service.category}</p>
        <h3>{service.title}</h3>
        <p>{service.summary}</p>
        <Link className="card__link" to={`/services/${service.slug}`} aria-label={`Learn about ${service.title}`}>
          Explore service <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
