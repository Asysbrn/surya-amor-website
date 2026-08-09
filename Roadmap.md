# Project Roadmap

> **Current phase:** Phase 13 — Company content and launch review  
> **Last completed task:** Replaced the client-logo set, expanded Home to five client marks, and made the supplied DGflo logo the sole ERMS service visual
> **Next task:** Confirm detailed technical scope for the newly supplied service labels, obtain approved high-resolution hardware and client-logo originals, activate FormSubmit, confirm the correct office unit, then complete browser/accessibility QA
> **Known issues:** The 12 service titles are company-supplied, but a separate SAT Profile source document containing detailed specifications was not present in the repository; page copy therefore stays conservative and project-specific technical scope still requires owner confirmation. The supplied client PNGs are approved for display but are only 147–232 px wide, so vector or high-resolution originals are still recommended for ideal Retina sharpness. `WARISAN` and `BKS@Melaka` are readable on their supplied marks but their official organization names still require manual confirmation. The hardware workbook and composite do not identify exact model numbers for the ASUS desktop CPU, one Synology NAS, the TP-Link eight-port switch, the Canon PIXMA printer or the Lenovo ThinkVision display; `CZUR ET240` also requires model-name confirmation. Those six catalogue names remain explicitly unconfirmed. The individual product images are lossless crops from a 1536 × 1024 supplied composite, so approved high-resolution originals are still needed for ideal Retina sharpness. The source conflicts between office units `T2A-09-3A` and `T02A-09-3A`; the map therefore targets the verified 3 Towers street address and does not claim unverified coordinates. FormSubmit requires a one-time approval from `info@satsb.com.my` before it can deliver production enquiries. Privacy Policy and Terms still require qualified legal approval. The two older general service PNG visuals total approximately 3.6 MB and should be converted to optimized approved AVIF/WebP assets before launch. `npm audit` reports two high-severity dependency advisories; the dependencies should be reviewed and updated through an approved upgrade. No browser executable was available for console, visual breakpoint, screen-reader, cross-browser or Lighthouse testing.
> **Notes for continuing:** Run `npm install`, then `npm run dev`. Review this file from the first unchecked task. Never convert a `Confirmation required` placeholder into a factual claim without company approval. Run `npm run lint && npm run typecheck && npm run build` after every content or code change.

**Verification record (2026-08-05):** `npm run dev` served HTTP 200; ESLint passed; TypeScript passed; the production build passed; all 29 public, service-detail and fallback routes returned HTTP 200 from the production preview; invalid and valid form datasets produced the expected validation results. Browser-only visual/console checks remain listed below.

**Content integration record (2026-08-05):** The public legacy site at `https://www.satsb.com.my/` was reviewed as a content source only. No legacy images, code, layout or design were reused. `Content-Reference.md` records extracted information, rewrites, destinations and verification status. TypeScript, ESLint and the production build passed after integration; all 18 current public, service-detail and fallback routes returned HTTP 200.

**Official logo integration record (2026-08-05):** Added the supplied `SAT LOGO.jpeg` wordmark to the desktop/mobile header and footer using one responsive `CompanyLogo` component with the approved alt text. The original aspect ratio and colours are preserved. The unrelated temporary favicon reference and asset were removed because the wide JPEG artwork is not suitable as a small browser-tab icon without cropping or altering it. The development page and logo asset returned HTTP 200; ESLint, TypeScript and the production build passed, with Vite emitting the logo as a hashed JPEG asset. Responsive sizing was checked against the 375 px, 768 px and desktop CSS layouts; browser-based visual QA remains open because no browser executable is installed in this environment.

**Visual redesign and service expansion record (2026-08-06):** Upgraded the hero, image-led service cards, service banners, hierarchy, responsive layouts, hover treatments and section composition. Added the new “Information in every form” and “Project readiness” homepage sections. Expanded the catalogue from five broad areas to 12 linked pages covering document, book, large-format, photo, microfilm/microfiche, OCR/ICR/searchable PDF, data conversion, audiovisual, records management, consultation, GIS and scanners/IT hardware. Every service page now includes a relevant visual, overview, outcomes, scope points, applications, workflow and CTA. Placeholder visuals are explicitly labelled. ESLint, TypeScript and the production build passed; the development server returned HTTP 200 and all 25 tested production-preview routes returned HTTP 200.

**Company details, publication-control cleanup and image replacement record (2026-08-06):** Removed the homepage Publication Controls section, public owner-verification notices, review-status labels, placeholder status panels and related unused layout styles. Added Registration No. `1481846-M / 202201036149` to About, Contact and Footer, and centralized business hours as Monday to Friday, 9:00 AM–5:00 PM, closed on weekends and public holidays. Replaced the eight requested service visuals with dedicated 1600 px WebP assets for document digitization, large-format scanning, photo scanning, data conversion, audio/video digitization, imaging consultation, GIS and scanners/IT hardware. Each asset is between approximately 65 KB and 99 KB and includes service-specific alt text. Responsive aspect-ratio containers and the existing 800 px / 580 px breakpoints were checked in code; browser-based visual QA remains pending because no browser executable is installed. ESLint, TypeScript and the production build passed; the development server and all eight replacement assets returned HTTP 200.

