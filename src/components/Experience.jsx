import { useEffect, useRef } from 'react'

export default function Experience() {
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
    <section className="experience" id="experience" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">// work experience</div>
          <h2 className="section-title">Where I've Worked</h2>
          <div className="section-line" />
        </div>

        <div className="timeline">
          <div className="timeline-item reveal">
            <div className="timeline-dot">
              <div className="timeline-dot-inner" />
            </div>

            <div className="timeline-content">
              <div className="timeline-top">
                <div>
                  <div className="timeline-role">Software Developer</div>
                  <div className="timeline-company">Four Colours India Pvt. Ltd. · Pune, India</div>
                </div>
                <span className="timeline-period">Sep 2023 – Present</span>
              </div>

              <ul className="timeline-list">
                <li>
                  2 years of hands-on <strong>full-stack development</strong> with expertise in{' '}
                  <strong>React.js, SQL, MongoDB, and Mendix</strong>.
                </li>
                <li>
                  Designed and developed <strong>responsive UIs</strong> and integrated{' '}
                  <strong>REST APIs</strong> for multiple enterprise applications.
                </li>
                <li>
                  Collaborated with cross-functional teams to deliver <strong>scalable and
                  maintainable solutions</strong> on time.
                </li>
                <li>
                  Gained in-depth experience in <strong>Mendix low-code platform</strong> with{' '}
                  <strong>Java integration</strong> for client-side applications.
                </li>
                <li>
                  Involved in the complete <strong>end-to-end development lifecycle</strong> —
                  requirement gathering, design, coding, testing, and deployment.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
