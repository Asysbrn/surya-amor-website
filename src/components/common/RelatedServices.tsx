import type { Service } from '../../types'
import { services } from '../../data/services'
import { SectionHeading } from '../ui/SectionHeading'
import { ServiceCard } from './Cards'

export function RelatedServices({ current }: { current: Service }) {
  const sameCategory = services.filter((service) => service.slug !== current.slug && service.category === current.category)
  const remaining = services.filter((service) => service.slug !== current.slug && !sameCategory.some((related) => related.slug === service.slug))
  const related = [...sameCategory, ...remaining].slice(0, 3)

  return (
    <section className="section section--white related-services">
      <div className="container">
        <SectionHeading eyebrow="Continue exploring" title="Explore related services" description="Complementary digitization and information-management capabilities." />
        <div className="related-services__grid">
          {related.map((service) => <ServiceCard key={service.slug} service={service} />)}
        </div>
      </div>
    </section>
  )
}
