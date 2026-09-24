const ticketTiers = [
  { name: 'Early Bird', badge: '⚡ Auto-switch', badgeTone: 'peach', subtitle: 'Sales close: 15 Oct 2025 • 23:59', price: 'UGX 50,000', cap: '100 Tickets', tone: 'early' },
  { name: 'Regular', badge: '↪ Chained', badgeTone: 'teal', subtitle: 'Sales open: 16 Oct (or on Early Bird sellout)', price: 'UGX 70,000', cap: '300 Tickets', tone: 'regular' },
  { name: 'VIP Experience', badge: 'Independent', badgeTone: 'indigo', subtitle: 'Sales window: 01 Oct → 25 Oct', price: 'UGX 150,000', cap: '50 Tickets', tone: 'vip' },
]

function TicketingPage({ onBack, onSave }) {
  return (
    <div className="ticketing-page">
      <header className="ticketing-topbar">
        <button type="button" className="ticketing-back" onClick={onBack}>←</button>
        <div><span>EVENTPULSE</span><h1>Ticket tier setup</h1></div>
        <button type="button" className="ticketing-profile">♙</button>
      </header>

      <div className="ticketing-hero"><span>PULSELIVE SERIES</span><h2>Tech &amp; Music Summit 2025</h2><small>● Kampala, UG</small></div>

      <main className="ticketing-main">
        <div className="ticketing-heading"><div><h2>Tickets <span className="draft-badge">● Draft setup</span></h2><p>Configure tiers, trigger automated price switches</p></div><button type="button" className="add-tier-button">＋ Add tier</button></div>

        <section className="ticket-summary"><div><span>🎟 Total pool</span><strong>450 <small>Tickets</small></strong></div><div><span>▣ Potential revenue</span><strong>UGX 33.5M</strong></div><p><i /> MoMo &amp; Visa/Mastercard Enabled <b>Instant payouts</b></p></section>

        <div className="ticket-tier-list">
          {ticketTiers.map((tier, index) => (
            <article className={`ticket-tier-card ${tier.tone}`} key={tier.name}>
              <div className="tier-heading"><div><h3>{tier.name} <span className={`tier-badge ${tier.badgeTone}`}>{tier.badge}</span></h3><p>{tier.subtitle}</p></div><button type="button" className="edit-tier">✎</button></div>
              {index === 0 ? <>
                <div className="tier-values"><div><span>Price</span><strong>{tier.price}</strong></div><div><span>Cap</span><strong>{tier.cap}</strong></div></div>
                <div className="auto-switch-box"><div className="auto-switch-title"><b>ϟ</b><span><strong>Automated tier switch</strong><small>Seamless handover on sold-out or cutoff</small></span><i /></div><p>When all 100 Early Bird tickets sell out OR when the clock hits 15 Oct 23:59, EventPulse will instantly switch buyers to the <b>Regular (UGX 70,000)</b> tier without downtime.</p><div className="switch-details"><span>◷ Timeline window <b>01 Oct → 15 Oct</b></span><span>↔ Switch target <b>Regular • UGX 70,000</b></span><span>♧ Trigger condition <b>Whichever hits first</b></span></div></div>
              </> : <>
                <div className="tier-values"><div><span>Price</span><strong>{tier.price}</strong></div><div><span>Pool allocation</span><strong>{tier.cap}</strong></div></div>
                {index === 1 ? <p className="tier-note">ⓘ Linked directly as successor to Early Bird tier</p> : <div className="vip-perks"><span>☆ VIP Lounge</span><span>▱ Express Entry</span><span>♜ 2 Drinks Voucher</span></div>}
              </>}
            </article>
          ))}
        </div>

        <section className="share-card"><b>⌯</b><div><strong>Auto-share landing page</strong><span>pulselive.io/e/kampala-summit-25</span></div><button type="button">▣</button></section>
      </main>

      <footer className="ticketing-footer"><button type="button" className="save-ticket-button" onClick={onSave}>◉ Save ticket settings</button><button type="button" className="save-exit-button" onClick={onBack}>Save as draft &amp; exit</button></footer>
    </div>
  )
}

export default TicketingPage
