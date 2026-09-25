import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import DashboardPage from './pages/DashboardPage'
import CreateEventPage from './pages/CreateEventPage'
import TicketingPage from './pages/TicketingPage'

import EventDetailsPage from './pages/EventDetailsPage'
import TicketSelectionPage from './pages/TicketSelectionPage'
import RegistrationPage from './pages/RegistrationPage'
import PaymentPage from './pages/PaymentPage'
import ConfirmationPage from './pages/ConfirmationPage'
import MyTicketPage from './pages/MyTicketPage'

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
  

  if (page === 'event-details') {
  return (
    <EventDetailsPage
      onBack={() => setPage('home')}
      onSelectTicket={() => setPage('ticket-selection')}
      />
  )
}

if (page === 'ticket-selection') {
  return (
    <TicketSelectionPage
      onBack={() => setPage('event-details')}
      onContinue={() => setPage('registration')}
    />
  )
}

if (page === 'registration') {
  return (
    <RegistrationPage
      onBack={() => setPage('ticket-selection')}
      onContinue={() => setPage('payment')}
    />
  )
}

if (page === 'payment') {
  return (
    <PaymentPage
      onBack={() => setPage('registration')}
      onContinue={() => setPage('confirmation')}
    />
  )
}
if (page === 'confirmation') {
  return (
    <ConfirmationPage
      onViewTicket={() => setPage('my-ticket')}
      onHome={() => setPage('home')}
    />
  )
}

if (page === 'my-ticket') {
  return (
    <MyTicketPage
      onBack={() => setPage('confirmation')}
      onHome={() => setPage('home')}
    />
  )
}

  return <HomePage onLogin={() => setPage('login')} onSignup={() => setPage('signup')} onDashboard={() => setPage('dashboard')} />
}

export default App
