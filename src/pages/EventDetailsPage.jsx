import heroImg from '../assets/hero.png'

function EventDetailsPage({ onBack, onSelectTicket }) {
  return (
    <div className="event-details-page">

      <header className="topbar">
        <button
          type="button"
          className="brand-mark"
          onClick={onBack}
          aria-label="Back to events"
        >
          EventPulse
        </button>

        <button
          type="button"
          className="nav-button secondary"
          onClick={onBack}
        >
          Back to Events
        </button>
      </header>

      <main className="event-details-container">

        {/* Event Hero */}
        <section className="event-hero">
          <img
            src={heroImg}
            alt="Event"
            className="event-hero-image"
          />

          <div className="event-hero-content">
            <span className="eyebrow">Technology & Innovation</span>

            <h1>Women in Tech Hackathon</h1>

            <p>
              Build innovative solutions, connect with other developers,
              and create technology that makes a difference.
            </p>
          </div>
        </section>

        {/* Event Information */}
        <section className="event-info-grid">

          <div className="event-info-card">
            <span>📅</span>
            <div>
              <strong>Date</strong>
              <p>26 September 2026</p>
            </div>
          </div>

          <div className="event-info-card">
            <span>🕐</span>
            <div>
              <strong>Time</strong>
              <p>10:00 AM – 7:00 PM</p>
            </div>
          </div>

          <div className="event-info-card">
            <span>📍</span>
            <div>
              <strong>Location</strong>
              <p>Kampala, Uganda</p>
            </div>
          </div>

          <div className="event-info-card">
            <span>👤</span>
            <div>
              <strong>Organizer</strong>
              <p>Africa's Talking</p>
            </div>
          </div>

        </section>

        {/* Event Description */}
        <section className="event-description">

          <div className="event-main-content">
            <h2>About this event</h2>

            <p>
              Join developers, innovators, and technology enthusiasts for
              an exciting hackathon focused on building practical solutions
              using technology.
            </p>

            <p>
              Participants can discover the event, register for tickets,
              make payments, and receive their event ticket through the
              EventPulse platform.
            </p>

            <h2>What to expect</h2>

            <ul>
              <li>Build technology solutions with your team</li>
              <li>Connect with other technology enthusiasts</li>
              <li>Learn from fellow developers and mentors</li>
              <li>Present your solution</li>
            </ul>
          </div>

          {/* Ticket Card */}
          <aside className="ticket-card">

            <span className="eyebrow">Tickets</span>

            <h2>General Admission</h2>

            <div className="ticket-price">
              UGX 0
            </div>

            <p>Free registration</p>

            <button
              type="button"
              className="primary-cta ticket-button"
              onClick={onSelectTicket}
            >
              Select Ticket
            </button>

            <small>
              Limited availability
            </small>

          </aside>

        </section>

      </main>
    </div>
  )
}

export default EventDetailsPage