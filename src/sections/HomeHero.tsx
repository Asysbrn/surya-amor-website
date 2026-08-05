import { CheckCircle2 } from 'lucide-react'
import heroImage from '../assets/images/hero-digitization-studio.png'
import { Button } from '../components/ui/Button'

export function HomeHero() {
  return (
    <section className="hero" aria-labelledby="home-hero-title">
      <img className="hero__image" src={heroImage} width="1664" height="941" alt="Illustrative document digitization studio with an overhead scanner, archival books and a large technical drawing" fetchPriority="high" />
      <div className="container hero__content">
        <div className="hero__copy">
          <p className="eyebrow">Digitization · Preservation · Technology</p>
          <h1 className="display" id="home-hero-title">Your records, ready for what comes next.</h1>
          <p className="lead">Surya Amor Technology helps organizations transform physical and legacy information into structured, searchable and sustainable digital assets.</p>
          <div className="button-row">
            <Button to="/contact" arrow>Plan your project</Button>
            <Button to="/services" variant="ghost">Explore capabilities</Button>
          </div>
          <div className="hero__proof" aria-label="Service principles">
            <span><CheckCircle2 size={16} aria-hidden="true" /> Collection-aware workflows</span>
            <span><CheckCircle2 size={16} aria-hidden="true" /> Quality-led delivery</span>
            <span><CheckCircle2 size={16} aria-hidden="true" /> On-site options</span>
          </div>
        </div>
      </div>
      <span className="hero__caption">AI-generated illustrative placeholder — replace before launch</span>
    </section>
  )
}
