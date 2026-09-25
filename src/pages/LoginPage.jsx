import { useState } from 'react'
import { AuthBrand, AuthVisual } from './AuthShared'

function LoginPage({ onHome, onSignup, onDashboard }) {
  const [notice, setNotice] = useState('')

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
              <input id="login-email" type="email" autoComplete="email" placeholder="alex@eventpulse.io" required />
              <div className="field-heading">
                <label htmlFor="login-password">Password</label>
                <button type="button" className="text-action" onClick={() => setNotice('Password recovery will be available when account services are connected.')}>Forgot password?</button>
              </div>
              <input id="login-password" type="password" autoComplete="current-password" placeholder="••••••••" required />
              <button type="submit" className="auth-submit">Sign in</button>
            </form>

            <div className="auth-divider"><span>or continue with</span></div>
            <button type="button" className="google-button" onClick={() => setNotice('Google sign-in is not configured yet.') }><span>G</span> Continue with Google</button>
            <button type="button" className="create-account-button" onClick={onSignup}>Create account</button>
            {notice && <p className="auth-notice" role="status">{notice}</p>}
            <p className="auth-switch">Don't have an account? <button type="button" onClick={onSignup}>Create account</button></p>
          </div>
        </section>
        <AuthVisual />
      </div>
    </div>
  )
}

export default LoginPage
