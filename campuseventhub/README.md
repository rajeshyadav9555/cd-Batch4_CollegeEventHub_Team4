# Campus Event Hub
# CampusEventHub

Full-stack starter for a campus events hub.

## Structure
- `backend/` — Express API using Sequelize + SQLite
- `frontend/` — React (Vite) frontend

## Quick start

### Backend
1. `cd backend`
2. `cp .env.example .env` and edit if required
3. `npm install`
4. `npm run dev` (or `npm start`)

API runs at `http://localhost:4000` by default

### Frontend
1. `cd frontend`
2. `npm install`
3. `npm run dev`
4. Open `http://localhost:5173` (Vite default)

Set `VITE_API_BASE` in `.env` if backend URL differs.

## Notes
- DB: SQLite file at `DATABASE_STORAGE` (default `./dev.sqlite`) — good for development.
- Authentication: JWT (see `src/middlewares/auth.js`).
- Extend validations, tests, and UI as needed.

