const education = [
  {
    icon: '🎓',
    degree: 'Bachelor of Engineering (Computer Engineering)',
    institution: 'Vidya Niketan College of Engineering, Sangamner',
    university: 'Savitribai Phule Pune University',
    period: '2021 – 2022',
    score: 'CGPA: 8.78',
  },
  {
    icon: '📚',
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Chandaneshwar Vidyalaya, Chandanapuri, Sangamner',
    university: 'Maharashtra State Board, Pune Division',
    period: '2017 – 2018',
    score: '66.77%',
  },
  {
    icon: '📖',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Chandaneshwar Vidyalaya, Chandanapuri, Sangamner',
    university: 'Maharashtra State Board, Pune Division',
    period: '2015 – 2016',
    score: '86.80%',
  },
]

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="container">
        <div className="section-divider" />
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic background</p>

        <div className="education-grid">
          {education.map(edu => (
            <div className="edu-card" key={edu.degree}>
              <div className="edu-icon">{edu.icon}</div>
              <h3>{edu.degree}</h3>
              <div className="institution">{edu.institution}</div>
              <div className="edu-meta">
                <span className="edu-tag">{edu.university}</span>
                <span className="edu-tag">{edu.period}</span>
                <span className="edu-tag">{edu.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
