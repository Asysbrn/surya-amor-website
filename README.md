# Surya Amor Technology Corporate Website

A modern, responsive corporate website for Surya Amor Technology Sdn Bhd, focused on document digitization, digital preservation, information management, software and technology services. Content that requires company verification is deliberately labelled and is never represented as confirmed fact.

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

No environment value is required for the initial mock contact form.

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

Place company-approved files in `src/assets/images/`. Prefer lowercase kebab-case names such as `bound-book-scanner.webp`. Then import them from the component or data file that uses them:

```tsx
import scannerImage from '../assets/images/bound-book-scanner.webp'
```

See `src/assets/images/README.md` for dimensions, formats, naming and the asset checklist. Do not link to third-party image URLs. Replace the generated `hero-digitization-studio.png` before launch if it could be mistaken for a real facility.

## Updating website content

- Services: `src/data/services.ts`
- Navigation, industries, projects and company placeholders: `src/data/site.ts`
- Home sections: `src/sections/`
- Informational pages: `src/pages/`
- Brand colours, type and layout tokens: `src/styles/index.css`
- Route titles and descriptions: each page's `useSeo` call

Keep unverified claims labelled `Confirmation required` until an authorized company source approves them.

## Resuming development

Open `Roadmap.md` first. Its header records the current phase, last completed task, next task, known issues and continuation notes. Begin at the first unchecked item, update the header after a meaningful phase, and mark only verified work as complete.

## Contact form integration

The default handler simulates a successful request but sends no data. For a real endpoint:

1. Implement or select a secure HTTPS form service.
2. Set `VITE_CONTACT_FORM_ENDPOINT` in the hosting environment.
3. Update the adapter in `src/utilities/contact.ts` if the provider contract differs.
4. Validate and rate-limit submissions server-side; never put private API keys in `VITE_*` variables.

## Deployment

### Netlify, Cloudflare Pages, or Vercel

- Build command: `npm run build`
- Publish directory: `dist`
- Add an SPA rewrite from all paths to `/index.html`.
- Set `VITE_SITE_URL` to the final HTTPS origin.
- Configure the contact endpoint only when the backend is ready.

### Traditional Apache/Nginx hosting

Upload the contents of `dist/` and configure unknown non-file routes to serve `index.html`. Apply TLS, compression, cache rules and security headers at the server.

Before launch, update the canonical domain in `.env`, `public/robots.txt`, `public/sitemap.xml`, and all company/contact/legal placeholders listed in `Roadmap.md`.
