import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import documentDigitizationImage from '../assets/images/document-digitization.webp'
import imagingConsultationImage from '../assets/images/imaging-consultation.webp'
import scannerHardwareImage from '../assets/images/scanner-it-hardware.webp'
import { CallToAction } from '../components/common/CallToAction'
import { ProjectCard } from '../components/common/Cards'
import { DigitizationWorkflow } from '../components/common/DigitizationWorkflow'
import { IndustryShowcase } from '../components/common/IndustryShowcase'
import { PageHero } from '../components/common/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { companyValues, processSteps, representativeProjects, siteConfig, teamFunctions } from '../data/site'
import { useSeo } from '../hooks/useSeo'

export function AboutPage() {
  useSeo({ title: 'About Us', description: 'Company background, mission and team functions for Surya Amor Technology Sdn Bhd.', path: '/about' })
  return (
    <>
      <PageHero eyebrow="About Surya Amor" title="Digitization and information solutions from Kuala Lumpur." description="SATSB’s principal business activities span document imaging, digitization and Geographic Information System services." image={documentDigitizationImage} imageAlt="Document digitization operator working with business records and scanning equipment" />
      <section className="section section--white">
        <div className="container intro-grid">
          <div className="prose">
            <h2>Company overview</h2>
            <p>Surya Amor Technology Sdn Bhd is a Malaysian company serving organizations through document imaging, digitization and Geographic Information System services. The company was incorporated in 2022.</p>
            <p>SATSB is based in Kuala Lumpur and brings together management, digitization, audiovisual conversion and technical-support functions around its document-management and GIS activities.</p>
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
      <section className="section section--dark section--grid">
        <div className="container about-story">
          <div className="about-story__copy about-reveal">
            <p className="eyebrow">What we do</p>
            <h2 className="heading">Connect physical information with practical digital access.</h2>
            <p className="lead">SATSB works across document imaging, legacy-media conversion, information management, imaging consultation and GIS requirements. Projects begin with the source material and the result the organization needs to achieve.</p>
            <ul className="about-points">
              <li><CheckCircle2 size={18} aria-hidden="true" /><span><strong>Source-aware planning</strong> considers format, condition, quantity and handling needs.</span></li>
              <li><CheckCircle2 size={18} aria-hidden="true" /><span><strong>Purpose-led delivery</strong> defines how information should be accessed, searched or transferred.</span></li>
              <li><CheckCircle2 size={18} aria-hidden="true" /><span><strong>Technology-conscious execution</strong> applies suitable tools to the agreed workflow and intended output.</span></li>
            </ul>
          </div>
          <div className="about-gallery about-reveal">
            <figure className="about-gallery__main"><img src={imagingConsultationImage} alt="Consultants reviewing a document imaging workflow" loading="lazy" /></figure>
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
            {teamFunctions.map((team, index) => <article className="card" key={team}><span className="card__tag">Team 0{index + 1}</span><h3>{team}</h3><p>A functional area supporting the company’s technology and digitization services.</p></article>)}
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
      <PageHero eyebrow="Industries we serve" title="Information workflows shaped around each sector." description="From public records and bound collections to plans, photographs and operational files, different information environments call for a considered digitization approach." />
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

export function ProjectsPage() {
  useSeo({ title: 'Projects & Experience', description: 'Organizations represented in SATSB’s published credentials portfolio.', path: '/projects' })
  return (
    <>
      <PageHero eyebrow="Projects & experience" title="Organizations represented in our published credentials." description="Explore the institutional names presented by SATSB and contact the company to discuss experience relevant to your requirements." />
      <section className="section section--white">
        <div className="container">
        <SectionHeading eyebrow="Credentials overview" title="Organizations represented by SATSB." description="Project scope and relevance can be discussed directly for your intended requirement." split />
          <div className="grid grid--3">
            {representativeProjects.map((project) => <ProjectCard key={project.title} {...project} />)}
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
  useSeo({ title: 'Careers', description: 'Career information and functional areas at Surya Amor Technology.', path: '/careers' })
  return (
    <>
      <PageHero eyebrow="Careers" title="Build practical technology and digitization capability." description="Learn about the functions that support SATSB’s work and use the company contact channel for career-related enquiries." />
      <section className="section section--white">
        <div className="container content-layout">
          <div className="prose">
            <h2>Functions within SATSB</h2>
            <p>SATSB’s work brings together project coordination, document digitization, audiovisual conversion and technical support.</p>
            <ul>{teamFunctions.map((team) => <li key={team}>{team}</li>)}</ul>
            <p>Career opportunities are communicated through SATSB’s official contact channels when roles become available.</p>
          </div>
          <aside className="aside-panel"><h2>Application safety</h2><p>Do not send identity documents or sensitive personal information through the general website form.</p><Link className="button button--ghost" to="/contact">General company contact</Link></aside>
        </div>
      </section>
    </>
  )
}
