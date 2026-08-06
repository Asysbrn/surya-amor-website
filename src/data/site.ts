import { Building2, Columns3, Landmark, LibraryBig, Ruler, ShieldCheck } from 'lucide-react'
import { services } from './services'
import type { NavItem } from '../types'

export const siteConfig = {
  name: 'Surya Amor Technology Sdn Bhd',
  shortName: 'Surya Amor Technology',
  email: 'info@satsb.com.my',
  phone: '+603 6416 6978',
  address: 'T2A-09-3A, 3 Towers, 349 Jalan Ampang, 50450 Kuala Lumpur, Malaysia',
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
    children: services.map((service) => ({
      label: service.title,
      href: `/services/${service.slug}`,
      description: service.summary,
    })),
  },
  { label: 'Industries', href: '/industries' },
  { label: 'Experience', href: '/projects' },
  { label: 'Solutions', href: '/technology' },
  { label: 'Contact', href: '/contact' },
]

export const industries = [
  { title: 'Government & public administration', description: 'The legacy portfolio lists several Malaysian ministries, departments and public agencies. Exact SATSB engagements require confirmation.', icon: Landmark },
  { title: 'Libraries, language & publishing', description: 'The legacy portfolio names Dewan Bahasa dan Pustaka and Perpustakaan Negara Malaysia without publishing project scope or outcomes.', icon: LibraryBig },
  { title: 'Culture & museums', description: 'Arts, culture and museum organizations appear in the legacy portfolio. The services delivered are not described.', icon: Columns3 },
  { title: 'Land & development', description: 'Land administration and state development organizations are displayed as credentials on the legacy website.', icon: Ruler },
  { title: 'Agriculture & food', description: 'A Malaysian agriculture and food ministry is shown in the legacy portfolio; the relationship and work performed require confirmation.', icon: Building2 },
  { title: 'Defence', description: 'The Ministry of Defence Malaysia is displayed in the legacy portfolio without details of any engagement.', icon: ShieldCheck },
]

export const processSteps = [
  { number: '01', title: 'Understand the requirement', description: 'Clarify the source material, current workflow and intended result.' },
  { number: '02', title: 'Assess the material or workflow', description: 'Review the available inputs and identify practical improvement needs.' },
  { number: '03', title: 'Recommend an approach', description: 'Propose suitable technology, workflow and implementation steps.' },
  { number: '04', title: 'Convert or implement', description: 'Carry out the agreed digitization, transfer or solution work.' },
  { number: '05', title: 'Provide the agreed output', description: 'Deliver the files or implemented solution in the format defined for the engagement.' },
]

const legacyProjectNote = 'Displayed in the legacy website credentials section. No service, date, scope or outcome is presented here.'

export const representativeProjects = [
  { title: 'Dewan Bahasa dan Pustaka Malaysia', tag: 'Legacy credentials reference', description: legacyProjectNote },
  { title: 'Jabatan Kesenian dan Kebudayaan Negara', tag: 'Legacy credentials reference', description: legacyProjectNote },
  { title: 'Jabatan Ketua Pengarah Tanah dan Galian', tag: 'Legacy credentials reference', description: legacyProjectNote },
  { title: 'Kementerian Pertanian dan Keterjaminan Makanan Malaysia', tag: 'Legacy credentials reference', description: legacyProjectNote },
  { title: 'Kementerian Pertahanan Malaysia', tag: 'Legacy credentials reference', description: legacyProjectNote },
  { title: 'Jabatan Muzium Malaysia', tag: 'Legacy credentials reference', description: legacyProjectNote },
  { title: 'Perbadanan Kemajuan Negeri Selangor', tag: 'Legacy credentials reference', description: legacyProjectNote },
  { title: 'Perpustakaan Negara Malaysia', tag: 'Legacy credentials reference', description: legacyProjectNote },
  { title: 'Pejabat Tanah dan Galian Wilayah Persekutuan Kuala Lumpur', tag: 'Legacy credentials reference', description: legacyProjectNote },
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
