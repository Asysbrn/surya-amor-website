import { Archive, Building2, Columns3, HardHat, Landmark, LibraryBig, Ruler, ShieldCheck } from 'lucide-react'
import dbpLogo from '../assets/images/clients/dewan-bahasa-dan-pustaka-logo.png'
import jkknLogo from '../assets/images/clients/jabatan-kesenian-kebudayaan-negara-logo.png'
import jkptgLogo from '../assets/images/clients/jabatan-ketua-pengarah-tanah-galian-logo.png'
import agricultureLogo from '../assets/images/clients/kementerian-pertanian-keterjaminan-makanan-logo.png'
import defenceLogo from '../assets/images/clients/kementerian-pertahanan-malaysia-logo.png'
import museumLogo from '../assets/images/clients/jabatan-muzium-malaysia-logo.png'
import pknsLogo from '../assets/images/clients/perbadanan-kemajuan-negeri-selangor-logo.png'
import nationalLibraryLogo from '../assets/images/clients/perpustakaan-negara-malaysia-logo.png'
import federalLandLogo from '../assets/images/clients/pejabat-tanah-galian-wilayah-persekutuan-logo.png'
import { services } from './services'
import type { NavItem } from '../types'

export const siteConfig = {
  name: 'Surya Amor Technology Sdn Bhd',
  shortName: 'Surya Amor Technology',
  email: 'info@satsb.com.my',
  phone: '+603 6416 6978',
  address: 'T2A-09-3A, 3 Towers, 349 Jalan Ampang, 50450 Kuala Lumpur, Malaysia',
  mapQuery: '3 Towers, 349 Jalan Ampang, 50450 Kuala Lumpur, Malaysia',
  hours: 'Monday to Friday, 9:00 AM–5:00 PM',
  closedHours: 'Closed on weekends and public holidays',
  registrationNo: '1481846-M / 202201036149',
}

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      ...services.map((service) => ({
        label: service.title,
        href: `/services/${service.slug}`,
        description: service.summary,
      })),
      { label: 'Hardware catalogue', href: '/hardware', description: 'Browse the deduplicated equipment catalogue recorded in SAT’s asset workbook.' },
    ],
  },
  { label: 'Industries', href: '/industries' },
  { label: 'Experience', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

export const industries = [
  { title: 'Government & public administration', description: 'Structured digitization can improve access to administrative records, departmental files and long-running public information collections.', icon: Landmark },
  { title: 'Libraries, language & publishing', description: 'Book, document and searchable-output workflows support access to publications, reference collections and language resources.', icon: LibraryBig },
  { title: 'Culture & museums', description: 'Careful capture and organized digital delivery can extend access to collection records, photographs and heritage documentation.', icon: Columns3 },
  { title: 'Land & development', description: 'Large-format scanning, indexing and records workflows are relevant to plans, titles, drawings and development documentation.', icon: Ruler },
  { title: 'Agriculture & food', description: 'Digitization can help organize technical, administrative and programme records across distributed operational environments.', icon: Building2 },
  { title: 'Defence', description: 'Structured capture and controlled information workflows can support complex document collections with defined handling requirements.', icon: ShieldCheck },
  { title: 'Archives & heritage institutions', description: 'Digitization can support access to archival records, historical collections and heritage materials while reducing routine handling of originals.', icon: Archive },
  { title: 'Engineering & construction records', description: 'Large-format scanning and document management are relevant to plans, drawings, specifications and long-running project records.', icon: HardHat },
]

export const processSteps = [
  { number: '01', title: 'Understand the requirement', description: 'Clarify the source material, current workflow and intended result.' },
  { number: '02', title: 'Assess the material or workflow', description: 'Review the available inputs and identify practical improvement needs.' },
  { number: '03', title: 'Recommend an approach', description: 'Propose suitable technology, workflow and implementation steps.' },
  { number: '04', title: 'Convert or implement', description: 'Carry out the agreed digitization, transfer or solution work.' },
  { number: '05', title: 'Provide the agreed output', description: 'Deliver the files or implemented solution in the format defined for the engagement.' },
]

const legacyProjectNote = 'Organization represented in SATSB’s published credentials portfolio. Contact the company to discuss experience relevant to your requirements.'

export const representativeProjects = [
  { title: 'Dewan Bahasa dan Pustaka Malaysia', tag: 'Published credentials', description: legacyProjectNote, logo: dbpLogo },
  { title: 'Jabatan Kesenian dan Kebudayaan Negara', tag: 'Published credentials', description: legacyProjectNote, logo: jkknLogo },
  { title: 'Jabatan Ketua Pengarah Tanah dan Galian', tag: 'Published credentials', description: legacyProjectNote, logo: jkptgLogo },
  { title: 'Kementerian Pertanian dan Keterjaminan Makanan Malaysia', tag: 'Published credentials', description: legacyProjectNote, logo: agricultureLogo },
  { title: 'Kementerian Pertahanan Malaysia', tag: 'Published credentials', description: legacyProjectNote, logo: defenceLogo },
  { title: 'Jabatan Muzium Malaysia', tag: 'Published credentials', description: legacyProjectNote, logo: museumLogo },
  { title: 'Perbadanan Kemajuan Negeri Selangor', tag: 'Published credentials', description: legacyProjectNote, logo: pknsLogo },
  { title: 'Perpustakaan Negara Malaysia', tag: 'Published credentials', description: legacyProjectNote, logo: nationalLibraryLogo },
  { title: 'Pejabat Tanah dan Galian Wilayah Persekutuan Kuala Lumpur', tag: 'Published credentials', description: legacyProjectNote, logo: federalLandLogo },
]

export const companyValues = [
  { title: 'Flexible service', description: 'The legacy mission emphasizes adapting services to customer requirements and needs.' },
  { title: 'Cost-conscious planning', description: 'The company states that it aims to provide cost-effective and competitive solutions.' },
  { title: 'Quality focus', description: 'Quality and customer satisfaction are recurring themes in the company’s published mission.' },
  { title: 'Technology awareness', description: 'The company says it keeps abreast of software and technology developments relevant to its services.' },
]

export const teamFunctions = [
  'Top management',
  'Document digitization operations',
  'Audio and video conversion operations',
  'Technical and helpdesk support',
]
