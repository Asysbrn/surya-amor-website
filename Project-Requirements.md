# Project Requirements

## 1. Project overview

Surya Amor Technology Sdn Bhd requires a production-quality corporate website that presents service areas supported by the available source material and company-supplied catalogue. The catalogue covers high-volume document scanning and indexing; professional indexing and data capture; E-book; audio visual digitization; 3D artifact scanning; GIS and geospatial services; drawing, seismic-data and well-log vectorization; document-management integration; DG-flo ERMS; and software development. The separate Hardware page retains the approved equipment catalogue. The first release is a fast static single-page application with clearly separated content and presentation layers, ready for a form API or CMS later.

The legacy website at `https://www.satsb.com.my/` may be used only as a factual content source. Its design, template, code, images, layout, components and branding presentation must not be reused or imitated. All extracted content, rewrites and evidence limitations are recorded in `Content-Reference.md`. Unverified claims are explicitly labelled in the interface or documented as replacement items. The website must not imply certifications, clients, awards, project quantities, partnerships, endorsements or government approval that the company has not substantiated.

## 2. Company website objectives

- Establish a credible, modern and procurement-friendly digital presence.
- Explain the five source-supported service areas without inventing technical specifications.
- Guide visitors from challenge to relevant service and enquiry.
- Present a clearly labelled proposed process until the owner approves the formal workflow.
- Make company, service, industry and legal information easy to find.
- Generate qualified enquiries through an accessible contact form.
- Provide an extensible foundation for verified case studies, CMS content and backend integrations.

## 3. Recommended technology stack

- React 19 for component-based UI.
- TypeScript 5 for strict contracts and safe refactoring.
- Vite 7 for development, optimization and production bundling.
- Tailwind CSS 4 plus central CSS design tokens for styling.
- React Router 7 for client-side routing and nested layout composition.
- Lucide React for consistent, accessible SVG iconography.
- Local variable fonts through Fontsource (Manrope and DM Sans).
- Native Fetch API with a modular FormSubmit adapter and an environment-configurable production endpoint.
- ESLint and TypeScript compiler for code quality.

## 4. Reasons for each technology choice

React has strong community support, reusable patterns and a low barrier to future hiring. TypeScript catches content-model and component errors before deployment. Vite offers a fast beginner-friendly workflow with minimal configuration. Tailwind accelerates responsive layout work while CSS custom properties keep the brand palette changeable in one place. React Router supports SEO-aware page structure and service detail templates. Lucide avoids custom icon maintenance and loads only imported SVG components. Local fonts and imagery prevent third-party asset dependencies and improve privacy and consistency.

## 5. System architecture

The browser loads a Vite-generated static application. `App.tsx` owns the route table. `SiteLayout` supplies global header, footer, skip link, route announcements and scroll restoration. Page components compose reusable section and UI components. Typed files under `src/data` provide navigation, services, hardware, projects and industries. A `useSeo` hook updates route metadata. The form validates locally and calls an adapter that can later submit to an environment-configured HTTPS endpoint.

Current flow: browser → FormSubmit AJAX endpoint → `info@satsb.com.my`. Future controlled flow: browser → CDN/static host → contact API/serverless function → validation and anti-spam → email/CRM/database. Secrets remain server-side.

## 6. Website page structure

- Home: overview, selected services, industries, process, trust, projects and calls to action.
- About Us: company positioning, mission, operating approach, workflow and team functions without duplicating the service catalogue.
- Services: complete catalogue of broad published service areas and focused capabilities named in the available profile material and project brief.
- Service detail: reusable route at `/services/:slug` with published focus and project-specific scope points.
- Hardware: a filterable, deduplicated catalogue derived from the supplied SAT asset workbook, with no serial numbers or invented specifications.
- Industries: sector applications presented through a shared visual showcase without unsupported project claims.
- Clients: an approved logo-only presentation using the supplied client assets.
- Our Process: proposed high-level sequence derived from service descriptions and labelled for owner approval.
- Why Choose Us: themes from the published mission; quantitative and certification claims are excluded pending evidence.
- Careers: production-ready overview of company functions and the official career-enquiry channel.
- Contact: enquiry options, validation and published company details.
- Privacy Policy and Terms: starter legal content requiring professional review.
- 404: recovery links.

## 7. Component architecture

- Layout: `SiteLayout`, `Header`, `Footer`, `MobileMenu`, `ScrollToTop`.
- UI: `Button`, `Container`, `SectionHeading`, `IconBadge`, `Field`, `StatusMessage`.
- Shared content: `PageHero`, `ServiceCard`, `ClientCard`, `IndustryShowcase`, `CallToAction`, `Breadcrumbs`.
- Home sections: purpose-specific components in `src/sections` to avoid an oversized homepage.
- Templates: `ContentPage` for informational pages and `ServiceDetailPage` for all service records.
- Hooks/utilities: `useSeo`, focus and scroll behavior, form validation, URL helpers.

## 8. Proposed folder structure

```text
src/
├── assets/{images,icons,documents}
├── components/{common,layout,ui}
├── data
├── hooks
├── layouts
├── pages
├── sections
├── styles
├── types
└── utilities
```

## 9. UI and branding direction

