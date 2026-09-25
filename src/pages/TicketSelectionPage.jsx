import { useState } from 'react'

function TicketSelectionPage({ onBack, onContinue }) {
  const [quantity, setQuantity] = useState(1)
  
  return (
    <div className="ticket-selection-page">

      <header className="topbar">
        <button
          type="button"
          className="brand-mark"
          onClick={onBack}
        >
          EventPulse
        </button>

        <button
          type="button"
          className="nav-button secondary"
          onClick={onBack}
        >
          Back to Event
        </button>
      </header>

      <main className="ticket-selection-container">

        <div className="page-heading">
          <span className="eyebrow">Women in Tech Hackathon</span>
          <h1>Select your ticket</h1>
          <p>
            Choose the ticket you'd like to register for.
          </p>
        </div>

        <section className="ticket-options">

          <article className="ticket-option selected">

            <div className="ticket-option-info">
              <h2>General Admission</h2>

              <p>
                Access to the Women in Tech Hackathon event.
              </p>

              <span className="ticket-availability">
                Available
              </span>
            </div>

            <div className="ticket-option-price">
              <strong>UGX 0</strong>
              <span>Free</span>
            </div>

            <div className="ticket-quantity">
  <button
    type="button"
    onClick={() => setQuantity(Math.max(1, quantity - 1))}
  >
    −
  </button>

  <span>{quantity}</span>

  <button
    type="button"
    onClick={() => setQuantity(quantity + 1)}
  >
    +
  </button>
</div>

          </article>

        </section>

        <section className="ticket-summary">

          <div>
            <span>Total</span>
            <strong>UGX 0</strong>
          </div>

          <button
            type="button"
            className="primary-cta"
            onClick={onContinue}
          >
            Continue to Registration
          </button>

        </section>

      </main>
    </div>
  )
}

export default TicketSelectionPage