import React, { useState } from 'react'
import './LoginScreen.css'
import './SignUpScreen'
import SignUpScreen from './SignUpScreen';

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

        <button 
          onClick={() => setSignIn(true)}
          className="loginScreen__button">Sign In
        </button>

        <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen_body">
        {signIn ? (
          <SignUpScreen />
        ): 

        <>
          <h1>Unlimited films, TV programmes and more.</h1>
          <h2>Watch anywhere. Cancel at any time.</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>

          <div className="loginScreen_input">
            <form>
              <input type="email" placeholder="Email Address" />
            </form>
            <button 
              onClick={() => setSignIn(true)}
              className="loginScreen_getStarted"> GET STARTED 
            </button>
          </div>
      
        </>
        }

      </div>
    </div>
  );
}

export default LoginScreen
