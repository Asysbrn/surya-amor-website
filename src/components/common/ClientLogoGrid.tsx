export interface ClientLogo {
  src: string
  alt: string
}

export function ClientLogoGrid({ logos }: { logos: readonly ClientLogo[] }) {
  return (
    <ul className="client-logo-grid" aria-label="Client logos">
      {logos.map((logo) => (
        <li className="client-logo-card" key={logo.src}>
          <img src={logo.src} alt={logo.alt} loading="lazy" decoding="async" />
        </li>
      ))}
    </ul>
  )
}
