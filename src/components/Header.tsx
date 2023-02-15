import { signOut } from 'firebase/auth';
import React from 'react'
import { useAppSelector } from '../app/hooks';
import { firebaseAuth } from '../utils/FirebaseConfig';


function Header() {
    const userName = useAppSelector((zoomApp) => zoomApp.auth.userInfo?.name);
    const logout = () => {
        signOut(firebaseAuth);
      };
  return (
<>
    <div>
        <div>Header</div>
        <div>Welcome, {userName}</div>
        <div onClick={logout}>Logout</div>
    </div>
</>
  )
}

export default Header