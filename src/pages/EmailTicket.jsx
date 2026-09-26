import { useNavigate } from 'react-router-dom'
import { summit } from '../data'

export default function EmailTicket() {
  const nav = useNavigate()
  return (
    <>
      <div className="appbar">
        <div className="ico-btn" aria-hidden="true">←</div>
        <div className="title">Email Ticket Viewer</div>
        <div className="spacer" />
        <div className="ico-btn" aria-hidden="true">⋯</div>
      </div>
      <div className="scroll">
        <div className="mailbar">
          <div className="between">
            <div style={{ fontWeight: 800, fontSize: 14 }}>Your Event Starts Tomorrow</div>
            <span className="link-blue tiny" style={{ fontWeight: 700 }}>Details</span>
          </div>
          <div className="mail-meta" style={{ marginTop: 6 }}>To: <b>{summit.attendee}</b> ({summit.email})</div>
          <div className="mail-meta">From: <b>EventPulse</b> (official@eventpulse.com)</div>
        </div>

        <div className="pad stack" style={{ paddingTop: 14 }}>
          <div className="hero" style={{ height: 120, borderRadius: 14 }}>
            <span className="hero-emoji" style={{ fontSize: 40 }} aria-hidden="true">{summit.emoji}</span>
            <div className="htext"><h1 style={{ fontSize: 16 }}>{summit.name}</h1></div>
          </div>

          <p className="tiny" style={{ color: '#33486a', lineHeight: 1.6 }}>
            Hi Sarah, are you ready for tomorrow? The stage is set, badges are printed, and East Africa's most brilliant technologists are congregating in Kampala. We can't wait to welcome you for a day of transformative insights and genuine connection.
          </p>

          <div className="card pad-in">
            <div className="eyebrow">EVENT COORDINATES</div>
            <div className="stack" style={{ gap: 10, marginTop: 10 }}>
              <div className="meta-row"><span className="mi">📅</span><span>{summit.dateLong} · {summit.time}</span></div>
              <div className="meta-row"><span className="mi">📍</span><span>{summit.venue} — {summit.hall}</span></div>
              <div className="meta-row"><span className="mi">🎫</span><span>Ticket ID {summit.passId} · Early Bird Pass</span></div>
            </div>
          </div>

          <button className="btn grad" onClick={() => nav('/pass')}>View Ticket & QR Pass →</button>

          <h2 className="sec" style={{ marginTop: 4 }}>What to Expect</h2>
          <ul className="expect card pad-in" style={{ listStyle: 'none' }}>
            <li><span className="e">🎙️</span> Keynote Speakers</li>
            <li><span className="e">🤝</span> Networking Outings</li>
            <li><span className="e">🛠️</span> Hands-on Workshops</li>
          </ul>

          <div className="card pad-in">
            <div style={{ fontWeight: 700, fontSize: 13 }}>Sync to your personal schedule</div>
            <div className="wrap-gap" style={{ marginTop: 8 }}>
              <span className="chip grey">📆 Google Calendar</span>
              <span className="chip grey">￼ Apple iCal</span>
            </div>
          </div>

          <p className="center muted" style={{ fontSize: 11 }}>EventPulse Inc. · Privacy Policy · Unsubscribe</p>
          <div className="between" style={{ padding: '0 20px' }}>
            <span className="link-blue tiny" style={{ fontWeight: 700 }}>Reply</span>
            <span className="link-blue tiny" style={{ fontWeight: 700 }}>Forward</span>
            <span className="muted tiny" style={{ fontWeight: 700 }}>Move</span>
          </div>
        </div>
      </div>
    </>
  )
}
