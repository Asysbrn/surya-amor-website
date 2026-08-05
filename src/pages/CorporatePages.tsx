import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CallToAction } from '../components/common/CallToAction'
import { ConfirmationNotice } from '../components/common/ConfirmationNotice'
import { PageHero } from '../components/common/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { companyValues, industries, processSteps, representativeProjects, teamFunctions } from '../data/site'
import { useSeo } from '../hooks/useSeo'

export function AboutPage() {
  useSeo({ title: 'About Us', description: 'Company background, published mission and team functions for Surya Amor Technology Sdn Bhd.', path: '/about' })
  return (
    <>
      <PageHero eyebrow="About Surya Amor" title="Digitization and information solutions from Kuala Lumpur." description="The legacy company website identifies document imaging and Geographic Information System services as SATSB's principal business activities." />
      <section className="section section--white">
        <div className="container intro-grid">
          <div className="prose">
            <h2>Company overview</h2>
            <p>Surya Amor Technology Sdn Bhd describes itself as a Malaysian company serving organizations through document imaging, digitization and Geographic Information System services. Its legacy website states that the company was incorporated in 2022.</p>
            <p>The same source says SATSB is based in Kuala Lumpur and brings together personnel with experience in document management and GIS. Current staffing and experience figures require owner confirmation.</p>
            <h2>Published mission</h2>
            <p>Our mission is to provide flexible, cost-effective and quality-focused services shaped around each customer's requirements. We aim to apply relevant developments in software and technology to deliver practical, competitive solutions.</p>
          </div>
          <aside className="intro-panel">
            <h3>Company facts to complete</h3>
            <p>The following information was missing, inconsistent or not independently verified.</p>
            <ul className="check-list">
              {['Confirm the 2022 incorporation statement', 'Provide the official registration number', 'Resolve the T2A / T02A unit-number conflict', 'Provide an approved company vision'].map((item) => <li key={item}><CheckCircle2 size={18} aria-hidden="true" />{item}</li>)}
            </ul>
          </aside>
        </div>
      </section>
      <section className="section section--tint">
        <div className="container">
          <SectionHeading eyebrow="Published team structure" title="Functions named by the legacy company website." description="No employee names, biographies or approved team photographs were supplied." split />
          <div className="grid grid--4">
            {teamFunctions.map((team, index) => <article className="card" key={team}><span className="card__tag">Team 0{index + 1}</span><h3>{team}</h3><p>Current structure, staffing and responsibilities require owner confirmation.</p></article>)}
          </div>
          <ConfirmationNotice>The mission rewrite, incorporation year, staffing statements, team structure and experience claims all require final owner review before publication.</ConfirmationNotice>
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
          <ConfirmationNotice>Industry inclusion does not establish a completed project, endorsement or current client relationship. Owner confirmation and publication permission are required.</ConfirmationNotice>
        </div>
      </section>
      <CallToAction title="Tell us about your organization and information needs." />
    </>
  )
}

export function ProjectsPage() {
  useSeo({ title: 'Projects & Experience', description: 'Organizations displayed in SATSB’s legacy credentials section, pending project verification and publication approval.', path: '/projects' })
  return (
    <>
      <PageHero eyebrow="Projects & experience" title="Legacy credentials, presented with their evidence limits." description="The existing company website displays these organization names but gives no engagement descriptions, dates, project values, outcomes or testimonials." />
      <section className="section section--white">
        <div className="container">
          <SectionHeading eyebrow="Requires owner confirmation" title="Organizations displayed on the legacy website." description="Names are shown as a review inventory only. No relationship, service or endorsement is claimed by the new website." split />
          <div className="grid grid--3">
            {representativeProjects.map((project) => <article className="card" key={project.title}><p className="card__tag">{project.tag}</p><h3>{project.title}</h3><p>{project.description}</p></article>)}
          </div>
          <ConfirmationNotice>Before launch, confirm the official organization name, relationship, delivered service, date, scope, outcome, confidentiality limits and permission to publish each name or logo.</ConfirmationNotice>
        </div>
      </section>
      <section className="section section--tint">
        <div className="container content-layout">
          <div className="prose">
            <h2>Approved project information needed</h2>
            <ul>
              <li>Client or sector name approved for publication</li>
              <li>Service delivered and project period</li>
              <li>Source material, scale and operating constraints</li>
              <li>Approved deliverables and measurable outcomes</li>
              <li>Written permission for names, logos, images and testimonials</li>
            </ul>
          </div>
          <aside className="aside-panel"><h2>Current status</h2><p>[COMPANY OWNER TO PROVIDE APPROVED CASE STUDIES]</p></aside>
        </div>
      </section>
      <CallToAction />
    </>
  )
}

