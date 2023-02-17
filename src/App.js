import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./HomeScreen";
import { Route, Routes} from "react-router-dom";
import LoginScreen from "./LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
import ProfileScreen from "./ProfileScreen";

function App() {

  //const user = useSelector(selectUser);
  const user = null;
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (userAuth) => {
        if (userAuth) {
          // Logged in  
          dispatch(
            login({
              uid: userAuth.uid,
              email: userAuth.email,
            })
        );
      }
      else {
        // Logged out
        dispatch(logout);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/homescreen" element={<HomeScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>
    </div>
  );
}

export default App;

/*
<Routes>
        {!user ? (
          <LoginScreen />
        ): (
        <Route path="/" element={<HomeScreen />} />
      )}
</Routes>
*/

// the "app" class so it operates like a funtcional app