import { useEffect, useRef } from 'react'

export default function About() {
  const ref = useRef()
  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <div className="sec-head reveal">
          <h2 className="sec-title"><span>About</span> Me</h2>
          <p className="sec-sub">A passionate developer building real-world solutions</p>
          <div className="sec-line" />
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I'm a <strong>Full Stack Developer</strong> based in Pune, India, currently working at{' '}
              <strong>Four Colours India Pvt. Ltd.</strong> I specialize in building scalable,
              production-ready web applications using modern technologies.
            </p>
            <p>
              With hands-on expertise in <strong>React.js, Node.js, SQL, and MongoDB</strong>, I enjoy
              every phase of the development lifecycle — from gathering requirements and designing
              architecture, to writing clean code and deploying to production.
            </p>
            <p>
              I also have deep experience with the <strong>Mendix low-code platform</strong> and{' '}
              <strong>Java integration</strong>, having built enterprise solutions that bridge complex
              business needs with modern tech.
            </p>

            <div className="info-grid">
              {[
                ['Location', 'Pune, India'],
                ['Role', 'Software Developer'],
                ['Company', 'Four Colours India Pvt. Ltd.'],
                ['Degree', 'B.E. Computer Engineering'],
                ['CGPA', '8.78 / 10'],
                ['Email', 'ganjavevaibhav1@gmail.com'],
              ].map(([l, v]) => (
                <div className="info-box" key={l}>
                  <div className="lbl">{l}</div>
                  <div className="val" style={{ fontSize: l === 'Email' ? '0.76rem' : undefined }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-right reveal">
            <div className="a-card">
              <div className="a-card-title">🏆 Certificates</div>
              <div className="cert-row">
                <div className="cert-ico">☕</div>
                <div>
                  <h4>Full Stack Java Development Training</h4>
                  <p>QSpiders, Hadapsar Pune</p>
                </div>
              </div>
              <div className="cert-row">
                <div className="cert-ico">⚡</div>
                <div>
                  <h4>Mendix: Low-code App Development</h4>
                  <p>Udemy</p>
                </div>
              </div>
            </div>

            <div className="a-card">
              <div className="a-card-title">🌐 Languages</div>
              {[['English', 'Professional'], ['Hindi', 'Fluent'], ['Marathi', 'Native']].map(([l, v]) => (
                <div className="lang-row" key={l}>
                  <span className="l-name">{l}</span>
                  <span className="lang-pill">{v}</span>
                </div>
              ))}
            </div>

            <div className="a-card">
              <div className="a-card-title">🎯 Achievements</div>
              {[
                'Delivered 3+ enterprise projects incl. automation & chatbot',
                '2 years of professional full-stack development experience',
                'Contributed to low-code client solutions in Mendix + Java',
              ].map((a, i, arr) => (
                <div key={i} style={{ display: 'flex', gap: '9px', padding: '9px 0', borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none', fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  <span style={{ color: 'var(--green)', flexShrink: 0 }}>✦</span>
                  {a}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
