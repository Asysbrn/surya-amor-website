import { ArrowRight, BriefcaseBusiness, CheckCircle2, Headphones, ScanLine, ShieldCheck, Video } from 'lucide-react'
import { Link } from 'react-router-dom'
import documentDigitizationImage from '../assets/images/document-digitization.webp'
import imagingConsultationImage from '../assets/images/imaging-consultation.webp'
import scannerHardwareImage from '../assets/images/scanner-it-hardware.webp'
import { CallToAction } from '../components/common/CallToAction'
import { DigitizationWorkflow } from '../components/common/DigitizationWorkflow'
import { IndustryShowcase } from '../components/common/IndustryShowcase'
import { PageHero } from '../components/common/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { clientLogos } from '../data/clients'
import { ClientLogoGrid } from '../components/common/ClientLogoGrid'
import { companyValues, processSteps, siteConfig, teamFunctions } from '../data/site'
import { useSeo } from '../hooks/useSeo'

export function AboutPage() {
  useSeo({ title: 'About Us', description: 'Company background, mission and team functions for Surya Amor Technology Sdn Bhd.', path: '/about' })
  return (
    <>
      <PageHero eyebrow="About Surya Amor" title="Digitization and information solutions from Kuala Lumpur." description="Document digitization, audiovisual, GIS and related technology services." image={documentDigitizationImage} imageAlt="Document digitization operator working with business records and scanning equipment" />
      <section className="section section--white">
        <div className="container intro-grid">
          <div className="prose">
            <h2>Company overview</h2>
            <p>Surya Amor Technology Sdn Bhd is a Malaysian company established in 2022, providing document imaging, digitization and Geographic Information System services from Kuala Lumpur.</p>
            <h2>Our mission</h2>
            <p>We provide flexible, cost-effective and quality-focused services shaped around customer requirements and relevant technology.</p>
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
      <section className="section section--dark section--grid">
        <div className="container about-story">
          <div className="about-story__copy about-reveal">
            <p className="eyebrow">What we do</p>
            <h2 className="heading">Connect physical information with practical digital access.</h2>
            <p className="lead">Projects begin with the source material and the digital result the organisation needs.</p>
            <ul className="about-points">
              <li><CheckCircle2 size={18} aria-hidden="true" /><span><strong>Source-aware planning</strong> considers format, condition, quantity and handling needs.</span></li>
              <li><CheckCircle2 size={18} aria-hidden="true" /><span><strong>Purpose-led delivery</strong> defines how information should be accessed, searched or transferred.</span></li>
              <li><CheckCircle2 size={18} aria-hidden="true" /><span><strong>Technology-conscious execution</strong> applies suitable tools to the agreed workflow and intended output.</span></li>
            </ul>
          </div>
          <div className="about-gallery about-reveal">
            <figure className="about-gallery__main"><img src={imagingConsultationImage} alt="Specialists reviewing a document imaging workflow" loading="lazy" /></figure>
            <figure className="about-gallery__small"><img src={scannerHardwareImage} alt="Technician configuring professional scanning hardware" loading="lazy" /></figure>
          </div>
        </div>
      </section>
      <section className="section section--white">
        <div className="container about-profile">
          <div className="about-reveal"><DigitizationWorkflow /></div>
          <div className="about-profile__copy about-reveal">
            <p className="eyebrow">How information moves</p>
            <h2 className="heading">A clear path from source to digital output.</h2>
            <p className="lead">This four-stage view shows how source material can move from preparation and capture through structuring and agreed digital delivery.</p>
            <div className="button-row"><Link className="button button--ghost" to="/process">Explore our delivery process <ArrowRight size={16} aria-hidden="true" /></Link></div>
          </div>
        </div>
      </section>
      <section className="section section--tint">
        <div className="container">
          <SectionHeading eyebrow="Team structure" title="Functions supporting SATSB’s service delivery." description="The company profile identifies management, digitization, audiovisual conversion and technical support functions." split />
          <div className="grid grid--4">
            {teamFunctions.map((team, index) => <article className="card" key={team}><span className="card__tag">Team 0{index + 1}</span><h3>{team}</h3></article>)}
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  )
}

export function IndustriesPage() {
  useSeo({ title: 'Industries We Serve', description: 'Digitization, scanning and information-management applications across institutional sectors.', path: '/industries' })
  return (
    <>
      <PageHero eyebrow="Industries we serve" title="Information workflows shaped around each sector." description="Different information environments call for a considered digitization approach." />
      <section className="section section--white industries-page">
        <div className="container">
          <SectionHeading eyebrow="Sector perspectives" title="One service framework, many information environments." description="The source materials and intended result differ by sector. SATSB begins with the collection, workflow and access outcome required." split />
          <IndustryShowcase destination="/contact" />
        </div>
      </section>
      <CallToAction title="Tell us about your organization and information needs." />
    </>
  )
}

export function ClientsPage() {
  useSeo({ title: 'Clients', description: 'Client logos supplied and approved for display by Surya Amor Technology.', path: '/clients' })
  return (
    <section className="clients-page" aria-labelledby="clients-page-title">
      <div className="container">
        <header className="clients-page__heading"><p className="eyebrow">Our clients</p><h1 id="clients-page-title">Organisations we have supported.</h1></header>
        <ClientLogoGrid logos={clientLogos} />
        <div className="clients-page__note"><h2>Built on trust</h2><p>We value the trust our clients place in us. Their positive feedback motivates us to keep delivering reliable, professional and quality-focused solutions.</p></div>
      </div>
    </section>
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
  const functionIcons = [BriefcaseBusiness, ScanLine, Video, Headphones]
  useSeo({ title: 'Careers', description: 'Career information and functional areas at Surya Amor Technology.', path: '/careers' })
  return (
    <>
      <PageHero eyebrow="Careers" title="Build practical technology and digitization capability." description="Learn about the functions that support SATSB’s work and use the company contact channel for career-related enquiries." image={documentDigitizationImage} imageAlt="Document digitization workspace with professional scanning equipment" />
      <section className="section section--white careers-functions">
        <div className="container">
          <div className="careers-functions__heading">
            <div><p className="eyebrow">Our teams</p><h2 className="heading">Functions within SATSB</h2></div>
            <p className="lead">SATSB’s work brings together project coordination, document digitization, audiovisual conversion and technical support.</p>
          </div>
          <div className="careers-function-grid">
            {teamFunctions.map((team, index) => {
              const Icon = functionIcons[index]
              return <article className="careers-function" key={team}><div className="careers-function__top"><span>0{index + 1}</span><Icon size={24} aria-hidden="true" /></div><h3>{team}</h3></article>
            })}
          </div>
        </div>
      </section>
      <section className="section section--dark section--grid careers-contact">
        <div className="container careers-contact__layout">
          <div>
            <p className="eyebrow">Future opportunities</p>
            <h2 className="heading">Stay connected through SATSB’s official channel.</h2>
            <p className="lead">Career opportunities are communicated through SATSB’s official contact channels when roles become available.</p>
            <div className="button-row"><Link className="button button--primary" to="/contact">General company contact <ArrowRight size={16} aria-hidden="true" /></Link></div>
          </div>
          <aside className="careers-safety"><ShieldCheck size={30} aria-hidden="true" /><div><h2>Application safety</h2><p>Do not send identity documents or sensitive personal information through the general website form.</p></div></aside>
        </div>
      </section>
    </>
  )
}
