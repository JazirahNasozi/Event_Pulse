import { useNavigate } from 'react-router-dom'
import { summit, ugx } from '../data'

export default function Paid() {
  const nav = useNavigate()
  return (
    <div className="scroll">
      <div className="success-hero">
        <div className="big-check" aria-hidden="true">✓</div>
        <h1>Payment Successful!</h1>
        <p>Your registration is complete.</p>
      </div>

      <div className="pad stack">
        <div className="card pad-in">
          <div className="kv"><span className="k">Reference Number</span><span className="v">EP-2027-00482</span></div>
          <div className="kv"><span className="k">Amount Paid</span><span className="v">{ugx(150000)}</span></div>
          <div className="kv"><span className="k">Tickets Purchased</span><span className="v">1 × VIP Access</span></div>
          <div className="kv"><span className="k">Event</span><span className="v">{summit.name}</span></div>
        </div>

        <p className="muted tiny center" style={{ lineHeight: 1.6 }}>
          Your tickets are ready. Your ticket and QR codes have been generated. An SMS confirmation has been sent to your phone.
        </p>

        <ul className="checklist card pad-in">
          <li><span className="c">✓</span> Payment Confirmed</li>
          <li><span className="c">✓</span> Tickets Generated</li>
          <li><span className="c">✓</span> SMS Sent</li>
        </ul>

        <div className="card pad-in">
          <div className="between">
            <div>
              <div className="eyebrow">ACCESS TYPE</div>
              <div style={{ fontWeight: 800, fontSize: 16 }}>VIP</div>
            </div>
            <span className="chip navy">Kampala Serena</span>
          </div>
          <div className="muted tiny" style={{ marginTop: 6 }}>Kampala Serena Conference Centre · Valid Mar 18, 2027</div>
        </div>

        <button className="btn grad" onClick={() => nav('/registered')}>View my Tickets</button>
        <button className="link-btn" onClick={() => nav('/event')}>Back to event</button>
      </div>
    </div>
  )
}
