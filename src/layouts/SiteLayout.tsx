import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { ScrollToTop } from '../components/layout/ScrollToTop'
import { OrganizationSchema } from '../components/common/OrganizationSchema'

export default function SiteLayout() {
  const { pathname } = useLocation()
  const announcement = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    window.setTimeout(() => {
      if (announcement.current) announcement.current.textContent = `Loaded ${document.title}`
    }, 0)
  }, [pathname])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <OrganizationSchema />
      <div className="sr-only" ref={announcement} role="status" aria-live="polite" />
      <Header />
      <main id="main-content" tabIndex={-1}><Outlet /></main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
