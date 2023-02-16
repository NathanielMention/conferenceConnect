import { signOut } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { firebaseAuth } from '../utils/FirebaseConfig';
import '../styles/header.css'


function Header() {
    const userName = useAppSelector((zoomApp) => zoomApp.auth.userInfo?.name);
    const navigate = useNavigate()
    const logout = () => {
        signOut(firebaseAuth);
      };
  return (
<>
    <div className="header">
        <div className="header-title" onClick={() => navigate("/")}>ConfrenceConnect</div>
        <div className="welcome">Welcome, {userName}</div>
        <div className="logout" onClick={logout}>Logout</div>
    </div>
</>
  )
}

export default Header