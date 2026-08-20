import { Building2, Clock3, Mail, MapPin, Send, Smartphone } from 'lucide-react'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { OfficeMap } from '../components/common/OfficeMap'
import { PageHero } from '../components/common/PageHero'
import { Button } from '../components/ui/Button'
import { services } from '../data/services'
import { siteConfig } from '../data/site'
import { useSeo } from '../hooks/useSeo'
import type { ContactFormErrors, ContactFormValues } from '../types'
import { contactFormSubject, getContactFormEndpoint, submitContactForm, validateContactForm } from '../utilities/contact'

const initialValues: ContactFormValues = { name: '', email: '', phone: '', organization: '', service: '', message: '', consent: false, _honey: '' }

export default function ContactPage() {
  const [values, setValues] = useState<ContactFormValues>(initialValues)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')
  useSeo({ title: 'Contact Us', description: 'Contact Surya Amor Technology in Kuala Lumpur about document scanning, indexing, audio visual digitization, GIS, vectorization, records management or software development.', path: '/contact' })

  function update(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const target = event.target
    const key = target.name as keyof ContactFormValues
    const value = target instanceof HTMLInputElement && target.type === 'checkbox' ? target.checked : target.value
    setValues((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: undefined }))
    if (status !== 'idle') setStatus('idle')
  }

  function validateField(key: keyof ContactFormValues) {
    const next = validateContactForm(values)
    setErrors((current) => ({ ...current, [key]: next[key] }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validateContactForm(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      setStatus('error')
      setStatusMessage('Please correct the highlighted fields and try again.')
      window.setTimeout(() => document.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus(), 0)
      return
    }
    setStatus('loading')
    setStatusMessage('Sending your enquiry…')
    try {
      await submitContactForm(values)
      setStatus('success')
      setStatusMessage('Thank you for contacting Surya Amor Technology Sdn Bhd. We have received your enquiry and will respond as soon as possible during our business hours.')
      setValues(initialValues)
    } catch (error) {
      setStatus('error')
      setStatusMessage(error instanceof Error ? error.message : 'We could not send your enquiry. Please try again later.')
    }
  }

  return (
    <>
      <PageHero eyebrow="Contact us" title="Start with the collection. We’ll help frame the next step." description="Share the format, approximate quantity and intended result. Do not include confidential record content." />
      <section className="section section--white">
        <div className="container content-layout">
          <div>
            <p className="eyebrow">Project enquiry</p>
            <h2 className="heading">Tell us what you need to make usable.</h2>
            <p className="lead">Fields marked with * are required. Your enquiry will be delivered to {siteConfig.email}.</p>
            <form action={getContactFormEndpoint()} method="POST" style={{ marginTop: '2rem' }} onSubmit={handleSubmit} noValidate>
              <input type="hidden" name="_subject" value={contactFormSubject} />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_replyto" value={values.email} />
              <div className="form-honeypot" aria-hidden="true"><label htmlFor="website">Leave this field empty</label><input id="website" name="_honey" type="text" tabIndex={-1} autoComplete="off" value={values._honey} onChange={update} /></div>
              <div className="form-grid">
                <div className="field"><label htmlFor="name">Name *</label><input id="name" name="name" autoComplete="name" value={values.name} onChange={update} onBlur={() => validateField('name')} aria-invalid={Boolean(errors.name)} aria-describedby="name-error" /><p className="field__error" id="name-error">{errors.name}</p></div>
                <div className="field"><label htmlFor="email">Work email *</label><input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={update} onBlur={() => validateField('email')} aria-invalid={Boolean(errors.email)} aria-describedby="email-error" /><p className="field__error" id="email-error">{errors.email}</p></div>
                <div className="field"><label htmlFor="phone">Phone <span>(optional)</span></label><input id="phone" name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={update} onBlur={() => validateField('phone')} aria-invalid={Boolean(errors.phone)} aria-describedby="phone-error" /><p className="field__error" id="phone-error">{errors.phone}</p></div>
                <div className="field"><label htmlFor="organization">Company / organization <span>(optional)</span></label><input id="organization" name="organization" autoComplete="organization" value={values.organization} onChange={update} /><p className="field__error" /></div>
                <div className="field field--full"><label htmlFor="service">Service interested in *</label><select id="service" name="service" value={values.service} onChange={update} onBlur={() => validateField('service')} aria-invalid={Boolean(errors.service)} aria-describedby="service-error"><option value="">Select a service area</option>{services.map((service) => <option value={service.slug} key={service.slug}>{service.title}</option>)}<option value="unsure">Not sure / multiple services</option></select><p className="field__error" id="service-error">{errors.service}</p></div>
                <div className="field field--full"><label htmlFor="message">Project details *</label><textarea id="message" name="message" value={values.message} onChange={update} onBlur={() => validateField('message')} aria-invalid={Boolean(errors.message)} aria-describedby="message-hint message-error" placeholder="For example: source formats, approximate volume, location, condition and desired output." /><span className="sr-only" id="message-hint">Provide at least 20 characters. Do not include confidential record content.</span><p className="field__error" id="message-error">{errors.message}</p></div>
                <div className="field field--full"><div className="checkbox"><input id="consent" name="consent" type="checkbox" checked={values.consent} onChange={update} onBlur={() => validateField('consent')} aria-invalid={Boolean(errors.consent)} aria-describedby="consent-error" /><label htmlFor="consent">I acknowledge that this information will be used to respond to my enquiry and have read the <a href="/privacy" style={{ textDecoration: 'underline' }}>privacy notice</a>. *</label></div><p className="field__error" id="consent-error">{errors.consent}</p></div>
              </div>
              {status !== 'idle' && <div className={`form-status form-status--${status === 'success' ? 'success' : status === 'error' ? 'error' : 'success'}`} role={status === 'error' ? 'alert' : 'status'}>{statusMessage}</div>}
              <Button type="submit" variant="dark" disabled={status === 'loading'}>{status === 'loading' ? 'Sending…' : <><Send size={17} aria-hidden="true" /> Send enquiry</>}</Button>
            </form>
          </div>
          <aside>
            <div className="aside-panel">
              <h2>Company contact details</h2>
              <p>Contact the Kuala Lumpur office to discuss your digitization or information-management requirements.</p>
              <div className="contact-options">
                <div className="contact-option"><Mail size={19} /><div><strong>Email</strong><span>{siteConfig.email}</span></div></div>
                <div className="contact-option"><Smartphone size={19} /><div><strong>Phone</strong><span>{siteConfig.phone}</span></div></div>
                <div className="contact-option"><MapPin size={19} /><div><strong>Address</strong><span>{siteConfig.address}</span></div></div>
                <div className="contact-option"><Clock3 size={19} /><div><strong>Business hours</strong><span>{siteConfig.hours}<br />{siteConfig.closedHours}</span></div></div>
                <div className="contact-option"><Building2 size={19} /><div><strong>Registration</strong><span>Registration No.: {siteConfig.registrationNo}</span></div></div>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <OfficeMap />
    </>
  )
}
