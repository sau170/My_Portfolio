import { useEffect, useRef } from 'react'

const contacts = [
  { icon: '✉️', label: 'Email', value: 'ganjavevaibhav1@gmail.com', href: 'mailto:ganjavevaibhav1@gmail.com' },
  { icon: '📱', label: 'Phone', value: '+91 9370283002', href: 'tel:+919370283002' },
  { icon: '💼', label: 'LinkedIn', value: 'vaibhav--ganjave', href: 'https://www.linkedin.com/in/vaibhav--ganjave' },
  { icon: '🐙', label: 'GitHub', value: 'Vaibhav-B-Ganjave', href: 'https://github.com/Vaibhav-B-Ganjave' },
]

export default function Contact() {
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
    <section className="contact" id="contact" ref={ref}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-tag">// get in touch</div>
          <h2 className="section-title">Let's Work Together</h2>
          <div className="section-line" />
        </div>

        <div className="contact-inner reveal">
          <p className="contact-desc">
            I'm currently open to new opportunities and collaborations. Whether you have a project in
            mind, want to discuss ideas, or just want to say hello — I'd love to hear from you!
          </p>

          <div className="contact-grid">
            {contacts.map(c => (
              <a
                key={c.label}
                href={c.href}
                className="contact-item"
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <div className="contact-icon">{c.icon}</div>
                <div className="contact-info">
                  <h4>{c.label}</h4>
                  <p>{c.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
