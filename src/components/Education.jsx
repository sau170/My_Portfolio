import { useEffect, useRef } from 'react'

const education = [
  {
    icon: '🎓',
    degree: 'Bachelor of Engineering',
    field: 'Computer Engineering',
    institution: 'Vidya Niketan College of Engineering, Sangamner',
    university: 'Savitribai Phule Pune University',
    period: '2021 – 2022',
    score: 'CGPA: 8.78',
  },
  {
    icon: '📚',
    degree: 'Higher Secondary Certificate',
    field: 'HSC',
    institution: 'Chandaneshwar Vidyalaya, Chandanapuri, Sangamner',
    university: 'Maharashtra State Board, Pune Division',
    period: '2017 – 2018',
    score: '66.77%',
  },
  {
    icon: '📖',
    degree: 'Secondary School Certificate',
    field: 'SSC',
    institution: 'Chandaneshwar Vidyalaya, Chandanapuri, Sangamner',
    university: 'Maharashtra State Board, Pune Division',
    period: '2015 – 2016',
    score: '86.80%',
  },
]

export default function Education() {
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
    <section className="education" id="education" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">// education</div>
          <h2 className="section-title">Academic Background</h2>
          <div className="section-line" />
        </div>

        <div className="education-grid">
          {education.map((e, i) => (
            <div
              className="edu-card reveal"
              key={e.degree}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="edu-icon-wrap">{e.icon}</div>
              <h3>{e.degree} <span style={{ color: 'var(--primary)' }}>({e.field})</span></h3>
              <div className="edu-inst">{e.institution}</div>
              <div className="edu-chips">
                <span className="edu-chip">{e.university}</span>
                <span className="edu-chip">{e.period}</span>
                <span className="edu-chip" style={{ color: 'var(--primary)', borderColor: 'rgba(0,212,255,0.3)', background: 'rgba(0,212,255,0.06)' }}>{e.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