**Client logos, sectors, related services and About expansion record (2026-08-06):** Inspected `client logo.png` and confidently matched the nine names already in the website inventory to Dewan Bahasa dan Pustaka, JKKN, JKPTG, the Agriculture and Food Security Ministry, MINDEF, Jabatan Muzium Malaysia, PKNS, Perpustakaan Negara Malaysia and the Federal Territories land office. Extracted each into `src/assets/images/clients/` with original proportions and shared responsive logo containers. The screenshot also includes Arkib Negara Malaysia, KPWKM, Jabatan Alam Sekitar Malaysia, Balai Seni Negara, Johor National Parks and Parlimen Malaysia, but these were not added because they are absent from the current website client list. `WARISAN` and `BKS@Melaka` require manual identification. Added “Archives & heritage institutions” and “Engineering & construction records” as service-relevant sectors without project claims. Added a reusable `RelatedServices` component using equal-height `ServiceCard` instances across every service route. Expanded About with an image hero, supported company narrative, core-expertise cards, an image gallery, subtle reduced-motion-safe reveals, and a labelled company-video placeholder because no local video was found. ESLint, TypeScript and the production build passed; the development server returned HTTP 200 for Home, About, Projects, Industries and all 12 service routes. Responsive and keyboard behavior were checked by code review; browser-based visual and console QA remains pending because no browser executable is installed.

**Logo, About motion, navigation, enquiry and office-map record (2026-08-06):** Standardized every client card around a centred, fixed-height logo viewport with equal padding, `object-fit: contain`, original aspect ratios and responsive grid behavior; the source crops remain the limiting factor for high-DPI sharpness. Replaced the company-video placeholder with a lightweight, self-contained four-stage digitization workflow built from semantic HTML, project icons and CSS motion. This approach adds relevant continuous visual interest without external media, licensing concerns or a play interaction, and all motion is disabled by `prefers-reduced-motion`. Converted the desktop Services dropdown to controlled state so service selection, route change, Escape and focus departure close it immediately; mobile links close the mobile menu as soon as they are selected. Connected the form to FormSubmit for `info@satsb.com.my`, added the requested subject and structured fields, Malaysia-local timestamp, professional success/error states, and retained an environment-based adapter seam for a future backend. Added a lazy responsive Google Maps address-query embed plus directions, Google Maps, Waze, copy-address and copy-link actions. The published building address was corroborated by the Waze 3 Towers listing; exact coordinates were intentionally not guessed. FormSubmit activation and live-mail deliverability require mailbox-owner action. Browser-only Chrome, Edge, Firefox and Safari checks remain pending because no browser executable is installed in this environment.

**Verification record (2026-08-06):** ESLint passed, strict TypeScript passed and the Vite production build completed successfully. The development server started successfully and returned HTTP 200 for Home, About, Contact, Services and Scanner & IT Hardware, as well as both new shared components and a representative client-logo asset. The form's request builder and validation passed compilation, but no live enquiry was sent because that would initiate an external message and still requires recipient activation. Responsive, reduced-motion, clipboard, menu and keyboard behavior were reviewed in code; hands-on multi-browser, screen-reader and visual breakpoint testing remains pending because no browser executable is installed.

**About, Industries, OCR and Hardware catalogue record (2026-08-06):** Removed the duplicate Core Expertise block from About and rebalanced the sequence from company story to workflow and team functions. Removed the entire Solutions homepage section, `/technology` route, navigation item, sitemap entry and unused exports/imports because the Services catalogue already covers that content. Replaced plain industry grids on Home and Industries with one reusable responsive showcase featuring a three-column editorial composition, emphasized lead sector, icons, decorative depth, hover/focus links and reduced-motion support. Generated a new realistic OCR/ICR/searchable-PDF workstation visual, resized it to 1600 × 900, converted it to a 69 KB WebP and added service-specific alt text. Parsed `ASSET SAT DAN KEMASKINI SEHINGGA 100326.xlsx` directly, reviewed all 59 rows, omitted serial numbers and internal condition/location data, and consolidated repeated records into 31 unique entries in nine categories. Added the `/hardware` route, Services-menu and footer links, accessible category filters, workbook-derived counts, aligned product cards and a Scanner & IT Hardware service link. Replaced visible AI-placeholder captions, internal verification labels and unfinished Careers/Projects wording with production-ready copy while retaining factual boundaries in documentation. Exact approved product images and six incomplete model designations remain for manual confirmation. ESLint, strict TypeScript and the production build passed. The development server returned HTTP 200 for Home, About, Industries, Hardware, Services, both affected service pages, Contact, Projects and Careers, plus the OCR image and new shared source modules. Hands-on browser layout and console testing remains pending because no browser executable is installed.

