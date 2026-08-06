import { PageHero } from '../components/common/PageHero'
import { useSeo } from '../hooks/useSeo'

export function PrivacyPage() {
  useSeo({ title: 'Privacy Policy', description: 'Privacy information for the Surya Amor Technology website.', path: '/privacy' })
  return (
    <>
      <PageHero eyebrow="Legal information" title="Privacy Policy" description="Information about how website enquiries and personal information are handled." />
      <section className="section section--white">
        <div className="container content-layout">
          <article className="prose">
            <h2>Privacy information</h2>
            <p>A complete legal privacy policy is not currently available on this website. Before submitting an enquiry, avoid including confidential records or sensitive personal information.</p>
            <ul>
              <li>The enquiry form requests contact and project information.</li>
              <li>The current demonstration form does not transmit data unless a live endpoint is configured.</li>
              <li>Contact SATSB directly for privacy-related questions.</li>
            </ul>
          </article>
          <aside className="aside-panel"><h2>Contact</h2><p>Use the company contact details for privacy-related enquiries.</p></aside>
        </div>
      </section>
    </>
  )
}

export function TermsPage() {
  useSeo({ title: 'Terms & Conditions', description: 'Website terms information for Surya Amor Technology.', path: '/terms' })
  return (
    <>
      <PageHero eyebrow="Legal information" title="Terms & Conditions" description="General information about using the Surya Amor Technology website." />
      <section className="section section--white">
        <div className="container content-layout">
          <article className="prose">
            <h2>Website information</h2>
            <p>A complete set of legal website terms is not currently available. Service information is general and does not replace an agreed quotation, scope of work or contract.</p>
            <ul>
              <li>Project requirements and deliverables must be agreed directly with SATSB.</li>
              <li>Do not misuse the website or submit unlawful or confidential third-party content.</li>
              <li>Contact SATSB for questions about services or website use.</li>
            </ul>
          </article>
          <aside className="aside-panel"><h2>Service enquiries</h2><p>Contact SATSB to discuss project terms and requirements.</p></aside>
        </div>
      </section>
    </>
  )
}
