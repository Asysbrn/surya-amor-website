import { useSeo } from '../hooks/useSeo'
import { HomeHero } from '../sections/HomeHero'
import { ContactPreviewSection, IndustriesSection, IntroductionSection, ProcessSection, ProjectsSection, ServicesSection, TechnologySection, TrustSection, WhySection } from '../sections/HomeSections'

export default function HomePage() {
  useSeo({ title: 'Document Digitization & Technology Solutions', description: 'Professional document digitization, digital preservation, information management, software and technology capabilities for Malaysian organizations.', path: '/' })
  return <><HomeHero /><IntroductionSection /><ServicesSection /><IndustriesSection /><WhySection /><ProcessSection /><ProjectsSection /><TechnologySection /><TrustSection /><ContactPreviewSection /></>
}
