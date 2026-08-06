import { Check, Clipboard, ExternalLink, MapPinned, Navigation } from 'lucide-react'
import { useEffect, useState } from 'react'
import { siteConfig } from '../../data/site'

const mapQuery = encodeURIComponent(siteConfig.mapQuery)
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`
const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`
const wazeUrl = `https://www.waze.com/ul?q=${mapQuery}&navigate=yes`
const embedUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`

export function OfficeMap() {
  const [copied, setCopied] = useState<'address' | 'link' | null>(null)
  const [copyError, setCopyError] = useState(false)

  useEffect(() => {
    if (!copied && !copyError) return
    const timer = window.setTimeout(() => {
      setCopied(null)
      setCopyError(false)
    }, 2500)
    return () => window.clearTimeout(timer)
  }, [copied, copyError])

  async function copy(value: string, type: 'address' | 'link') {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value)
      } else {
        const field = document.createElement('textarea')
        field.value = value
        field.setAttribute('readonly', '')
        field.style.position = 'fixed'
        field.style.opacity = '0'
        document.body.appendChild(field)
        field.select()
        const successful = document.execCommand('copy')
        field.remove()
        if (!successful) throw new Error('Copy failed')
      }
      setCopyError(false)
      setCopied(type)
    } catch {
      setCopied(null)
      setCopyError(true)
    }
  }

  return (
    <section className="section section--tint office-location" aria-labelledby="office-location-title">
      <div className="container">
        <div className="office-location__heading">
          <div>
            <p className="eyebrow">Office location</p>
            <h2 className="heading" id="office-location-title">Visit Surya Amor Technology.</h2>
          </div>
          <p className="lead">The map uses SATSB’s published office address at 3 Towers, Jalan Ampang. Contact the office before visiting.</p>
        </div>
        <div className="office-map-card">
          <div className="office-map-card__frame">
            <iframe title="Map showing Surya Amor Technology at 3 Towers, Jalan Ampang" src={embedUrl} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div className="office-map-card__details">
            <div className="office-map-card__address"><MapPinned size={22} aria-hidden="true" /><div><strong>Surya Amor Technology Sdn Bhd</strong><span>{siteConfig.address}</span></div></div>
            <div className="office-map-actions" aria-label="Office map actions">
              <a className="button button--dark" href={directionsUrl} target="_blank" rel="noreferrer">Get directions <Navigation size={16} aria-hidden="true" /></a>
              <a className="button button--ghost" href={googleMapsUrl} target="_blank" rel="noreferrer">Google Maps <ExternalLink size={16} aria-hidden="true" /></a>
              <a className="button button--ghost" href={wazeUrl} target="_blank" rel="noreferrer">Open in Waze <ExternalLink size={16} aria-hidden="true" /></a>
              <button className="button button--ghost" type="button" onClick={() => copy(siteConfig.address, 'address')}>{copied === 'address' ? <Check size={16} aria-hidden="true" /> : <Clipboard size={16} aria-hidden="true" />} {copied === 'address' ? 'Address copied' : 'Copy address'}</button>
              <button className="button button--ghost" type="button" onClick={() => copy(googleMapsUrl, 'link')}>{copied === 'link' ? <Check size={16} aria-hidden="true" /> : <Clipboard size={16} aria-hidden="true" />} {copied === 'link' ? 'Link copied' : 'Copy Maps link'}</button>
            </div>
            <p className={`office-map-card__status ${copyError ? 'office-map-card__status--error' : ''}`} aria-live="polite">{copied ? `${copied === 'address' ? 'Office address' : 'Google Maps link'} copied to clipboard.` : copyError ? 'Copy failed. Please select and copy the address manually.' : ''}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
