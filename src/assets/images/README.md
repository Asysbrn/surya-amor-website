# Image preparation guide

Use only company-owned, licensed, or explicitly approved images. Remove confidential document text, personal data, access badges and client branding before upload.

## Recommended formats

- Photographs: AVIF first where the publishing workflow supports it; otherwise WebP at quality 75–85.
- Transparent raster graphics: optimized WebP or PNG.
- Simple illustrations and diagrams: SVG that contains no scripts or embedded external resources.
- Avoid uploading camera-original JPEGs directly to production.

## Recommended dimensions

- Homepage hero: 1920 × 1080 px (16:9), with the subject biased right and safe copy space left.
- Page hero/banner: 1600 × 900 px.
- Service and project cards: 1200 × 800 px (3:2).
- Team/profile portraits: 800 × 1000 px (4:5).
- Client logos: SVG preferred, or transparent PNG/WebP at least 600 px wide.
- Open Graph sharing image: 1200 × 630 px.

Do not upscale small files. Keep focal subjects inside the central 70% for responsive cropping.

## File naming

Use lowercase kebab-case names that describe the subject, not camera numbers:

- `hero-digitization-facility.webp`
- `service-document-scanning.webp`
- `service-audiovisual-conversion.webp`
- `project-approved-digitization-01.webp`
- `client-logo-confirmed-name.svg`

Add `-2x` only for an intentional high-density asset and avoid spaces, dates, `final-final`, or unverified client names.

## Optimization

- Strip EXIF/GPS metadata.
- Compress before committing; target under 250 KB for cards and under 500 KB for hero images when quality permits.
- Export in sRGB.
- Supply meaningful context-specific alt text in code, not inside the filename.
- Include `width` and `height` or an aspect-ratio container to prevent layout shift.
- Lazy-load below-fold images. The hero image should load eagerly with high fetch priority.

## Suggested usage map

- `hero-*`: home hero only.
- `about-*`: real team, office or company-operation context.
- `service-*`: relevant scanner/equipment/workflow close-ups.
- `project-*`: approved case studies with permission and redacted records.
- `technology-*`: owned equipment or interface screenshots with sensitive data removed.
- `client-logo-*`: trust area only after written approval.
- `og-default.*`: shared social preview metadata.

`hero-digitization-studio.png`, `service-document-studio.png`, `service-legacy-media.png` and `service-information-systems.png` are AI-generated placeholders, not evidence of a Surya Amor Technology facility, equipment or project. Replace or approve and optimize them before launch. The three `service-*` assets were generated on 6 August 2026 with the built-in image-generation tool for this redesign.

Do not download or reuse images from the legacy SATSB website. Suitable approved replacements include document scanning equipment, paper preparation, VHS or Betacam transfer, audio cassette transfer, records-management interfaces, imaging consultation, GIS workflows, the corporate team and the Kuala Lumpur office.
