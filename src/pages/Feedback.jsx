import { useNavigate } from 'react-router-dom'
import { summit } from '../data'

export default function Feedback() {
  const nav = useNavigate()
  return (
    <div className="scroll">
      <div className="appbar">
        <div style={{ fontWeight: 800, letterSpacing: '.16em', fontSize: 12, color: 'var(--navy)' }}>EVENTPULSE</div>
        <div className="spacer" />
        <span className="chip grey">Feedback Form</span>
      </div>

      <div className="pad stack" style={{ paddingTop: 24 }}>
        <div className="center">
          <div className="big-check" aria-hidden="true">✓</div>
          <div className="chip green" style={{ margin: '4px auto 0' }}>SUBMISSION CONFIRMED</div>
          <h1 style={{ fontSize: 22, marginTop: 12 }}>Thank You for Your Feedback</h1>
          <p className="muted tiny" style={{ lineHeight: 1.6, marginTop: 6 }}>
            Your voice has been securely delivered to the event organizers and directly influences future editions.
          </p>
        </div>

        <div className="card pad-in">
          <div className="eyebrow">VERIFIED ATTENDANCE</div>
          <div style={{ fontWeight: 800, marginTop: 6 }}>{summit.name}</div>
          <div className="muted tiny">15 March 2027 • Kampala Serena Hotel</div>
          <div className="divider" style={{ margin: '12px 0' }} />
          <div className="row"><span style={{ color: 'var(--green)', fontWeight: 800 }} aria-hidden="true">✓</span> <span style={{ fontWeight: 700, fontSize: 13 }}>Feedback Verified & Delivered</span></div>
        </div>

        <button className="btn grad" onClick={() => nav('/event')}>Explore More Events</button>
        <button className="link-btn" onClick={() => nav('/event')}>Close</button>
      </div>
    </div>
  )
}
