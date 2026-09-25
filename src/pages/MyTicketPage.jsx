function MyTicketPage({ onBack, onHome }) {
  return (
    <div className="my-ticket-page">

      <header className="topbar">

        <button
          type="button"
          className="brand-mark"
          onClick={onHome}
        >
          EventPulse
        </button>

        <button
          type="button"
          className="nav-button secondary"
          onClick={onBack}
        >
          Back
        </button>

      </header>

      <main className="ticket-container">

        <div className="page-heading">
          <span className="eyebrow">Your ticket</span>

          <h1>Women in Tech Hackathon</h1>

          <p>
            Keep this ticket available when you arrive at the event.
          </p>
        </div>

        <section className="digital-ticket">

          <div className="ticket-header">

            <div>
              <span>EVENTPULSE</span>
              <h2>Women in Tech Hackathon</h2>
            </div>

            <span className="ticket-status">
              CONFIRMED
            </span>

          </div>

          <div className="ticket-details">

            <div>
              <span>Attendee</span>
              <strong>Sarah Nakanwagi</strong>
            </div>

            <div>
              <span>Ticket</span>
              <strong>General Admission</strong>
            </div>

            <div>
              <span>Date</span>
              <strong>26 September 2026</strong>
            </div>

            <div>
              <span>Time</span>
              <strong>10:00 AM – 7:00 PM</strong>
            </div>

            <div>
              <span>Location</span>
              <strong>Kampala, Uganda</strong>
            </div>

            <div>
              <span>Ticket ID</span>
              <strong>EP-2026-001</strong>
            </div>

          </div>

          <div className="ticket-qr">
            <div className="qr-placeholder">
              QR
            </div>

            <p>
              Scan this code at check-in.
            </p>
          </div>

        </section>

        <button
          type="button"
          className="primary-cta"
          onClick={onHome}
        >
          Back to Events
        </button>

      </main>
    </div>
  )
}

export default MyTicketPage