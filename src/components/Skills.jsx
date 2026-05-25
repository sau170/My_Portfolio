import { useEffect, useRef } from 'react'

const skillGroups = [
  { icon: '🎨', title: 'Frontend', skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Responsive UI', 'REST APIs'] },
  { icon: '⚙️', title: 'Backend', skills: ['Node.js', 'Express.js', 'REST APIs', 'Java', 'Spring (Basic)', 'Hibernate'] },
  { icon: '🗄️', title: 'Databases', skills: ['MongoDB', 'SQL', 'MySQL', 'SQL Plus', 'Schema Design'] },
  { icon: '⚡', title: 'Low-Code / Tools', skills: ['Mendix', 'Java Integration', 'Git', 'VS Code', 'IntelliJ IDEA'] },
  { icon: '🛠️', title: 'Dev Tools', skills: ['Eclipse', 'Sublime Text', 'MySQL Workbench', 'Postman'] },
]

export default function Skills() {
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
    <section className="skills" id="skills" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">// skills & tools</div>
          <h2 className="section-title">What I Work With</h2>
          <div className="section-line" />
        </div>

        <div className="skills-grid">
          {skillGroups.map((g, i) => (
            <div
              className="skill-card reveal"
              key={g.title}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="skill-icon-box">{g.icon}</div>
              <h3>{g.title}</h3>
              <div className="skill-pills">
                {g.skills.map(s => (
                  <span className="skill-pill" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
