import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddSkill() {
  const [skill, setSkill] = useState({ name: '', description: '', teacher: '' });
  const navigate = useNavigate();
  const handleChange = e => setSkill({ ...skill, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/skills', skill).then(() => navigate('/'));
  };
  return (
    <form onSubmit={handleSubmit}>
        <h1>Add Skill</h1>
      <input name="name" placeholder="Skill name" onChange={handleChange} />
      <input name="description" placeholder="Description" onChange={handleChange} />
      <input name="teacher" placeholder="Teacher" onChange={handleChange} />
      <button type="submit">Add Skill</button>
    </form>
  );
}
