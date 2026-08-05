import { ArrowRight, CheckCircle2, CircleAlert, FileScan, Images, Map, ServerCog } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProjectCard, ServiceCard } from '../components/common/Cards'
import { ConfirmationNotice } from '../components/common/ConfirmationNotice'
import { Button } from '../components/ui/Button'
import { SectionHeading } from '../components/ui/SectionHeading'
import { featuredServices } from '../data/services'
import { companyValues, industries, processSteps, representativeProjects } from '../data/site'

export function IntroductionSection() {
  return (
    <section className="section section--white">
      <div className="container intro-grid">
        <div>
          <p className="eyebrow">About Surya Amor Technology</p>
          <h2 className="heading">A Malaysian company focused on digitization and information solutions.</h2>
          <p className="lead">The legacy company website states that SATSB was incorporated in 2022 and provides document imaging and Geographic Information System services for organizations in Malaysia.</p>
          <div className="button-row"><Button to="/about" variant="ghost" arrow>Read our company profile</Button></div>
        </div>
        <aside className="intro-panel">
          <h3>Our published mission</h3>
          <p>To provide flexible, cost-effective and quality-focused services shaped around customer requirements, while applying relevant developments in software and technology.</p>
          <ul className="check-list">
            {['Flexible service', 'Cost-conscious planning', 'Quality focus', 'Technology awareness'].map((item) => <li key={item}><CheckCircle2 size={18} aria-hidden="true" />{item}</li>)}
          </ul>
          <p className="microcopy">Rewritten from the legacy website; formal owner approval is required before launch.</p>
        </aside>
      </div>
    </section>
  )
}

export function ServicesSection() {
  return (
    <section className="section section--tint">
      <div className="container">
        <SectionHeading eyebrow="Published service areas" title="Focused capabilities for physical and legacy information." description="These five areas are explicitly named on SATSB's legacy website. Detailed specifications remain subject to project requirements and owner confirmation." split />
        <div className="grid grid--3">{featuredServices.map((service) => <ServiceCard key={service.slug} service={service} />)}</div>
        <div className="button-row"><Button to="/services" variant="dark" arrow>View all 5 service areas</Button></div>
      </div>
    </section>
  )
}

export function IndustriesSection() {
  return (
    <section className="section section--white">
      <div className="container">
        <SectionHeading eyebrow="Sectors represented" title="Experience indicated across Malaysian institutions." description="These sectors are derived only from organizations displayed in the legacy portfolio. Project scope, outcomes and publication permission still require confirmation." split />
        <div className="industry-grid">
          {industries.map(({ title, description, icon: Icon }) => <article className="industry-item" key={title}><Icon size={25} aria-hidden="true" /><h3>{title}</h3><p>{description}</p></article>)}
        </div>
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
          <p className="eyebrow">Published service commitments</p>
          <h2 className="heading">Flexible, cost-conscious and quality-focused.</h2>
          <p className="lead">These themes are drawn from SATSB's published mission. They should be approved as formal company commitments before production launch.</p>
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
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Proposed delivery structure" title="A practical path from requirement to agreed output." description="The legacy site describes these activities across individual services, but does not publish one formal company-wide process." split />
        <div className="process-line">{processSteps.map((step) => <article className="process-step" key={step.number}><span className="process-step__number">{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div>
        <ConfirmationNotice>This proposed sequence requires owner approval. Quality gates, custody controls, acceptance testing and support arrangements have not been supplied.</ConfirmationNotice>
        <div className="button-row"><Button to="/process" variant="ghost" arrow>Review the proposed process</Button></div>
      </div>
    </section>
  )
}

export function ProjectsSection() {
  return (
    <section className="section section--white">
      <div className="container">
        <SectionHeading eyebrow="Legacy credentials listing" title="Organizations named by the existing company website." description="The source provides names only—not services, dates, results or endorsements. Three of nine legacy listings are shown here." split />
        <div className="grid grid--3">{representativeProjects.slice(0, 3).map((project) => <ProjectCard key={project.title} {...project} />)}</div>
        <ConfirmationNotice>Every organization name and any future logo requires owner confirmation and publication permission before production launch.</ConfirmationNotice>
      </div>
    </section>
  )
}

export function TechnologySection() {
  const capabilities = [
    { icon: FileScan, title: 'Document digitization', text: 'Scanning, indexing and agreed digital output for physical records.' },
    { icon: Images, title: 'Imaging consultation', text: 'Assessment, improvement opportunities, technology recommendations and implementation planning.' },
    { icon: ServerCog, title: 'Information management', text: 'Document and records solutions intended to improve organization, search and access.' },
    { icon: Map, title: 'GIS', text: 'Listed as a principal business activity; capabilities and deliverables must be supplied by the owner.' },
  ]
  return (
    <section className="section section--tint">
      <div className="container">
        <SectionHeading eyebrow="Solutions" title="Technology applied to information access and workflow." description="The source supports these high-level solution areas but does not name products, platforms, certifications or technology partners." split />
        <div className="grid grid--4">{capabilities.map(({ icon: Icon, title, text }) => <article className="card" key={title}><div className="card__icon"><Icon size={22} aria-hidden="true" /></div><h3 style={{ marginTop: '1.25rem' }}>{title}</h3><p>{text}</p></article>)}</div>
        <div className="button-row"><Button to="/technology" variant="dark" arrow>Explore solutions</Button></div>
      </div>
    </section>
  )
}

export function TrustSection() {
  return (
    <section className="section section--white">
      <div className="container">
        <SectionHeading eyebrow="Publication controls" title="Claims must be supported before they become credentials." description="The legacy site contains quantitative, certification and security claims that remain excluded from the new website until evidence is approved." />
        <div className="trust-bar">
          <div className="trust-bar__intro"><CircleAlert size={20} aria-hidden="true" /><br />Owner verification required</div>
          {['Client permissions', 'Quality evidence', 'Security practices', 'Certifications'].map((item) => <div className="trust-placeholder" key={item}>{item}<br />to be supplied</div>)}
        </div>
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
          <p className="lead">The legacy website states that project pricing is prepared around each customer's requirements, objectives and budget.</p>
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
