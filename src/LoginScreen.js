import React, { useState } from 'react'
import './LoginScreen.css'
import './SignUpScreen'
import SignUpScreen from './SignUpScreen';
import { Link } from "react-router-dom";

function LoginScreen() {

  const [signIn, setSignIn] = useState(false);

  return (
    <div
      className="loginScreen"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("http://s3-us-west-2.amazonaws.com/techvibes/wp-content/uploads/2017/04/24135159/Netflix-Background.jpg")`,
      }}
    >
      <div className="loginScreen__background">
        <img
          className="loginScreen_logo"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt=""
        />

        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign In
        </button>

        <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen_body">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited Films, TV Programmes and More.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>Not ready to create an account?</h3>

            <Link to="/">
              <button className="loginScreen_getStarted">
                CHECK IT OUT
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen
