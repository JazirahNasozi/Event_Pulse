import { useMemo, useState } from 'react'
import MobileSidebar from './MobileSidebar'

const attendeeRows = [
  { name: 'Sarah Kato', email: 'sarah.kato@example.com', ticket: 'General Pass', code: 'EP-2841', status: 'Checked in', payment: 'Paid' },
  { name: 'James Okello', email: 'james.okello@example.com', ticket: 'VIP Experience', code: 'EP-2840', status: 'Registered', payment: 'Paid' },
  { name: 'Miriam Achieng', email: 'miriam.a@example.com', ticket: 'Early Bird', code: 'EP-2839', status: 'Checked in', payment: 'Paid' },
  { name: 'Daniel Ssemanda', email: 'daniel.s@example.com', ticket: 'General Pass', code: 'EP-2838', status: 'Registered', payment: 'Pending' },
  { name: 'Ruth Namusoke', email: 'ruth.n@example.com', ticket: 'VIP Experience', code: 'EP-2837', status: 'Checked in', payment: 'Paid' },
]

const payoutRows = [
  { reference: 'PO-2026-0918', date: '18 Sep 2026', destination: 'Stanbic •••• 4821', amount: 'UGX 13,200,000', status: 'Paid' },
  { reference: 'PO-2026-0904', date: '04 Sep 2026', destination: 'Stanbic •••• 4821', amount: 'UGX 14,500,000', status: 'Paid' },
  { reference: 'PO-2026-0828', date: '28 Aug 2026', destination: 'Stanbic •••• 4821', amount: 'UGX 12,300,000', status: 'Paid' },
]

const eventRows = [
  { name: 'Kampala Business Summit 2026', category: 'Conference', date: '25 Sep 2026', venue: 'Serena Hotel, Kampala', registrations: 850, status: 'Live', tone: 'success' },
  { name: 'Women in Tech Summit 2027', category: 'Conference', date: '14 Nov 2027', venue: 'Metropolitan Pavilion', registrations: 0, status: 'Draft', tone: 'neutral' },
  { name: 'East Africa Product Meetup', category: 'Networking', date: '18 Dec 2026', venue: 'Design Hub, Kampala', registrations: 124, status: 'Upcoming', tone: 'info' },
  { name: 'Pulse Live Sessions', category: 'Concert', date: '08 Aug 2026', venue: 'Lugogo Cricket Oval', registrations: 1120, status: 'Completed', tone: 'neutral' },
]

function PageFrame({ eyebrow, title, description, onBack, activePage = 'events', navigation, children }) {
  return (
    <div className="organizer-page">
      <header className="organizer-page-topbar">
        <button type="button" className="organizer-back" onClick={onBack} aria-label="Back to event overview">←</button>
        <a className="organizer-wordmark" href="#dashboard" onClick={(event) => { event.preventDefault(); onBack() }}>EVENT<span>PULSE</span></a>
        <MobileSidebar activePage={activePage} {...navigation} />
        <button type="button" className="organizer-event-chip" onClick={onBack}><i /> Kampala Business Summit 2026</button>
      </header>
      <main className="organizer-page-main">
        <div className="organizer-page-heading">
          <div><span>{eyebrow}</span><h1>{title}</h1><p>{description}</p></div>
        </div>
        {children}
      </main>
    </div>
  )
}

