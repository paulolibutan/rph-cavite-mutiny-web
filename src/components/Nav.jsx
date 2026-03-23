import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import styles from './Nav.module.css'

// Anchor links live on the main page (/).
// The Sources link routes to /sources as a separate page.
const ANCHOR_LINKS = [
  { label: 'Home',        href: '#hero' },
  { label: 'The Mutiny',  href: '#mutiny' },
  { label: "Spain's Lie", href: '#spains-lie' },
  { label: 'GOMBURZA',    href: '#gomburza' },
  { label: 'El Fili',     href: '#el-fili' },
  { label: 'Revolution',  href: '#revolution' },
]

export default function Nav() {
  const [scrolled, setScrolled]  = useState(false)
  const [menuOpen, setMenuOpen]  = useState(false)
  const [active, setActive]      = useState('hero')
  const location = useLocation()

  const onSources = location.pathname === '/sources'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Only observe section IDs when on the main page
  useEffect(() => {
    if (onSources) return
    const ids = ANCHOR_LINKS.map(l => l.href.replace('#', ''))
    const observers = ids.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [onSources])

  const scrollWithOffset = (el) => {
    const top = el.getBoundingClientRect().top + window.scrollY - 72
    window.scrollTo({ top, behavior: 'smooth' })
    setMenuOpen(false)
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      aria-label="Main navigation"
    >
      {/* Brand — always routes to home */}
      <Link to="/" className={styles.brand} onClick={closeMenu}>
        <span className={styles.brandYear}>1872</span>
        <span className={styles.brandName}>Cavite</span>
      </Link>

      <button
        className={`${styles.toggle} ${menuOpen ? styles.open : ''}`}
        onClick={() => setMenuOpen(v => !v)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        <span /><span /><span />
      </button>

      <ul className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`} role="list">
        {/* Anchor links — HashLink handles cross-page scroll */}
        {ANCHOR_LINKS.map(({ label, href }) => {
          const id = href.replace('#', '')
          const isActive = !onSources && active === id
          return (
            <li key={id}>
              <HashLink
                to={`/${href}`}
                scroll={scrollWithOffset}
                className={`${styles.link} ${isActive ? styles.linkActive : ''}`}
                onClick={closeMenu}
              >
                {label}
              </HashLink>
            </li>
          )
        })}

        {/* Sources — routed page */}
        <li>
          <NavLink
            to="/sources"
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.linkActive : ''}`
            }
            onClick={closeMenu}
          >
            Sources
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
