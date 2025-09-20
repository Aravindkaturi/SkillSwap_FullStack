import { Routes, Route, Link } from 'react-router-dom';
import SkillList from './components/SkillList';
import SessionList from './components/SessionList';
import EditSkill from './components/EditSkill';
import AddSession from './components/AddSession';
import AddSkill from './components/AddSkill';
import './App.css';

export default function App() {
  return (
    <div>
      <h1
      style={{
        fontSize: '3rem',
        fontWeight: '700',
        color: '#007bff',
        textAlign: 'center',
        marginBottom: '0px',
        textShadow: '1px 1px 3px rgba(0, 123, 255, 0.6)',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}
    >
      SkillSwap
    </h1>
    <h5
      style={{
        fontSize: '1rem',
        fontWeight: '500',
        color: '#007bff',
        textAlign: 'center',
        marginBottom: '30px',
        textShadow: '1px 1px 3px rgba(0, 123, 255, 0.6)',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}>
      by Aravind
    </h5>

      <nav>
        <Link to="/">Skills</Link> <br />
        <Link to="/add-skill">Add Skill</Link> <br />
        <Link to="/sessions">Sessions</Link> <br />
        <Link to="/add-session">Add Session</Link> <br />
      </nav>
      <Routes>
        <Route path="/" element={<SkillList />} />
        <Route path="/add-skill" element={<AddSkill />} />
        <Route path="/edit-skill/:id" element={<EditSkill />} />
        <Route path="/sessions" element={<SessionList />} />
        <Route path="/add-session" element={<AddSession />} />
      </Routes>
    </div>
  );
}