export function EventsPage({ onBack, onCreateEvent, onOpenEvent, navigation }) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('All events')
  const visibleEvents = eventRows.filter((event) => {
    const matchesSearch = `${event.name} ${event.venue}`.toLowerCase().includes(query.toLowerCase())
    const matchesFilter = filter === 'All events' || event.status === filter
    return matchesSearch && matchesFilter
  })

  return (
    <PageFrame eyebrow="Organizer workspace" title="Your events" description="Review event status, registration activity, and upcoming dates from one place." onBack={onBack} activePage="events" navigation={navigation}>
      <div className="events-toolbar"><label className="organizer-search"><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search your events" aria-label="Search events" /></label><button type="button" className="organizer-button primary" onClick={onCreateEvent}>＋ Create event</button></div>
      <div className="organizer-segment events-filter" role="group" aria-label="Filter events">{['All events', 'Live', 'Upcoming', 'Draft', 'Completed'].map((item) => <button key={item} type="button" className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div>
      <section className="events-list" aria-label="Event list">{visibleEvents.map((event) => <article className="event-list-row" key={event.name}><div className="event-date-block"><strong>{event.date.split(' ')[0]}</strong><span>{event.date.split(' ').slice(1).join(' ')}</span></div><div className="event-list-copy"><span>{event.category}</span><h2>{event.name}</h2><p>{event.venue}</p></div><div className="event-list-count"><strong>{event.registrations.toLocaleString()}</strong><span>registrations</span></div><span className={`status-label ${event.tone}`}>{event.status}</span><button type="button" className="event-row-open" onClick={onOpenEvent} aria-label={`Open ${event.name}`}>→</button></article>)}{visibleEvents.length === 0 && <p className="organizer-empty">No events match this search.</p>}</section>
    </PageFrame>
  )
}

export function AttendeesPage({ onBack, navigation }) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('All attendees')
  const filteredRows = useMemo(() => attendeeRows.filter((attendee) => {
    const matchesQuery = `${attendee.name} ${attendee.email} ${attendee.code}`.toLowerCase().includes(query.toLowerCase())
    const matchesFilter = filter === 'All attendees' || attendee.status === filter
    return matchesQuery && matchesFilter
  }), [filter, query])

  const exportAttendees = () => {
    const csv = ['Name,Email,Ticket,Ticket code,Status,Payment', ...filteredRows.map((row) => [row.name, row.email, row.ticket, row.code, row.status, row.payment].join(','))].join('\n')
    const link = document.createElement('a')
    link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }))
    link.download = 'eventpulse-attendees.csv'
    link.click()
    URL.revokeObjectURL(link.href)
  }

  return (
    <PageFrame eyebrow="Guest management" title="Attendees" description="Search registrations, verify ticket status, and keep your guest list up to date." onBack={onBack} activePage="events" navigation={navigation}>
      <section className="organizer-stat-grid">
        <Stat label="Registered" value="850" detail="Across all ticket types" tone="blue" />
        <Stat label="Checked in" value="624" detail="73% of registrations" tone="teal" />
        <Stat label="Payment pending" value="12" detail="Requires follow-up" tone="orange" />
      </section>
      <section className="organizer-panel attendee-panel">
        <div className="organizer-panel-heading"><div><h2>Guest list</h2><p>Showing {filteredRows.length} of 850 attendees</p></div><button className="organizer-button secondary" type="button" onClick={exportAttendees}>↓ Export CSV</button></div>
        <div className="attendee-toolbar"><label className="organizer-search"><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search name, email, or ticket code" aria-label="Search attendees" /></label><div className="organizer-segment" role="group" aria-label="Filter attendees">{['All attendees', 'Checked in', 'Registered'].map((item) => <button key={item} type="button" className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div></div>
        <div className="organizer-table-wrap"><table className="organizer-table"><thead><tr><th>Attendee</th><th>Ticket</th><th>Ticket code</th><th>Payment</th><th>Check-in</th></tr></thead><tbody>{filteredRows.map((attendee) => <tr key={attendee.code}><td><strong>{attendee.name}</strong><small>{attendee.email}</small></td><td>{attendee.ticket}</td><td><code>{attendee.code}</code></td><td><span className={`status-label ${attendee.payment === 'Paid' ? 'success' : 'warning'}`}>{attendee.payment}</span></td><td><span className={`status-label ${attendee.status === 'Checked in' ? 'success' : 'neutral'}`}>{attendee.status}</span></td></tr>)}</tbody></table>{filteredRows.length === 0 && <p className="organizer-empty">No attendees match this search.</p>}</div>
      </section>
    </PageFrame>
  )
}

