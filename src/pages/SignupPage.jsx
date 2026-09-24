import { AuthBrand, AuthVisual } from './AuthShared'

function SignupPage({ onHome, onLogin, onDashboard }) {
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
              <input id="signup-name" type="text" placeholder="Alex Carter" />
              <label htmlFor="signup-org">Organization name</label>
              <input id="signup-org" type="text" placeholder="Pulse Media Ltd" />
              <label htmlFor="signup-email">Email address</label>
              <input id="signup-email" type="text" placeholder="alex@eventpulse.io" />
              <label htmlFor="signup-password">Password</label>
              <input id="signup-password" type="password" placeholder="••••••••" />
              <label className="terms-check">
                <input type="checkbox" />
                <span>I agree to the <button type="button" className="inline-action">Terms of Service</button> and acknowledge the <button type="button" className="inline-action">Privacy Policy</button>.</span>
              </label>
              <button type="submit" className="auth-submit">Create account</button>
            </form>
            <p className="auth-switch">Already have an account? <button type="button" onClick={onLogin}>Sign in</button></p>
          </div>
        </section>
        <AuthVisual />
      </div>
    </div>
  )
}

export default SignupPage
