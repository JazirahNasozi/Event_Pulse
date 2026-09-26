import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { summit, ugx } from '../data'

const METHODS = [
  { id: 'mtn', name: 'MTN Mobile Money', desc: 'Pay via MTN MoMo push notification', bg: '#ffcc00', fg: '#1a1a1a', label: 'MTN' },
  { id: 'airtel', name: 'Airtel Money', desc: 'Pay via Airtel Money prompt', bg: '#e40000', fg: '#fff', label: 'air' },
  { id: 'card', name: 'Debit / Credit Card', desc: 'Visa · Mastercard', bg: '#0a2540', fg: '#fff', label: 'VISA' }
]

export default function Payment() {
  const nav = useNavigate()
  const [m, setM] = useState('mtn')
  const total = 150000
  return (
    <>
      <div className="appbar">
        <div className="ico-btn" aria-hidden="true">←</div>
        <div><div className="title">Choose Payment Method</div><div className="sub">Select your preferred payment option</div></div>
      </div>
      <div className="scroll">
        <div className="pad stack">
          <div className="card pad-in">
            <div className="eyebrow">ORDER SUMMARY</div>
            <div style={{ fontWeight: 800, fontSize: 15, marginTop: 6 }}>{summit.name}</div>
            <div className="muted tiny">{summit.date} · {summit.venue}</div>
            <div className="divider" style={{ margin: '12px 0' }} />
            <div className="between">
              <span className="muted">1 × VIP ACCESS</span>
              <span style={{ fontWeight: 800 }}>{ugx(total)}</span>
            </div>
          </div>

          <h2 className="sec">Payment method</h2>
          {METHODS.map((x) => (
            <button key={x.id} className={'pay' + (m === x.id ? ' selected' : '')} onClick={() => setM(x.id)} aria-pressed={m === x.id}>
              <span className="logo" style={{ background: x.bg, color: x.fg }}>{x.label}</span>
              <span className="pm"><span className="pn">{x.name}</span><span className="pd">{x.desc}</span></span>
              <span className="radio" aria-hidden="true" />
            </button>
          ))}

          <div className="regline"><span aria-hidden="true">🔒</span> Secured & encrypted · Bank of Uganda regulated</div>
        </div>
      </div>

      <div className="footerbar">
        <div className="fp"><div className="l">Total</div><div className="v">{ugx(total)}</div></div>
        <button className="btn grad" onClick={() => nav('/awaiting')}>Pay Now — {ugx(total)}</button>
      </div>
    </>
  )
}
