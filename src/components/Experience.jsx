export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-divider" />
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">My professional journey so far</p>

        <div className="experience-card">
          <div className="exp-header">
            <div>
              <h3>Software Developer</h3>
              <div className="exp-company">Four Colours India Pvt. Ltd.</div>
            </div>
            <div className="exp-badge">
              <span className="exp-duration">Sep 2023 – Present</span>
              <span className="exp-type">Full-time · Pune, India</span>
            </div>
          </div>

          <div className="exp-divider" />

          <ul className="exp-list">
            <li>
              2 years of hands-on full-stack development with expertise in React.js, SQL, MongoDB, and Mendix.
            </li>
            <li>
              Designed and developed responsive UIs and integrated REST APIs for multiple enterprise applications.
            </li>
            <li>
              Collaborated with cross-functional teams to deliver scalable, maintainable, and production-ready solutions.
            </li>
            <li>
              Gained in-depth experience in the Mendix low-code platform with Java integration for client-side applications.
            </li>
            <li>
              Involved in the end-to-end development lifecycle including requirement gathering, design, coding, testing, and deployment.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
