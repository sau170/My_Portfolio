import { useEffect, useRef } from 'react'

const projects = [
  {
    icon: '🤖', label: 'AI / Chatbot',
    title: 'eBuddy — AI Chatbot Platform',
    desc: 'A ChatGPT-like chatbot interface built for internal company use, with smooth interactive UI and a scalable frontend architecture for AI communication tools.',
    tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
    features: ['ChatGPT-like UI customized for internal use', 'Interactive React UI components', 'Scalable frontend architecture'],
  },
  {
    icon: '📊', label: 'Full Stack',
    title: 'Automated Appraisal System',
    desc: 'End-to-end workflow automation system for employee performance reviews, with REST APIs, SQL/MongoDB data management, and a full React frontend.',
    tech: ['React.js', 'Node.js', 'SQL', 'MongoDB'],
    features: ['Complete appraisal workflow automation', 'REST APIs for frontend-backend data flow', 'Dual database — SQL & MongoDB schemas'],
  },
  {
    icon: '⚡', label: 'Low-Code',
    title: 'Launcher 2',
    desc: 'Enterprise low-code application on Mendix with custom Java modules for complex client business requirements, including custom workflow and data model design.',
    tech: ['Mendix', 'Java'],
    features: ['Low-code Mendix apps for enterprise clients', 'Custom Java module integration', 'Workflow, data model & backend design'],
  },
]

export default function Projects() {
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
    <section id="projects" ref={ref}>
      <div className="container">
        <div className="sec-head reveal">
          <h2 className="sec-title"><span>Projects</span></h2>
          <p className="sec-sub">A showcase of the projects I have worked on</p>
          <div className="sec-line" />
        </div>

        <div className="proj-grid">
          {projects.map((p, i) => (
            <div className="proj-card reveal" key={p.title} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="proj-thumb">
                <span className="proj-thumb-label">{p.label}</span>
                <div className="proj-thumb-icon">{p.icon}</div>
              </div>
              <div className="proj-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="proj-tags">
                  {p.tech.map(t => <span className="p-tag" key={t}>{t}</span>)}
                </div>
                <ul className="proj-feats">
                  {p.features.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
