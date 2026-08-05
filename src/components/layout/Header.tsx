import { ChevronDown, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navigation } from '../../data/site'
import { Brand } from '../common/Brand'
import { Button } from '../ui/Button'

function isSectionActive(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)
}

export function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <>
      <div className="announcement">
        <div className="container announcement__inner">
          <span>Planning a digitization project?</span><Link to="/contact">Discuss your requirements →</Link>
        </div>
      </div>
      <header className="header">
        <div className="container header__inner">
          <Brand />
          <nav className="nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <div className="nav__item" key={item.href}>
                {item.children ? (
                  <>
                    <Link className={`nav__trigger ${isSectionActive(pathname, item.href) ? 'active' : ''}`} to={item.href}>
                      {item.label}<ChevronDown size={14} aria-hidden="true" />
                    </Link>
                    <div className="nav__dropdown">
                      {item.children.map((child) => <Link key={child.href} to={child.href}><strong>{child.label}</strong><span>{child.description}</span></Link>)}
                      <Link to="/services"><strong>View all services</strong><span>Explore the five published service areas.</span></Link>
                      <Link to="/process"><strong>Proposed process</strong><span>Review the high-level workflow awaiting owner approval.</span></Link>
                    </div>
                  </>
                ) : (
                  <NavLink className={({ isActive }) => `nav__link ${isActive ? 'active' : ''}`} to={item.href}>{item.label}</NavLink>
                )}
              </div>
            ))}
          </nav>
          <Button to="/contact" variant="dark">Request a consultation</Button>
          <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setOpen((value) => !value)}>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>
      <div className={`mobile-menu ${open ? 'open' : ''}`} id="mobile-menu" aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <div key={item.href}>
              <NavLink to={item.href} className={() => isSectionActive(pathname, item.href) ? 'active' : ''}>{item.label}<span aria-hidden="true">→</span></NavLink>
              {item.children && <div className="mobile-menu__services">{item.children.slice(0, 4).map((child) => <Link key={child.href} to={child.href}>{child.label}</Link>)}</div>}
            </div>
          ))}
          <NavLink to="/process">Our Process<span aria-hidden="true">→</span></NavLink>
          <NavLink to="/why-us">Why Choose Us<span aria-hidden="true">→</span></NavLink>
          <NavLink to="/careers">Careers<span aria-hidden="true">→</span></NavLink>
        </nav>
      </div>
    </>
  )
}
