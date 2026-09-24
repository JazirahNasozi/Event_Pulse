import logoImg from '../assets/logo.png'

const metrics = [
  { label: 'Registrations', value: '248', note: 'Target: 300', icon: '♙', tone: 'blue' },
  { label: 'Tickets sold', value: '186', note: '75% of capacity', icon: '▣', tone: 'indigo' },
  { label: 'Check-ins', value: '142', note: 'Active at 4 gates', icon: '✓', tone: 'teal' },
  { label: 'Revenue', value: 'UGX 4.8M', note: '+14% vs last week', icon: '▤', tone: 'orange' },
]

const actions = [
  { label: 'Create event', icon: '+', tone: 'blue' },
  { label: 'Manage tickets', icon: '▣', tone: 'orange' },
  { label: 'Send SMS', icon: '⌁', tone: 'teal' },
  { label: 'Check in', icon: '⌗', tone: 'indigo' },
]

const activities = [
  { icon: '♙', title: 'Sarah K. booked 2x General Pass', detail: 'Mobile Money completed (UGX 160,000)', time: '2m ago', tone: 'blue' },
  { icon: '✪', title: 'VIP Tier Sold Out (+UGX 750k)', detail: '5 VIP tickets were purchased in bulk', time: '18m ago', tone: 'orange' },
  { icon: '▤', title: 'SMS reminder sent to attendees', detail: 'Broadcast sent to 248 attendees (99.4% delivered)', time: '1h ago', tone: 'teal' },
  { icon: '♧', title: 'James checked in', detail: 'Gate Turnstile 01 • QR Verified', time: '2h ago', tone: 'indigo' },
]

function DashboardPage({ onHome, onCreateEvent }) {
  const openCreateEvent = () => onCreateEvent()

  return (
    <div className="dashboard-page">
      <header className="dashboard-topbar">
        <button type="button" className="dashboard-brand" onClick={onHome}>
          <img src={logoImg} alt="EventPulse" />
        </button>
        <div className="dashboard-top-actions">
          <span className="sync-status"><i /> Live sync • Just now</span>
          <button type="button" className="profile-button">PC</button>
        </div>
      </header>

      <main className="dashboard-main">
        <section className="dashboard-heading">
          <div>
            <span className="dashboard-kicker">Organizer command center</span>
            <h1>Good morning, Prossy <span>👋</span></h1>
            <p>Here&apos;s what&apos;s happening with your events.</p>
          </div>
          <button type="button" className="dashboard-primary-action" onClick={openCreateEvent}>+ Create event</button>
        </section>

        <section className="event-banner">
          <div className="event-banner-image">
            <span className="live-pill"><i /> LIVE IN 3 DAYS</span>
            <span className="event-capacity">92% Booked</span>
          </div>
          <div className="event-banner-content">
            <div>
              <span className="event-label">Featured event</span>
              <h2>PulseLive East Africa Tech &amp; Music Summit</h2>
              <div className="event-details"><span>▣ Fri, Oct 24 • 6:00 PM EAT</span><span>⌖ Kololo Ceremonial Grounds, Kampala</span></div>
            </div>
            <button type="button" className="view-event-button">View event <span>→</span></button>
          </div>
        </section>

        <section className="dashboard-section">
          <div className="section-heading">
            <div><h2>Overview</h2><span>Live sync • Just now</span></div>
            <button type="button" className="section-link">View report →</button>
          </div>
          <div className="metrics-grid">
            {metrics.map((metric) => (
              <article className="metric-card" key={metric.label}>
                <div className="metric-card-top"><span>{metric.label}</span><b className={`metric-icon ${metric.tone}`}>{metric.icon}</b></div>
                <strong>{metric.value}</strong>
                <small>{metric.note}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="dashboard-columns">
          <article className="chart-card">
            <div className="section-heading"><div><h2>Registration activity</h2><span>Daily volume across 7 days</span></div><b className="trend-badge">↗ +18% this week</b></div>
            <div className="chart-area">
              <div className="chart-tooltip">Sat: 54 regs</div>
              <svg viewBox="0 0 620 220" role="img" aria-label="Registration activity trend">
                <defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#2563eb" stopOpacity=".25" /><stop offset="1" stopColor="#2563eb" stopOpacity="0" /></linearGradient></defs>
                <path className="chart-grid-line" d="M0 42H620M0 106H620M0 170H620" />
                <path className="chart-fill" d="M18 180 C80 166 82 150 140 145 S205 160 236 137 S302 104 344 116 S405 124 446 100 S490 50 520 76 S568 74 602 91 L602 200 L18 200Z" />
                <path className="chart-line" d="M18 180 C80 166 82 150 140 145 S205 160 236 137 S302 104 344 116 S405 124 446 100 S490 50 520 76 S568 74 602 91" />
                <circle cx="520" cy="76" r="7" className="chart-point selected" /><circle cx="18" cy="180" r="5" className="chart-point" /><circle cx="140" cy="145" r="5" className="chart-point" /><circle cx="236" cy="137" r="5" className="chart-point" /><circle cx="344" cy="116" r="5" className="chart-point" /><circle cx="446" cy="100" r="5" className="chart-point" /><circle cx="602" cy="91" r="5" className="chart-point" />
              </svg>
              <div className="chart-labels"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span className="active">Sat</span><span>Sun</span></div>
            </div>
          </article>

          <article className="actions-card">
            <div className="section-heading"><div><h2>Quick actions</h2><span>Keep your event moving</span></div></div>
            <div className="actions-grid">{actions.map((action) => <button type="button" key={action.label} className="quick-action" onClick={action.label === 'Create event' ? openCreateEvent : undefined}><b className={`quick-icon ${action.tone}`}>{action.icon}</b><span>{action.label}</span></button>)}</div>
            <div className="capacity-card"><div><span>Event capacity</span><strong>248 / 300</strong></div><div className="capacity-bar"><i /></div><small>52 spots remaining</small></div>
          </article>
        </section>

        <section className="activity-card">
          <div className="section-heading"><div><h2>Recent activity</h2><span>Latest updates from your event</span></div><button type="button" className="section-link">View all →</button></div>
          <div className="activity-list">{activities.map((activity) => <div className="activity-row" key={activity.title}><b className={`activity-icon ${activity.tone}`}>{activity.icon}</b><div><strong>{activity.title}</strong><span>{activity.detail}</span></div><time>{activity.time}</time></div>)}</div>
        </section>
      </main>

      <nav className="dashboard-nav" aria-label="Dashboard navigation">
        <button type="button" className="active"><span>⌂</span>Home</button>
        <button type="button"><span>▣</span>Events</button>
        <button type="button"><span>⌗</span>Check-in</button>
        <button type="button"><span>⌁</span>Analytics</button>
        <button type="button"><span>◉</span>Profile</button>
      </nav>
    </div>
  )
}

export default DashboardPage
