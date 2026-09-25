import MobileSidebar from './MobileSidebar'

const manageItems = [
  { title: 'Tickets', detail: 'Manage ticket types & pricing', icon: '▣' },
  { title: 'Communication', detail: 'Send updates to attendees', icon: '✉' },
  { title: 'Attendees', detail: 'View & manage guest list', icon: '♙' },
  { title: 'Check-In', detail: 'Scan & track arrivals', icon: '⌗', active: true },
  { title: 'Live Now', detail: 'Control live event features', icon: '▣' },
  { title: 'Analytics', detail: 'View event performance', icon: '▤' },
  { title: 'Payouts', detail: 'Track revenue & payments', icon: '▤' },
]

function MyEventPage({ onBack, onEdit, onTicketing, onBroadcast, onAnalytics, onAttendees, onCheckIn, onLive, onPayouts, navigation }) {
  const actionHandlers = {
    Tickets: onTicketing,
    Communication: onBroadcast,
    Attendees: onAttendees,
    'Check-In': onCheckIn,
    'Live Now': onLive,
    Analytics: onAnalytics,
    Payouts: onPayouts,
  }

  return (
    <div className="my-event-page">
      <header className="my-event-topbar">
        <button type="button" className="my-event-back" onClick={onBack}>← <span>My Events</span></button>
        <div className="my-event-actions"><MobileSidebar activePage="events" {...navigation} /><button type="button" onClick={onEdit}>✎ <span>Edit</span></button><button type="button" onClick={onEdit} aria-label="Event settings">⚙</button></div>
      </header>

      <main className="my-event-main">
        <div className="my-event-hero"><span className="hero-live-pill">● LIVE NOW</span></div>
        <section className="my-event-heading"><span className="live-badge">● LIVE NOW</span><h1>Kampala Business Summit 2026</h1><p>▣ Fri, 25 September 2026 · 9:00 AM – 5:00 PM EAT</p><p>⌖ Serena Hotel, Kampala</p><button type="button" className="go-live-button" onClick={onLive}>▷ Go to Live Event</button></section>

        <section className="my-event-section"><h2>Performance</h2><div className="performance-grid"><div><span>Registered</span><strong>850</strong></div><div><span>Tickets Sold</span><strong>720</strong></div><div><span>Checked In</span><strong>624</strong></div><div><span>Revenue</span><strong>UGX 54.8M</strong></div></div></section>

        <section className="my-event-section"><h2>Manage Event</h2><div className="manage-grid">{manageItems.map((item) => <button type="button" className="manage-card" key={item.title} onClick={actionHandlers[item.title]}><b>{item.icon}</b>{item.active && <em>ACTIVE</em>}<strong>{item.title}</strong><span>{item.detail}</span></button>)}</div></section>

        <section className="event-status-card"><div><span>Registration</span><strong><i /> Open</strong></div><div><span>Ticket Sales</span><strong><i /> Available</strong></div><div><span>Registration Closes</span><strong>25 September 2026</strong></div></section>
      </main>
    </div>
  )
}

export default MyEventPage
