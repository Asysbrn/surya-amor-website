import { useSeo } from '../hooks/useSeo'
import { HomeHero } from '../sections/HomeHero'
import { ContactPreviewSection, FormatCoverageSection, IndustriesSection, IntroductionSection, ProcessSection, ProjectReadinessSection, ProjectsSection, ServicesSection, WhySection } from '../sections/HomeSections'

export default function HomePage() {
  useSeo({ title: 'Digitization & Information Solutions', description: 'Scanning, digitization, data conversion, audiovisual transfer, records management, imaging consultation, GIS and supporting technology services from Kuala Lumpur.', path: '/' })
  return <><HomeHero /><IntroductionSection /><ServicesSection /><FormatCoverageSection /><IndustriesSection /><WhySection /><ProcessSection /><ProjectReadinessSection /><ProjectsSection /><ContactPreviewSection /></>
}
