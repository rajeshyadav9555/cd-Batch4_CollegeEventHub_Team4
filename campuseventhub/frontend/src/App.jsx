// app
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import EventForm from './pages/EventForm';
import EventList from './pages/EventList';
import AdminDashboard from './pages/AdminDashboard';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <main style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/events" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-event" element={<EventForm />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
