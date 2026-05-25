import { useEffect, useRef } from 'react'

const projects = [
  {
    icon: '🤖',
    title: 'eBuddy — AI Chatbot Platform',
    desc: 'A ChatGPT-like chatbot interface built for internal company use with a smooth, interactive user experience and scalable frontend architecture.',
    tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
    features: [
      'Developed a full chatbot UI similar to ChatGPT for internal use',
      'Implemented interactive UI components for smooth UX',
      'Built scalable frontend architecture for AI-based tools',
    ],
  },
  {
    icon: '📊',
    title: 'Automated Appraisal System',
    desc: 'End-to-end workflow automation system for employee performance reviews, with full frontend, REST API backend, and database design.',
    tech: ['React.js', 'Node.js', 'SQL', 'MongoDB'],
    features: [
      'Built complete appraisal workflow automation for performance reviews',
      'Developed REST APIs for frontend-backend data flow',
      'Designed and managed database schemas in SQL and MongoDB',
    ],
  },
  {
    icon: '⚡',
    title: 'Launcher 2',
    desc: 'Enterprise low-code application built on Mendix with custom Java modules to support complex client-side business requirements.',
    tech: ['Mendix', 'Java'],
    features: [
      'Developed low-code apps in Mendix for client business needs',
      'Integrated custom Java modules for enhanced functionality',
      'Collaborated with clients on workflows, data models, and logic',
    ],
  },
]

export default function Projects() {
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
    <section id="projects" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">// featured projects</div>
          <h2 className="section-title">Things I've Built</h2>
          <div className="section-line" />
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              className="project-card reveal"
              key={p.title}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="project-banner" />
              <div className="project-body">
                <div className="project-header">
                  <div className="project-icon-wrap">{p.icon}</div>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="project-techs">
                  {p.tech.map(t => <span className="p-tech" key={t}>{t}</span>)}
                </div>
                <ul className="project-features">
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
