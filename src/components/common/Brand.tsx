import { ScanSearch } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Brand() {
  return (
    <Link className="brand" to="/" aria-label="Surya Amor Technology home">
      <span className="brand__mark" aria-hidden="true"><ScanSearch size={23} strokeWidth={2.2} /></span>
      <span className="brand__text">Surya Amor Technology<small>Sdn Bhd · Malaysia</small></span>
    </Link>
  )
}