The temporary identity uses midnight navy, ocean blue, teal and warm cloud neutrals. Manrope provides confident display typography while DM Sans supports highly legible body copy. Rounded geometry, quiet gradients, fine borders, strong white space and restrained shadows communicate technical precision without looking clinical. Brand tokens live in `src/styles/index.css` and can be changed centrally after the official brand guide is supplied.

## 10. Responsive design requirements

- Mobile-first layouts from 320px upward.
- Content width capped around 1200px with fluid page gutters.
- Navigation collapses below 1024px and traps no keyboard focus.
- Cards progress from one to two or three columns according to available space.
- Hero headings use fluid type with `clamp()`.
- Touch targets are at least 44px; no essential hover-only interactions.
- Test targets: 375px mobile, 768px tablet, 1024px laptop and 1440px desktop.

## 11. Accessibility requirements

- Target WCAG 2.2 AA.
- Semantic landmarks, logical headings and meaningful link labels.
- Skip-to-content link and visible `:focus-visible` treatment.
- Fully keyboard-operable navigation and form.
- Mobile menu exposes expanded state and descriptive labels.
- Route changes announce the new page and move focus logically.
- Reduced-motion preference disables non-essential movement.
- Images require context-specific alternative text; decorative art uses empty alt text.
- Form errors are associated with controls and announced through live regions.

## 12. SEO requirements

- Unique title and description for every route.
- Canonical link and Open Graph/Twitter metadata managed per page.
- Semantic content hierarchy and descriptive URLs.
- Static `robots.txt` and `sitemap.xml` included; production domain must be replaced.
- Organization structured data uses only the supported high-level company description and must be verified before production.
- Real social-sharing image and company address should be added before launch.

## 13. Performance requirements

- Production bundle minification and code splitting by route.
- Local fonts and responsive local imagery; prefer WebP or AVIF.
- Lazy load below-fold images, reserve image dimensions, avoid layout shifts.
- Keep first-load JavaScript lean and avoid animation libraries.
- Target Lighthouse: 90+ performance and 95+ accessibility/best-practice/SEO on representative pages.

## 14. Security considerations

- No secrets or private API keys in client code or repository.
- Treat all client-side validation as convenience; repeat validation server-side.
- Future endpoint must enforce HTTPS, origin restrictions, payload limits, rate limiting, spam controls and output encoding.
- Add host-level Content Security Policy, Referrer Policy, Permissions Policy and frame protection.
- Keep dependencies updated and review audit findings before launch.
- Privacy consent must accurately reflect how personal information is processed under applicable Malaysian requirements; obtain legal review.

## 15. Contact form requirements

Fields: name, work email, phone (optional), organization (optional), service interest, message and privacy acknowledgement. Required fields display inline errors after blur or submit. Submission exposes loading, success and failure states. The default FormSubmit adapter sends to `info@satsb.com.my` after one-time recipient activation. A future adapter may target Formspree, PHP, Node.js, Resend or a custom API through `VITE_CONTACT_FORM_ENDPOINT`; secrets must stay on the backend.

## 16. Image and media requirements

- All final assets are local under `src/assets` or `public`.
- Use AVIF/WebP for photographs, SVG for simple owned vectors, PDF only for downloadable documents.
- Provide intrinsic dimensions, purposeful alt text and responsive sizing.
- Avoid embedding personal, client or sensitive document data in photographs.
- Temporary generated imagery is replaceable and must not be presented as a real facility or project.
- Full upload guidance is in `src/assets/images/README.md`.

## 17. Testing strategy

- Type checking and ESLint on every release.
- Production build verification.
- Route inventory and internal-link crawl.
- Component tests should be added with Vitest and Testing Library when form/backend behavior expands.
- End-to-end coverage should be added with Playwright for navigation, menu, form validation and critical enquiry flows.
- Manual responsive, keyboard, screen-reader smoke, browser-console and content-fact checks before launch.

## 18. Deployment strategy

Recommended: Netlify, Cloudflare Pages or Vercel for preview deployments, TLS, CDN delivery and SPA route rewrites. Traditional cPanel/Apache or Nginx hosting is also supported by uploading `dist/` and configuring fallback routing to `index.html`. The build pipeline runs `npm ci`, `npm run lint`, and `npm run build`. Configure production domain and security headers at the hosting layer.

## 19. Future backend and CMS possibilities

- Smallest step: Formspree or EmailJS adapter.
- Recommended controlled form: serverless function or Node/PHP API with rate limiting and email/CRM integration.
- Headless CMS options: Sanity, Strapi, Directus or Payload for services, projects and careers.
- Relational storage: PostgreSQL for enquiries, portfolio records and audit-friendly workflows.
- Authentication should only be introduced for a defined portal use case and implemented server-side using established providers.

## 20. Project acceptance criteria

- All required routes render and recover cleanly at 404.
- Navigation, mobile menu, form and scroll-to-top work with keyboard and pointer.
- All page metadata is meaningful and route-specific.
- Service content is data-driven, limited to source-supported areas and every service has a valid detail URL.
- Layout remains usable at mobile, tablet and desktop targets.
- No external image URLs, exposed secrets, broken imports, build errors or unsupported factual claims.
- `npm run lint`, `npm run typecheck`, and `npm run build` pass.
- Remaining manual checks and company-supplied content are accurately documented in `Roadmap.md`.
