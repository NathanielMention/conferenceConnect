// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp9S7jiUcMS8SfwLEk5sGSeI96J4KNGSA",
  authDomain: "conferenceconnect-f3cab.firebaseapp.com",
  projectId: "conferenceconnect-f3cab",
  storageBucket: "conferenceconnect-f3cab.appspot.com",
  messagingSenderId: "468956672525",
  appId: "1:468956672525:web:bbe46bb4c4d78c6c995b44",
  measurementId: "G-G51NWHC0LN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);
