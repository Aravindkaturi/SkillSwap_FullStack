import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddSession() {
  const [session, setSession] = useState({ skillId: '', student: '', date: '' });
  const navigate = useNavigate();
  const handleChange = e => setSession({ ...session, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/sessions', session).then(() => navigate('/sessions'));
  };
  return (
    <form onSubmit={handleSubmit}>
        <h1>Add a Session</h1>
      <input name="skillId" placeholder="Skill Id" onChange={handleChange} />
      <input name="student" placeholder="Student Name" onChange={handleChange} />
      <input name="date" placeholder="Session Date" type='date' onChange={handleChange} />
      <button type="submit">Book Session</button>
    </form>
  );
}
