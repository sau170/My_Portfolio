const skillGroups = [
  {
    icon: '🎨',
    title: 'Frontend',
    skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Responsive UI'],
  },
  {
    icon: '⚙️',
    title: 'Backend & Databases',
    skills: ['Node.js', 'REST APIs', 'SQL', 'MongoDB', 'MySQL'],
  },
  {
    icon: '💻',
    title: 'Programming Languages',
    skills: ['JavaScript', 'Java', 'SQL'],
  },
  {
    icon: '🛠️',
    title: 'Frameworks & Tools',
    skills: ['Mendix', 'Hibernate', 'Spring', 'Git', 'SQL Plus'],
  },
  {
    icon: '🔧',
    title: 'Development Tools',
    skills: ['VS Code', 'IntelliJ IDEA', 'Eclipse', 'Sublime Text', 'MySQL Workbench'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-divider" />
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">The tools and technologies I work with</p>

        <div className="skills-grid">
          {skillGroups.map(group => (
            <div className="skill-card" key={group.title}>
              <div className="skill-card-header">
                <div className="skill-icon">{group.icon}</div>
                <h3>{group.title}</h3>
              </div>
              <div className="skill-tags">
                {group.skills.map(skill => (
                  <span className="skill-tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
