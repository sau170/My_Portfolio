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
          <p className="sec-sub">A passionate React.js Developer building responsive, scalable, and user-centric web applications</p>
          <div className="sec-line" />
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I'm a <strong>React.js Developer</strong> based in Pune, India, currently working at{' '}
              <strong>Four Colours India Pvt. Ltd.</strong> I specialize in building <strong>responsive, scalable, and user-friendly</strong> web applications using modern front-end technologies.
            </p>
            <p>
              With hands-on expertise in <strong>React.js, JavaScript, HTML5, CSS3, and REST API integration</strong>,  enjoy transforming business requirements into intuitive and high-performing user interfaces. I am passionate about developing reusable components, optimizing application performance, and delivering seamless user experiences.
            </p>
            <p>
              I have experience working across the complete development lifecycle, including requirement <strong>analysis, UI development, feature implementation, bug fixing, client communication, feasibility analysis, and effort estimation</strong>. I am always eager to learn new technologies and continuously enhance my front-end development skills.
            </p>

            <div className="info-grid">
              {[
                ['Location', 'Pune, India'],
                ['Role', 'Software Developer'],
                ['Company', 'Four Colours India Pvt. Ltd.'],
                ['Degree', 'B.E. Computer Engineering'],
                ['CGPA', '8.78 / 10'],
                ['Email', 'saurabhbirari9999@gmail.com'],
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
                <div className="cert-ico">🕷</div>
                <div>
                  <h4>Full Stack Development Training</h4>
                  <p>QSpiders, Hadapsar Pune</p>
                </div>
              </div>
              <div className="cert-row">
                <div className="cert-ico">👨🏼‍💻</div>
                <div>
                  <h4>JavaScript Course</h4>
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
                'Received appreciation from team members and management for timely issue resolution and proactive problem-solving',
                '2 years of professional front-End development experience',
                'Recognized for consistently delivering assigned tasks within deadlines while maintaining high-quality development standards.',
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
