import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import DashboardPage from './pages/DashboardPage'
import CreateEventPage from './pages/CreateEventPage'
import TicketingPage from './pages/TicketingPage'
import BroadcastPage from './pages/BroadcastPage'
import MyEventPage from './pages/MyEventPage'
import AnalyticsPage from './pages/AnalyticsPage'

function App() {
  const [page, setPage] = useState('home')

  if (page === 'login') {
    return <LoginPage onHome={() => setPage('home')} onSignup={() => setPage('signup')} onDashboard={() => setPage('dashboard')} />
  }

  if (page === 'signup') {
    return <SignupPage onHome={() => setPage('home')} onLogin={() => setPage('login')} onDashboard={() => setPage('dashboard')} />
  }

  if (page === 'dashboard') {
    return <DashboardPage onHome={() => setPage('home')} onCreateEvent={() => setPage('create-event')} onTicketing={() => setPage('ticketing')} onBroadcast={() => setPage('broadcast')} onEventDetails={() => setPage('my-event')} onAnalytics={() => setPage('analytics')} />
  }

  if (page === 'create-event') {
    return <CreateEventPage onDashboard={() => setPage('dashboard')} onTicketing={() => setPage('ticketing')} />
  }

  if (page === 'ticketing') {
    return <TicketingPage onBack={() => setPage('create-event')} onSave={() => setPage('dashboard')} />
  }

  if (page === 'broadcast') {
    return <BroadcastPage onBack={() => setPage('dashboard')} onProfile={() => setPage('my-event')} />
  }

  if (page === 'my-event') {
    return <MyEventPage onBack={() => setPage('dashboard')} onEdit={() => setPage('create-event')} onTicketing={() => setPage('ticketing')} onBroadcast={() => setPage('broadcast')} onAnalytics={() => setPage('analytics')} />
  }

  if (page === 'analytics') {
    return <AnalyticsPage onBack={() => setPage('dashboard')} onHome={() => setPage('home')} onEventDetails={() => setPage('my-event')} />
  }

  return <HomePage onHome={() => setPage('home')} onLogin={() => setPage('login')} onSignup={() => setPage('signup')} onDashboard={() => setPage('dashboard')} />
}

export default App
