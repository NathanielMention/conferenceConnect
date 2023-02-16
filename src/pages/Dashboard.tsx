import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import useAuth from '../hooks/useAuth';
import '../styles/dashboard.css'

function Dashboard() {
  useAuth()
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Header/>
        <div className='dash-container'>
          <div className='left-container' onClick={() => navigate("/videoconference")}>Create Meeting</div>
          <div className='right-container' onClick={() => navigate("/mymeetings")}>View Meetings</div>
        </div>
      </div>
    </>
  )
}

export default Dashboard