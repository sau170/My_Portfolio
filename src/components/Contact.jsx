const contacts = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'ganjavevaibhav1@gmail.com',
    href: 'mailto:ganjavevaibhav1@gmail.com',
  },
  {
    icon: '📱',
    label: 'Phone',
    value: '+91 9370283002',
    href: 'tel:+919370283002',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'vaibhav--ganjave',
    href: 'https://www.linkedin.com/in/vaibhav--ganjave',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'Vaibhav-B-Ganjave',
    href: 'https://github.com/Vaibhav-B-Ganjave',
  },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-divider" />
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's build something great together</p>

        <div className="contact-wrapper">
          <p className="contact-text">
            I'm currently open to new opportunities. Whether you have a project idea,
            want to collaborate, or just want to say hi — my inbox is always open!
          </p>

          <div className="contact-cards">
            {contacts.map(c => (
              <a
                key={c.label}
                href={c.href}
                className="contact-card"
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <div className="contact-card-icon">{c.icon}</div>
                <h4>{c.label}</h4>
                <p>{c.value}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
