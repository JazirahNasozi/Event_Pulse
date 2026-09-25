function PaymentPage({ onBack, onContinue }) {
  return (
    <div className="payment-page">

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
          Back
        </button>
      </header>

      <main className="payment-container">

        <div className="page-heading">
          <span className="eyebrow">Registration</span>
          <h1>Payment</h1>
          <p>
            Review your registration and choose a payment method.
          </p>
        </div>

        <section className="payment-layout">

          <div className="payment-methods">

            <h2>Payment method</h2>

            <label className="payment-option">
              <input
                type="radio"
                name="payment"
                defaultChecked
              />

              <div>
                <strong>Mobile Money</strong>
                <span>Pay using your mobile money account.</span>
              </div>
            </label>

            <label className="payment-option">
              <input
                type="radio"
                name="payment"
              />

              <div>
                <strong>Card</strong>
                <span>Pay using a debit or credit card.</span>
              </div>
            </label>

          </div>

          <aside className="order-summary">

            <h2>Order summary</h2>

            <div className="summary-row">
              <span>General Admission</span>
              <strong>UGX 0</strong>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <strong>UGX 0</strong>
            </div>

            <button
              type="button"
              className="primary-cta"
              onClick={onContinue}
            >
              Complete Registration
            </button>

          </aside>

        </section>

      </main>
    </div>
  )
}

export default PaymentPage