# Surya Amor Technology Corporate Website

A modern, responsive corporate website for Surya Amor Technology Sdn Bhd, covering the company’s broad published service areas and focused profile capabilities across scanning, digitization, data conversion, audiovisual transfer, records management, consultation, GIS and supporting scanner / IT hardware. Content requiring company verification is deliberately labelled and is never represented as confirmed fact.

## Technology stack

- React 19 and TypeScript
- Vite 7
- Tailwind CSS 4 with central CSS design tokens
- React Router 7
- Lucide React icons
- Local Manrope and DM Sans variable fonts
- ESLint and TypeScript compiler checks

## Installation

Requirements: Node.js 20.19+ or 22.12+ and npm.

```bash
cd /home/aiesya/surya-amor-technology
cp .env.example .env
npm install
```

No environment value is required for the default contact form. It posts through FormSubmit to `info@satsb.com.my`; the mailbox owner must approve FormSubmit's one-time activation email before live delivery begins.

## Development commands

```bash
npm run dev        # local development server
npm run lint       # lint TypeScript/React
npm run typecheck  # strict TypeScript check
npm run preview    # preview the production build
```

## Production build

```bash
npm run build
```

Vite writes the deployable site to `dist/`.

## Folder structure

```text
src/
├── assets/        # local images, icons, and documents
├── components/    # reusable common, layout, and UI components
├── data/          # typed company, navigation, service, and project content
├── hooks/         # SEO and behavior hooks
├── layouts/       # shared route layouts
├── pages/         # route-level components
├── sections/      # modular homepage sections
├── styles/        # global design system
├── types/         # shared TypeScript contracts
└── utilities/     # validation and general helpers
```

## Adding images

Place company-approved files in `src/assets/images/`. Prefer lowercase kebab-case names such as `document-scanning-equipment.webp`. Then import them from the component or data file that uses them:

```tsx
import scannerImage from '../assets/images/document-scanning-equipment.webp'
```

See `src/assets/images/README.md` for dimensions, formats, naming and the asset checklist. Do not link to third-party image URLs. Replace the generated `hero-digitization-studio.png` before launch if it could be mistaken for a real facility.

## Updating website content

- Source inventory and verification notes: `Content-Reference.md`
- Services: `src/data/services.ts`
- Deduplicated hardware catalogue: `src/data/hardware.ts`
- Navigation, industries, projects and company details: `src/data/site.ts`
- Home sections: `src/sections/`
- Informational pages: `src/pages/`
- Brand colours, type and layout tokens: `src/styles/index.css`
- Route titles and descriptions: each page's `useSeo` call

Keep unverified claims visibly labelled until an authorized company source approves them. The legacy website at `satsb.com.my` is a content reference only; never copy its design, code or images.

## Resuming development

Open `Roadmap.md` first. Its header records the current phase, last completed task, next task, known issues and continuation notes. Begin at the first unchecked item, update the header after a meaningful phase, and mark only verified work as complete.

## Contact form integration

The default adapter submits enquiries to FormSubmit's AJAX endpoint for `info@satsb.com.my`, with no frontend API key. Before launch, submit one test enquiry and approve the one-time activation message delivered to that mailbox. Do not use sensitive production information in the activation test.

For a controlled PHP, Node.js, serverless, Formspree or Resend-backed service:

1. Implement a secure HTTPS endpoint that accepts the documented JSON payload.
2. Set `VITE_CONTACT_FORM_ENDPOINT` in the hosting environment.
3. Update only the adapter in `src/utilities/contact.ts` if the provider contract differs; the form UI can remain unchanged.
4. Validate, rate-limit and protect submissions against spam server-side; never put private API keys in `VITE_*` variables.

The adapter constructs the subject `New Website Enquiry - [Sender Name]` and includes the sender, company, contact details, selected service, message, Malaysia-local submission time and website source.

## Deployment

### Netlify, Cloudflare Pages, or Vercel

- Build command: `npm run build`
- Publish directory: `dist`
- Add an SPA rewrite from all paths to `/index.html`.
- Set `VITE_SITE_URL` to the final HTTPS origin.
- Activate FormSubmit for the recipient mailbox, or configure `VITE_CONTACT_FORM_ENDPOINT` when a controlled backend is ready.

### Traditional Apache/Nginx hosting

Upload the contents of `dist/` and configure unknown non-file routes to serve `index.html`. Apply TLS, compression, cache rules and security headers at the server.

Before launch, update the canonical domain in `.env`, `public/robots.txt`, `public/sitemap.xml`, and all company/contact/legal placeholders listed in `Roadmap.md`.
