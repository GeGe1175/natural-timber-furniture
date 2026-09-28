import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

const LINKS = [
  { to: '/products', label: 'Products' },
  { to: '/materials', label: 'Timber & process' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${solid ? 'nav--solid' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav__row wrap">
        <NavLink to="/" className="nav__mark" onClick={() => setOpen(false)}>
          <span className="nav__mark-line1">Natural Timber</span>
          <span className="nav__mark-line2">George&rsquo;s Custom Made</span>
        </NavLink>

        <nav className="nav__links">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => 'nav__link' + (isActive ? ' is-active' : '')}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/contact" className="brass-btn solid nav__cta">
          Get a quote
        </NavLink>

        <button
          className="nav__burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav__mobile">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="brass-btn solid" onClick={() => setOpen(false)}>
            Get a quote
          </NavLink>
        </div>
      )}
    </header>
  )
}
