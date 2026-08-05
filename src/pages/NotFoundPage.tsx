import { Button } from '../components/ui/Button'
import { useSeo } from '../hooks/useSeo'

export default function NotFoundPage() {
  useSeo({ title: 'Page Not Found', description: 'The requested page could not be found.', path: '/404' })
  return <section className="section section--white"><div className="container empty-state"><div className="empty-state__code" aria-hidden="true">404</div><h1>This page has moved out of the archive.</h1><p>The link may be outdated or the address may have been entered incorrectly. Return home or browse the complete service catalogue.</p><div className="button-row" style={{ justifyContent: 'center' }}><Button to="/" variant="dark">Return home</Button><Button to="/services" variant="ghost">Browse services</Button></div></div></section>
}
