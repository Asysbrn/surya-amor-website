import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SiteLayout from './layouts/SiteLayout'

const HomePage = lazy(() => import('./pages/HomePage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const AboutPage = lazy(() => import('./pages/CorporatePages').then((module) => ({ default: module.AboutPage })))
const IndustriesPage = lazy(() => import('./pages/CorporatePages').then((module) => ({ default: module.IndustriesPage })))
const ProjectsPage = lazy(() => import('./pages/CorporatePages').then((module) => ({ default: module.ProjectsPage })))
const TechnologyPage = lazy(() => import('./pages/CorporatePages').then((module) => ({ default: module.TechnologyPage })))
const ProcessPage = lazy(() => import('./pages/CorporatePages').then((module) => ({ default: module.ProcessPage })))
const WhyUsPage = lazy(() => import('./pages/CorporatePages').then((module) => ({ default: module.WhyUsPage })))
const CareersPage = lazy(() => import('./pages/CorporatePages').then((module) => ({ default: module.CareersPage })))
const PrivacyPage = lazy(() => import('./pages/LegalPages').then((module) => ({ default: module.PrivacyPage })))
const TermsPage = lazy(() => import('./pages/LegalPages').then((module) => ({ default: module.TermsPage })))

function RouteLoader() {
  return <div className="section" role="status"><div className="container"><p className="eyebrow">Loading page</p><p className="lead">Preparing the requested content…</p></div></div>
}

const router = createBrowserRouter([{
  element: <SiteLayout />,
  children: [
    { path: '/', element: <HomePage /> },
    { path: '/about', element: <AboutPage /> },
    { path: '/services', element: <ServicesPage /> },
    { path: '/services/:slug', element: <ServiceDetailPage /> },
    { path: '/industries', element: <IndustriesPage /> },
    { path: '/projects', element: <ProjectsPage /> },
    { path: '/technology', element: <TechnologyPage /> },
    { path: '/process', element: <ProcessPage /> },
    { path: '/why-us', element: <WhyUsPage /> },
    { path: '/careers', element: <CareersPage /> },
    { path: '/contact', element: <ContactPage /> },
    { path: '/privacy', element: <PrivacyPage /> },
    { path: '/terms', element: <TermsPage /> },
    { path: '/404', element: <NotFoundPage /> },
    { path: '*', element: <NotFoundPage /> },
  ],
}])

export default function App() {
  return <Suspense fallback={<RouteLoader />}><RouterProvider router={router} /></Suspense>
}
