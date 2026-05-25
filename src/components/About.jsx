import { useEffect, useRef } from 'react'

export default function About() {
  const ref = useRef()

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">// about me</div>
          <h2 className="section-title">Who I Am</h2>
          <div className="section-line" />
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I'm a <strong>Full Stack Developer</strong> based in Pune, India, currently working at{' '}
              <strong>Four Colours India Pvt. Ltd.</strong> I specialize in building scalable,
              production-ready web applications using modern technologies.
            </p>
            <p>
              With expertise in <strong>React.js, Node.js, SQL, and MongoDB</strong>, I enjoy
              every phase of the development lifecycle — from gathering requirements and designing
              architecture, to writing clean code and shipping to production.
            </p>
            <p>
              I also have hands-on experience with the <strong>Mendix low-code platform</strong> and{' '}
              <strong>Java integration</strong>, having built enterprise client solutions that bridge
              business needs with modern tech.
            </p>

            <div className="about-details">
              {[
                ['Location', 'Pune, India'],
                ['Role', 'Software Developer'],
                ['Company', 'Four Colours India'],
                ['Email', 'ganjavevaibhav1@gmail.com'],
                ['GitHub', 'Vaibhav-B-Ganjave'],
                ['Degree', 'B.E. Computer Eng.'],
              ].map(([label, value]) => (
                <div className="detail-item" key={label}>
                  <div className="detail-label">{label}</div>
                  <div className="detail-value" style={{ fontSize: label === 'Email' ? '0.78rem' : undefined }}>{value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-right reveal">
            <div className="glass-card">
              <div className="glass-card-title">🏆 Certificates</div>
              <div className="cert-row">
                <div className="cert-badge">☕</div>
                <div className="cert-info">
                  <h4>Full Stack Java Development Training</h4>
                  <p>QSpiders, Hadapsar Pune</p>
                </div>
              </div>
              <div className="cert-row">
                <div className="cert-badge">⚡</div>
                <div className="cert-info">
                  <h4>Mendix: Low-code App Development</h4>
                  <p>Udemy</p>
                </div>
              </div>
            </div>

            <div className="glass-card">
              <div className="glass-card-title">🌐 Languages</div>
              {[['English', 'Professional'], ['Hindi', 'Fluent'], ['Marathi', 'Native']].map(([lang, level]) => (
                <div className="lang-row" key={lang}>
                  <span className="lang-name">{lang}</span>
                  <span className="lang-pill">{level}</span>
                </div>
              ))}
            </div>

            <div className="glass-card">
              <div className="glass-card-title">🎯 Achievements</div>
              {[
                'Delivered 3+ enterprise projects',
                '2 yrs full-stack React & MongoDB experience',
                'Low-code client solutions with Mendix + Java',
              ].map((ach, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', padding: '8px 0', borderBottom: i < 2 ? '1px solid var(--border)' : 'none', fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  <span style={{ color: 'var(--primary)', flexShrink: 0 }}>✦</span>
                  {ach}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
