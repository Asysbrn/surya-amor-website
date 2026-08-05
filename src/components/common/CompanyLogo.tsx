import { Link } from 'react-router-dom'
import companyLogo from '../../assets/images/SAT LOGO.jpeg'

type CompanyLogoProps = {
  variant?: 'header' | 'footer'
}

export function CompanyLogo({ variant = 'header' }: CompanyLogoProps) {
  return (
    <Link
      className={`company-logo company-logo--${variant}`}
      to="/"
      aria-label="Surya Amor Technology Sdn Bhd home"
    >
      <img
        src={companyLogo}
        width="1080"
        height="352"
        alt="Surya Amor Technology Sdn Bhd"
      />
    </Link>
  )
}
