import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAdYhKH3pm9z0L9DIvBGucF7MFejF5cXW4",
  authDomain: "netflix-clone-final-6c74e.firebaseapp.com",
  projectId: "netflix-clone-final-6c74e",
  storageBucket: "netflix-clone-final-6c74e.appspot.com",
  messagingSenderId: "535358190995",
  appId: "1:535358190995:web:8612e37d1bec2cb3f46466",
  measurementId: "G-G4W8ZVTQ12",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;