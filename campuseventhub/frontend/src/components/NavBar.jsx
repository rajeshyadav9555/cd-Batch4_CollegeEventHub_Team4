import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(){
  return (
    <nav style={{ display: 'flex', gap: 12, padding: 12, borderBottom: '1px solid #ddd' }}>
      <Link to="/events">Events</Link>
      <Link to="/dashboard">My Dashboard</Link>
      <Link to="/create-event">Create Event</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}
