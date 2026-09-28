import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__grid">
        <div>
          <div className="site-footer__mark">Natural Timber</div>
          <p className="dim site-footer__tag">
            George&rsquo;s Custom Made — bespoke solid-timber furniture, hand-built
            in Sydney since 1995.
          </p>
          <div className="site-footer__social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              Instagram
            </a>
          </div>
        </div>

        <div>
          <div className="site-footer__heading">Visit</div>
          <p className="dim">457 Pacific Hwy<br />Crows Nest NSW 2065</p>
        </div>

        <div>
          <div className="site-footer__heading">Reach us</div>
          <p className="dim">
            <a href="tel:0416208998">George — 0416 208 998</a><br />
            <a href="mailto:naturetimber888@gmail.com">naturetimber888@gmail.com</a>
          </p>
        </div>

        <div>
          <div className="site-footer__heading">Explore</div>
          <p className="dim site-footer__links">
            <Link to="/products">Products</Link>
            <Link to="/materials">Timber &amp; process</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </p>
        </div>
      </div>

      <div className="wrap site-footer__bottom">
        <span className="dim">© {new Date().getFullYear()} Natural Timber Furniture. Workshop in Fairfield, showroom in Crows Nest.</span>
      </div>
    </footer>
  )
}
