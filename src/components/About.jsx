export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-divider" />
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">A passionate developer building real-world solutions</p>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a Full Stack Developer based in Pune, India, with over 2 years of hands-on experience
              building scalable, user-centric web applications. Currently working at Four Colours India Pvt. Ltd.,
              I specialize in React.js, Node.js, SQL, and MongoDB.
            </p>
            <p>
              I love solving complex problems through clean, efficient code. From designing REST APIs to
              crafting smooth UI experiences, I enjoy every part of the development lifecycle — from
              requirement gathering right through to deployment.
            </p>
            <p>
              I also have experience with the Mendix low-code platform and Java integration, having worked
              on client solutions that bridge enterprise needs with modern development practices.
            </p>

            <div className="about-info">
              <div className="info-item">
                <span className="label">Location</span>
                <span className="value">Pune, India</span>
              </div>
              <div className="info-item">
                <span className="label">Email</span>
                <span className="value" style={{ fontSize: '0.82rem' }}>ganjavevaibhav1@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="label">Role</span>
                <span className="value">Software Developer</span>
              </div>
              <div className="info-item">
                <span className="label">Company</span>
                <span className="value">Four Colours India</span>
              </div>
            </div>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <h3>🏆 Certificates</h3>
              <div className="cert-item">
                <span className="cert-icon">☕</span>
                <div>
                  <h4>Full Stack Java Development Training</h4>
                  <p>QSpiders, Hadapsar Pune</p>
                </div>
              </div>
              <div className="cert-item">
                <span className="cert-icon">⚡</span>
                <div>
                  <h4>Mendix: Low-code Application Development</h4>
                  <p>Udemy</p>
                </div>
              </div>
            </div>

            <div className="about-card">
              <h3>🌐 Languages</h3>
              <div className="lang-item">
                <span>English</span>
                <span className="lang-badge">Professional</span>
              </div>
              <div className="lang-item">
                <span>Hindi</span>
                <span className="lang-badge">Fluent</span>
              </div>
              <div className="lang-item">
                <span>Marathi</span>
                <span className="lang-badge">Native</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
