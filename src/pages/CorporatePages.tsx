import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CallToAction } from '../components/common/CallToAction'
import { PageHero } from '../components/common/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { companyValues, industries, processSteps, representativeProjects, siteConfig, teamFunctions } from '../data/site'
import { useSeo } from '../hooks/useSeo'

export function AboutPage() {
  useSeo({ title: 'About Us', description: 'Company background, mission and team functions for Surya Amor Technology Sdn Bhd.', path: '/about' })
  return (
    <>
      <PageHero eyebrow="About Surya Amor" title="Digitization and information solutions from Kuala Lumpur." description="The legacy company website identifies document imaging and Geographic Information System services as SATSB's principal business activities." />
      <section className="section section--white">
        <div className="container intro-grid">
          <div className="prose">
            <h2>Company overview</h2>
            <p>Surya Amor Technology Sdn Bhd describes itself as a Malaysian company serving organizations through document imaging, digitization and Geographic Information System services. Its legacy website states that the company was incorporated in 2022.</p>
            <p>The same source says SATSB is based in Kuala Lumpur and brings together personnel with experience in document management and GIS. Current staffing and experience figures require owner confirmation.</p>
            <h2>Our mission</h2>
            <p>Our mission is to provide flexible, cost-effective and quality-focused services shaped around each customer's requirements. We aim to apply relevant developments in software and technology to deliver practical, competitive solutions.</p>
          </div>
          <aside className="intro-panel">
            <h3>Company information</h3>
            <p>Surya Amor Technology Sdn Bhd<br />Registration No.: {siteConfig.registrationNo}</p>
            <ul className="check-list">
              {[siteConfig.address, siteConfig.hours, siteConfig.closedHours].map((item) => <li key={item}><CheckCircle2 size={18} aria-hidden="true" />{item}</li>)}
            </ul>
          </aside>
        </div>
      </section>
      <section className="section section--tint">
        <div className="container">
          <SectionHeading eyebrow="Team structure" title="Functions supporting SATSB’s service delivery." description="The company profile identifies management, digitization, audiovisual conversion and technical support functions." split />
          <div className="grid grid--4">
            {teamFunctions.map((team, index) => <article className="card" key={team}><span className="card__tag">Team 0{index + 1}</span><h3>{team}</h3><p>A functional area supporting the company’s technology and digitization services.</p></article>)}
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  )
}

