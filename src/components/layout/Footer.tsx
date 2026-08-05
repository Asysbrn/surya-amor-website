import { Link } from 'react-router-dom'
import { services } from '../../data/services'
import { siteConfig } from '../../data/site'
import { Brand } from '../common/Brand'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__company">
          <Brand />
          <p className="footer__about">Helping organizations plan and deliver careful document digitization, digital preservation and information technology initiatives.</p>
        </div>
        <div>
          <h2>Company</h2>
          <div className="footer__links">
            <Link to="/about">About us</Link><Link to="/why-us">Why choose us</Link><Link to="/process">Our process</Link><Link to="/projects">Projects</Link><Link to="/careers">Careers</Link>
          </div>
        </div>
        <div>
          <h2>Core services</h2>
          <div className="footer__links">
            {services.filter((service) => service.featured).slice(0, 5).map((service) => <Link key={service.slug} to={`/services/${service.slug}`}>{service.title}</Link>)}
            <Link to="/services">All services</Link>
          </div>
        </div>
        <div>
          <h2>Contact</h2>
          <div className="footer__links">
            <span>{siteConfig.address}</span><span>Email: {siteConfig.email}</span><span>Phone: {siteConfig.phone}</span><Link to="/contact">Send an enquiry</Link>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Surya Amor Technology Sdn Bhd. All rights reserved.</span>
        <span><Link to="/privacy">Privacy policy</Link> · <Link to="/terms">Terms & conditions</Link></span>
      </div>
    </footer>
  )
}
