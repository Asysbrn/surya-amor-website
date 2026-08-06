import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Service } from '../../types'

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <article className="card service-card">
      <div className="service-card__media"><img src={service.image} alt="" loading="lazy" /><div className="card__icon" aria-hidden="true"><Icon size={22} /></div></div>
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

export function ProjectCard({ title, tag, description, logo }: { title: string; tag: string; description: string; logo: string }) {
  return (
    <article className="card client-card">
      <div className="client-card__logo"><img src={logo} alt={`${title} logo`} loading="lazy" /></div>
      <p className="card__tag">{tag}</p>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link className="card__link" to="/projects">How projects are presented <ArrowRight size={16} aria-hidden="true" /></Link>
    </article>
  )
}