export function TechnologyPage() {
  useSeo({ title: 'Solutions', description: 'Published SATSB solution areas covering document imaging, audiovisual conversion, records management, imaging consultation and GIS.', path: '/technology' })
  const areas = [
    { title: 'Document imaging', text: 'Scanning and indexing physical documents for delivery in an agreed digital format.' },
    { title: 'Audio & video conversion', text: 'Digital transfer for selected legacy carriers, with VHS, Betacam, audio cassette and data-storage tape referenced by the source.' },
    { title: 'Document & records management', text: 'Solutions intended to support document storage, organization, search, access and version control.' },
    { title: 'Imaging workflow consultation', text: 'Review of current imaging processes followed by improvement and technology recommendations.' },
    { title: 'Geographic Information System', text: '[COMPANY OWNER TO PROVIDE GIS CAPABILITIES, USE CASES, PLATFORMS AND DELIVERABLES]' },
  ]
  return (
    <>
      <PageHero eyebrow="Solutions" title="Published capabilities, without unsupported product claims." description="SATSB's legacy website supports these solution categories but does not name products, platforms, partners, certifications or detailed implementation specifications." />
      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            {areas.map((area, index) => <article className="card" key={area.title}><span className="card__tag">Solution 0{index + 1}</span><h3>{area.title}</h3><p>{area.text}</p></article>)}
          </div>
          <ConfirmationNotice>Confirm scanner types, supported formats, software products, GIS scope, deployment models, security controls, integrations, training and support before adding technical detail.</ConfirmationNotice>
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
      <PageHero eyebrow="Proposed process" title="From requirement to agreed output." description="The legacy website does not publish a formal company-wide process. This high-level sequence organizes activities mentioned across its service descriptions." />
      <section className="section section--white">
        <div className="container">
          <div className="grid grid--2">
            {processSteps.map((step) => <article className="card" key={step.number}><span className="card__tag">Stage {step.number}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}
          </div>
          <ConfirmationNotice>[COMPANY OWNER TO CONFIRM THE DELIVERY PROCESS, RESPONSIBILITIES, QUALITY GATES, CUSTODY CONTROLS, ACCEPTANCE METHOD AND SUPPORT MODEL]</ConfirmationNotice>
        </div>
      </section>
      <CallToAction />
    </>
  )
}

export function WhyUsPage() {
  useSeo({ title: 'Why Choose Us', description: 'Service commitments published by Surya Amor Technology, with unsupported claims withheld pending evidence.', path: '/why-us' })
  return (
    <>
      <PageHero eyebrow="Why choose us" title="Service commitments grounded in the company’s published mission." description="SATSB emphasizes flexibility, cost-effective delivery, quality and awareness of relevant technology developments." />
      <section className="section">
        <div className="container">
          <div className="grid grid--4">
            {companyValues.map((reason, index) => <article className="card" key={reason.title}><span className="card__tag">0{index + 1}</span><h3>{reason.title}</h3><p>{reason.description}</p></article>)}
          </div>
          <ConfirmationNotice>The legacy site also claims 99% client satisfaction, certified professionals, proprietary software and detailed experience figures. These are intentionally excluded until dated evidence is supplied and approved.</ConfirmationNotice>
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
      <PageHero eyebrow="Careers" title="No confirmed vacancies are currently published." description="The legacy website describes team functions but does not advertise open positions or provide an approved recruitment channel." />
      <section className="section section--white">
        <div className="container content-layout">
          <div className="prose">
            <h2>Information required</h2>
            <p>[COMPANY OWNER TO PROVIDE CURRENT VACANCIES, EMPLOYMENT DETAILS AND AN APPROVED APPLICATION CHANNEL]</p>
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
