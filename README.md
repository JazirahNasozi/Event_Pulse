# EventPulse

**The heartbeat of every event.**

EventPulse is an accessible event management platform that helps organizers manage the entire event lifecycle, from registration and ticket sales to attendee communication, attendance tracking, feedback collection, and analytics.

The platform works for both smartphone and feature-phone users through web, SMS, and USSD channels, making event participation more inclusive across different levels of connectivity and device access.

## Overview

Event organizers can create and manage events, sell tickets, communicate with attendees, track attendance, and view real-time event insights from a centralized dashboard.

Attendees can register through the web or USSD, purchase tickets, receive confirmations and reminders via SMS, check in at events, and share feedback afterward.

## Focus Areas

- Event Registration & Ticketing
- Event Communication
- Ticket Payments
- Event Analytics & Feedback

## Key Features

**Event Creation & Management**
- Create and manage events
- Set event details, venue, date, capacity, and ticket pricing

**Multi-Channel Registration**
- Web registration
- USSD registration for users without smartphones

**Ticketing System**
- Digital ticket generation with unique ticket IDs
- QR-code based tickets and check-in

**Early Bird & Multiple Ticket Types**
- Early Bird, Regular, and VIP ticket tiers
- Automatic switching to regular pricing when Early Bird sales expire or sell out

**Ticket Payments**
- Integrated payment flow using Africa's Talking Payments API
- Payment confirmation notifications

**Event Communication**
- Registration and payment confirmations via SMS
- Event reminders, updates, and announcements
- Post-event messages

**Attendance & Check-In**
- Ticket ID or QR-code check-in
- Attendance tracking

**Feedback Collection**
- SMS-based feedback collection
- Online feedback forms
- Event ratings and attendee comments

**Analytics Dashboard**
- Registration numbers and capacity utilization
- Revenue tracking and ticket sales by category
- Attendance rates
- Feedback analytics
- SMS delivery statistics

**Live Registration Counter**
- Real-time registrations
- Remaining event slots
- Capacity monitoring

**Organizer Command Center**
- Central dashboard showing registrations, revenue, attendance, communication metrics, and overall event performance

## Tech Stack

- **Frontend:** React (Vite)
- **Communication & Payments:** Africa's Talking APIs
  - SMS API
  - USSD API
  - Payments API
  - Chat API (optional)

## User Journeys

**Attendee Journey**
Discover Event → Register → Pay → Receive Ticket → Attend Event → Give Feedback

**Organizer Journey**
Create Event → Manage Registrations → Track Payments → Communicate with Attendees → Monitor Attendance → Analyze Event Performance

## Brand

- Primary: Navy Blue
- Secondary: Teal `#0F9D8A`

## Goal

To provide a single platform that combines registration, payments, communication, attendance tracking, and analytics, while remaining accessible to both smartphone and feature-phone users.

## Getting Started

```bash
# Clone the repository
git clone <your-repo-url>
cd event-pulse

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Backend Handoff

The frontend currently uses local demo state and is ready to be connected to an API. See [BACKEND_HANDOFF.md](BACKEND_HANDOFF.md) for the endpoint contracts, payloads, response shapes, security requirements, and the exact frontend files that need to be switched from mock data to API data.

Copy `.env.example` to `.env.local` and set `VITE_API_BASE_URL` to the backend API origin.

## Contributing

This project is being built as a team. Please branch off `main` for new features and open a pull request for review before merging.

## License

TBD