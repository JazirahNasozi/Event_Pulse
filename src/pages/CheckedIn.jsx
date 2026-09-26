import { useNavigate } from 'react-router-dom'
import { summit } from '../data'

export default function CheckedIn() {
  const nav = useNavigate()
  return (
    <div className="scroll">
      <div className="center" style={{ padding: '10px 0 4px', fontWeight: 800, letterSpacing: '.18em', fontSize: 12, color: 'var(--navy)' }}>EVENTPULSE</div>

      <div className="pad stack">
        <div className="card pad-in center" style={{ background: 'linear-gradient(160deg,#effaf2,#ffffff)' }}>
          <div className="big-check" style={{ width: 70, height: 70, fontSize: 34, marginBottom: 12 }} aria-hidden="true">✓</div>
          <div className="chip green" style={{ margin: '0 auto' }}>CHECK-IN VERIFIED</div>
          <h1 style={{ fontSize: 20, marginTop: 10 }}>Checked In Successfully!</h1>
          <p className="muted tiny">Welcome, {summit.attendee}</p>
        </div>

        <p className="center" style={{ fontWeight: 700, fontSize: 14 }}>Welcome to {summit.name}</p>

        <div className="card pad-in row" style={{ gap: 12 }}>
          <span className="avatar sm" style={{ background: '#e8547c' }} aria-hidden="true">S</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 800 }}>{summit.attendee}</div>
            <div className="muted tiny">Lead Cloud Architect · VIP</div>
          </div>
          <span className="chip navy">All Access</span>
        </div>

        <div className="grid2">
          <div className="mini"><div className="l">VENUE</div><div className="v">Kampala Serena</div></div>
          <div className="mini"><div className="l">SEAT</div><div className="v">Row E · Seat 14</div></div>
          <div className="mini"><div className="l">HALL / GATE</div><div className="v">Victoria Hall · Gate A</div></div>
          <div className="mini"><div className="l">BEGINS</div><div className="v">9:00 AM EAT</div></div>
        </div>

        <div className="card pad-in">
          <div className="eyebrow">QUICK ATTENDEE GUIDE</div>
          <ul className="steps" style={{ marginTop: 6 }}>
            <li className="done"><span className="dot">1</span><span className="si"><span className="n">Collect your badge</span><span className="t">Registration desk, Gate A</span></span></li>
            <li className="active"><span className="dot">2</span><span className="si"><span className="n">High-speed Wi-Fi</span><span className="t">SSID: Summit2027 · pass: connect</span></span></li>
            <li className="wait"><span className="dot">3</span><span className="si"><span className="n">Opening Keynote</span><span className="t">Victoria Hall · 9:00 AM</span></span></li>
          </ul>
        </div>

        <button className="btn grad" onClick={() => nav('/survey')}>Explore Event Schedule & Stages →</button>
        <div className="between" style={{ padding: '0 10px' }}>
          <button className="link-btn link-blue" style={{ width: 'auto' }}>View Venue Map</button>
          <button className="link-btn link-blue" style={{ width: 'auto' }}>Save Pass</button>
        </div>
      </div>
    </div>
  )
}