export function CheckInPage({ onBack, navigation }) {
  const [ticketCode, setTicketCode] = useState('')
  const [result, setResult] = useState(null)
  const [recent, setRecent] = useState(attendeeRows.filter((row) => row.status === 'Checked in').slice(0, 3))

  const checkIn = (event) => {
    event.preventDefault()
    const code = ticketCode.trim().toUpperCase()
    if (!code) return
    const attendee = attendeeRows.find((row) => row.code === code)
    if (!attendee) {
      setResult({ type: 'error', message: 'Ticket not found. Check the code and try again.' })
    } else if (recent.some((row) => row.code === attendee.code)) {
      setResult({ type: 'warning', message: `${attendee.name} is already checked in.` })
    } else {
      setRecent((current) => [attendee, ...current])
      setResult({ type: 'success', message: `${attendee.name} checked in successfully.` })
    }
  }

  return (
    <PageFrame eyebrow="Venue operations" title="Check-in" description="Verify a ticket code and keep gate teams moving with a clear live arrival queue." onBack={onBack} activePage="check-in" navigation={navigation}>
      <div className="checkin-layout">
        <section className="checkin-primary organizer-panel"><div className="checkin-icon">⌗</div><span className="organizer-overline">Manual ticket verification</span><h2>Welcome your attendees</h2><p>Enter the ticket ID shown on the attendee's confirmation. QR scanning can be connected when device access is available.</p><form className="checkin-form" onSubmit={checkIn}><label htmlFor="ticket-code">Ticket code</label><div><input id="ticket-code" value={ticketCode} onChange={(event) => setTicketCode(event.target.value)} placeholder="e.g. EP-2841" autoComplete="off" /><button className="organizer-button primary" type="submit">Verify ticket</button></div></form>{result && <p className={`checkin-result ${result.type}`} role="status">{result.message} Demo only: this check-in is not saved to a server.</p>}<small className="checkin-hint">Demo tickets: EP-2841, EP-2840, EP-2839, EP-2838, EP-2837</small></section>
        <section className="checkin-side"><div className="checkin-live-line"><span><i /> Gate status</span><strong>Accepting guests</strong></div><div className="organizer-stat-grid checkin-stats"><Stat label="Arrived" value="624" detail="of 850 registered" tone="teal" /><Stat label="Remaining" value="226" detail="Expected today" tone="blue" /></div><div className="organizer-panel recent-checkins"><div className="organizer-panel-heading"><div><h2>Recent check-ins</h2><p>Latest verified entries</p></div><span className="live-tag">LIVE</span></div>{recent.slice(0, 4).map((row, index) => <div className="checkin-row" key={`${row.code}-${index}`}><span className="attendee-avatar">{row.name.split(' ').map((part) => part[0]).join('')}</span><div><strong>{row.name}</strong><small>{row.ticket} · Gate 01</small></div><time>{index === 0 ? 'Now' : `${index * 4}m ago`}</time></div>)}</div></section>
      </div>
    </PageFrame>
  )
}

export function LiveEventPage({ onBack, onBroadcast, onCheckIn, navigation }) {
  const [isLive, setIsLive] = useState(true)
  const [registrationOpen, setRegistrationOpen] = useState(true)
  return (
    <PageFrame eyebrow="Event operations" title="Live event" description="Monitor the event floor and manage attendee-facing status in one place." onBack={onBack} activePage="events" navigation={navigation}>
      <section className="live-event-banner"><div><span className="live-tag"><i /> {isLive ? 'EVENT LIVE' : 'EVENT PAUSED'}</span><h2>Kampala Business Summit 2026</h2><p>Serena Hotel, Kampala · 9:00 AM–5:00 PM EAT</p><small className="demo-caption">Preview only · changes are not published to an event page.</small></div><button type="button" className={`organizer-button ${isLive ? 'secondary' : 'primary'}`} onClick={() => setIsLive(!isLive)}>{isLive ? 'Pause live status' : 'Resume live status'}</button></section>
      <section className="organizer-stat-grid"><Stat label="Checked in" value="624" detail="73% of registered guests" tone="teal" /><Stat label="At the venue" value="624" detail="Across 4 entry gates" tone="blue" /><Stat label="Open tickets" value="226" detail="Expected arrivals" tone="orange" /></section>
      <div className="live-ops-grid"><section className="organizer-panel"><div className="organizer-panel-heading"><div><h2>Event controls</h2><p>Preview settings only; controls are not published.</p></div></div><ToggleRow label="Registration open" detail="Attendees can still reserve available tickets." checked={registrationOpen} onChange={() => setRegistrationOpen(!registrationOpen)} /><ToggleRow label="Show live attendance" detail="Display the current check-in count to attendees." checked={isLive} onChange={() => setIsLive(!isLive)} /><div className="live-actions"><button type="button" className="organizer-button secondary" onClick={onCheckIn}>Open check-in</button><button type="button" className="organizer-button primary" onClick={onBroadcast}>Send an update</button></div></section><section className="organizer-panel event-timeline"><div className="organizer-panel-heading"><div><h2>Run of show</h2><p>Today's event schedule</p></div></div>{[['08:00', 'Doors open', 'Completed'], ['09:00', 'Opening remarks', 'In progress'], ['10:30', 'Keynote session', 'Upcoming'], ['12:00', 'Networking lunch', 'Upcoming']].map(([time, title, status]) => <div className="timeline-row" key={title}><time>{time}</time><i /><div><strong>{title}</strong><small>{status}</small></div></div>)}</section></div>
    </PageFrame>
  )
}

