import logoImg from '../assets/logo.png'

export function AuthBrand({ onHome }) {
  return (
    <button type="button" className="auth-brand" onClick={onHome}>
      <img src={logoImg} alt="EventPulse" />
    </button>
  )
}

export function AuthVisual() {
  return (
    <div className="auth-visual">
      <img src={logoImg} alt="EventPulse logo" className="auth-visual-logo" />
      <div className="auth-visual-copy">
        <h2>Every event,<br />in one pulse.</h2>
        <p>Bring registrations, tickets, and attendees together in one place.</p>
      </div>
    </div>
  )
}
