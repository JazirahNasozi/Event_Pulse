import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { summit, speakers, tickets, ugx } from '../data'
import summitHero from '../assets/AT1.jpeg'   

export default function EventDetails() {
  const nav = useNavigate()
  const [sel, setSel] = useState('vip')
  const from = Math.min(...tickets.map((t) => t.price))
  return (
    <>
      <div className="scroll">
        <div className="hero">
  <img className="hero-img" src={summitHero} alt={summit.name + ' banner'} />
  <button className="back" type="button" aria-label="Go back"
    onClick={() => (window.history.length > 1 ? nav(-1) : nav('/event'))}>←</button>
  <span className="hero-emoji" aria-hidden="true">{summit.emoji}</span>
  <div className="htext">
            <div className="org">Organised by {summit.org}</div>
            <h1>{summit.name}</h1>
          </div>
        </div>

        <div className="pad stack" style={{ paddingTop: 16 }}>
          <div className="stack" style={{ gap: 10 }}>
            <div className="meta-row"><span className="mi">📅</span><span>{summit.dateLong}</span></div>
            <div className="meta-row"><span className="mi">⏰</span><span>{summit.time}</span></div>
            <div className="meta-row"><span className="mi">📍</span><span>{summit.venue}</span></div>
          </div>

          <p className="muted tiny" style={{ lineHeight: 1.6 }}>{summit.desc}</p>

          <div>
            <h2 className="sec" style={{ marginBottom: 10 }}>Featured Speakers</h2>
            <div className="speakers">
              {speakers.map((s) => (
                <div className="speaker" key={s.name}>
                  <span className="avatar" style={{ background: s.color }} aria-hidden="true">{s.name[0]}</span>
                  {s.name}
                </div>
              ))}
            </div>
          </div>

          <h2 className="sec" style={{ marginTop: 4 }}>Choose your ticket</h2>
          {tickets.map((t) => (
            <button key={t.id} className={'tcard ' + t.tone + (sel === t.id ? ' selected' : '')}
              onClick={() => setSel(t.id)} aria-pressed={sel === t.id}>
              <div className="bar" />
              <div className="tbody">
                <div className="ttop">
                  <div>
                    <div className="tname">{t.name}</div>
                    <div className="tprice">{ugx(t.price)} <small>/ {t.note}</small></div>
                  </div>
                  {t.tag && <span className="chip gold">{t.tag}</span>}
                </div>
                <ul className="tlist">
                  {t.perks.map((p) => <li key={p}><span className="ck">✓</span>{p}</li>)}
                </ul>
              </div>
            </button>
          ))}

          <div className="card pad-in trust">
            <div className="ti"><span className="g">🔒</span> Secure Payments · PCI compliant</div>
            <div className="ti"><span className="g">💬</span> Instant SMS Ticket Delivery</div>
            <div className="ti"><span className="g">📱</span> USSD Registration Available</div>
          </div>
        </div>
      </div>

      <div className="footerbar">
        <div className="fp">
          <div className="l">Starting from</div>
          <div className="v">{ugx(from)}</div>
        </div>
        <button className="btn grad" onClick={() => nav('/register')}>Register Now</button>
      </div>
    </>
  )
}
