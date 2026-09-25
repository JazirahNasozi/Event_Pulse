import { useState } from 'react'
import logoImg from '../assets/logo.png'
import MobileSidebar from './MobileSidebar'

const steps = ['Event details', 'Ticketing', 'Communication', 'Review']
const initialEvent = {
  name: 'SaaS Frontiers 2026: The AI Expansion',
  category: 'Conference',
  host: 'EventPulse Network',
  description: 'Join 500+ SaaS founders, product builders, and operators for a day of deep dives into AI agent implementation, next-generation growth loops, and scaling mechanics.',
  date: '2026-11-14',
  startTime: '09:00',
  endTime: '17:00',
  venue: 'Metropolitan Pavilion, New York, NY',
  registrationOpensAt: '2026-11-01',
  registrationClosesAt: '2026-11-13',
  virtual: false,
  capacity: '500',
  waitlist: true,
  sms: false,
  feedback: true,
}

function CreateEventPage({ onDashboard, onTicketing, navigation, mode = 'create' }) {
  const existingEvent = {
    ...initialEvent,
    name: 'Kampala Business Summit 2026',
    date: '2026-09-25',
    startTime: '09:00',
    endTime: '17:00',
    venue: 'Serena Hotel, Kampala',
    capacity: '1000',
    registrationOpensAt: '2026-09-01',
    registrationClosesAt: '2026-09-24',
  }
  const draftKey = mode === 'edit' ? 'eventPulseEditDraft' : 'eventPulseDraft'
  const [event, setEvent] = useState(() => {
    try {
      const defaults = mode === 'edit' ? existingEvent : initialEvent
      return { ...defaults, ...JSON.parse(localStorage.getItem(draftKey) || '{}') }
    } catch {
      return mode === 'edit' ? existingEvent : initialEvent
    }
  })
  const [bannerUrl, setBannerUrl] = useState('')
  const [notice, setNotice] = useState('')
  const update = (field) => (changeEvent) => setEvent((current) => ({ ...current, [field]: changeEvent.target.type === 'checkbox' ? changeEvent.target.checked : changeEvent.target.value }))
  const selectBanner = (changeEvent) => {
    const file = changeEvent.target.files?.[0]
    if (!file) return
    if (!['image/jpeg', 'image/png'].includes(file.type) || file.size > 10 * 1024 * 1024) {
      setNotice('Choose a JPG or PNG image smaller than 10 MB.')
      changeEvent.target.value = ''
      return
    }
    setNotice('')
    setBannerUrl(URL.createObjectURL(file))
  }
  const saveDraft = () => {
    localStorage.setItem(draftKey, JSON.stringify(event))
    setNotice(mode === 'edit' ? 'Event changes saved on this device.' : 'Draft saved on this device.')
  }
  const continueToTickets = () => {
    if (!event.name.trim() || !event.category || !event.host.trim() || !event.description.trim() || !event.date || !event.startTime || !event.endTime || event.endTime <= event.startTime || (!event.virtual && !event.venue.trim()) || Number(event.capacity) < 1 || !event.registrationOpensAt || !event.registrationClosesAt || event.registrationClosesAt < event.registrationOpensAt || event.registrationClosesAt > event.date) {
      setNotice('Complete the required event details before continuing.')
      return
    }
    localStorage.setItem(draftKey, JSON.stringify(event))
    onTicketing()
  }
  const previewDate = event.date ? new Intl.DateTimeFormat('en', { dateStyle: 'medium' }).format(new Date(`${event.date}T12:00:00`)) : 'Choose a date'

  return (
    <div className="create-event-page">
      <header className="create-event-topbar">
        <button type="button" className="dashboard-brand" onClick={onDashboard}>
          <img src={logoImg} alt="EventPulse" />
        </button>
        <MobileSidebar activePage="events" {...navigation} />
        <button type="button" className="close-create-button" onClick={onDashboard}>✕ <span>Exit editor</span></button>
      </header>

      <main className="create-event-layout">
        <section className="create-event-form-column">
          <div className="create-event-heading">
            <span className="dashboard-kicker">Organizer workspace</span>
            <h1>{mode === 'edit' ? 'Edit event details' : 'Create new event'}</h1>
            <p>Set up your event details, ticketing, and attendee experience.</p>
          </div>

          <div className="event-progress-card">
            <div className="progress-meta"><strong>Step 1 of 4</strong><span>25%</span></div>
            <div className="progress-track"><i /></div>
            <div className="event-steps">
              {steps.map((step, index) => <div className={index === 0 ? 'active' : ''} key={step}><b>{index + 1}</b><span>{step}</span></div>)}
            </div>
          </div>

          <form className="event-editor-form" onSubmit={(submitEvent) => submitEvent.preventDefault()}>
            <section className="editor-card">
              <div className="editor-card-heading"><span className="editor-icon blue">▣</span><div><h2>Basic information</h2><p>Give attendees the details they need to join.</p></div></div>
              <label>Event name <em>*</em><input type="text" value={event.name} onChange={update('name')} required /></label>
              <label>Event category <em>*</em><select value={event.category} onChange={update('category')}><option>Conference</option><option>Workshop</option><option>Concert</option><option>Networking</option></select></label>
              <label>Organizer / host <em>*</em><input type="text" value={event.host} onChange={update('host')} required /></label>
              <label>Event description <em>*</em><textarea value={event.description} onChange={update('description')} required /></label>
              <div className="editor-two-column"><label>Event date <em>*</em><input type="date" value={event.date} onChange={update('date')} required /></label><label>Start time <em>*</em><input type="time" value={event.startTime} onChange={update('startTime')} required /></label></div>
              <div className="editor-two-column"><label>End time <em>*</em><input type="time" value={event.endTime} onChange={update('endTime')} required /></label><label>Venue / location <em>*</em><input type="text" value={event.venue} onChange={update('venue')} required disabled={event.virtual} /></label></div>
              <label className="switch-row"><span><strong>This is a virtual event</strong><small>Attendees will join online instead of a physical location.</small></span><input type="checkbox" checked={event.virtual} onChange={update('virtual')} /></label>
              <label>Event banner image <span className="upload-box"><b>＋</b><strong>{bannerUrl ? 'Banner image selected' : 'Choose a banner image'}</strong><small>JPG or PNG up to 10MB</small><input className="banner-file-input" type="file" accept="image/png,image/jpeg" onChange={selectBanner} /></span></label>
            </section>

            <section className="editor-card">
              <div className="editor-card-heading"><span className="editor-icon teal">⚙</span><div><h2>Event settings</h2><p>Control registration and attendee communication.</p></div></div>
              <label>Registration open date<input type="date" value={event.registrationOpensAt} onChange={update('registrationOpensAt')} required /></label>
              <label>Registration close date<input type="date" value={event.registrationClosesAt} onChange={update('registrationClosesAt')} required /></label>
              <label>Maximum attendees<input type="number" min="1" value={event.capacity} onChange={update('capacity')} required /></label>
              <label className="switch-row"><span><strong>Enable waitlist</strong><small>Automatically queue attendees once maximum registration capacity is reached.</small></span><input type="checkbox" checked={event.waitlist} onChange={update('waitlist')} /></label>
              <label className="switch-row"><span><strong>Enable SMS notifications</strong><small>Send automated reminders and urgent event updates.</small></span><input type="checkbox" checked={event.sms} onChange={update('sms')} /></label>
              <label className="switch-row"><span><strong>Enable attendee feedback collection</strong><small>Collect feedback after the event ends.</small></span><input type="checkbox" checked={event.feedback} onChange={update('feedback')} /></label>
            </section>

            <div className="create-event-actions">{notice && <span className="draft-save-notice" role="status">{notice}</span>}<button type="button" className="save-draft" onClick={saveDraft}>Save as draft</button><button type="button" className="continue-button" onClick={continueToTickets}>Continue to ticketing <span>→</span></button></div>
          </form>
        </section>

        <aside className="event-preview-column">
          <div className="preview-label"><i /> Live attendee preview</div>
          <article className="attendee-preview">
            <div className="preview-art" style={bannerUrl ? { backgroundImage: `linear-gradient(180deg, transparent, rgba(7, 31, 73, 0.62)), url(${bannerUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}><span>LIVE EVENT</span></div>
            <div className="preview-content"><div className="preview-tags"><span>{event.category}</span><span>Registration open</span></div><h2>{event.name || 'Your event name'}</h2><p className="preview-host">Hosted by {event.host || 'Your organization'}</p><div className="preview-details"><span>▣ {previewDate}</span><span>◷ {event.startTime || '--:--'} - {event.endTime || '--:--'}</span><span>{event.virtual ? 'Online event' : `⌖ ${event.venue || 'Add a venue'}`}</span></div><h3>About this event</h3><p>{event.description || 'Your event description will appear here.'}</p><button type="button" onClick={continueToTickets}>Continue setup</button></div>
          </article>
        </aside>
      </main>
    </div>
  )
}

export default CreateEventPage