export function PayoutsPage({ onBack, navigation }) {
  const [notice, setNotice] = useState('')
  return (
    <PageFrame eyebrow="Finance" title="Payouts" description="Review event earnings, payout timing, and the destination account on file." onBack={onBack} activePage="events" navigation={navigation}>
      <section className="payout-balance"><div><span>Available for payout</span><strong>UGX 12,060,000</strong><small>Updated 25 Sep 2026 · Includes settled ticket sales</small></div><button type="button" className="organizer-button primary" onClick={() => setNotice('Demo payout request submitted for review.')}>Request payout</button></section>
      {notice && <p className="organizer-notice" role="status">{notice} Demo only: no money was transferred.</p>}
      <section className="organizer-stat-grid"><Stat label="Gross ticket sales" value="UGX 54.8M" detail="720 tickets sold" tone="blue" /><Stat label="Platform fees" value="UGX 2.74M" detail="5% transaction fee" tone="orange" /><Stat label="Paid out" value="UGX 40M" detail="3 completed payouts" tone="teal" /></section>
      <section className="organizer-panel payout-panel"><div className="organizer-panel-heading"><div><h2>Payout history</h2><p>Transfers to Stanbic Bank ·•••• 4821</p></div><span className="status-label success">Account verified</span></div><div className="organizer-table-wrap"><table className="organizer-table"><thead><tr><th>Reference</th><th>Date</th><th>Destination</th><th>Amount</th><th>Status</th></tr></thead><tbody>{payoutRows.map((row) => <tr key={row.reference}><td><code>{row.reference}</code></td><td>{row.date}</td><td>{row.destination}</td><td><strong>{row.amount}</strong></td><td><span className="status-label success">{row.status}</span></td></tr>)}</tbody></table></div></section>
    </PageFrame>
  )
}

export function ProfilePage({ onBack, onLogout, navigation }) {
  const [saved, setSaved] = useState(false)
  const [profile, setProfile] = useState({ name: 'Prossy Carter', email: 'prossy.carter@example.com', organization: 'Pulse Media Ltd', phone: '+256 700 123 456' })
  const update = (field) => (event) => { setSaved(false); setProfile((current) => ({ ...current, [field]: event.target.value })) }
  return (
    <PageFrame eyebrow="Account" title="Profile settings" description="Manage organizer details and the contact information used for event updates." onBack={onBack} activePage="profile" navigation={navigation}>
      <div className="profile-layout"><section className="organizer-panel profile-card"><div className="profile-identity"><span className="profile-avatar">PC</span><div><strong>{profile.name}</strong><small>Event organizer</small></div></div><div className="profile-form"><label>Full name<input value={profile.name} onChange={update('name')} /></label><label>Work email<input type="email" value={profile.email} onChange={update('email')} /></label><label>Organization<input value={profile.organization} onChange={update('organization')} /></label><label>Phone number<input value={profile.phone} onChange={update('phone')} /></label></div><div className="profile-form-actions"><button type="button" className="organizer-button primary" onClick={() => setSaved(true)}>Save changes</button>{saved && <span role="status">Profile saved locally.</span>}</div></section><aside className="organizer-panel security-card"><span className="organizer-overline">Account security</span><h2>Keep your account protected</h2><p>Sign-in and multi-factor settings will be managed here when authentication is connected.</p><div className="security-detail"><span>Sign-in email</span><strong>{profile.email}</strong></div><div className="security-detail"><span>Two-step verification</span><strong className="status-label warning">Not enabled</strong></div><button type="button" className="organizer-button secondary" onClick={onLogout}>Sign out</button></aside></div>
    </PageFrame>
  )
}

function Stat({ label, value, detail, tone }) {
  return <article className="organizer-stat"><span className={`organizer-stat-icon ${tone}`}>●</span><div><small>{label}</small><strong>{value}</strong><span>{detail}</span></div></article>
}

function ToggleRow({ label, detail, checked, onChange }) {
  return <label className="ops-toggle-row"><span><strong>{label}</strong><small>{detail}</small></span><input type="checkbox" checked={checked} onChange={onChange} /></label>
}
