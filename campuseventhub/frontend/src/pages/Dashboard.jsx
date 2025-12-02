// dashboard
import React from 'react';

export default function Dashboard(){
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  return (
    <div>
      <h2>Dashboard</h2>
      {user ? <p>Welcome, {user.name} (<em>{user.role}</em>)</p> : <p>Please login</p>}
    </div>
  );
}
