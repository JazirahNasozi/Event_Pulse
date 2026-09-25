# EventPulse Backend Handoff

This frontend is a Vite/React prototype. Navigation currently uses local React state in `src/App.jsx`; the pages do not call a backend yet. Replace the demo constants and local action handlers with API calls without changing the page-level UI contracts unless agreed with the frontend owner.

## Local setup

```bash
npm install
npm run dev
npm run build
npm run lint
```

Set the API origin in `.env.local`:

```bash
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

The frontend should use the same-origin API in production or the configured `VITE_API_BASE_URL` in development.

## Authentication

The current login and signup forms route directly to the dashboard after submit. Replace that demo behavior with:

- `POST /auth/signup`
- `POST /auth/login`
- `POST /auth/logout`
- `GET /auth/me`
- `POST /auth/forgot-password`

Recommended response:

```json
{
  "user": {
    "id": "usr_123",
    "name": "Prossy Carter",
    "email": "prossy@example.com",
    "organizationName": "Pulse Media Ltd"
  },
  "accessToken": "...",
  "expiresAt": "2026-10-01T12:00:00Z"
}
```

Use an HTTP-only refresh cookie where possible. The frontend should not store a long-lived secret in local storage. Return `401` for expired or invalid sessions and a field-level `422` response for validation errors.

## Core resources

### Events

- `GET /events?status=upcoming&page=1&pageSize=20`
- `POST /events`
- `GET /events/:eventId`
- `PATCH /events/:eventId`
- `POST /events/:eventId/publish`
- `POST /events/:eventId/archive`

Create/update fields:

```json
{
  "name": "Kampala Business Summit 2026",
  "category": "conference",
  "hostName": "EventPulse Network",
  "description": "...",
  "startsAt": "2026-11-14T09:00:00+03:00",
  "endsAt": "2026-11-14T17:00:00+03:00",
  "timezone": "Africa/Kampala",
  "venueName": "Serena Hotel",
  "venueAddress": "Kampala, Uganda",
  "isVirtual": false,
  "virtualUrl": null,
  "capacity": 500,
  "registrationOpensAt": "2026-11-01T00:00:00+03:00",
  "registrationClosesAt": "2026-11-13T23:59:00+03:00",
  "waitlistEnabled": true,
  "smsNotificationsEnabled": true,
  "feedbackEnabled": true,
  "bannerUrl": "https://..."
}
```

Event responses should include `id`, `status`, `publishedAt`, `registrationUrl`, `createdAt`, and `updatedAt`.

### Ticket tiers

- `GET /events/:eventId/ticket-tiers`
- `POST /events/:eventId/ticket-tiers`
- `PATCH /events/:eventId/ticket-tiers/:tierId`
- `DELETE /events/:eventId/ticket-tiers/:tierId`
- `POST /events/:eventId/ticket-tiers/reorder`

A tier needs: `id`, `name`, `description`, `price`, `currency`, `capacity`, `soldCount`, `salesOpensAt`, `salesClosesAt`, `status`, and optional `successorTierId`. Automatic switching must be enforced server-side in a transaction or scheduled job; the UI indication is not sufficient protection.

### Dashboard and analytics

- `GET /events/:eventId/summary`
- `GET /events/:eventId/metrics?from=2026-11-01&to=2026-11-14&interval=day`
- `GET /events/:eventId/activities?page=1&pageSize=20`
- `GET /events/:eventId/analytics/ticket-performance`
- `GET /events/:eventId/analytics/attendance`
- `GET /events/:eventId/analytics/communications`

Summary should return the values currently displayed as registrations, tickets sold, check-ins, revenue, capacity, and remaining spots. Analytics responses should include the requested date range and timezone so charts do not guess at dates.

### Attendees and check-in

- `GET /events/:eventId/attendees?status=&ticketTierId=&search=&page=1&pageSize=50`
- `GET /events/:eventId/attendees/:attendeeId`
- `POST /events/:eventId/check-ins`
- `GET /events/:eventId/check-ins?from=&to=&page=1&pageSize=50`

Check-in request:

```json
{
  "ticketId": "tkt_123",
  "method": "qr",
  "gate": "Gate 01",
  "idempotencyKey": "device-abc-scan-123"
}
```

The check-in endpoint must be idempotent and return whether the ticket was newly checked in or was already checked in. This is important when connectivity is unreliable or a QR code is scanned twice.

### Broadcasts

- `GET /events/:eventId/broadcasts`
- `POST /events/:eventId/broadcasts`
- `POST /events/:eventId/broadcasts/:broadcastId/send`
- `POST /events/:eventId/broadcasts/:broadcastId/cancel`
- `GET /events/:eventId/broadcasts/:broadcastId/delivery-report`

Create request:

```json
{
  "channels": ["sms", "email"],
  "recipientFilter": {
    "type": "ticket_tier",
    "ticketTierId": "tier_vip"
  },
  "body": "Your event starts tomorrow at 9:00 AM, {firstName}.",
  "scheduledFor": null
}
```

The backend should calculate the audience, validate channel availability, create a delivery record per recipient, and expose queued/sent/delivered/failed counts. Do not trust recipient counts supplied by the browser.

### Payments and tickets

- `POST /events/:eventId/orders`
- `GET /orders/:orderId`
- `GET /tickets/:ticketId`
- `POST /payments/webhooks/africas-talking`

Payment webhooks must be signature-verified, idempotent, and responsible for issuing tickets only after a confirmed payment. Never mark an order paid from a client redirect alone.

## Error format

Use one predictable error envelope:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "One or more fields are invalid.",
    "fields": {
      "capacity": "Must be greater than zero."
    },
    "requestId": "req_123"
  }
}
```

