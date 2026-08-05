# Project Roadmap

> **Current phase:** Phase 13 — Company content and launch review  
> **Last completed task:** Reviewed the public legacy website, created `Content-Reference.md`, restricted the site to five source-supported service areas, integrated rewritten company content, and verified the 18-route production preview
> **Next task:** Obtain owner approval for the sourced content and remaining placeholders, then replace/optimize the hero image and complete manual browser/accessibility QA
> **Known issues:** The source conflicts between office units `T2A-09-3A` and `T02A-09-3A`. Registration details, formal vision, GIS scope, detailed quality/security practices, current staffing, project facts and publication permissions remain unconfirmed. Privacy Policy and Terms require owner/legal approval. The generated PNG hero is 1.84 MB and should be replaced with an optimized approved AVIF/WebP. `npm audit` previously reported a high-severity React Router RSC-mode advisory in 7.18.2; this static Browser Router site does not use RSC, Actions or a React Router server, but the dependency should be updated when an appropriate patched version is approved. No browser executable was available for console, visual breakpoint, screen-reader or Lighthouse testing.
> **Notes for continuing:** Run `npm install`, then `npm run dev`. Review this file from the first unchecked task. Never convert a `Confirmation required` placeholder into a factual claim without company approval. Run `npm run lint && npm run typecheck && npm run build` after every content or code change.

**Verification record (2026-08-05):** `npm run dev` served HTTP 200; ESLint passed; TypeScript passed; the production build passed; all 29 public, service-detail and fallback routes returned HTTP 200 from the production preview; invalid and valid form datasets produced the expected validation results. Browser-only visual/console checks remain listed below.

**Content integration record (2026-08-05):** The public legacy site at `https://www.satsb.com.my/` was reviewed as a content source only. No legacy images, code, layout or design were reused. `Content-Reference.md` records extracted information, rewrites, destinations and verification status. TypeScript, ESLint and the production build passed after integration; all 18 current public, service-detail and fallback routes returned HTTP 200.

## Phase 1 — Planning

- [x] Inspect `/home/aiesya` and confirm the target folder is available
- [x] Define project scope and factual-content safeguards
- [x] Select and document the technology stack
- [x] Document architecture, routes, components and integrations
- [x] Create `Project-Requirements.md`, `Roadmap.md`, and `README.md`

## Phase 2 — Environment setup and scaffolding

- [x] Create the isolated `surya-amor-technology` folder
- [x] Create the requested source folder structure
- [x] Add Vite, TypeScript, Tailwind and ESLint configuration
- [x] Install dependencies and record lockfile
- [x] Add global font, style and application entry files
- [x] Add local placeholder assets and image guidance

## Phase 3 — Brand and design system

- [x] Define central colour, typography and spacing tokens
- [x] Define buttons, cards, form fields, borders and shadows
- [x] Add responsive breakpoints and layout primitives
- [x] Add visible focus and reduced-motion treatment
- [x] Create logo placeholder and favicon treatment

## Phase 4 — Application shell and navigation

- [x] Add route configuration and lazy page loading
- [x] Build announcement bar and desktop navigation
- [x] Build accessible mobile navigation
- [x] Add active navigation states and dropdown behavior
- [x] Build the professional footer
- [x] Add skip link, scroll restoration and scroll-to-top control

## Phase 5 — Reusable components

- [x] Build buttons, container and section heading
- [x] Build page hero and breadcrumb components
- [x] Build service, industry and project cards
- [x] Build call-to-action and notice components
- [x] Create typed data models and shared datasets

## Phase 6 — Homepage

- [x] Build hero and company introduction
- [x] Build core-services presentation
- [x] Build industries and capability-count presentation
- [x] Build why-us and workflow sections
- [x] Build projects and technology sections
- [x] Build trust/testimonial placeholder section
- [x] Build CTA and contact preview

## Phase 7 — Individual website pages

- [x] Build About Us
- [x] Build service catalogue
- [x] Build reusable service-detail pages
- [x] Build Industries / Who We Serve
- [x] Build Projects / Portfolio
- [x] Build Technology / Solutions
- [x] Build Our Process
- [x] Build Why Choose Us
- [x] Build Careers
- [x] Build Privacy Policy and Terms
- [x] Build custom 404 page

## Phase 8 — Contact form

- [x] Build accessible contact form and fields
- [x] Add client-side validation
- [x] Add loading, success and error states
- [x] Add mock submission adapter and future endpoint contract
- [x] Add privacy acknowledgement

## Phase 9 — Responsive design and accessibility

- [ ] Verify mobile layout at 375px
- [ ] Verify tablet layout at 768px
- [ ] Verify laptop and desktop layouts
- [ ] Verify keyboard navigation and focus order
- [x] Verify heading hierarchy, landmarks and labels by code review
- [x] Verify token contrast and reduced-motion implementation by code review
- [ ] Document screen-reader checks remaining for launch

## Phase 10 — SEO

- [x] Add unique metadata for every route
- [x] Add canonical and Open Graph metadata
- [x] Add `robots.txt` and sitemap starter
- [x] Add safe organization structured-data starter
- [x] Verify production-domain replacement notes

## Phase 11 — Testing and quality assurance

- [x] Run ESLint and fix all findings
- [x] Run TypeScript checking and fix all errors
- [x] Run production build and fix all errors
- [x] Start production preview and request all 29 static/dynamic/fallback routes
- [x] Check internal links, external image references and local assets
- [x] Exercise contact-form validation with invalid and valid datasets
- [ ] Check browser console (manual browser check if tooling unavailable)
- [ ] Record manual mobile, tablet and keyboard checks

## Phase 12 — Performance optimization

- [x] Review initial bundle and route code splitting
- [ ] Optimize and dimension local imagery
- [x] Confirm fonts are local
- [x] Confirm no below-fold raster media is loaded (hero is the only current photo)
- [ ] Run Lighthouse before production launch (manual)

## Phase 13 — Content review

- [x] Review the legacy company website as a factual content source only
- [x] Create the required `Content-Reference.md` inventory and owner checklist
- [x] Restrict public services to the five areas supported by the source
- [x] Add the published email, telephone and address with the unit-number conflict visibly flagged
- [ ] Confirm the correct office unit, email, telephone and business hours with the owner
- [ ] Verify registration and company profile details
- [x] Remove unsupported quantitative, certification, software and experience claims from public copy
- [x] Replace invented representative projects with the nine legacy credential names and explicit evidence limits
- [ ] Replace verification listings with approved case studies or obtain permission for the current names
- [ ] Add approved client logos and testimonials
- [ ] Add verified certifications and partnerships only if supplied
- [ ] Complete legal review of Privacy Policy and Terms
- [ ] Proofread Bahasa Malaysia and/or additional language content if added

## Phase 14 — Deployment

- [ ] Choose production host and domain
- [ ] Configure SPA route rewrites
- [ ] Configure environment variables and form backend
- [ ] Configure TLS, security headers and monitoring
- [ ] Run clean `npm ci && npm run build` in CI
- [ ] Complete pre-launch acceptance review
- [ ] Deploy production release

## Phase 15 — Post-launch maintenance

- [ ] Connect analytics only with an approved privacy approach
- [ ] Monitor form deliverability and errors
- [ ] Schedule dependency and security reviews
- [ ] Review content, projects and vacancies quarterly
- [ ] Add automated component and end-to-end tests as integrations grow
- [ ] Maintain backups for CMS/database if introduced
