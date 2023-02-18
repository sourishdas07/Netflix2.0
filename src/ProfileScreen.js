//import { userEvent } from '@testing-library/user-event/dist/types/setup';
import React from 'react'
import { auth } from './firebase';
import Nav from "./Nav";

import "./ProfileScreen.css";

function ProfileScreen() {
  return (
    <div className="profileScreen">
      <Nav />

      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen_details">
            <h2>Hello!</h2>
            <div className="profileScreen_plans">
              <h3>Plans</h3>
              <button onClick={() => auth.signOut}
                className="profileScreen_signOut">Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <h2>{userEvent.email}</h2>;  under profile_screen_details

export default ProfileScreen
