//import { userEvent } from '@testing-library/user-event/dist/types/setup';
import { React, useEffect, useState } from "react";
import db from "./firebase";
import { auth } from './firebase';
import Nav from "./Nav";
import PlansScreen from './PlansScreen';
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

              <div className="plansScreen_plan">
                <div className="plansScreen_info">
                  <h5>test</h5>
                  <h6>testing</h6>
                </div>
              </div>

              <button
                onClick={() => auth.signOut}
                className="profileScreen_signOut"
              >
                Sign Out
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
