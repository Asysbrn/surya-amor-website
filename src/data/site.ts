import { Building2, Columns3, Factory, GraduationCap, Landmark, LibraryBig, Ruler, ShieldCheck } from 'lucide-react'
import { services } from './services'
import type { NavItem } from '../types'

export const siteConfig = {
  name: 'Surya Amor Technology Sdn Bhd',
  shortName: 'Surya Amor Technology',
  email: 'Confirmation required',
  phone: 'Confirmation required',
  address: 'Company address to be confirmed, Malaysia',
  hours: 'Business hours to be confirmed',
}

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: services.filter((service) => service.featured).slice(0, 6).map((service) => ({
      label: service.title,
      href: `/services/${service.slug}`,
      description: service.summary,
    })),
  },
  { label: 'Industries', href: '/industries' },
  { label: 'Projects', href: '/projects' },
  { label: 'Technology', href: '/technology' },
  { label: 'Contact', href: '/contact' },
]

export const industries = [
  { title: 'Government & public sector', description: 'Records, registers and public information programmes with defined handling and traceability needs.', icon: Landmark },
  { title: 'Archives & libraries', description: 'Rare, bound and high-value collections requiring careful capture and practical access derivatives.', icon: LibraryBig },
  { title: 'Museums & heritage', description: 'Mixed-media collections, audiovisual carriers and artefacts prepared for access and preservation.', icon: Columns3 },
  { title: 'Engineering & built environment', description: 'Large-format plans, technical drawings, maps and project records organized for retrieval.', icon: Ruler },
  { title: 'Corporate enterprises', description: 'High-volume operational and legacy records supporting governance and digital workflows.', icon: Building2 },
  { title: 'Education & research', description: 'Theses, institutional archives, research collections and searchable knowledge resources.', icon: GraduationCap },
  { title: 'Industrial operations', description: 'Technical manuals, quality records and site-sensitive collections requiring controlled workflows.', icon: Factory },
  { title: 'Regulated organizations', description: 'Information programmes where access control, chain of custody and evidence of process matter.', icon: ShieldCheck },
]

export const processSteps = [
  { number: '01', title: 'Discover', description: 'Clarify objectives, material types, access needs, risks and acceptance criteria.' },
  { number: '02', title: 'Assess & sample', description: 'Inspect representative records and validate capture, metadata and output assumptions.' },
  { number: '03', title: 'Design the workflow', description: 'Define handling, naming, indexing, quality, security and exception rules.' },
  { number: '04', title: 'Capture & convert', description: 'Process material in controlled batches with progress and exception visibility.' },
  { number: '05', title: 'Quality assure', description: 'Review image, metadata, completeness and delivery requirements against the agreed plan.' },
  { number: '06', title: 'Deliver & support', description: 'Package files, reports and knowledge transfer for confident operational handover.' },
]

export const representativeProjects = [
  {
    title: 'Institutional records transformation',
    tag: 'Representative engagement — confirmation required',
    description: 'A model engagement for preparing, scanning, indexing and delivering a mixed administrative collection with traceable batches.',
  },
  {
    title: 'Heritage collection access programme',
    tag: 'Representative engagement — confirmation required',
    description: 'A potential workflow for careful bound-volume capture, OCR assessment and preservation/access file packaging.',
  },
  {
    title: 'Engineering drawing archive',
    tag: 'Representative engagement — confirmation required',
    description: 'A model large-format project covering drawing capture, file normalization, metadata mapping and digital handover.',
  },
]

export const companyValues = [
  { title: 'Care before speed', description: 'Material condition, confidentiality and intended use shape the workflow from the start.' },
  { title: 'Traceable quality', description: 'Clear batches, acceptance rules and exception reporting make outcomes easier to verify.' },
  { title: 'Useful delivery', description: 'Files, metadata and systems are designed for real retrieval and operational use—not scanning for its own sake.' },
  { title: 'Practical partnership', description: 'Requirements, constraints and decisions are communicated plainly throughout delivery.' },
]
