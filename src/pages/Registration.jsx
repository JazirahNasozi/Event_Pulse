import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { summit, tickets, ugx } from '../data'

export default function Registration() {
  const nav = useNavigate()
  const [qty, setQty] = useState(1)
  const t = tickets[0] // Early Bird selected
  const total = t.price * qty
  return (
    <>
      <div className="appbar">
        <div className="ico-btn" aria-hidden="true">←</div>
        <div><div className="title">Complete Registration</div><div className="sub">Almost there — secure your tickets</div></div>
      </div>
      <div className="scroll">
        <div className="pad stack">
          <div className="card pad-in">
            <div className="row" style={{ gap: 12 }}>
              <span className="avatar sm" style={{ background: '#0a66d0' }} aria-hidden="true">{summit.emoji}</span>
              <div>
                <div style={{ fontWeight: 800, fontSize: 15 }}>{summit.name}</div>
                <div className="muted tiny">{summit.date} · {summit.venue}</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="tcard gold" style={{ border: 0, boxShadow: 'none' }}>
              <div className="bar" />
            </div>
            <div className="pad-in" style={{ paddingTop: 12 }}>
              <div className="between">
                <div>
                  <div className="tname">SELECTED: {t.name}</div>
                  <div className="tprice">{ugx(t.price)}</div>
                </div>
                <span className="chip gold">Early Bird</span>
              </div>
              <div className="divider" style={{ margin: '14px 0' }} />
              <div className="between">
                <span style={{ fontWeight: 700, fontSize: 14 }}>Number of Tickets</span>
                <div className="counter">
                  <button onClick={() => setQty((q) => Math.max(1, q - 1))} disabled={qty <= 1} aria-label="Decrease">−</button>
                  <span className="n">{qty}</span>
                  <button onClick={() => setQty((q) => Math.min(10, q + 1))} aria-label="Increase">+</button>
                </div>
              </div>
              <div className="between" style={{ marginTop: 12 }}>
                <span className="muted">Total</span>
                <span style={{ fontWeight: 800, fontSize: 18 }}>{ugx(total)}</span>
              </div>
            </div>
          </div>

          <h2 className="sec">Purchaser information</h2>
          <div className="field">
            <label htmlFor="nm">Full Name</label>
            <input id="nm" className="input" placeholder="Sarah Namukasa" defaultValue="Sarah Namukasa" />
          </div>
          <div className="field">
            <label htmlFor="ph">Phone Number</label>
            <div className="input-group">
              <span className="prefix">+256</span>
              <input id="ph" className="input" inputMode="tel" placeholder="772 123 456" defaultValue="772 000 678" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="em">Email address <span className="muted">(optional)</span></label>
            <input id="em" className="input" type="email" placeholder="sarah@example.com" />
          </div>
        </div>
      </div>

      <div className="footerbar">
        <div className="fp"><div className="l">Total</div><div className="v">{ugx(total)}</div></div>
        <button className="btn grad" onClick={() => nav('/payment')}>Continue to Payment</button>
      </div>
    </>
  )
}
