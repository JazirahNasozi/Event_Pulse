import { QRCodeCanvas } from 'qrcode.react'
import { useNavigate } from 'react-router-dom'
import { summit } from '../data'

export default function DigitalPass() {
  const nav = useNavigate()
  return (
    <div className="scroll dark-pass">
      <div className="appbar">
        <div className="ico-btn" style={{ background: 'rgba(255,255,255,.1)', border: 0, color: '#fff' }} aria-hidden="true">←</div>
        <div className="title" style={{ color: '#fff' }}>Present Ticket Pass</div>
        <div className="spacer" />
        <div className="ico-btn" style={{ background: 'rgba(255,255,255,.1)', border: 0, color: '#fff' }} aria-hidden="true">⋯</div>
      </div>

      <div className="pad stack" style={{ paddingTop: 8 }}>
        <div className="row" style={{ justifyContent: 'center', gap: 8 }}>
          <span className="pillbadge">☀️ Brightness boosted</span>
          <span className="pillbadge">📶 Offline Ready</span>
        </div>
        <h1 className="center" style={{ color: '#fff', fontSize: 18 }}>{summit.name}</h1>

        <div className="center">
          <div className="qrframe">
            <QRCodeCanvas value={'EVENTPULSE|' + summit.passId + '|GATE-A'} size={188} includeMargin={false} aria-label="Entry QR code" />
          </div>
          <div className="pass-id" style={{ marginTop: 14 }}>Ticket ID: {summit.passId}</div>
        </div>

        <div className="center" style={{ color: '#fff' }}>
          <div style={{ fontWeight: 800, fontSize: 18 }}>{summit.attendee}</div>
          <div className="db tiny">Early Bird Pass · Gate A — Zone 2</div>
        </div>

        <div className="toggle" style={{ color: '#fff' }}>
          <span>Keep Screen Awake</span>
          <span className="sw" aria-hidden="true" />
        </div>

        <button className="btn dark" onClick={() => nav('/checkin')}>👛 Save to Digital Wallet</button>
        <button className="link-btn" style={{ color: '#aebfd6' }}>Display Numeric & SMS Fallback</button>
      </div>
    </div>
  )
}
