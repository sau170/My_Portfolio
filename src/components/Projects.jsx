const projects = [
  {
    icon: '🤖',
    title: 'eBuddy — AI Chatbot Platform',
    description:
      'A ChatGPT-like chatbot interface built for internal company use, featuring a smooth and interactive user experience.',
    tech: ['React.js', 'JavaScript', 'HTML', 'CSS'],
    features: [
      'Developed a full chatbot UI similar to ChatGPT, customized for internal use',
      'Designed and implemented interactive UI components in React for smooth UX',
      'Contributed to a scalable frontend architecture for AI-based communication tools',
    ],
  },
  {
    icon: '📊',
    title: 'Automated Appraisal System',
    description:
      'An end-to-end workflow automation system for employee performance reviews, connecting frontend and backend seamlessly.',
    tech: ['React.js', 'Node.js', 'SQL', 'MongoDB'],
    features: [
      'Built an end-to-end appraisal workflow automation system for performance reviews',
      'Developed REST APIs to handle data flow between frontend and backend',
      'Designed and managed database schemas in SQL and MongoDB',
    ],
  },
  {
    icon: '⚡',
    title: 'Launcher 2',
    description:
      'A low-code enterprise application built on Mendix with custom Java modules to support complex client business requirements.',
    tech: ['Mendix', 'Java'],
    features: [
      'Developed low-code applications in Mendix for client-side business requirements',
      'Integrated custom Java modules into Mendix for enhanced functionality',
      'Collaborated with client teams to design workflows, data models, and backend logic',
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-divider" />
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Things I've built and shipped</p>

        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card" key={project.title}>
              <div className="project-icon">{project.icon}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map(t => (
                  <span className="tech-tag" key={t}>{t}</span>
                ))}
              </div>
              <ul className="project-features">
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
