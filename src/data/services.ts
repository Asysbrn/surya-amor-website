import { AudioLines, FileScan, Images, Map, ServerCog } from 'lucide-react'
import type { Service } from '../types'

export const services: Service[] = [
  {
    slug: 'document-digitization',
    title: 'Document digitization',
    category: 'Digitization',
    summary: 'Conversion of physical documents into organized digital files for easier storage, retrieval and access.',
    description: 'The legacy SATSB website describes a service covering document scanning, indexing and delivery in an agreed digital format. Project requirements should be confirmed around the source material and intended use.',
    outcomes: ['Reduced reliance on physical storage', 'Faster retrieval of digitized information', 'Digital access to physical records'],
    deliverables: ['Supported document sizes and formats', 'Scanning and image-quality specifications', 'Indexing fields, output formats and security requirements'],
    verificationNote: 'Confirm supported sizes, file formats, OCR or ICR capabilities, indexing methods, project locations and quality controls before publishing detailed specifications.',
    icon: FileScan,
    featured: true,
  },
  {
    slug: 'audiovisual-digitization',
    title: 'Audio & video digitization',
    category: 'Digitization',
    summary: 'Transfer of selected legacy audio and video carriers into digital formats that are easier to access and store.',
    description: 'The legacy website specifically references VHS, Betacam, audio cassette and data-storage tape formats. It describes converting legacy carriers into digital files for storage, access, sharing and editing.',
    outcomes: ['More convenient access to legacy content', 'Digital files that are easier to store and share', 'Reduced reliance on obsolete playback formats'],
    deliverables: ['Exact carrier formats accepted', 'Digital output formats and technical specifications', 'Condition assessment, cleaning, repair and quality-control scope'],
    verificationNote: 'The accepted carrier list, transfer equipment, output profiles and handling process require owner confirmation.',
    icon: AudioLines,
    featured: true,
  },
  {
    slug: 'document-records-management',
    title: 'Imaging, document & records management',
    category: 'Information Management',
    summary: 'Solutions intended to help organizations store, organize, search and access documents more efficiently.',
    description: 'The legacy website describes document and records management capabilities involving search, version control, permissions and collaboration. No named product, platform or deployment model is published.',
    outcomes: ['More organized document storage', 'Faster information retrieval', 'Support for controlled team access'],
    deliverables: ['Product or platform to be offered', 'Deployment, integration and support model', 'Approved security, encryption and compliance details'],
    verificationNote: 'Do not imply a specific platform, certification, encryption method or industry-standard compliance until approved evidence is supplied.',
    icon: ServerCog,
    featured: true,
  },
  {
    slug: 'imaging-consultation',
    title: 'Imaging consultation',
    category: 'Information Management',
    summary: 'Assessment and recommendations for improving imaging technology, processes and workflows.',
    description: 'The published service begins with a review of current imaging systems and workflows, followed by improvement opportunities, technology recommendations and an implementation strategy.',
    outcomes: ['Clearer understanding of the current workflow', 'Identified improvement opportunities', 'Technology and implementation recommendations'],
    deliverables: ['Assessment format and engagement stages', 'Written findings and recommendation scope', 'Whether implementation support is included'],
    verificationNote: 'Confirm the consultation deliverables, supported environments and implementation responsibilities before launch.',
    icon: Images,
    featured: true,
  },
  {
    slug: 'geographic-information-system',
    title: 'Geographic Information System (GIS)',
    category: 'Technology',
    summary: 'GIS is listed by SATSB as a principal business activity, but the legacy website provides no service description.',
    description: '[COMPANY OWNER TO PROVIDE GIS SERVICE DESCRIPTION, CAPABILITIES AND DELIVERABLES]',
    outcomes: ['Business objectives to be confirmed', 'Supported GIS use cases to be confirmed', 'Intended customer outcomes to be confirmed'],
    deliverables: ['Supported software and platforms', 'Spatial-data, mapping or conversion scope', 'Implementation, training and support responsibilities'],
    verificationNote: 'Only the GIS service label is supported by the source. Do not imply mapping, surveying, platforms, licences or sector-specific capability until details are supplied.',
    icon: Map,
    featured: true,
  },
]

export const featuredServices = services.filter((service) => service.featured)

export const serviceCategories = ['Digitization', 'Information Management', 'Technology'] as const

export function getService(slug?: string) {
  return services.find((service) => service.slug === slug)
}
