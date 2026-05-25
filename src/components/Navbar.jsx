import { useState, useEffect } from 'react'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNav = (e, id) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar" style={{ boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.4)' : 'none' }}>
      <div className="container">
        <a href="#" className="navbar-logo">VG.</a>
        <ul className={`navbar-links${open ? ' open' : ''}`}>
          {links.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} onClick={e => handleNav(e, link)}>{link}</a>
            </li>
          ))}
        </ul>
        <button className="navbar-menu-btn" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          {open ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}
