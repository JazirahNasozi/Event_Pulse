import heroImg from '../assets/hero.png'
import logoImg from '../assets/logo.png'

const featureCards = [
  {
    title: 'Event registration',
    detail: 'Launch one-click signups, ticket tiers, and instant confirmation flows.',
    accent: 'live',
  },
  {
    title: 'Smart payments',
    detail: 'Collect ticket sales with secure checkout and automatic receipts.',
    accent: 'pay',
  },
  {
    title: 'Attendance insights',
    detail: 'Track real-time check-ins, drop-offs, and capacity utilization.',
    accent: 'pulse',
  },
]

const stats = [
  { value: '12k+', label: 'registrations' },
  { value: '96%', label: 'attendance' },
  { value: '2.4x', label: 'more reach' },
]

function HomePage({ onHome, onLogin, onSignup, onAnalytics }) {
  return (
    <div className="page-shell">
      <header className="topbar">
        <button type="button" className="brand-mark" aria-label="EventPulse home" onClick={onHome}>
          <img src={logoImg} alt="EventPulse logo" className="brand-logo" />
        </button>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#journeys">Journeys</a>
          <button type="button" className="nav-link-button" onClick={onAnalytics}>Analytics</button>
        </nav>

        <div className="nav-actions">
          <button type="button" className="nav-button secondary" onClick={onLogin}>
            Log in
          </button>
          <button type="button" className="nav-button primary" onClick={onSignup}>
            Book demo
          </button>
        </div>
      </header>

      <main className="hero-layout">
        <section className="copy-column">
          <div className="eyebrow">Built for modern event teams</div>
          <h1>The heartbeat of every event.</h1>
          <p className="lede">
            EventPulse helps organizers manage registrations, ticket payments,
            attendee communication, live analytics, and post-event feedback from one
            accessible platform.
          </p>

          <div className="cta-row">
            <button type="button" className="primary-cta" onClick={onSignup}>
              Get started
            </button>
            <a href="#features" className="secondary-cta">View overview</a>
          </div>

          <div className="stats-row" aria-label="Key performance stats">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <aside className="hero-visual" aria-label="EventPulse revenue overview">
          <img src={heroImg} alt="EventPulse dashboard preview" className="hero-image" />
        </aside>
      </main>

      <section className="feature-panel" id="features">
        {featureCards.map((card) => (
          <article className="feature-card" key={card.title}>
            <span className={`feature-dot ${card.accent}`} aria-hidden="true" />
            <h2>{card.title}</h2>
            <p>{card.detail}</p>
          </article>
        ))}
      </section>

      <section className="bottom-strip" id="journeys">
        <div className="bottom-copy">
          <span className="eyebrow">Inclusive by design</span>
          <h2>One platform for every attendee journey.</h2>
        </div>

        <div className="journey-list" id="analytics">
          <div>
            <strong>Discover</strong>
            <span>Find events in seconds</span>
          </div>
          <div>
            <strong>Register</strong>
            <span>Web, SMS, and USSD support</span>
          </div>
          <div>
            <strong>Track</strong>
            <span>Monitor attendance and sales live</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
