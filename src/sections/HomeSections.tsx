import { ArrowRight, CheckCircle2, FileScan, Layers3, MessageSquareText, PackageCheck, Route, ScanLine, ScanSearch, ScanText, ServerCog } from 'lucide-react'
import { Link } from 'react-router-dom'
import systemsImage from '../assets/images/service-information-systems.png'
import { ServiceCard } from '../components/common/Cards'
import { ClientLogoGrid } from '../components/common/ClientLogoGrid'
import { IndustryShowcase } from '../components/common/IndustryShowcase'
import { Button } from '../components/ui/Button'
import { SectionHeading } from '../components/ui/SectionHeading'
import { featuredServices } from '../data/services'
import { featuredClientLogos } from '../data/clients'
import { companyValues, processSteps } from '../data/site'

export function IntroductionSection() {
  return (
    <section className="section section--white">
      <div className="container intro-grid">
        <div>
          <p className="eyebrow">About Surya Amor Technology</p>
          <h2 className="heading">A Malaysian company focused on digitization and information solutions.</h2>
          <p className="lead">Established in 2022, SATSB provides document imaging and Geographic Information System services for organizations in Malaysia.</p>
          <div className="button-row"><Button to="/about" variant="ghost" arrow>Read our company profile</Button></div>
        </div>
        <aside className="intro-panel">
          <h3>Our mission</h3>
          <p>Flexible, cost-effective and quality-focused services shaped around customer requirements and relevant technology.</p>
          <ul className="check-list">
            {['Flexible service', 'Cost-conscious planning', 'Quality focus', 'Technology awareness'].map((item) => <li key={item}><CheckCircle2 size={18} aria-hidden="true" />{item}</li>)}
          </ul>
        </aside>
      </div>
    </section>
  )
}

export function ServicesSection() {
  return (
    <section className="section section--tint">
      <div className="container">
        <SectionHeading eyebrow="Complete capability catalogue" title="Focused services for physical and legacy information." description="The catalogue brings together SATSB’s scanning, conversion, information-management and technology capabilities." split />
        <div className="grid grid--3">{featuredServices.map((service) => <ServiceCard key={service.slug} service={service} />)}</div>
        <div className="button-row"><Button to="/services" variant="dark" arrow>View all service areas</Button></div>
      </div>
    </section>
  )
}

export function FormatCoverageSection() {
  const formats = [
    { icon: FileScan, title: 'Paper & bound records', text: 'Documents, books, photographs, plans and other agreed physical records.' },
    { icon: Layers3, title: 'Film & legacy media', text: 'Microfilm, microfiche, VHS, Betacam, audio cassette and selected tapes.' },
    { icon: ScanText, title: 'Searchable information', text: 'OCR, ICR, indexing and searchable output where suitable and agreed.' },
    { icon: ServerCog, title: 'Managed digital access', text: 'Records integration, data conversion, GIS and software-development requirements.' },
  ]
  return (
    <section className="section section--dark section--grid">
      <div className="container showcase-split">
        <div className="showcase-image"><img src={systemsImage} alt="Enterprise scanning and information-management workstation" loading="lazy" /></div>
        <div>
          <p className="eyebrow">Information in every form</p>
          <h2 className="heading">One connected view of capture, conversion and access.</h2>
          <p className="lead">From physical records and legacy carriers to the systems used to organise digital information.</p>
          <div className="format-list">{formats.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={20} aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </div>
      </div>
    </section>
  )
}

export function IndustriesSection() {
  return (
    <section className="section section--white industries-home">
      <div className="container">
        <SectionHeading eyebrow="Industries we serve" title="Information needs vary. The approach should too." description="Capture, conversion and records capabilities across public, cultural, technical and corporate settings." split />
        <IndustryShowcase />
        <div className="button-row"><Button to="/industries" variant="ghost" arrow>Review represented sectors</Button></div>
      </div>
    </section>
  )
}

export function WhySection() {
  return (
    <section className="section section--dark section--grid">
      <div className="container principles">
        <div>
          <p className="eyebrow">Service commitments</p>
          <h2 className="heading">Flexible, cost-conscious and quality-focused.</h2>
          <p className="lead">Practical services aligned with customer requirements.</p>
          <div className="button-row"><Button to="/why-us" variant="ghost" arrow>Why choose SATSB</Button></div>
        </div>
        <div className="principle-list">
          {companyValues.map((value, index) => <article className="principle" key={value.title}><span className="principle__number">0{index + 1}</span><div><h3>{value.title}</h3><p>{value.description}</p></div></article>)}
        </div>
      </div>
    </section>
  )
}

export function ProcessSection() {
  const processIcons = [MessageSquareText, ScanSearch, Route, ScanLine, PackageCheck]
  return (
    <section className="section process-section">
      <div className="container">
        <SectionHeading eyebrow="Delivery structure" title="A practical path from requirement to agreed output." description="Five clear stages from initial requirement to delivery." split />
        <div className="process-shell">
          <div className="process-line">{processSteps.map((step, index) => {
            const Icon = processIcons[index]
            return <article className="process-step" key={step.number}><div className="process-step__top"><span className="process-step__number">{step.number}</span><span className="process-step__icon"><Icon size={22} aria-hidden="true" /></span></div><h3>{step.title}</h3><p>{step.description}</p></article>
          })}</div>
        </div>
        <div className="button-row"><Button to="/process" variant="ghost" arrow>Review the proposed process</Button></div>
      </div>
    </section>
  )
}

export function ClientsSection() {
  return (
    <section className="section section--white">
      <div className="container">
        <SectionHeading eyebrow="Clients" title="Organizations represented by SATSB." description="A selection from SATSB’s client portfolio." split />
        <ClientLogoGrid logos={featuredClientLogos} />
        <div className="button-row"><Button to="/clients" variant="ghost" arrow>View our clients</Button></div>
      </div>
    </section>
  )
}

export function ContactPreviewSection() {
  return (
    <section className="section section--dark">
      <div className="container intro-grid">
        <div>
          <p className="eyebrow">Request a quotation</p>
          <h2 className="heading">Discuss your requirements with SATSB.</h2>
          <p className="lead">Project planning is shaped around the requirement, objective and budget.</p>
        </div>
        <div className="intro-panel" style={{ background: '#0d304b' }}>
          <h3>Helpful details for an initial discussion</h3>
          <ul className="check-list">
            {['Type of documents or media', 'Approximate quantity', 'Current workflow or access issue', 'Preferred digital result'].map((item) => <li key={item}><CheckCircle2 size={18} aria-hidden="true" />{item}</li>)}
          </ul>
          <Link className="card__link" style={{ color: '#5eead4' }} to="/contact">Open the enquiry form <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  )
}
