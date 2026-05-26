import { useEffect, useState } from 'react'

export default function Footer() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="f-copy">© {new Date().getFullYear()} Vaibhav Ganjave. All rights reserved.</div>
        </div>
      </footer>

      <button className={`scroll-top${visible ? ' show' : ''}`} onClick={scrollTop} title="Back to top">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </>
  )
}
