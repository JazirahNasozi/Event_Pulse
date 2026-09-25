function ConfirmationPage({ onViewTicket, onHome }) {
  return (
    <div className="confirmation-page">

      <header className="topbar">
        <button
          type="button"
          className="brand-mark"
          onClick={onHome}
        >
          EventPulse
        </button>
      </header>

      <main className="confirmation-container">

        <div className="confirmation-icon">
          ✓
        </div>

        <span className="eyebrow">Registration complete</span>

        <h1>You're going to the event!</h1>

        <p>
          Your registration for the Women in Tech Hackathon has been
          successfully completed.
        </p>

        <div className="confirmation-details">

          <div>
            <span>Event</span>
            <strong>Women in Tech Hackathon</strong>
          </div>

          <div>
            <span>Date</span>
            <strong>26 September 2026</strong>
          </div>

          <div>
            <span>Location</span>
            <strong>Kampala, Uganda</strong>
          </div>

        </div>

        <div className="confirmation-actions">

          <button
            type="button"
            className="primary-cta"
            onClick={onViewTicket}
          >
            View My Ticket
          </button>

          <button
            type="button"
            className="secondary-cta"
            onClick={onHome}
          >
            Back to Events
          </button>

        </div>

      </main>
    </div>
  )
}

export default ConfirmationPage