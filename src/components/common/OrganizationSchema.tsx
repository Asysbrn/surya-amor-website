import { siteConfig } from '../../data/site'

export function OrganizationSchema() {
  const origin = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') || 'https://www.example.com'
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: origin,
    description: 'Malaysian document digitization, digital preservation, information management and technology company.',
    areaServed: { '@type': 'Country', name: 'Malaysia' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
