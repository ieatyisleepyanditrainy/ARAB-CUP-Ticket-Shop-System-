# FIFA Arab Cup Ticketing Web App

A full‑stack web application for browsing FIFA Arab Cup matches, viewing the calendar, checking ticket availability, and managing basic user login.  

## Features

- **Home (Match of the Week)**
  - Hero section showing “MATCH OF THE WEEK” with “UPCOMING” tag.
  - Centered match information with vertical spacing and responsive layout.
  - UPCOMING button scrolls smoothly to the matches carousel.

- **Matches Carousel**
  - Horizontal carousel of fixtures (teams, date, time, stadium).
  - Navigation between matches with previous / next controls.
  - Connected to ticket availability view.

- **FAQ Page**
  - FAQ cards with question row, badge, and answer text.
  - Responsive column layout with consistent spacing and typography.

- **Calendar Page**
  - List of all fixtures with a date pill on the left.
  - Shows teams, time, stadium, and status (UPCOMING / FINISHED).
  - “VIEW TICKETS” button to open ticket availability for that match.

- **Ticket Availability Page**
  - Displays ticket categories and availability per match.
  - Accessed from both the carousel and the calendar.

- **Navigation & Breadcrumbs**
  - Top navigation for Home, Matches, FAQ’s, Calendar, Tickets, Profile, My Tickets.
  - Breadcrumb `Home > Current Page` driven by `activePage`.

- **Dark Mode**
  - Toggle to switch light/dark theme by updating a body class.

- **Authentication (Mock)**
  - Login modal using mock users (email + password).
  - Stores current user (id, name, city, email) in state.
  - Logout clears the session; “My tickets” and profile use this user.

- **Backend Folder (Scaffold)**
  - `backend/` directory prepared for API routes and business logic.
  - Intended for future database, real auth, and ticket inventory.

## Tech Stack

- **Frontend:** React (functional components, hooks)
- **Styling:** Custom CSS (hero, carousel, FAQ cards, calendar list)
- **State Management:** `useState`, `useEffect`, `useRef`
- **Backend (planned):** Python / Node backend in `backend/`
- **Tooling:** ESLint, Git, npm

## Main User Flows

1. Open **Home** to see Match of the Week.
2. Click **UPCOMING** to scroll to the matches carousel.
3. Browse matches in the carousel and open ticket availability.
4. Open **Calendar** to see all fixtures and view tickets per match.
5. Read answers on the **FAQ’s** page.
6. Log in with mock credentials, view profile / My Tickets, and log out.


