# Surya Amor Technology Corporate Website

A modern, responsive corporate website for Surya Amor Technology Sdn Bhd, covering high-volume scanning and indexing, data capture, E-book, audio visual and 3D digitization, GIS, vectorization, records-management integration, DG-flo ERMS, software development and a separate scanner / IT hardware catalogue. Content requiring company verification is deliberately scoped and is never represented as confirmed fact.

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

The contact form posts through FormSubmit to `info@satsb.com.my`. Add the random public replacement identifier from FormSubmit's activation email as `VITE_FORM_SUBMIT_ID`; until it is configured, the adapter retains the direct recipient endpoint as a temporary compatibility fallback.

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

The default adapter submits enquiries to FormSubmit's AJAX endpoint for `info@satsb.com.my`, with no frontend API key. It uses FormSubmit's public random replacement identifier when `VITE_FORM_SUBMIT_ID` is configured, keeping the recipient out of the form action. The identifier is public routing configuration—not a password or private API key.

For Cloudflare Pages:

1. Copy the random replacement identifier from the FormSubmit activation email. Use only the identifier, not the complete FormSubmit URL.
2. Add `VITE_FORM_SUBMIT_ID` to both Preview and Production environment variables.
3. Set `VITE_SITE_URL=https://www.satsb.com.my` for Production and redeploy.
4. Submit a non-sensitive test from the Pages domain during transition and again from `https://www.satsb.com.my` after cutover. If FormSubmit sends another domain-specific activation request, approve it from `info@satsb.com.my` and retest delivery.

The form uses FormSubmit's table template, the fixed subject `New Website Enquiry - Surya Amor Technology`, Reply-To, a functional honeypot and FormSubmit's default CAPTCHA protection. Successful AJAX submissions stay on the contact page and show a professional confirmation; the fields clear only after FormSubmit reports success.

For a controlled PHP, Node.js, serverless, Formspree or Resend-backed service:

1. Implement a secure HTTPS endpoint that accepts the documented JSON payload.
2. Set `VITE_CONTACT_FORM_ENDPOINT` in the hosting environment.
3. Update only the adapter in `src/utilities/contact.ts` if the provider contract differs; the form UI can remain unchanged.
4. Validate, rate-limit and protect submissions against spam server-side; never put private API keys in `VITE_*` variables.

The adapter includes the sender, company, contact details, selected service, message, privacy acknowledgement, Malaysia-local submission time and website source.

## Deployment

### Netlify, Cloudflare Pages, or Vercel

- Build command: `npm run build`
- Publish directory: `dist`
- Add an SPA rewrite from all paths to `/index.html`.
- Set `VITE_SITE_URL=https://www.satsb.com.my` on the production deployment.
- Configure `VITE_FORM_SUBMIT_ID`, verify delivery on the Pages preview and production domain, and approve another activation email if FormSubmit requests one after the domain changes.

### Traditional Apache/Nginx hosting

Upload the contents of `dist/` and configure unknown non-file routes to serve `index.html`. Apply TLS, compression, cache rules and security headers at the server.

Before launch, update the canonical domain in `.env`, `public/robots.txt`, `public/sitemap.xml`, and all company/contact/legal placeholders listed in `Roadmap.md`.
