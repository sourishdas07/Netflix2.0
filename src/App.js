import React from "react";
import "./App.css";
import HomeScreen from "./HomeScreen";
import { Route, Routes} from "react-router-dom";
import LoginScreen from "./LoginScreen";

function App() {

  const user = {name: "sourish"}; //temp

  // const user = null;

  return (
    <div className="app">
      <Routes>
        {!user ? (
          <LoginScreen />
        ): (
        <Route path="/" element={<LoginScreen />} />
      )}
      </Routes>
    </div>
  );
}

export default App;
