import { ArrowRight, CheckCircle2, CircleAlert, Cpu, FileSearch, Layers3, ShieldCheck } from 'lucide-react'
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
          <p className="eyebrow">Information transformed with intent</p>
          <h2 className="heading">More than scanning. A clearer path from physical record to useful information.</h2>
          <p className="lead">Every collection carries different risks, formats and access needs. We shape the capture, indexing, quality and delivery workflow around how your information needs to work.</p>
          <div className="button-row"><Button to="/about" variant="ghost" arrow>Meet Surya Amor</Button></div>
        </div>
        <aside className="intro-panel">
          <h3>One connected digitization workflow</h3>
          <p>From the first sample to final handover, the focus stays on control, usability and transparent decision-making.</p>
          <ul className="check-list">
            {['Assessment before production', 'Handling rules suited to the collection', 'Metadata and output profiles defined early', 'Quality evidence prepared for handover'].map((item) => <li key={item}><CheckCircle2 size={18} aria-hidden="true" />{item}</li>)}
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
        <SectionHeading eyebrow="Core capabilities" title="Built around the information you need to protect and use." description="Start with the outcome. We’ll connect the right capture, conversion, indexing and technology capabilities around it." split />
        <div className="grid grid--3">{featuredServices.map((service) => <ServiceCard key={service.slug} service={service} />)}</div>
        <div className="button-row"><Button to="/services" variant="dark" arrow>View all 16 capability areas</Button></div>
      </div>
    </section>
  )
}

export function IndustriesSection() {
  return (
    <section className="section section--white">
      <div className="container">
        <SectionHeading eyebrow="Who we serve" title="Workflows for collections that cannot be treated as ordinary paperwork." description="The right approach considers the institution, material, access expectations and information risks together." split />
        <div className="industry-grid">
          {industries.slice(0, 8).map(({ title, description, icon: Icon }) => <article className="industry-item" key={title}><Icon size={25} aria-hidden="true" /><h3>{title}</h3><p>{description}</p></article>)}
        </div>
        <div className="button-row"><Button to="/industries" variant="ghost" arrow>Explore industry needs</Button></div>
      </div>
    </section>
  )
}

export function WhySection() {
  return (
    <section className="section section--dark section--grid">
      <div className="container principles">
        <div>
          <p className="eyebrow">Why Surya Amor</p>
          <h2 className="heading">Calm control for complex collections.</h2>
          <p className="lead">Our working principles are designed to make project decisions visible and outcomes easier to trust.</p>
          <div className="button-row"><Button to="/why-us" variant="ghost" arrow>How we work</Button></div>
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
        <SectionHeading eyebrow="A clear delivery model" title="From first sample to confident handover." description="A six-stage model keeps requirements, exceptions and quality visible throughout the work." split />
        <div className="process-line">{processSteps.map((step) => <article className="process-step" key={step.number}><span className="process-step__number">{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div>
        <div className="button-row"><Button to="/process" variant="ghost" arrow>See the full process</Button></div>
      </div>
    </section>
  )
}

export function ProjectsSection() {
  return (
    <section className="section section--white">
      <div className="container">
        <SectionHeading eyebrow="Project-ready experience" title="A portfolio built on verified outcomes—not unsupported claims." description="Until approved case studies are supplied, these cards show the kinds of engagements the website is ready to present." split />
        <div className="grid grid--3">{representativeProjects.map((project) => <ProjectCard key={project.title} {...project} />)}</div>
        <ConfirmationNotice>These are representative engagement formats, not claims of completed Surya Amor Technology projects. Replace them with approved case studies, figures and client permissions before launch.</ConfirmationNotice>
      </div>
    </section>
  )
}

export function TechnologySection() {
  const capabilities = [
    { icon: FileSearch, title: 'Capture & recognition', text: 'Equipment and processing profiles selected around source formats and output requirements.' },
    { icon: Layers3, title: 'Information structure', text: 'Metadata, naming and packaging that make delivered collections easier to navigate.' },
    { icon: ShieldCheck, title: 'Quality & integrity', text: 'Checks, manifests and exceptions aligned to the agreed acceptance approach.' },
    { icon: Cpu, title: 'Systems & integration', text: 'Practical software and information-management capabilities for the next workflow.' },
  ]
  return (
    <section className="section section--tint">
      <div className="container">
        <SectionHeading eyebrow="Technology with a purpose" title="Tools chosen for the collection—not for the brochure." description="We begin with material, risk, volume and intended use, then shape the appropriate technology approach." split />
        <div className="grid grid--4">{capabilities.map(({ icon: Icon, title, text }) => <article className="card" key={title}><div className="card__icon"><Icon size={22} aria-hidden="true" /></div><h3 style={{ marginTop: '1.25rem' }}>{title}</h3><p>{text}</p></article>)}</div>
        <div className="button-row"><Button to="/technology" variant="dark" arrow>Explore technology & solutions</Button></div>
      </div>
    </section>
  )
}

export function TrustSection() {
  return (
    <section className="section section--white">
      <div className="container">
        <SectionHeading eyebrow="Trust must be earned" title="A place for approved client evidence." description="This section is intentionally transparent while company references are being gathered." />
        <div className="trust-bar">
          <div className="trust-bar__intro"><CircleAlert size={20} aria-hidden="true" /><br />Client logos require written approval</div>
          {['Approved client logo', 'Verified certification', 'Partner mark', 'Approved testimonial'].map((item) => <div className="trust-placeholder" key={item}>{item}<br />to be supplied</div>)}
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
          <p className="eyebrow">Start with the collection</p>
          <h2 className="heading">Tell us what you hold—and what it needs to become.</h2>
          <p className="lead">A useful first conversation covers format, approximate volume, condition, location, target output and how the digital collection will be used.</p>
        </div>
        <div className="intro-panel" style={{ background: '#0d304b' }}>
          <h3>Helpful details for an initial review</h3>
          <ul className="check-list">
            {['Record and carrier types', 'Approximate quantities or shelf space', 'On-site or off-site constraints', 'Search, metadata or system needs'].map((item) => <li key={item}><CheckCircle2 size={18} aria-hidden="true" />{item}</li>)}
          </ul>
          <Link className="card__link" style={{ color: '#5eead4' }} to="/contact">Open the project enquiry form <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  )
}
