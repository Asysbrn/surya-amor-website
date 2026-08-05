interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  split?: boolean
}

export function SectionHeading({ eyebrow, title, description, split = false }: SectionHeadingProps) {
  return (
    <header className={`section-heading ${split ? 'section-heading--split' : ''}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="heading">{title}</h2>
      </div>
      {description && <p className="lead">{description}</p>}
    </header>
  )
}
