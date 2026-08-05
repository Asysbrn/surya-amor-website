import { useSeo } from '../hooks/useSeo'
import { HomeHero } from '../sections/HomeHero'
import { ContactPreviewSection, IndustriesSection, IntroductionSection, ProcessSection, ProjectsSection, ServicesSection, TechnologySection, TrustSection, WhySection } from '../sections/HomeSections'

export default function HomePage() {
  useSeo({ title: 'Document Digitization & Information Solutions', description: 'Document digitization, audiovisual conversion, document and records management, imaging consultation and GIS services from Kuala Lumpur.', path: '/' })
  return <><HomeHero /><IntroductionSection /><ServicesSection /><IndustriesSection /><WhySection /><ProcessSection /><ProjectsSection /><TechnologySection /><TrustSection /><ContactPreviewSection /></>
}
