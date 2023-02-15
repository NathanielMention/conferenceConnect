import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import Header from '../components/Header';
import useAuth from '../hooks/useAuth';

function Dashboard() {
  const userInfo = useAppSelector((zoom) => zoom.auth.userInfo);
  console.log(userInfo)
  useAuth()
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Header/>
        <div onClick={() => navigate("/create")}>Create Meeting</div>
        <div onClick={() => navigate("/mymeetings")}>View Meetings</div>
        <div onClick={() => navigate("/meetings")}>View Invites</div>
      </div>
    </>
  )
}

export default Dashboard