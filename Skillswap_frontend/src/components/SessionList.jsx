import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function SessionsList() {
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/sessions').then(res => setSessions(res.data));
  }, []);
  const deleteSession = id => {
    axios.delete(`http://localhost:5000/sessions/${id}`).then(() => {
      setSessions(sessions.filter(session => session._id !== id));
    });
  };
  return (
    <div>
      <h1>Sessions</h1>
      {sessions.map(session => (
        <div key={session._id}>
          <p>Skill_Id: {session.skillId}</p>
          <p>Student: {session.student}</p>
          <p>Date: {session.date}</p>
          <button onClick={() => deleteSession(session._id)}>Cancel</button>
        </div>
      ))}
    </div>
  );
}
