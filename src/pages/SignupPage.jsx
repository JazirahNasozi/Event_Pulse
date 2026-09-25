import { useState } from 'react'
import { AuthBrand, AuthVisual } from './AuthShared'

function SignupPage({ onHome, onLogin, onDashboard }) {
  const [notice, setNotice] = useState('')

  return (
    <div className="auth-page">
      <div className="auth-shell signup-shell">
        <section className="auth-form-side">
          <AuthBrand onHome={onHome} />
          <div className="auth-form-wrap">
            <h1>Create your EventPulse account</h1>
            <p className="auth-intro">Start creating events, selling tickets, and engaging attendees.</p>

            <form className="auth-form signup-form" onSubmit={(event) => { event.preventDefault(); onDashboard() }}>
              <label htmlFor="signup-name">Full name</label>
              <input id="signup-name" type="text" autoComplete="name" placeholder="Alex Carter" required />
              <label htmlFor="signup-org">Organization name</label>
              <input id="signup-org" type="text" autoComplete="organization" placeholder="Pulse Media Ltd" required />
              <label htmlFor="signup-email">Email address</label>
              <input id="signup-email" type="email" autoComplete="email" placeholder="alex@eventpulse.io" required />
              <label htmlFor="signup-password">Password</label>
              <input id="signup-password" type="password" autoComplete="new-password" minLength="8" placeholder="At least 8 characters" required />
              <label className="terms-check">
                <input type="checkbox" required />
                <span>I agree to the <button type="button" className="inline-action" onClick={() => setNotice('Terms of Service will be published before account registration is enabled.')}>Terms of Service</button> and acknowledge the <button type="button" className="inline-action" onClick={() => setNotice('Privacy details will be published before account registration is enabled.')}>Privacy Policy</button>.</span>
              </label>
              <button type="submit" className="auth-submit">Create account</button>
            </form>
            {notice && <p className="auth-notice" role="status">{notice}</p>}
            <p className="auth-switch">Already have an account? <button type="button" onClick={onLogin}>Sign in</button></p>
          </div>
        </section>
        <AuthVisual />
      </div>
    </div>
  )
}

export default SignupPage
