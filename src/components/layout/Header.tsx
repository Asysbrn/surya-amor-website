import { ChevronDown, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navigation, secondaryNavigation } from '../../data/site'
import { CompanyLogo } from '../common/CompanyLogo'
import { Button } from '../ui/Button'

function isSectionActive(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)
}

function isNavigationActive(pathname: string, item: { href: string; children?: Array<{ href: string }> }) {
  return isSectionActive(pathname, item.href) || Boolean(item.children?.some((child) => isSectionActive(pathname, child.href)))
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
  }, [pathname])
  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        setServicesOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  function closeNavigation() {
    setOpen(false)
    setServicesOpen(false)
  }

  return (
    <>
      <div className="announcement">
        <div className="container announcement__inner">
          <span>Planning a digitization project?</span><Link to="/contact">Discuss your requirements →</Link>
        </div>
      </div>
      <header className="header">
        <div className="container header__inner">
          <CompanyLogo variant="header" />
          <nav className="nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <div
                className={`nav__item ${item.children && servicesOpen ? 'is-open' : ''}`}
                key={item.href}
                onMouseEnter={item.children ? () => setServicesOpen(true) : undefined}
                onMouseLeave={item.children ? () => setServicesOpen(false) : undefined}
                onFocus={item.children ? () => setServicesOpen(true) : undefined}
                onBlur={item.children ? (event) => !event.currentTarget.contains(event.relatedTarget) && setServicesOpen(false) : undefined}
              >
                {item.children ? (
                  <>
                    <Link className={`nav__trigger ${isNavigationActive(pathname, item) ? 'active' : ''}`} to={item.href} aria-haspopup="true" aria-expanded={servicesOpen} onClick={closeNavigation}>
                      {item.label}<ChevronDown size={14} aria-hidden="true" />
                    </Link>
                    <div className="nav__dropdown">
                      {item.children.map((child) => <Link key={child.href} to={child.href} onClick={closeNavigation}><strong>{child.label}</strong><span>{child.description}</span></Link>)}
                      <Link to="/services" onClick={closeNavigation}><strong>View complete catalogue</strong><span>Explore all scanning, conversion and technology capabilities.</span></Link>
                      <Link to="/process" onClick={closeNavigation}><strong>Our process</strong><span>Review the high-level delivery workflow.</span></Link>
                    </div>
                  </>
                ) : (
                  <NavLink className={({ isActive }) => `nav__link ${isActive ? 'active' : ''}`} to={item.href}>{item.label}</NavLink>
                )}
              </div>
            ))}
          </nav>
          <Button to="/contact" variant="dark">Request for Consultation</Button>
          <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setOpen((value) => !value)}>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>
      <div className={`mobile-menu ${open ? 'open' : ''}`} id="mobile-menu" aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <div key={item.href}>
              <NavLink to={item.href} onClick={closeNavigation} className={() => isNavigationActive(pathname, item) ? 'active' : ''}>{item.label}<span aria-hidden="true">→</span></NavLink>
              {item.children && <div className="mobile-menu__services">{item.children.map((child) => <Link key={child.href} to={child.href} onClick={closeNavigation}>{child.label}</Link>)}</div>}
            </div>
          ))}
          {secondaryNavigation.map((item) => (
            <NavLink key={item.href} to={item.href} onClick={closeNavigation}>{item.label}<span aria-hidden="true">→</span></NavLink>
          ))}
        </nav>
      </div>
    </>
  )
}
