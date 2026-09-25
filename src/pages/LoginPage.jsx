import { AuthBrand, AuthVisual } from './AuthShared'

function LoginPage({ onHome, onSignup, onDashboard }) {
  return (
    <div className="auth-page">
      <div className="auth-shell">
        <section className="auth-form-side">
          <AuthBrand onHome={onHome} />
          <div className="auth-form-wrap">
            <span className="auth-kicker">Welcome back</span>
            <h1>Sign in to EventPulse</h1>
            <p className="auth-intro">Manage your events, registrations, and attendees in one place.</p>

            <form className="auth-form" onSubmit={(event) => { event.preventDefault(); onDashboard() }}>
              <label htmlFor="login-email">Email address</label>
              <input id="login-email" type="text" placeholder="alex@eventpulse.io" />
              <div className="field-heading">
                <label htmlFor="login-password">Password</label>
                <button type="button" className="text-action" onClick={onSignup}>Forgot password?</button>
              </div>
              <input id="login-password" type="password" placeholder="••••••••" />
              <button type="submit" className="auth-submit">Sign in</button>
            </form>

            <div className="auth-divider"><span>or continue with</span></div>
            <button type="button" className="google-button" onClick={onDashboard}><span>G</span> Continue with Google</button>
            <button type="button" className="create-account-button" onClick={onSignup}>Create account</button>
            <p className="auth-switch">Don't have an account? <button type="button" onClick={onSignup}>Create account</button></p>
          </div>
        </section>
        <AuthVisual />
      </div>
    </div>
  )
}

export default LoginPage
