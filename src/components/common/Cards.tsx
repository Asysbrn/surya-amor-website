import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Service } from '../../types'

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <article className="card service-card">
      <div className="card__icon" aria-hidden="true"><Icon size={22} /></div>
      <p className="card__tag">{service.category}</p>
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <Link className="card__link" to={`/services/${service.slug}`} aria-label={`Learn about ${service.title}`}>
        Explore service <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </article>
  )
}

export function ProjectCard({ title, tag, description }: { title: string; tag: string; description: string }) {
  return (
    <article className="card">
      <p className="card__tag">{tag}</p>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link className="card__link" to="/projects">How projects are presented <ArrowRight size={16} aria-hidden="true" /></Link>
    </article>
  )
}
