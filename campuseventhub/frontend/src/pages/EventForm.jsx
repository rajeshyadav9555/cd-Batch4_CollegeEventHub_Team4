// event form
import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function EventForm(){
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [location,setLocation] = useState('');
  const [date,setDate] = useState('');
  const [capacity,setCapacity] = useState(100);
  const navigate = useNavigate();

  async function submit(e){
    e.preventDefault();
    try{
      const token = localStorage.getItem('token');
      await api.post('/events', { title, description, location, date, capacity }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      navigate('/events');
    }catch(err){
      alert(err.response?.data?.message || err.message);
    }
  }

  return (
    <form onSubmit={submit} style={{ maxWidth: 600 }}>
      <h2>Create Event</h2>
      <div><label>Title</label><br/><input value={title} onChange={e=>setTitle(e.target.value)} required/></div>
      <div><label>Description</label><br/><textarea value={description} onChange={e=>setDescription(e.target.value)} /></div>
      <div><label>Location</label><br/><input value={location} onChange={e=>setLocation(e.target.value)} /></div>
      <div><label>Date</label><br/><input type="datetime-local" value={date} onChange={e=>setDate(e.target.value)} required/></div>
      <div><label>Capacity</label><br/><input type="number" value={capacity} onChange={e=>setCapacity(e.target.value)} /></div>
      <button type="submit">Create</button>
    </form>
  );
}
