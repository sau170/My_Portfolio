import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const ref = useRef()
  const [form, setForm] = useState({ email: '', name: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, name, subject, message } = form
    const mailtoLink = `mailto:ganjavevaibhav1@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`
    window.location.href = mailtoLink
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const contacts = [
    { icon: '✉️', label: 'Email', value: 'ganjavevaibhav1@gmail.com', href: 'mailto:ganjavevaibhav1@gmail.com' },
    { icon: '📱', label: 'Phone', value: '+91 9370283002', href: 'tel:+919370283002' },
    { icon: '💼', label: 'LinkedIn', value: 'vaibhav--ganjave', href: 'https://www.linkedin.com/in/vaibhav--ganjave' },
    { icon: '🐙', label: 'GitHub', value: 'Vaibhav-B-Ganjave', href: 'https://github.com/Vaibhav-B-Ganjave' },
  ]

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="container">
        <div className="sec-head reveal">
          <h2 className="sec-title"><span>Contact</span></h2>
          <p className="sec-sub">I'd love to hear from you — reach out for any opportunities or questions!</p>
          <div className="sec-line" />
        </div>

        <div className="contact-inner">
          <div className="contact-form-wrap reveal">
            <div className="form-title">
              Connect With Me 🚀
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group full">
                  <label>Subject</label>
                  <input
                    type="text"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group full">
                  <label>Message</label>
                  <textarea
                    placeholder="Your message..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="form-submit">
                {sent ? '✓ Opening Mail App...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="contact-links reveal">
            {contacts.map(c => (
              <a
                key={c.label}
                href={c.href}
                className="c-link"
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <div className="c-link-ico">{c.icon}</div>
                <div>
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
