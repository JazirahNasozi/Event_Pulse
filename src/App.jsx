import { Routes, Route, Navigate } from 'react-router-dom'
import { screens } from './data'

import EventDetails from './pages/EventDetails'
import Registration from './pages/Registration'
import Payment from './pages/Payment'
import Awaiting from './pages/Awaiting'
import Paid from './pages/Paid'
import Registered from './pages/Registered'
import EmailTicket from './pages/EmailTicket'
import DigitalPass from './pages/DigitalPass'
import CheckedIn from './pages/CheckedIn'
import Survey from './pages/Survey'
import Feedback from './pages/Feedback'

const MAP = {
  '/event': { C: EventDetails },
  '/register': { C: Registration },
  '/payment': { C: Payment },
  '/awaiting': { C: Awaiting },
  '/paid': { C: Paid },
  '/registered': { C: Registered },
  '/email': { C: EmailTicket },
  '/pass': { C: DigitalPass, dark: true },
  '/checkin': { C: CheckedIn },
  '/survey': { C: Survey },
  '/feedback': { C: Feedback }
}

// Responsive shell: mobile-first, fills the viewport on phones and stays a
// centered app column on larger screens so the interface matches the designs.
function Shell({ path }) {
  const { C, dark } = MAP[path]
  return (
    <div className={'app-shell' + (dark ? ' dark' : '')}>
      <C />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/event" replace />} />
      {screens.map((s) => (
        <Route key={s.path} path={s.path} element={<Shell path={s.path} />} />
      ))}
      <Route path="*" element={<Navigate to="/event" replace />} />
    </Routes>
  )
}
