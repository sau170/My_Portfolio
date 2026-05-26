import { useEffect, useRef } from 'react'

const edu = [
  {
    icon: '🎓',
    degree: 'Bachelor of Engineering',
    field: 'Computer Engineering',
    inst: 'Vidya Niketan College of Engineering, Sangamner',
    univ: 'Savitribai Phule Pune University',
    period: '2021 – 2022',
    score: 'CGPA: 8.78',
  },
  {
    icon: '📚',
    degree: 'Higher Secondary Certificate',
    field: 'HSC (Science)',
    inst: 'Chandaneshwar Vidyalaya, Chandanapuri, Sangamner',
    univ: 'Maharashtra State Board, Pune Division',
    period: '2017 – 2018',
    score: '66.77%',
  },
  {
    icon: '📖',
    degree: 'Secondary School Certificate',
    field: 'SSC',
    inst: 'Chandaneshwar Vidyalaya, Chandanapuri, Sangamner',
    univ: 'Maharashtra State Board, Pune Division',
    period: '2015 – 2016',
    score: '86.80%',
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
