// register
import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Register(){
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  async function submit(e){
    e.preventDefault();
    try{
      const res = await api.post('/auth/register', { name, email, password });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/dashboard');
    }catch(err){
      alert(err.response?.data?.message || err.message);
    }
  }

  return (
    <form onSubmit={submit} style={{ maxWidth: 400 }}>
      <h2>Register</h2>
      <div>
        <label>Name</label><br/>
        <input value={name} onChange={e=>setName(e.target.value)} required/>
      </div>
      <div>
        <label>Email</label><br/>
        <input value={email} onChange={e=>setEmail(e.target.value)} required/>
      </div>
      <div>
        <label>Password</label><br/>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required/>
      </div>
      <button type="submit">Register</button>
    </form>
  );
}