export function IndustriesPage() {
  useSeo({ title: 'Industries We Serve', description: 'Sectors represented by organizations displayed in SATSB’s legacy portfolio.', path: '/industries' })
  return (
    <>
      <PageHero eyebrow="Sectors represented" title="Institutional experience indicated by the legacy portfolio." description="The source names organizations across several Malaysian sectors, but does not publish SATSB's service scope, dates or outcomes for them." />
      <section className="section">
        <div className="container">
          <div className="grid grid--2">
            {industries.map(({ title, description, icon: Icon }) => (
              <article className="card" key={title}>
                <div className="card__icon"><Icon size={23} aria-hidden="true" /></div>
                <h3 style={{ marginTop: '1.25rem' }}>{title}</h3>
                <p>{description}</p>
                <Link className="card__link" to="/contact">Discuss your requirements <ArrowRight size={16} aria-hidden="true" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CallToAction title="Tell us about your organization and information needs." />
    </>
  )
}

export function ProjectsPage() {
  useSeo({ title: 'Projects & Experience', description: 'Organizations displayed in SATSB’s legacy credentials section, presented with clear context.', path: '/projects' })
  return (
    <>
      <PageHero eyebrow="Projects & experience" title="Legacy credentials, presented with their evidence limits." description="The existing company website displays these organization names but gives no engagement descriptions, dates, project values, outcomes or testimonials." />
      <section className="section section--white">
        <div className="container">
          <SectionHeading eyebrow="Credentials overview" title="Organizations displayed on the legacy website." description="The available source provides organization names without project descriptions, dates or outcomes." split />
          <div className="grid grid--3">
            {representativeProjects.map((project) => <article className="card" key={project.title}><p className="card__tag">{project.tag}</p><h3>{project.title}</h3><p>{project.description}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section section--tint">
        <div className="container content-layout">
          <div className="prose">
            <h2>How project information is presented</h2>
            <ul>
              <li>Organization or sector context</li>
              <li>Service category and project period</li>
              <li>Source material, scale and operating constraints</li>
              <li>Deliverables and measurable outcomes</li>
              <li>Relevant imagery or testimonials where available</li>
            </ul>
          </div>
          <aside className="aside-panel"><h2>Project enquiries</h2><p>Contact SATSB to discuss experience relevant to your organization’s requirements.</p><Link className="button button--ghost" to="/contact">Discuss a project</Link></aside>
        </div>
      </section>
      <CallToAction />
    </>
  )
}

export function TechnologyPage() {
  useSeo({ title: 'Solutions', description: 'SATSB solution areas covering document imaging, audiovisual conversion, records management, imaging consultation and GIS.', path: '/technology' })
  const areas = [
    { title: 'Document imaging', text: 'Scanning and indexing physical documents for delivery in an agreed digital format.' },
    { title: 'Audio & video conversion', text: 'Digital transfer for selected legacy carriers, with VHS, Betacam, audio cassette and data-storage tape referenced by the source.' },
    { title: 'Document & records management', text: 'Solutions intended to support document storage, organization, search, access and version control.' },
    { title: 'Imaging workflow consultation', text: 'Review of current imaging processes followed by improvement and technology recommendations.' },
    { title: 'Geographic Information System', text: 'GIS requirements shaped around the organization’s objectives, data environment and agreed project scope.' },
  ]
  return (
    <>
      <PageHero eyebrow="Solutions" title="Technology aligned with practical information needs." description="SATSB’s solution areas cover document imaging, audiovisual conversion, records management, workflow consultation and GIS requirements." />
      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            {areas.map((area, index) => <article className="card" key={area.title}><span className="card__tag">Solution 0{index + 1}</span><h3>{area.title}</h3><p>{area.text}</p></article>)}
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  )
}

export function ProcessPage() {
  useSeo({ title: 'Our Process', description: 'A proposed high-level delivery structure based on activities described across SATSB’s legacy service content.', path: '/process' })
  return (
    <>
      <PageHero eyebrow="Our process" title="From requirement to agreed output." description="A high-level sequence for understanding the requirement, defining an approach and completing the agreed work." />
      <section className="section section--white">
        <div className="container">
          <div className="grid grid--2">
            {processSteps.map((step) => <article className="card" key={step.number}><span className="card__tag">Stage {step.number}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  )
}

export function WhyUsPage() {
  useSeo({ title: 'Why Choose Us', description: 'Service commitments from Surya Amor Technology focused on flexible, practical and quality-conscious delivery.', path: '/why-us' })
  return (
    <>
      <PageHero eyebrow="Why choose us" title="Service commitments grounded in the company’s mission." description="SATSB emphasizes flexibility, cost-effective delivery, quality and awareness of relevant technology developments." />
      <section className="section">
        <div className="container">
          <div className="grid grid--4">
            {companyValues.map((reason, index) => <article className="card" key={reason.title}><span className="card__tag">0{index + 1}</span><h3>{reason.title}</h3><p>{reason.description}</p></article>)}
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  )
}

export function CareersPage() {
  useSeo({ title: 'Careers', description: 'Career information placeholder for Surya Amor Technology; no current vacancies are confirmed.', path: '/careers' })
  return (
    <>
      <PageHero eyebrow="Careers" title="Career opportunities at Surya Amor Technology." description="No current vacancies or dedicated recruitment channel are listed at this time." />
      <section className="section section--white">
        <div className="container content-layout">
          <div className="prose">
            <h2>Information required</h2>
            <p>Current vacancies and application details will be listed here when available.</p>
            <h2>Functions named on the legacy website</h2>
            <ul>{teamFunctions.map((team) => <li key={team}>{team}</li>)}</ul>
            <p>These team labels do not imply current vacancies.</p>
          </div>
          <aside className="aside-panel"><h2>Application safety</h2><p>Do not send identity documents or sensitive personal information through the general website form.</p><Link className="button button--ghost" to="/contact">General company contact</Link></aside>
        </div>
      </section>
    </>
  )
}
