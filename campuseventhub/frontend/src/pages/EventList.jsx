// event list
import React, { useEffect, useState } from 'react';
import api from '../services/api';

export default function EventList(){
  const [events,setEvents] = useState([]);

  useEffect(()=> {
    async function load(){
      const res = await api.get('/events');
      setEvents(res.data);
    }
    load();
  }, []);

  return (
    <div>
      <h2>Events</h2>
      {events.map(e => (
        <div key={e.id} style={{ border: '1px solid #ddd', marginBottom: 8, padding: 8 }}>
          <h3>{e.title}</h3>
          <p>{e.description}</p>
          <p><strong>Date:</strong> {new Date(e.date).toLocaleString()}</p>
          <p><strong>Organizer:</strong> {e.organizer?.name}</p>
        </div>
      ))}
    </div>
  );
}
