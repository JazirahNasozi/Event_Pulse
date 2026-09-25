import logoImg from '../assets/logo.png'

const steps = ['Event details', 'Ticketing', 'Communication', 'Review']

function CreateEventPage({ onDashboard, onTicketing }) {
  return (
    <div className="create-event-page">
      <header className="create-event-topbar">
        <button type="button" className="dashboard-brand" onClick={onDashboard}>
          <img src={logoImg} alt="EventPulse" />
        </button>
        <button type="button" className="close-create-button" onClick={onDashboard}>✕ <span>Exit editor</span></button>
      </header>

      <main className="create-event-layout">
        <section className="create-event-form-column">
          <div className="create-event-heading">
            <span className="dashboard-kicker">Organizer workspace</span>
            <h1>Create new event</h1>
            <p>Set up your event details, ticketing, and attendee experience.</p>
          </div>

          <div className="event-progress-card">
            <div className="progress-meta"><strong>Step 1 of 4</strong><span>25%</span></div>
            <div className="progress-track"><i /></div>
            <div className="event-steps">
              {steps.map((step, index) => <div className={index === 0 ? 'active' : ''} key={step}><b>{index + 1}</b><span>{step}</span></div>)}
            </div>
          </div>

          <form className="event-editor-form" onSubmit={(event) => event.preventDefault()}>
            <section className="editor-card">
              <div className="editor-card-heading"><span className="editor-icon blue">▣</span><div><h2>Basic information</h2><p>Give attendees the details they need to join.</p></div></div>
              <label>Event name <em>*</em><input type="text" defaultValue="Women In Tech Summit 2027" /></label>
              <label>Event category <em>*</em><select defaultValue="Conference"><option>Conference</option><option>Workshop</option><option>Concert</option><option>Networking</option></select></label>
              <label>Organizer / host <em>*</em><input type="text" defaultValue="EventPulse Network" /></label>
              <label>Event description <em>*</em><textarea defaultValue="Join 500+ SaaS founders, product builders, and operators for a day of deep dives into AI agent implementation, next-generation growth loops, and scaling mechanics." /></label>
              <div className="editor-two-column"><label>Event date <em>*</em><input type="text" defaultValue="November 14, 2026" /></label><label>Start time <em>*</em><input type="text" defaultValue="09:00 AM" /></label></div>
              <div className="editor-two-column"><label>End time <em>*</em><input type="text" defaultValue="05:00 PM" /></label><label>Venue / location <em>*</em><input type="text" defaultValue="Metropolitan Pavilion, New York, NY" /></label></div>
              <label className="switch-row"><span><strong>This is a virtual event</strong><small>Attendees will join online instead of a physical location.</small></span><input type="checkbox" /></label>
              <label>Event banner image <em>*</em><span className="upload-box"><b>＋</b><strong>Click to replace banner image</strong><small>Supports JPG, PNG up to 10MB</small></span></label>
            </section>

            <section className="editor-card">
              <div className="editor-card-heading"><span className="editor-icon teal">⚙</span><div><h2>Event settings</h2><p>Control registration and attendee communication.</p></div></div>
              <label>Registration open date<input type="text" defaultValue="Nov 1, 2026" /></label>
              <label>Registration close date<input type="text" defaultValue="Nov 13, 2026" /></label>
              <label>Maximum attendees<input type="text" defaultValue="500" /></label>
              <label className="switch-row"><span><strong>Enable waitlist</strong><small>Automatically queue attendees once maximum registration capacity is reached.</small></span><input type="checkbox" defaultChecked /></label>
              <label className="switch-row"><span><strong>Enable SMS notifications</strong><small>Send automated reminders and urgent event updates.</small></span><input type="checkbox" /></label>
              <label className="switch-row"><span><strong>Enable attendee feedback collection</strong><small>Collect feedback after the event ends.</small></span><input type="checkbox" defaultChecked /></label>
            </section>

            <div className="create-event-actions"><button type="button" className="save-draft" onClick={onDashboard}>Save as draft</button><button type="button" className="continue-button" onClick={onTicketing}>Continue to ticketing <span>→</span></button></div>
          </form>
        </section>

        <aside className="event-preview-column">
          <div className="preview-label"><i /> Live attendee preview</div>
          <article className="attendee-preview">
            <div className="preview-art"><span>LIVE EVENT</span></div>
            <div className="preview-content"><div className="preview-tags"><span>Conference</span><span>Registration open</span></div><h2>SaaS Frontiers 2026: The AI Expansion</h2><p className="preview-host">Hosted by EventPulse Network</p><div className="preview-details"><span>▣ November 14, 2026</span><span>◷ 09:00 AM - 05:00 PM</span><span>⌖ Metropolitan Pavilion, New York, NY</span></div><h3>About this event</h3><p>Join 500+ SaaS founders, product builders, and operators for a day of deep dives into AI agent implementation, next-generation growth loops, and scaling mechanics.</p><button type="button" onClick={onTicketing}>Register now</button></div>
          </article>
        </aside>
      </main>
    </div>
  )
}

export default CreateEventPage
