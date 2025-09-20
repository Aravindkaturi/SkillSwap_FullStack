import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditSkill() {
  const [skill, setSkill] = useState({ name: '', description: '', teacher: '' });
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios.get('http://localhost:5000/skills').then(res => {
      const found = res.data.find(s => s._id === id);
      if (found) setSkill(found);
    });
  }, [id]);
  const handleChange = e => setSkill({ ...skill, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    axios.put(`http://localhost:5000/skills/${id}`, skill).then(() => navigate('/'));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={skill.name} onChange={handleChange} />
      <input name="description" value={skill.description} onChange={handleChange} />
      <input name="teacher" value={skill.teacher} onChange={handleChange} />
      <button type="submit">Update Skill</button>
    </form>
  );
}
