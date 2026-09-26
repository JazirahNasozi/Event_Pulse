import { useNavigate } from 'react-router-dom'

export default function Awaiting() {
  const nav = useNavigate()
  return (
    <div className="scroll">
      <div className="await-top">
        <div className="eb">PAYMENT REQUEST SENT</div>
        <div className="amt">UGX 150K</div>
        <div className="st"><span className="pulse-dot" aria-hidden="true" /> Waiting for Confirmation</div>
      </div>

      <div className="pad stack" style={{ paddingTop: 18 }}>
        <p className="center muted tiny" style={{ lineHeight: 1.6 }}>
          Complete this Mobile Money prompt on your phone to instantly claim your ticket.
        </p>

        <div className="card pad-in">
          <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>Enter 5-digit MTN Mobile Money PIN</div>
          <p className="muted tiny" style={{ lineHeight: 1.6 }}>
            A prompt labeled <b>EventPulse Global</b> has been sent to your device. Confirm the UGX 150,000 debit.
          </p>
        </div>

        <ul className="steps card pad-in" style={{ padding: '8px 14px' }}>
          <li className="done">
            <span className="dot">✓</span>
            <span className="si"><span className="n">Push Notification Dispatched</span><span className="t">10:42:19</span></span>
          </li>
          <li className="active">
            <span className="dot">⟳</span>
            <span className="si"><span className="n">Awaiting Network Authorization</span><span className="t">In progress…</span></span>
            <span className="badge">Pending</span>
          </li>
          <li className="wait">
            <span className="dot">○</span>
            <span className="si"><span className="n">Instant Ticket & SMS Dispatch</span><span className="t">Queued</span></span>
          </li>
        </ul>

        <button className="btn grad" onClick={() => nav('/paid')}>I have Approved on My Phone</button>
        <div className="between" style={{ padding: '0 4px' }}>
          <button className="link-btn" style={{ width: 'auto' }}>Resend Prompt (0:59)</button>
          <button className="link-btn link-blue" style={{ width: 'auto' }} onClick={() => nav('/payment')}>Change Method</button>
        </div>

        <div className="regline"><span aria-hidden="true">🏛️</span> Bank of Uganda Regulated</div>
        <p className="center muted" style={{ fontSize: 11 }}>Need assistance? Call EventPulse Concierge: 0800 220 110</p>
      </div>
    </div>
  )
}
