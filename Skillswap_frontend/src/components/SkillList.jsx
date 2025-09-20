import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function SkillsList() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/skills').then(res => setSkills(res.data));
  }, []);
  const deleteSkill = id => {
    axios.delete(`http://localhost:5000/skills/${id}`).then(() => {
      setSkills(skills.filter(skill => skill._id !== id));
    });
  };
  return (
    <div>
      <h1>Skills</h1>
      {skills.map(skill => (
        <div key={skill._id}>
          <h2>Skill: {skill.name}</h2>
          <h3>Skill_Id: {skill._id}</h3>
          <p>Des: {skill.description} by {skill.teacher}</p>
          
          <Link to={`/edit-skill/${skill._id}`}>Edit</Link>
          <button onClick={() => deleteSkill(skill._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
