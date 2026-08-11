import { Link } from 'react-router-dom'
import { featuredServices } from '../../data/services'
import { siteConfig } from '../../data/site'
import { CompanyLogo } from '../common/CompanyLogo'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__company">
          <CompanyLogo variant="footer" />
          <p className="footer__about">Document scanning, indexing, audio visual digitization, geospatial services, vectorization, records management and software development from Kuala Lumpur.</p>
          <p className="footer__company-detail">Registration No.: {siteConfig.registrationNo}</p>
          <p className="footer__company-detail">{siteConfig.hours}<br />{siteConfig.closedHours}</p>
        </div>
        <div>
          <h2>Company</h2>
          <div className="footer__links">
            <Link to="/about">About us</Link><Link to="/why-us">Why choose us</Link><Link to="/process">Our process</Link><Link to="/clients">Clients</Link><Link to="/news">News</Link><Link to="/careers">Careers</Link>
          </div>
        </div>
        <div>
          <h2>Core services</h2>
          <div className="footer__links">
            {featuredServices.map((service) => <Link key={service.slug} to={`/services/${service.slug}`}>{service.title}</Link>)}
            <Link to="/hardware">Hardware catalogue</Link>
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
