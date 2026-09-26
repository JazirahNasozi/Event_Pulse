import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { summit } from '../data'

const TAGS = ['Keynote Speakers', 'Networking', 'Workshops', 'Venue & Catering', 'Session Content', 'Organization']

export default function Survey() {
  const nav = useNavigate()
  const [rating, setRating] = useState(4)
  const [hover, setHover] = useState(0)
  const [picked, setPicked] = useState(['Keynote Speakers', 'Networking'])
  const toggle = (t) => setPicked((p) => (p.includes(t) ? p.filter((x) => x !== t) : [...p, t]))
  return (
    <div className="scroll">
      <div className="appbar">
        <div style={{ fontWeight: 800, letterSpacing: '.16em', fontSize: 12, color: 'var(--navy)' }}>EVENTPULSE</div>
        <div className="spacer" />
        <span className="chip grey">POST-EVENT SURVEY</span>
      </div>

      <div className="pad stack">
        <div className="center">
          <div className="big-check" style={{ width: 64, height: 64, fontSize: 30 }} aria-hidden="true">✓</div>
          <h1 style={{ fontSize: 21, marginTop: 8 }}>Thank You for Attending!</h1>
          <p className="muted tiny">{summit.name}</p>
        </div>

        <p className="tiny" style={{ color: '#33486a', lineHeight: 1.6 }}>
          Hi Sarah, thank you for being a vital part of an incredible summit. We'd love to hear about your experience. Your feedback directly helps organizers shape and elevate future editions.
        </p>

        <div className="grid2">
          <div className="mini center"><div className="v" style={{ fontSize: 20, color: 'var(--navy)' }}>850+</div><div className="l">Global Attendees</div></div>
          <div className="mini center"><div className="v" style={{ fontSize: 20, color: 'var(--navy)' }}>24</div><div className="l">Live Sessions</div></div>
        </div>

        <div className="card pad-in center">
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12 }}>How would you rate the summit?</div>
          <div className="stars" role="radiogroup" aria-label="Star rating">
            {[1, 2, 3, 4, 5].map((n) => (
              <button key={n} role="radio" aria-checked={rating === n} aria-label={n + ' stars'}
                className={n <= (hover || rating) ? 'on' : ''}
                onMouseEnter={() => setHover(n)} onMouseLeave={() => setHover(0)} onClick={() => setRating(n)}>★</button>
            ))}
          </div>
        </div>

        <div className="card pad-in">
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10 }}>What did you enjoy most?</div>
          <div className="qtags">
            {TAGS.map((t) => (
              <button key={t} className={'qtag' + (picked.includes(t) ? ' on' : '')} onClick={() => toggle(t)} aria-pressed={picked.includes(t)}>{t}</button>
            ))}
          </div>
        </div>

        <button className="btn grad" onClick={() => nav('/feedback')}>Share Feedback →</button>
        <div className="between" style={{ padding: '0 10px' }}>
          <button className="link-btn" style={{ width: 'auto' }} onClick={() => nav('/event')}>Maybe later</button>
          <button className="link-btn link-blue" style={{ width: 'auto' }}>View Ticket receipts</button>
        </div>
      </div>
    </div>
  )
}
