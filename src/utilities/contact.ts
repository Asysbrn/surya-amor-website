import type { ContactFormErrors, ContactFormValues } from '../types'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

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

export async function submitContactForm(values: ContactFormValues): Promise<{ mock: boolean }> {
  const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined
  if (!endpoint) {
    await new Promise((resolve) => window.setTimeout(resolve, 700))
    return { mock: true }
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  })

  if (!response.ok) throw new Error('The enquiry service returned an error. Please try again later.')
  return { mock: false }
}
