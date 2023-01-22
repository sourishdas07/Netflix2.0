import React from 'react'
import './LoginScreen.css'

function LoginScreen() {
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen_logo"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt=""
        />
        
        <button className="loginScreen__button">Sign In</button>

        <div className="loginScreen__gradient" />
      </div>
    </div>
  );
}

export default LoginScreen
