import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface PageHeroProps {
  eyebrow: string
  title: string
  description: string
  parent?: { label: string; href: string }
}

export function PageHero({ eyebrow, title, description, parent }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link><ChevronRight size={13} aria-hidden="true" />
          {parent && <><Link to={parent.href}>{parent.label}</Link><ChevronRight size={13} aria-hidden="true" /></>}
          <span aria-current="page">{title}</span>
        </nav>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  )
}
