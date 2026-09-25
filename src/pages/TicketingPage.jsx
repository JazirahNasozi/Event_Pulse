import { useState } from 'react'
import MobileSidebar from './MobileSidebar'

const ticketTiers = [
  { name: 'Early Bird', badge: '⚡ Auto-switch', badgeTone: 'peach', subtitle: 'Sales close: 15 Sep 2026 • 23:59', price: 'UGX 50,000', cap: '100 Tickets', tone: 'early' },
  { name: 'Regular', badge: '↪ Chained', badgeTone: 'teal', subtitle: 'Sales open: 16 Sep (or on Early Bird sellout)', price: 'UGX 70,000', cap: '650 Tickets', tone: 'regular' },
  { name: 'VIP Experience', badge: 'Independent', badgeTone: 'indigo', subtitle: 'Sales window: 01 Sep → 25 Sep', price: 'UGX 150,000', cap: '100 Tickets', tone: 'vip' },
]

function TicketingPage({ onBack, onSave, onProfile, navigation }) {
  const [tiers, setTiers] = useState(ticketTiers)
  const [editingTier, setEditingTier] = useState(null)
  const [shareLabel, setShareLabel] = useState('▣')
  const landingPageUrl = 'https://eventpulse.io/e/kampala-business-summit-2026'

  const copyLandingPage = async () => {
    try {
      await navigator.clipboard.writeText(landingPageUrl)
      setShareLabel('✓')
    } catch {
      setShareLabel('!')
    }
  }

  const updateTier = (index, field, value) => {
    setTiers((currentTiers) => currentTiers.map((tier, tierIndex) => tierIndex === index ? { ...tier, [field]: value } : tier))
  }

  const addTier = () => {
    setTiers((currentTiers) => [...currentTiers, {
      name: 'New ticket tier',
      badge: 'Independent',
      badgeTone: 'indigo',
      subtitle: 'Sales window: Set your dates',
      price: 'UGX 0',
      cap: '0 Tickets',
      tone: 'new',
    }])
    setEditingTier(tiers.length)
  }

  return (
    <div className="ticketing-page">
      <header className="ticketing-topbar">
        <button type="button" className="ticketing-back" onClick={onBack}>←</button>
        <div><span>EVENTPULSE</span><h1>Ticket tier setup</h1></div>
        <MobileSidebar activePage="events" {...navigation} />
        <button type="button" className="ticketing-profile" onClick={onProfile} aria-label="Open profile">♙</button>
      </header>

      <div className="ticketing-hero"><span>KAMPALA BUSINESS SUMMIT</span><h2>Kampala Business Summit 2026</h2><small>● Kampala, Uganda · 25 September</small></div>

      <main className="ticketing-main">
        <div className="ticketing-heading"><div><h2>Tickets <span className="draft-badge">● Draft setup</span></h2><p>Configure tiers, trigger automated price switches</p></div><button type="button" className="add-tier-button" onClick={addTier}>＋ Add tier</button></div>

        <section className="ticket-summary"><div><span>🎟 Total allocation</span><strong>850 <small>Tickets</small></strong></div><div><span>▣ Potential revenue</span><strong>UGX 65.5M</strong></div><p><i /> MoMo &amp; Visa/Mastercard Enabled <b>Instant payouts</b></p></section>

        <div className="ticket-tier-list">
          {tiers.map((tier, index) => (
            <article className={`ticket-tier-card ${tier.tone}`} key={`${tier.name}-${index}`}>
              <div className="tier-heading"><div>{editingTier === index ? <div className="tier-edit-fields"><input aria-label="Tier name" value={tier.name} onChange={(event) => updateTier(index, 'name', event.target.value)} /><input aria-label="Sales schedule" value={tier.subtitle} onChange={(event) => updateTier(index, 'subtitle', event.target.value)} /></div> : <><h3>{tier.name} <span className={`tier-badge ${tier.badgeTone}`}>{tier.badge}</span></h3><p>{tier.subtitle}</p></>}</div><button type="button" className="edit-tier" onClick={() => setEditingTier(editingTier === index ? null : index)}>{editingTier === index ? '✓' : '✎'}</button></div>
              {index === 0 ? <>
                <div className="tier-values"><div><span>Price</span>{editingTier === index ? <input className="tier-value-input" aria-label="Tier price" value={tier.price} onChange={(event) => updateTier(index, 'price', event.target.value)} /> : <strong>{tier.price}</strong>}</div><div><span>Cap</span>{editingTier === index ? <input className="tier-value-input" aria-label="Ticket capacity" value={tier.cap} onChange={(event) => updateTier(index, 'cap', event.target.value)} /> : <strong>{tier.cap}</strong>}</div></div>
                <div className="auto-switch-box"><div className="auto-switch-title"><b>ϟ</b><span><strong>Automated tier switch</strong><small>Seamless handover on sold-out or cutoff</small></span><i /></div><p>When all 100 Early Bird tickets sell out OR when the clock hits 15 Sep 23:59, EventPulse will instantly switch buyers to the <b>Regular (UGX 70,000)</b> tier without downtime.</p><div className="switch-details"><span>◷ Timeline window <b>01 Sep → 15 Sep</b></span><span>↔ Switch target <b>Regular • UGX 70,000</b></span><span>♧ Trigger condition <b>Whichever hits first</b></span></div></div>
              </> : <>
                <div className="tier-values"><div><span>Price</span>{editingTier === index ? <input className="tier-value-input" aria-label="Tier price" value={tier.price} onChange={(event) => updateTier(index, 'price', event.target.value)} /> : <strong>{tier.price}</strong>}</div><div><span>Pool allocation</span>{editingTier === index ? <input className="tier-value-input" aria-label="Ticket allocation" value={tier.cap} onChange={(event) => updateTier(index, 'cap', event.target.value)} /> : <strong>{tier.cap}</strong>}</div></div>
                {index === 1 ? <p className="tier-note">ⓘ Linked directly as successor to Early Bird tier</p> : <div className="vip-perks"><span>☆ VIP Lounge</span><span>▱ Express Entry</span><span>♜ 2 Drinks Voucher</span></div>}
              </>}
            </article>
          ))}
        </div>

        <section className="share-card"><b>⌯</b><div><strong>Auto-share landing page</strong><span>eventpulse.io/e/kampala-business-summit-2026</span></div><button type="button" onClick={copyLandingPage} aria-label="Copy landing page link" title="Copy landing page link">{shareLabel}</button></section>
      </main>

      <footer className="ticketing-footer"><button type="button" className="save-ticket-button" onClick={onSave}>◉ Save ticket settings</button><button type="button" className="save-exit-button" onClick={onBack}>Save as draft &amp; exit</button></footer>
    </div>
  )
}

export default TicketingPage
