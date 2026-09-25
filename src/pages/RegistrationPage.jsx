function RegistrationPage({ onBack, onContinue }) {
  return (
    <div className="registration-page">

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

      <main className="registration-container">

        <div className="page-heading">
          <span className="eyebrow">General Admission</span>
          <h1>Complete your registration</h1>
          <p>
            Enter your details to reserve your place at the event.
          </p>
        </div>

        <form className="registration-form">

          <div className="form-group">
            <label htmlFor="fullName">Full name</label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone number</label>
            <input
              id="phone"
              type="tel"
              placeholder="+256 700 000000"
            />
          </div>

          <div className="form-group">
            <label htmlFor="organization">Organization</label>
            <input
              id="organization"
              type="text"
              placeholder="Optional"
            />
          </div>

          <button
            type="button"
            className="primary-cta"
            onClick={onContinue}
          >
            Continue to Payment
          </button>

        </form>

      </main>
    </div>
  )
}

export default RegistrationPage