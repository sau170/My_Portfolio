import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const contacts = [
  { icon: '✉️', label: 'Email', value: 'saurabhbirari9999@gmail.com', href: 'mailto:saurabhbirari9999@gmail.com' },
  { icon: '📱', label: 'Phone', value: '+91 937029450', href: 'tel:+91937029450' },
  { icon: '💼', label: 'LinkedIn', value: 'saurabh--Birari', href: 'https://www.linkedin.com/in/saurabh-birari-388643235?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
  { icon: '🐙', label: 'GitHub', value: 'Saurabh-S-Birari', href: '' },
]

export default function Contact() {
  const ref = useRef()
  const formRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          title: form.subject || 'Portfolio Contact',
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

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
            <div className="form-title">Connect With Me 🚀</div>

            {status === 'success' && (
              <div className="form-alert success">
                <span>✅</span>
                <div>
                  <strong>Message sent successfully!</strong>
                  <p>Thanks for reaching out. I'll get back to you soon.</p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="form-alert error">
                <span>❌</span>
                <div>
                  <strong>Failed to send message.</strong>
                  <p>Please try emailing directly at ganjavevaibhav1@gmail.com</p>
                </div>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Your Email *</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    required
                    disabled={status === 'loading'}
                  />
                </div>
                <div className="form-group">
                  <label>Your Name *</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    required
                    disabled={status === 'loading'}
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
                    disabled={status === 'loading'}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group full">
                  <label>Message *</label>
                  <textarea
                    placeholder="Your message..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    required
                    disabled={status === 'loading'}
                  />
                </div>
              </div>

              <button type="submit" className="form-submit" disabled={status === 'loading'}>
                {status === 'loading' ? (
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <span className="spinner" /> Sending...
                  </span>
                ) : 'Send Message'}
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
