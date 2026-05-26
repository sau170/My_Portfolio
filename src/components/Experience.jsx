import { useEffect, useRef } from 'react'

export default function Experience() {
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
    <section className="experience" id="experience" ref={ref}>
      <div className="container">
        <div className="sec-head reveal">
          <h2 className="sec-title"><span>Experience</span></h2>
          <p className="sec-sub">My professional journey so far</p>
          <div className="sec-line" />
        </div>

        <div className="exp-wrap reveal">
          <div className="exp-item">
            <div className="exp-dot" />
            <div className="exp-body">
              <div className="exp-top">
                <div>
                  <div className="exp-role">Software Developer</div>
                  <div className="exp-co">Four Colours India Pvt. Ltd. · Pune, India</div>
                </div>
                <span className="exp-period">Sep 2023 – Present</span>
              </div>
              <ul className="exp-list">
                <li>2 years of hands-on <strong>full-stack development</strong> with React.js, SQL, MongoDB, and Mendix.</li>
                <li>Designed and developed <strong>responsive UIs</strong> and integrated <strong>REST APIs</strong> for multiple enterprise applications.</li>
                <li>Collaborated with cross-functional teams to deliver <strong>scalable and maintainable solutions</strong> on schedule.</li>
                <li>Gained deep experience in <strong>Mendix low-code platform</strong> with <strong>Java integration</strong> for client-side applications.</li>
                <li>Involved in the <strong>end-to-end development lifecycle</strong> — requirement gathering, design, coding, testing, and deployment.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
