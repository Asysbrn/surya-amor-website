import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { industries } from '../../data/site'

interface IndustryShowcaseProps {
  destination?: '/industries' | '/contact'
}

export function IndustryShowcase({ destination = '/industries' }: IndustryShowcaseProps) {
  return (
    <div className="industry-showcase">
      {industries.map(({ title, description, icon: Icon }, index) => (
        <article className="industry-showcase__item" key={title}>
          <div className="industry-showcase__top">
            <span>Sector {String(index + 1).padStart(2, '0')}</span>
            <div className="industry-showcase__icon"><Icon size={25} aria-hidden="true" /></div>
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
          <Link to={destination} aria-label={`${destination === '/contact' ? 'Discuss requirements for' : 'Explore'} ${title}`}>
            {destination === '/contact' ? 'Discuss requirements' : 'Explore sector context'} <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </article>
      ))}
    </div>
  )
}
