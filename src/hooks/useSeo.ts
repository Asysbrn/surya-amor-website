import { useEffect } from 'react'
import type { SeoInput } from '../types'

const fallbackOrigin = 'https://www.example.com'

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }
  Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value))
}

export function useSeo({ title, description, path, image }: SeoInput) {
  useEffect(() => {
    const origin = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') || fallbackOrigin
    const url = `${origin}${path}`
    const fullTitle = `${title} | Surya Amor Technology`
    document.title = fullTitle

    upsertMeta('meta[name="description"]', { name: 'description', content: description })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: fullTitle })
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url })
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    if (image) upsertMeta('meta[property="og:image"]', { property: 'og:image', content: `${origin}${image}` })

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url
  }, [description, image, path, title])
}
