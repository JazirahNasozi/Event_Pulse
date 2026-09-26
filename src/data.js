export const summit = {
  name: 'Women in Tech Summit 2027',
  org: 'Apex Innovations',
  emoji: '👩‍💻',
  date: '18 March 2027',
  dateLong: 'March 18, 2027',
  time: '9:00 AM – 5:00 PM EAT',
  venue: 'Kampala Serena Hotel, Uganda',
  hall: 'Victoria Conference Hall',
  desc: "Join 400+ women leaders, developers, and innovators for East Africa's premier women-in-tech conference. Featuring keynotes, workshops, networking, and career opportunities.",
  passId: 'EP-2027-00482',
  attendee: 'Sarah Nakanwagi',
  email: 's.namukasa@eventpulse.com',
  phoneMask: '+256 772 *** 678'
}

export const speakers = [
  { name: 'Sarah Nakanwagi', color: '#e8547c' },
  { name: 'Proscovia Nakato.', color: '#0a66d0' },
  { name: 'Jazirah Nassozi', color: '#e0a400' }
]

export const tickets = [
  {
    id: 'early', tone: 'gold', name: 'EARLY BIRD', price: 50000, note: 'Per attendee',
    perks: ['General admission', 'Networking dinner', 'Lunch included'], tag: '50 Spots Left'
  },
  {
    id: 'regular', tone: 'blue', name: 'REGULAR', price: 80000, note: 'Per attendee',
    perks: ['General admission', 'Conference materials', 'Networking dinner']
  },
  {
    id: 'vip', tone: 'vip', name: 'VIP ACCESS', price: 150000, note: 'Limited Seats',
    perks: ['Priority seating', 'All workshops', 'Networking dinner', 'VIP Lounge & Certificate']
  }
]

export const ugx = (n) => 'UGX ' + Number(n).toLocaleString('en-UG')

export const screens = [
  { path: '/event', label: 'Event Details', sub: 'Summit info & tickets' },
  { path: '/register', label: 'Complete Registration', sub: 'Order summary & details' },
  { path: '/payment', label: 'Choose Payment', sub: 'Payment method' },
  { path: '/awaiting', label: 'Awaiting Payment', sub: 'Mobile Money prompt' },
  { path: '/paid', label: 'Payment Successful', sub: 'Confirmation' },
  { path: '/registered', label: 'Registration Success', sub: 'Your pass is ready' },
  { path: '/email', label: 'Email Ticket', sub: 'Inbox viewer' },
  { path: '/pass', label: 'Digital Pass', sub: 'QR entry' },
  { path: '/checkin', label: 'Checked In', sub: 'Verified entry' },
  { path: '/survey', label: 'Post-Event Survey', sub: 'Rate the summit' },
  { path: '/feedback', label: 'Feedback Confirmed', sub: 'Thank you' }
]