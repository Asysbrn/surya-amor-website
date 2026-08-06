import { CheckCircle2 } from 'lucide-react'
import heroImage from '../assets/images/service-document-studio.png'
import { Button } from '../components/ui/Button'

export function HomeHero() {
  return (
    <section className="hero" aria-labelledby="home-hero-title">
      <img className="hero__image" src={heroImage} width="1664" height="941" alt="Illustrative document digitization studio with an overhead scanner, archival books and a large technical drawing" fetchPriority="high" />
      <div className="container hero__content">
        <div className="hero__copy">
          <p className="eyebrow">Document imaging · Digital conversion · Information systems</p>
          <h1 className="display" id="home-hero-title">Turn physical and legacy information into usable digital resources.</h1>
          <p className="lead">Surya Amor Technology Sdn Bhd provides document digitization, audiovisual conversion, information-management and imaging consultation services from Kuala Lumpur.</p>
          <div className="button-row">
            <Button to="/contact" arrow>Request a consultation</Button>
            <Button to="/services" variant="ghost">Explore services</Button>
          </div>
          <div className="hero__proof" aria-label="Core service areas">
            <span><CheckCircle2 size={16} aria-hidden="true" /> Document digitization</span>
            <span><CheckCircle2 size={16} aria-hidden="true" /> Audio & video transfer</span>
            <span><CheckCircle2 size={16} aria-hidden="true" /> Records solutions</span>
            <span><CheckCircle2 size={16} aria-hidden="true" /> OCR & data conversion</span>
          </div>
        </div>
      </div>
      <span className="hero__caption">AI-generated illustrative placeholder — replace with an approved company image before launch</span>
    </section>
  )
}
