import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAdYhKH3pm9z0L9DIvBGucF7MFejF5cXW4",
  authDomain: "netflix-clone-final-6c74e.firebaseapp.com",
  projectId: "netflix-clone-final-6c74e",
  storageBucket: "netflix-clone-final-6c74e.appspot.com",
  messagingSenderId: "535358190995",
  appId: "1:535358190995:web:8612e37d1bec2cb3f46466",
  measurementId: "G-G4W8ZVTQ12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
