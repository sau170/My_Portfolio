import { useEffect, useRef } from 'react'

const cats = [
  {
    title: 'Frontend',
    skills: [
      { ico: '⚛️', name: 'React.js' }, { ico: '🟨', name: 'JavaScript (ES6+)' },
      { ico: '🌐', name: 'HTML5' }, { ico: '🎨', name: 'CSS3' },
      { ico: '📱', name: 'Responsive UI' }, { ico: '🔗', name: 'REST APIs' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { ico: '🟢', name: 'Node.js' }, { ico: '☕', name: 'Core Java' },
      { ico: '🍃', name: '' }, { ico: '🗃️', name: '' },
      { ico: '🔌', name: 'Basic Express.js' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { ico: '🍃', name: 'MongoDB' }, { ico: '🗄️', name: 'SQL / MySQL' },
      { ico: '🔷', name: '' }, { ico: '📊', name: '' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { ico: '⚡', name: 'VS Code' }, { ico: '🐙', name: 'Git / GitHub' },
      { ico: '💻', name: 'Bootstrap' }, { ico: '🧠', name: 'Rect Router' },
      { ico: '🌑', name: 'Eclipse' }, { ico: '🛠️', name: 'Postman' },
    ],
  },
]

export default function Skills() {
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
    <section id="skills" ref={ref}>
      <div className="container">
        <div className="sec-head reveal">
          <h2 className="sec-title"><span>Skills</span></h2>
          <p className="sec-sub">A collection of my technical skills and expertise</p>
          <div className="sec-line" />
        </div>

        <div className="skills-cats">
          {cats.map((cat, i) => (
            <div className="skill-cat reveal" key={cat.title} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="skill-cat-title">{cat.title}</div>
              <div className="skill-pills">
                {cat.skills.map(s => (
                  <span className="sk-pill" key={s.name}>
                    <span className="sk-ico">{s.ico}</span>
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
