import { useNavigate } from 'react-router-dom'
import { summit, ugx } from '../data'

export default function Registered() {
  const nav = useNavigate()
  return (
    <div className="scroll">
      <div className="success-hero">
        <div className="big-check" aria-hidden="true">✓</div>
        <h1>Registration Success</h1>
        <p>You're officially attending!</p>
      </div>

      <div className="pad stack">
        <p className="center tiny" style={{ color: '#33486a' }}>Your ticket for {summit.name} is ready.</p>

        <div className="passcard">
          <div className="ptop">
            <div className="between">
              <div>
                <div className="brand">PASS</div>
                <div className="ev">EP-2027-00452</div>
              </div>
              <span className="chip gold">Early Bird Pass</span>
            </div>
          </div>
          <div className="pad-in" style={{ padding: 16 }}>
            <div style={{ fontWeight: 800 }}>{summit.name}</div>
            <div className="muted tiny" style={{ marginTop: 2 }}>{summit.date} · {summit.venue}</div>
            <div className="divider" style={{ margin: '12px 0' }} />
            <div className="between">
              <span className="tiny" style={{ fontWeight: 700 }}>{summit.attendee}</span>
              <span className="chip green">Active Pass</span>
            </div>
          </div>
        </div>

        <div className="card pad-in between">
          <div className="row"><span className="c" style={{ color: 'var(--green)' }} aria-hidden="true">✓</span> <span style={{ fontWeight: 700, fontSize: 14 }}>Payment Confirmed</span></div>
          <span style={{ fontWeight: 800 }}>Total Paid: {ugx(150000)}</span>
        </div>

        <p className="muted tiny" style={{ lineHeight: 1.6 }}>
          Sent directly to your inbox and SMS verified to {summit.phoneMask}. Offline SMS pass enables zero-data venue entry.
        </p>

        <button className="btn grad" onClick={() => nav('/pass')}>View Ticket & QR Pass</button>
        <button className="btn ghost" onClick={() => nav('/email')}>Download PDF Ticket</button>
        <button className="link-btn link-blue">Add to Calendar</button>
      </div>
    </div>
  )
}
