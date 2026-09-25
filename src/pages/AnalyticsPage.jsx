import { useState } from 'react'
import MobileSidebar from './MobileSidebar'

function AnalyticsPage({ onBack, onHome, onEvents, onEventDetails, onCheckIn, onProfile }) {
  const [range, setRange] = useState('Last 7 days')
  const nextRange = range === 'Last 7 days' ? 'Last 30 days' : 'Last 7 days'

  return (
    <div className="analytics-page">
      <header className="analytics-topbar"><button type="button" onClick={onBack} aria-label="Back to dashboard">←</button><div><h1>Analytics</h1><span>KAMPALA BUSINESS SUMMIT 2026</span></div><button type="button" className="analytics-event-button" onClick={onEventDetails} aria-label="Open event details">☷</button><MobileSidebar activePage="analytics" onHome={onHome} onEvents={onEvents} onCheckIn={onCheckIn} onProfile={onProfile} /></header>
      <main className="analytics-main">
        <div className="analytics-heading"><div><span>LIVE METRICS</span><h2>Kampala Business Summit</h2></div><button type="button" onClick={() => setRange(nextRange)}>▣ {range}⌄</button></div>
        <section className="analytics-metric-grid"><Metric label="Registrations" value="850" note="↗ +12% target" tone="blue" /><Metric label="Tickets Sold" value="720" note="72% of 1,000 cap" tone="indigo" /><Metric label="Attendance" value="624" note="◉ Checked-in" tone="teal" /><Metric label="Gross Revenue" value="54.8M" note="UGX TOTAL" tone="orange" /></section>
        <section className="analytics-card analytics-chart-card"><div className="analytics-card-heading"><div><h2>Registrations Over Time</h2><p>Daily velocity throughout summit cycle</p></div><b>↑ +18%</b></div><div className="analytics-chart"><svg viewBox="0 0 640 250" role="img" aria-label="Registrations over time"><path d="M15 210 C80 190 86 180 145 170 S205 125 260 150 S315 175 355 130 S410 90 450 50 S500 90 545 58 S595 82 625 68 L625 230 L15 230Z" className="analytics-fill" /><path d="M15 210 C80 190 86 180 145 170 S205 125 260 150 S315 175 355 130 S410 90 450 50 S500 90 545 58 S595 82 625 68" className="analytics-line" /><circle cx="450" cy="50" r="8" className="analytics-point" /><circle cx="625" cy="68" r="6" className="analytics-point-last" /></svg><div className="analytics-axis"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div></div></section>
        <section className="analytics-card"><div className="analytics-card-heading"><div><h2>Ticket Performance</h2><p>Breakdown across configured ticket tiers</p></div></div><TicketRow name="Early Bird Tier" tag="Sold Out" amount="100 / 100" percent="100% allocation exhausted" tone="teal" /><TicketRow name="Regular Delegate" tag="Fast Moving" amount="540 / 650" percent="83% reserved · 110 tickets remaining" tone="blue" /><TicketRow name="Executive VIP Access" tag="Limited" amount="80 / 100" percent="80% reserved · 20 tickets remaining" tone="blue" /></section>
        <section className="analytics-card attendance-card"><div className="analytics-card-heading"><div><h2>Registration &amp; Attendance</h2><p>Arrival ratio at Serena Hotel, Kampala</p></div><strong>73%<small>TURNOUT</small></strong></div><div className="attendance-bar"><i /></div><div className="attendance-legend"><span><b />624<small>Checked In On-site</small></span><span><b />226<small>Expected Arrivals</small></span></div></section>
        <section className="analytics-card communication-card"><div className="analytics-card-heading"><div><h2>Communication Overview</h2><p>Audience outreach across carrier SMS &amp; Web Email</p></div></div><div className="communication-grid"><div><span>▣ <em>MTN/Air</em></span><strong>620</strong><small>Feature &amp; Smart</small></div><div><span>✉ <em>Web</em></span><strong>230</strong><small>Online Reg</small></div><div><span>✧ <em>Live</em></span><strong>98%</strong><small>Delivered</small></div></div><p className="fallback-note">▱ Offline fallback delivery queued for 12 remote attendees.</p></section>
      </main>
    </div>
  )
}

function Metric({ label, value, note, tone }) {
  return <div className="analytics-metric"><div><span>{label}</span><b className={tone}>▣</b></div><strong>{value}</strong><small>{note}</small></div>
}

function TicketRow({ name, tag, amount, percent, tone }) {
  return <div className="ticket-performance-row"><div><strong>{name}</strong><span className={tone}>{tag}</span><b>{amount}</b></div><div className={`ticket-bar ${tone}`}><i /></div><small>{percent}</small></div>
}

export default AnalyticsPage
