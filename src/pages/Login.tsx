import React from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { firebaseAuth, firebaseDB, usersRef } from "../utils/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { setUser } from "../app/slices/AuthSlice";
import '../styles/login.css'

function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const {user: { displayName, email, uid}} = await signInWithPopup(firebaseAuth, provider);
    if (email) {
      const firestoreQuery = query(usersRef, where("uid", "==", uid));
      const fetchedUser = await getDocs(firestoreQuery);
      if (fetchedUser.docs.length === 0) {
        await addDoc(collection(firebaseDB, "users"), {
          uid,
          name: displayName,
          email,
        }); 
      }
    }
    dispatch(setUser({ uid, email: email!, name: displayName! }));
    navigate("/");  
  }  

return (
    <div className="login-container">
      <header>Start ConferenceConnect!</header>
      <button className='login-btn' onClick={handleLogin}>Login with Google</button>
    </div>
  );
}

export default Login;