**Homepage, hardware imagery and Careers refinement record (2026-08-07):** Removed the entire Project Readiness component, import, homepage placement and unused CSS without leaving a layout gap. Redesigned Delivery Structure as a connected five-stage visual workflow with professional icons, numbered cards, gradient connectors, hover depth and reduced-motion-safe transitions while preserving every workflow title and description. Inspected `ASSETS IMAGE.png`, separated its 25 labelled products into lossless individual PNG crops under `src/assets/images/hardware/`, and matched every crop to the corresponding retained catalogue entry. Removed Equipment Trolley and all five entries below it, removed the empty Operations accessories category, and retained 25 genuine scanner, workstation, storage, network, printer and display entries across eight categories. The ASUS desktop CPU, generic Synology NAS, TP-Link switch, Canon PIXMA, Lenovo ThinkVision and CZUR ET240 names still require exact-model confirmation; their images were assigned only to the matching generically labelled entries. Redesigned the Hardware catalogue with larger contained product imagery, refined filters, clearer specifications and responsive premium cards. Redesigned Careers with an image hero, four supported SATSB function cards, an official-channel future-opportunity panel and the existing application-safety guidance; no vacancies, benefits, salaries or employment policies were invented. ESLint and the production build passed. Browser-only visual, console and cross-browser testing remains pending because no browser executable is installed.

**Logo, service catalogue, industries and Clients record (2026-08-07):** Replaced the former JPEG wordmark with the supplied transparent `SAT LOGO-PINK.png` everywhere through the shared logo component, increased header/mobile/footer width tokens by exactly 20%, preserved its 432 × 113 aspect ratio and retained a neutral footer backing for contrast. Verified no runtime reference remained before removing the former logo and its Windows metadata. Changed the top-navigation CTA to “Request for Consultation” and standardized reusable general and service CTAs to “Enquiry”. Updated the supplied About span wording. Replaced the previous service data with the 12 company-supplied offerings and matching detail routes, updated navigation, contact options, featured Core Services, metadata, related services and sitemap, and added safe redirects from former service URLs. Generated and optimized dedicated WebP visuals for 3D artifact scanning, seismic vectorization and well-log vectorization; remaining services use semantically relevant approved existing visuals. Added Healthcare, Oil & Gas and Manufacturing without project claims. Replaced the Experience page and internal links with `/clients`, kept `/projects` as a compatibility redirect, and created a visual-content-only Clients page using all 17 supplied logos with centred responsive containers, original colours, preserved proportions and accessible alt text. Updated the nine homepage credential cards to the newly supplied logo files and removed the obsolete screenshot-derived logo assets. `WARISAN` and `BKS@Melaka` still require official-name confirmation. ESLint, strict TypeScript and the production build passed. The development server returned HTTP 200 for all primary pages, all 12 new service routes, the `/projects` and former E-book URL compatibility routes, the new logo, representative client logos and all three new service visuals.

**Client-logo alignment and DGflo integration record (2026-08-07):** Replaced the separate Home and Clients-page logo implementations with one reusable `ClientLogoGrid` component. Every supplied mark now uses the same centred 4:3 container, equal padding, `object-fit: contain`, preserved aspect ratio, restrained hover treatment and responsive wrapping rules; Home presents three representative marks with a link to the complete 17-logo gallery. Inspected the supplied 512 × 298 transparent `dgflo.png` asset and integrated that exact file as a reusable service brand reference on the DG-flo catalogue card and DG-flo service overview, with descriptive alternative text and contained responsive sizing. ESLint, strict TypeScript and the production build passed. The development server returned HTTP 200 for Home, Clients, the DG-flo detail route and the supplied DGflo asset.

**Client-logo replacement and DGflo service-image record (2026-08-09):** Replaced the supplied client image files in `src/assets/images/CLIENT LOGO/` without altering their colours or pixels. The shared `ClientLogoGrid` keeps every varied aspect ratio centred in equal 4:3 containers with contained sizing, and the Home section now presents five marks using the same component as the full Clients gallery. Changed DG-flo ERMS to use `dgflo.png` as its sole service image: the previous information-systems illustration and overlay treatment are no longer used for that service, and contained card/page-hero variants preserve the logo’s proportions.

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
- [x] Replace temporary branding with the official responsive logo in the header and footer

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
- [x] Build projects presentation and remove the later duplicate Solutions section
- [x] Build the client-credentials section
- [x] Build CTA and contact preview

## Phase 7 — Individual website pages

