import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import DashboardPage from './pages/DashboardPage'
import CreateEventPage from './pages/CreateEventPage'
import TicketingPage from './pages/TicketingPage'

function App() {
  const [page, setPage] = useState('home')

  if (page === 'login') {
    return <LoginPage onHome={() => setPage('home')} onSignup={() => setPage('signup')} onDashboard={() => setPage('dashboard')} />
  }

  if (page === 'signup') {
    return <SignupPage onHome={() => setPage('home')} onLogin={() => setPage('login')} onDashboard={() => setPage('dashboard')} />
  }

  if (page === 'dashboard') {
    return <DashboardPage onHome={() => setPage('home')} onCreateEvent={() => setPage('create-event')} />
  }

  if (page === 'create-event') {
    return <CreateEventPage onDashboard={() => setPage('dashboard')} onTicketing={() => setPage('ticketing')} />
  }

  if (page === 'ticketing') {
    return <TicketingPage onBack={() => setPage('create-event')} onSave={() => setPage('dashboard')} />
  }

  return <HomePage onLogin={() => setPage('login')} onSignup={() => setPage('signup')} onDashboard={() => setPage('dashboard')} />
}

export default App
