import { ConfirmationNotice } from '../components/common/ConfirmationNotice'
import { PageHero } from '../components/common/PageHero'
import { useSeo } from '../hooks/useSeo'

export function PrivacyPage() {
  useSeo({ title: 'Privacy Policy', description: 'Privacy Policy placeholder for Surya Amor Technology, pending company information and Malaysian legal review.', path: '/privacy' })
  return (
    <>
      <PageHero eyebrow="Legal information" title="Privacy Policy" description="[COMPANY OWNER AND QUALIFIED MALAYSIAN LEGAL COUNSEL TO PROVIDE OR APPROVE THIS INFORMATION]" />
      <section className="section section--white">
        <div className="container content-layout">
          <article className="prose">
            <ConfirmationNotice>No privacy policy was available on the legacy company website. This page is a labelled content placeholder and must not be treated as an approved legal notice.</ConfirmationNotice>
            <h2>Information required before publication</h2>
            <ul>
              <li>Official company identity, registration number and privacy contact</li>
              <li>Information collected through the website and the purpose for collecting it</li>
              <li>Contact-form provider, recipients and data-storage locations</li>
              <li>Legal basis, disclosure, retention and security practices</li>
              <li>Individual access, correction, consent and complaint processes</li>
              <li>Analytics, cookies, embedded media and third-party services</li>
              <li>Effective date and policy-update process</li>
            </ul>
          </article>
          <aside className="aside-panel"><h2>Current status</h2><p>[OWNER AND LEGAL REVIEW REQUIRED BEFORE LAUNCH]</p></aside>
        </div>
      </section>
    </>
  )
}

export function TermsPage() {
  useSeo({ title: 'Terms & Conditions', description: 'Terms and Conditions placeholder for Surya Amor Technology, pending company information and Malaysian legal review.', path: '/terms' })
  return (
    <>
      <PageHero eyebrow="Legal information" title="Terms & Conditions" description="[COMPANY OWNER AND QUALIFIED MALAYSIAN LEGAL COUNSEL TO PROVIDE OR APPROVE THIS INFORMATION]" />
      <section className="section section--white">
        <div className="container content-layout">
          <article className="prose">
            <ConfirmationNotice>No terms and conditions were available on the legacy company website. This page is a labelled content placeholder and must not be treated as approved legal terms.</ConfirmationNotice>
            <h2>Information required before publication</h2>
            <ul>
              <li>Official company identity and contact details</li>
              <li>Permitted website use and prohibited activities</li>
              <li>Ownership and permitted use of company content and branding</li>
              <li>Accuracy, availability and service-information disclaimers</li>
              <li>Third-party links and service terms</li>
              <li>Liability, governing law, jurisdiction and dispute provisions</li>
              <li>Effective date and terms-update process</li>
            </ul>
          </article>
          <aside className="aside-panel"><h2>Current status</h2><p>[OWNER AND LEGAL REVIEW REQUIRED BEFORE LAUNCH]</p></aside>
        </div>
      </section>
    </>
  )
}
