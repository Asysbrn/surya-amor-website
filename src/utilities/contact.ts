import type { ContactFormErrors, ContactFormValues } from '../types'
import { services } from '../data/services'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const recipient = 'info@satsb.com.my'
const formSubmitBaseUrl = 'https://formsubmit.co/ajax'
export const contactFormSubject = 'New Website Enquiry - Surya Amor Technology'

function getFormSubmitTarget() {
  const identifier = (import.meta.env.VITE_FORM_SUBMIT_ID as string | undefined)?.trim()
  return identifier || recipient
}

export function getContactFormEndpoint() {
  const configuredEndpoint = (import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined)?.trim()
  if (configuredEndpoint) return configuredEndpoint
  return `${formSubmitBaseUrl}/${encodeURIComponent(getFormSubmitTarget())}`
}

export interface ContactSubmission {
  recipient: string
  subject: string
  submittedAt: string
  serviceTitle: string
  emailBody: string
}

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {}
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.'
  if (!emailPattern.test(values.email.trim())) errors.email = 'Enter a valid work email address.'
  if (values.phone && !/^[+\d][\d\s()-]{6,20}$/.test(values.phone.trim())) errors.phone = 'Enter a valid phone number or leave this field blank.'
  if (!values.service) errors.service = 'Choose the service area that best fits your enquiry.'
  if (values.message.trim().length < 20) errors.message = 'Please provide at least 20 characters so we can understand your enquiry.'
  if (!values.consent) errors.consent = 'Please acknowledge the privacy notice before submitting.'
  return errors
}

export function buildContactSubmission(values: ContactFormValues, submittedAt = new Date()): ContactSubmission {
  const serviceTitle = services.find((service) => service.slug === values.service)?.title ?? (values.service === 'unsure' ? 'Not sure / multiple services' : values.service)
  const timestamp = submittedAt.toLocaleString('en-MY', { dateStyle: 'long', timeStyle: 'short', timeZone: 'Asia/Kuala_Lumpur' })
  const company = values.organization.trim() || 'Not provided'
  const phone = values.phone.trim() || 'Not provided'
  const emailBody = `New enquiry received from the Surya Amor Technology website.\n\nName:\n${values.name.trim()}\n\nCompany:\n${company}\n\nEmail:\n${values.email.trim()}\n\nPhone:\n${phone}\n\nService Interested In:\n${serviceTitle}\n\nMessage:\n${values.message.trim()}\n\nSubmitted At:\n${timestamp}\n\nSource:\nWebsite Contact Form`

  return {
    recipient,
    subject: contactFormSubject,
    submittedAt: timestamp,
    serviceTitle,
    emailBody,
  }
}

export async function submitContactForm(values: ContactFormValues): Promise<{ provider: 'formsubmit' | 'custom' }> {
  const endpoint = getContactFormEndpoint()
  const submission = buildContactSubmission(values)
  const isFormSubmit = new URL(endpoint).hostname === 'formsubmit.co'

  const request: RequestInit = isFormSubmit
    ? (() => {
        const form = new FormData()
        form.append('_subject', submission.subject)
        form.append('_template', 'table')
        form.append('_replyto', values.email.trim())
        form.append('_honey', values._honey)
        form.append('Name', values.name.trim())
        form.append('Company', values.organization.trim() || 'Not provided')
        form.append('Email', values.email.trim())
        form.append('Phone', values.phone.trim() || 'Not provided')
        form.append('Service Interested In', submission.serviceTitle)
        form.append('Message', values.message.trim())
        form.append('Privacy Acknowledgement', 'Confirmed')
        form.append('Submitted At', submission.submittedAt)
        form.append('Source', 'Website Contact Form')
        return { method: 'POST', headers: { Accept: 'application/json' }, body: form }
      })()
    : {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...values, service: submission.serviceTitle, submittedAt: submission.submittedAt, source: 'Website Contact Form', recipient: submission.recipient, email: { subject: submission.subject, body: submission.emailBody } }),
      }

  const response = await fetch(endpoint, request)

  if (!response.ok) throw new Error('We could not send your enquiry. Please try again or email info@satsb.com.my directly.')
  if (isFormSubmit && response.headers.get('content-type')?.includes('application/json')) {
    const result = await response.json().catch(() => null) as { success?: boolean } | null
    if (result?.success === false) throw new Error('We could not send your enquiry. Please try again or email info@satsb.com.my directly.')
  }
  return { provider: isFormSubmit ? 'formsubmit' : 'custom' }
}
