import { useEffect, useState } from 'react'
import profileImg from '../assets/Vaibhav.jpg'

const roles = ['Full Stack Developer', 'React.js Developer', 'Node.js Developer', 'Problem Solver']

export default function Hero() {
  const [idx, setIdx] = useState(0)
  const [shown, setShown] = useState('')
  const [del, setDel] = useState(false)

  useEffect(() => {
    const cur = roles[idx]
    let t
    if (!del && shown.length < cur.length) t = setTimeout(() => setShown(cur.slice(0, shown.length + 1)), 80)
    else if (!del && shown.length === cur.length) t = setTimeout(() => setDel(true), 2200)
    else if (del && shown.length > 0) t = setTimeout(() => setShown(shown.slice(0, -1)), 40)
    else if (del && shown.length === 0) { setDel(false); setIdx(i => (i + 1) % roles.length) }
    return () => clearTimeout(t)
  }, [shown, del, idx])

  const go = id => e => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }

  return (
    <section className="hero" id="home">
      <div className="hero-grid" />

      <div className="container">
        {/* Left */}
        <div className="hero-left" style={{ animation: 'fadeInUp 0.7s ease both' }}>
          <p className="hero-greeting">Hi there 👋, I am</p>
          <h1 className="hero-name">Vaibhav<br />Ganjave</h1>

          <p className="hero-typed-line">
            I am a <span className="hero-typed">{shown}</span>
          </p>

          <p className="hero-desc">
            Full Stack Developer with 2+ years building scalable web apps using React.js,
            Node.js, SQL & MongoDB. Passionate about clean code, great UX, and enterprise solutions.
          </p>

          <div className="hero-btns">
            <a href="#projects" className="btn-green" onClick={go('projects')}>
              View Projects →
            </a>
            <a href="#contact" className="btn-border" onClick={go('contact')}>
              Hire Me
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/Vaibhav-B-Ganjave" target="_blank" rel="noreferrer" className="hero-soc">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/vaibhav--ganjave" target="_blank" rel="noreferrer" className="hero-soc">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a href="mailto:ganjavevaibhav1@gmail.com" className="hero-soc">
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Email
            </a>
          </div>

          <div className="hero-stats">
            {[['2+', 'Years Exp.'], ['3+', 'Projects'], ['5+', 'Tech Stack'], ['8.78', 'CGPA']].map(([n, l]) => (
              <div className="h-stat" key={l}>
                <span className="h-stat-num">{n}</span>
                <span className="h-stat-label">{l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Photo */}
        <div className="hero-right" style={{ animation: 'fadeInUp 0.9s ease both' }}>
          <div className="hero-photo-wrap">
            <div className="hero-photo-border" />
            <div className="hero-photo-inner">
              <img src={profileImg} alt="Vaibhav Ganjave" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
            <div className="hero-badge-wrap">
              <span className="badge-dot" />
              <span>Available for hire</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
