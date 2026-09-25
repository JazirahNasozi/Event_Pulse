import { useState } from 'react'

const recipients = [
  { name: 'All registered attendees', detail: 'Complete attendee list', count: '850' },
  { name: 'Checked-in attendees', detail: 'Confirmed on-site', count: '624' },
  { name: 'VIP attendees', detail: 'Executive & speaker pass', count: '120' },
]

function BroadcastPage({ onBack, onProfile }) {
  const [smsEnabled, setSmsEnabled] = useState(true)
  const [emailEnabled, setEmailEnabled] = useState(true)
  const [recipient, setRecipient] = useState(0)
  const [message, setMessage] = useState('Your event starts tomorrow at 9:00 AM. We look forward to seeing you!')
  const [preview, setPreview] = useState('sms')
  const [notice, setNotice] = useState('')

  return (
    <div className="broadcast-page">
      <header className="broadcast-topbar">
        <button type="button" className="broadcast-back" onClick={onBack}>← <span>Back</span></button>
        <button type="button" className="broadcast-more" onClick={() => setNotice('Broadcast options are ready for review.')} aria-label="Broadcast options">⋮</button>
        <button type="button" className="ticketing-profile" onClick={onProfile} aria-label="Open event profile">♙</button>
      </header>

      <main className="broadcast-main">
        <section className="broadcast-event-card">
          <div><span className="active-broadcast">Active broadcast</span><span className="broadcast-date">▣ Nov 14, 2026</span></div>
          <h1>Kampala Business Summit 2026</h1>
          <p>Send important event updates to your registered attendees instantly.</p>
        </section>

        <section className="broadcast-section">
          <div className="broadcast-section-heading"><div><h2>Choose channel</h2><p>Both channels can broadcast concurrently.</p></div><b>Multi-channel active</b></div>
          <div className="channel-options">
            <button type="button" className={smsEnabled ? 'channel-option selected' : 'channel-option'} onClick={() => setSmsEnabled(!smsEnabled)}><i>{smsEnabled ? '✓' : ''}</i><span><strong>SMS 📱</strong><small>Reach attendees using mobile phones and feature phones without internet.</small></span><em>Fastest delivery</em></button>
            <button type="button" className={emailEnabled ? 'channel-option selected' : 'channel-option'} onClick={() => setEmailEnabled(!emailEnabled)}><i>{emailEnabled ? '✓' : ''}</i><span><strong>Email ✉</strong><small>Send updates to attendees who registered online and provided an email address.</small></span><em>Rich format</em></button>
          </div>
        </section>

        <section className="broadcast-section">
          <div className="broadcast-section-heading"><div><h2>Choose recipients</h2><p>Select who receives this announcement.</p></div><b>Total Audience: 850</b></div>
          <div className="recipient-options">
            {recipients.map((item, index) => <button type="button" key={item.name} className={recipient === index ? 'recipient-option selected' : 'recipient-option'} onClick={() => setRecipient(index)}><i /> <span><strong>{item.name}</strong><small>{item.detail}</small></span><em>{item.count}</em></button>)}
            <div className="recipient-option specific"><i /><span><strong>Specific ticket tier</strong></span><b>Filter by badge</b><div><button type="button">Early Bird (310)</button><button type="button">Regular (420)</button><button type="button">VIP (120)</button></div></div>
          </div>
        </section>

        <section className="broadcast-section message-section">
          <div className="broadcast-section-heading"><h2>Write message</h2><button type="button" onClick={() => setMessage((currentMessage) => `${currentMessage} Hi {First Name},`)}>⊕ Add tag {'{First Name}'}</button></div>
          <div className="message-card"><textarea value={message} maxLength="160" onChange={(event) => setMessage(event.target.value)} /><div className="message-footer"><span>{message.length} / 160 characters (1 SMS segment)</span><span>⌫  📖</span></div></div>
        </section>

        <section className="live-preview-section">
          <div className="preview-heading"><h2>Live previews</h2><div><button type="button" className={preview === 'sms' ? 'active' : ''} onClick={() => setPreview('sms')}>SMS</button><button type="button" className={preview === 'email' ? 'active' : ''} onClick={() => setPreview('email')}>Email</button></div></div>
          <div className="broadcast-preview"><div className="sender-row"><span>▣  <strong>Sender ID: EventPulse</strong></span><span>Direct Gateway</span></div><div className={preview === 'sms' ? 'message-bubble' : 'email-bubble'}>{preview === 'sms' ? message : <><strong>Kampala Business Summit 2026</strong><br />{message}</>}</div></div>
        </section>

        <section className="audience-ready"><div><span>♧</span><strong>Total: 850 recipients</strong></div><b>Ready</b><p>◉ SMS: 620  <i>●</i> Email: 230</p><small>✧ Reaching all attendees across smartphones and feature phones.</small></section>
      </main>

      <footer className="broadcast-footer"><button type="button" className="schedule-button" onClick={() => setNotice('Broadcast scheduled for review.')}>◷ Schedule</button><button type="button" className="send-button" onClick={() => setNotice('Broadcast queued for delivery.')}>▷ Send now</button><small>{notice || 'Delivery logs will be instantly saved to Summit Registry'}</small></footer>
    </div>
  )
}

export default BroadcastPage