- [x] Build About Us
- [x] Build service catalogue
- [x] Build reusable service-detail pages
- [x] Build Industries / Who We Serve
- [x] Build Projects / Portfolio
- [x] Remove the redundant Technology / Solutions route and navigation
- [x] Build the deduplicated Hardware catalogue
- [x] Build Our Process
- [x] Build Why Choose Us
- [x] Build Careers
- [x] Build Privacy Policy and Terms
- [x] Build custom 404 page

## Phase 8 — Contact form

- [x] Build accessible contact form and fields
- [x] Add client-side validation
- [x] Add loading, success and error states
- [x] Add FormSubmit delivery to `info@satsb.com.my` and a future endpoint contract
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
- [x] Lazy-load below-fold catalogue and content imagery
- [ ] Run Lighthouse before production launch (manual)

## Phase 13 — Content review

- [x] Review the legacy company website as a factual content source only
- [x] Create the required `Content-Reference.md` inventory and owner checklist
- [x] Preserve the five broad areas supported by the legacy source
- [x] Add dedicated pages for focused scanning, conversion and hardware capabilities identified in the profile material and project brief
- [x] Add a relevant visual and richer structured presentation to every service page
- [x] Add two new homepage sections for format coverage and project readiness
- [x] Update service navigation, contact options and sitemap entries for the expanded catalogue
- [x] Remove public-facing publication controls and administrative verification/status panels
- [x] Add the confirmed company registration number and business hours to About, Contact and Footer
- [x] Replace and optimize eight selected service images with dedicated WebP assets and alt text
- [x] Inspect the supplied client-logo screenshot and map nine existing client names with high confidence
- [x] Extract nine individual logo assets with preserved proportions and responsive shared containers
- [x] Record `WARISAN` and `BKS@Melaka` as requiring manual confirmation
- [x] Add Archives & heritage institutions and Engineering & construction records to the sectors grid
- [x] Replace per-page related-service links with a shared equal-height related-services card component
- [x] Expand About with supported content, local imagery and accessible animation
- [x] Replace the unavailable company-video placeholder with a reduced-motion-safe digitization workflow animation
- [x] Refine every client-logo card with a consistent centred viewport, equal padding and preserved aspect ratio
- [x] Close the desktop Services dropdown and mobile navigation immediately after service selection
- [x] Add a responsive address-based office map with Google Maps, Waze and clipboard actions
- [x] Configure professional FormSubmit enquiry delivery to `info@satsb.com.my`
- [x] Remove the duplicate About Core Expertise section and rebalance page flow
- [x] Remove the Solutions homepage section, route, navigation, sitemap entry and dead code
- [x] Redesign Home and Industries with a shared responsive industry showcase
- [x] Replace the OCR / ICR / searchable-PDF image and alt text
- [x] Parse the supplied 59-row asset workbook and consolidate it into 31 unique equipment entries
- [x] Add the nine-category filterable Hardware catalogue and navigation links
- [x] Remove visible AI-placeholder captions, internal labels and unfinished Careers/Projects copy
- [x] Remove the Project Readiness homepage section and its unused code and styles
- [x] Redesign Delivery Structure as a responsive connected workflow
- [x] Separate and map all 25 labelled products from the supplied hardware composite
- [x] Remove Equipment Trolley and every catalogue entry below it, including the empty Operations accessories category
- [x] Upgrade the Hardware catalogue and Careers presentation
- [x] Replace the website identity with SAT LOGO-PINK and increase all displayed logo widths by 20%
- [x] Replace the service catalogue with the 12 company-supplied offerings and detail routes
- [x] Add Healthcare, Oil & Gas and Manufacturing to Industries
- [x] Replace Experience with the `/clients` logo-only page and retain an old-route redirect
- [x] Integrate all 17 supplied approved client logos with accessible responsive containers
- [x] Add the published email, telephone and address with the unit-number conflict visibly flagged
- [ ] Confirm the correct office unit, email and telephone with the owner
- [x] Add the business hours supplied on 6 August 2026
- [ ] Verify registration and company profile details
- [x] Remove unsupported quantitative, certification, software and experience claims from public copy
- [x] Replace invented representative projects with the nine legacy credential names and explicit evidence limits
- [ ] Replace verification listings with approved case studies or obtain permission for the current names
- [x] Add approved client logos
- [ ] Add approved testimonials if supplied
- [ ] Add verified certifications and partnerships only if supplied
- [ ] Complete legal review of Privacy Policy and Terms
- [ ] Proofread Bahasa Malaysia and/or additional language content if added

## Phase 14 — Deployment

- [ ] Choose production host and domain
- [ ] Configure SPA route rewrites
- [ ] Approve FormSubmit's one-time activation email and verify live mailbox delivery
- [x] Document the environment override for a future controlled form backend
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
