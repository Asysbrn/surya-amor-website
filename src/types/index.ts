import type { LucideIcon } from 'lucide-react'

export type ServiceCategory = 'Digitization' | 'Information Management' | 'Technology'

export interface Service {
  slug: string
  title: string
  category: ServiceCategory
  summary: string
  description: string
  outcomes: string[]
  deliverables: string[]
  icon: LucideIcon
  featured?: boolean
}

export interface NavItem {
  label: string
  href: string
  children?: Array<{ label: string; href: string; description: string }>
}

export interface SeoInput {
  title: string
  description: string
  path: string
  image?: string
}

export interface ContactFormValues {
  name: string
  email: string
  phone: string
  organization: string
  service: string
  message: string
  consent: boolean
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>
