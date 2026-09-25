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
import { AttendeesPage, CheckInPage, EventsPage, LiveEventPage, PayoutsPage, ProfilePage } from './pages/OrganizerPages'

function App() {
  const [page, setPage] = useState('home')
  const [ticketingReturn, setTicketingReturn] = useState('create-event')
  const sidebarNavigation = {
    onHome: () => setPage('dashboard'),
    onEvents: () => setPage('events'),
    onCheckIn: () => setPage('check-in'),
    onAnalytics: () => setPage('analytics'),
    onProfile: () => setPage('profile'),
  }
  const goToTicketing = (returnTo) => {
    setTicketingReturn(returnTo)
    setPage('ticketing')
  }

  if (page === 'login') {
    return <LoginPage onHome={() => setPage('home')} onSignup={() => setPage('signup')} onDashboard={() => setPage('dashboard')} />
  }

  if (page === 'signup') {
    return <SignupPage onHome={() => setPage('home')} onLogin={() => setPage('login')} onDashboard={() => setPage('dashboard')} />
  }

  if (page === 'dashboard') {
    return <DashboardPage onHome={() => setPage('dashboard')} onEvents={() => setPage('events')} onCreateEvent={() => setPage('create-event')} onTicketing={() => goToTicketing('dashboard')} onBroadcast={() => setPage('broadcast')} onEventDetails={() => setPage('my-event')} onAnalytics={() => setPage('analytics')} onCheckIn={() => setPage('check-in')} onProfile={() => setPage('profile')} />
  }

  if (page === 'create-event') {
    return <CreateEventPage onDashboard={() => setPage('dashboard')} onTicketing={() => goToTicketing('create-event')} navigation={sidebarNavigation} />
  }

  if (page === 'edit-event') {
    return <CreateEventPage mode="edit" onDashboard={() => setPage('my-event')} onTicketing={() => goToTicketing('edit-event')} navigation={sidebarNavigation} />
  }

  if (page === 'ticketing') {
    return <TicketingPage onBack={() => setPage(ticketingReturn)} onSave={() => setPage(ticketingReturn === 'my-event' || ticketingReturn === 'edit-event' ? 'my-event' : 'dashboard')} onProfile={() => setPage('profile')} navigation={sidebarNavigation} />
  }

  if (page === 'broadcast') {
    return <BroadcastPage onBack={() => setPage('dashboard')} onProfile={() => setPage('profile')} navigation={sidebarNavigation} />
  }

  if (page === 'my-event') {
    return <MyEventPage onBack={() => setPage('events')} onEdit={() => setPage('edit-event')} onTicketing={() => goToTicketing('my-event')} onBroadcast={() => setPage('broadcast')} onAnalytics={() => setPage('analytics')} onAttendees={() => setPage('attendees')} onCheckIn={() => setPage('check-in')} onLive={() => setPage('live-event')} onPayouts={() => setPage('payouts')} navigation={sidebarNavigation} />
  }

  if (page === 'analytics') {
    return <AnalyticsPage onBack={() => setPage('dashboard')} onHome={() => setPage('dashboard')} onEvents={() => setPage('events')} onEventDetails={() => setPage('my-event')} onCheckIn={() => setPage('check-in')} onProfile={() => setPage('profile')} />
  }

  if (page === 'events') return <EventsPage onBack={() => setPage('dashboard')} onCreateEvent={() => setPage('create-event')} onOpenEvent={() => setPage('my-event')} navigation={sidebarNavigation} />
  if (page === 'attendees') return <AttendeesPage onBack={() => setPage('my-event')} navigation={sidebarNavigation} />
  if (page === 'check-in') return <CheckInPage onBack={() => setPage('my-event')} navigation={sidebarNavigation} />
  if (page === 'live-event') return <LiveEventPage onBack={() => setPage('my-event')} onBroadcast={() => setPage('broadcast')} onCheckIn={() => setPage('check-in')} navigation={sidebarNavigation} />
  if (page === 'payouts') return <PayoutsPage onBack={() => setPage('my-event')} navigation={sidebarNavigation} />
  if (page === 'profile') return <ProfilePage onBack={() => setPage('dashboard')} onLogout={() => setPage('login')} navigation={sidebarNavigation} />

  return <HomePage onHome={() => setPage('home')} onLogin={() => setPage('login')} onSignup={() => setPage('signup')} onAnalytics={() => setPage('analytics')} />
}

export default App