Suggested status codes: `400` malformed request, `401` unauthenticated, `403` unauthorized organizer, `404` missing resource, `409` state conflict, `422` validation, `429` rate limited, `500` unexpected server error.

## Frontend replacement map

- `src/pages/LoginPage.jsx` and `src/pages/SignupPage.jsx`: replace submit navigation with auth requests and session handling.
- `src/pages/DashboardPage.jsx`: replace `metrics`, `activities`, and event banner values with event summary/activity responses.
- `src/pages/CreateEventPage.jsx`: make the form controlled, upload the banner, create/update the event, then load ticket tiers.
- `src/pages/TicketingPage.jsx`: replace `ticketTiers` and local edits with tier queries/mutations; save only after server confirmation.
- `src/pages/BroadcastPage.jsx`: replace recipient counts and local send/schedule feedback with broadcast create/send responses and delivery polling.
- `src/pages/MyEventPage.jsx`: load event details and management metrics; connect check-in, attendee, communication, ticketing, and analytics actions.
- `src/pages/AnalyticsPage.jsx`: load metrics using the selected date range and render loading, empty, and error states.
- `src/App.jsx`: replace local `page` state with the chosen router and protect organizer pages behind authentication.

## Non-functional requirements

- Enforce organizer ownership on every event-scoped endpoint.
- Store all timestamps in UTC and return timezone-aware ISO 8601 values.
- Add pagination to attendee, activity, broadcast, and audit-log endpoints.
- Add rate limits to login, signup, broadcast send, check-in, and payment webhook routes.
- Log request IDs and provider message/payment IDs for support and reconciliation.
- Add automated tests for ticket tier switching, duplicate check-ins, payment webhook retries, broadcast recipient filtering, and authorization boundaries.
- Configure CORS only for known frontend origins and never commit credentials.

## Definition of done for backend integration

- Auth persists across refresh and unauthorized responses return the user to login.
- Creating an event, editing tiers, saving a draft, and publishing an event persist after reload.
- Dashboard and analytics values come from API responses rather than constants.
- Broadcast scheduling and sending return a durable status and delivery report.
- A paid attendee receives exactly one ticket even if payment webhooks are retried.
- A duplicate QR scan does not create a duplicate attendance record.
- Every API error has a user-safe message and a request ID for support.
