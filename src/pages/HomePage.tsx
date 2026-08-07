import { useSeo } from '../hooks/useSeo'
import { HomeHero } from '../sections/HomeHero'
import { ClientsSection, ContactPreviewSection, FormatCoverageSection, IndustriesSection, IntroductionSection, ProcessSection, ServicesSection, WhySection } from '../sections/HomeSections'

export default function HomePage() {
  useSeo({ title: 'Digitization & Information Solutions', description: 'Document scanning, indexing, audio visual digitization, geospatial services, vectorization, records management and software development from Kuala Lumpur.', path: '/' })
  return <><HomeHero /><IntroductionSection /><ServicesSection /><FormatCoverageSection /><IndustriesSection /><WhySection /><ProcessSection /><ClientsSection /><ContactPreviewSection /></>
}
