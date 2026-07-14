import { useEffect, useRef } from 'react'

const edu = [
  {
    icon: '🎓',
    degree: 'Bachelor of Engineering',
    field: 'Computer Engineering',
    inst: 'Sarswati College of Engineering,,Kharghar,Navi Mumbai',
    univ: 'Mumbai University',
    period: '2022',
    score: 'CGPA: 8.78',
  },
  {
    icon: '📚',
    degree: 'Higher Secondary Certificate',
    field: 'HSC (Science)',
    inst: 'R.C.Patel English Medium School Jr.College Shirpur,Dist Dhule',
    period: '2014',
    score: '78.7%',
  },
  {
    icon: '📖',
    degree: 'Secondary School Certificate',
    field: 'SSC',
    inst: 'S.T.T.K Mahajan Highschool Dhule',
    univ: 'Maharashtra State Board, Pune Division',
    period: '2015',
    score: '76.80%',
  },
]

export default function Education() {
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
    <section className="education" id="education" ref={ref}>
      <div className="container">
        <div className="sec-head reveal">
          <h2 className="sec-title"><span>Education</span></h2>
          <p className="sec-sub">A collection of my academic background</p>
          <div className="sec-line" />
        </div>

        <div className="edu-timeline">
          {edu.map((e, i) => (
            <div
              className={`edu-item${i % 2 === 1 ? ' right' : ''} reveal`}
              key={e.degree}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="edu-dot">{e.icon}</div>
              <div className="edu-card">
                <h3>{e.degree}</h3>
                <div className="e-field">{e.field}</div>
                <div className="e-inst">{e.inst}<br /><span style={{ fontSize: '0.75rem' }}>{e.univ}</span></div>
                <div className="edu-chips">
                  <span className="edu-chip">{e.period}</span>
                  <span className="edu-chip score">{e.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
