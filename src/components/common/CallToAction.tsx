import { Button } from '../ui/Button'

interface CallToActionProps {
  title?: string
  description?: string
}

export function CallToAction({
  title = 'Turn complex records into usable digital assets.',
  description = 'Share your material types, approximate volume and intended outcome. We’ll help frame the right next step without overcomplicating the conversation.',
}: CallToActionProps) {
  return (
    <section className="section section--compact" aria-label="Start a conversation">
      <div className="container">
        <div className="cta">
          <div className="cta__inner">
            <div><h2>{title}</h2><p>{description}</p></div>
            <Button to="/contact" arrow>Enquiry</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
